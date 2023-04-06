import NewMeetupForm from "@/components/meetups/NewMeetupForm";

function NewMeetupPage(){
    function addMeetupHandeler(enteredData){
    console.log(enteredData)
    }
  return <NewMeetupForm onAddMeetup={addMeetupHandeler}/>
}

export default NewMeetupPage;