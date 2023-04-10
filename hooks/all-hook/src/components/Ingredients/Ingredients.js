import React, {useState, useEffect} from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList'

function Ingredients() {
const [userIngredients, setUserIngredients] =useState([])



const addIngredientHandler = ingredients => {
  fetch('https://react-hooks-update-bef1d-default-rtdb.firebaseio.com/ingredients.json', {
    method: "POST",
    body:JSON.stringify(ingredients),
    header: {'Content-type' : 'application/json'}
  }).then(response =>{
    response.json();
  }).then(responseData =>{
    console.log(responseData);
    setUserIngredients(prevIndegradients => [
      ...prevIndegradients, {id: Math.random().toString(), ...ingredients}
    ])
  })

}


useEffect(() =>{
fetch('https://react-hooks-update-bef1d-default-rtdb.firebaseio.com/ingredients.json')
.then(response => response.json())
.then(responseData =>{
  const loadedIngredients = [];
  console.log(responseData);

  for(const key in responseData){
    loadedIngredients.push({
      id: key,
      title: responseData[key].title,
      amount: responseData[key].amount
    })
  }
  setUserIngredients(loadedIngredients);
});
 }, []
);

const filteredIngredientHandler = filterIngradients =>{
  setUserIngredients(filterIngradients);
}

const removeIndegradientsHandler = ingredientId  =>{
  setUserIngredients(prevIndegradients => 
    prevIndegradients.filter(ingredients => ingredients.id !== ingredientId)
  )
}

  return (
    <div className="App">
      <IngredientForm onAddIndegradients = {addIngredientHandler}/>

      <section>
        <Search  onLoadIngredient={filteredIngredientHandler} />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIndegradientsHandler}/>
      </section>
    </div>
  );
}

export default Ingredients;
