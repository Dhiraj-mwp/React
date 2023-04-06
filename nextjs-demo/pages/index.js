import MeetupList from "@/components/meetups/MeetupList";

const DUMMYMEETUP =[
  {
    id:1,
  title:'First Meetup',
  image:'https://upload.wikimedia.org/wikipedia/commons/f/fb/Mulaipari_Mariyamman_Festival_Madurai_2014.jpg',
  address: '123 gurugram',
  description:'My first Meetup'
},
{
  id:2,
  title:'Second Meetup',
  image:'https://upload.wikimedia.org/wikipedia/commons/9/9a/At_mahabarata.JPG',
  address: '123 gurugram',
  description:'My first Meetup'
},
{
  id:3,
  title:'Third Meetup',
  image:'https://upload.wikimedia.org/wikipedia/commons/f/f8/%E0%AE%9A%E0%AE%BE%E0%AE%AE%E0%AE%BF_%E0%AE%95%E0%AF%81%E0%AE%AE%E0%AF%8D%E0%AE%AA%E0%AE%BF%E0%AE%9F%E0%AF%81%E0%AE%AE%E0%AF%8D_%E0%AE%B5%E0%AE%B4%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AE%AE%E0%AF%8D.JPG',
  address: '123 gurugram',
  description:'My first Meetup'
},
]


function HomePage(){
  return (
   
    <MeetupList meetups={DUMMYMEETUP}/>

    )
}

export default HomePage;