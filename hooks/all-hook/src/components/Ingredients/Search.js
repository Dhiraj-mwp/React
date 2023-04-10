import React, {useState, useEffect} from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const {onLoadedIngredient} = props;
  const [enteredFilter, setEnterdFilter] = useState('');

   useEffect(() => {
    const query = enteredFilter.length === 0 ? '': `?orderBy="title"&equalTo="{enteredFilter}"`

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
      onLoadedIngredient(loadedIngredients);
      // props.onLoadedIngredient(loadedIngredients);
    });
   }, 
   [enteredFilter, onLoadedIngredient]
  //  [enteredFilter, props]
   );

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" value={enteredFilter} onChange={event => event.target.value}/>
        </div>
      </Card>
    </section>
  );
});

export default Search;
