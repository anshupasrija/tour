import Tours from './Tours';
import './App.css';
import Loading from './Loading';
import { useState, useEffect} from 'react';
import axios from 'axios';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading,setLoading]= useState(true);
  const [tours, setTours]= useState([]);

  const removeTour = (id) =>{
    const newTour = tours.filter((tour)=>
      tour.id !== id);
      setTours(newTour);
  }

  const fetchTours = ()=>{
    setLoading(true);
    axios.get(url)
    .then((res)=>{
      console.log(res.data);
      setTours(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    })
    
  };


  useEffect(()=>{
    fetchTours();
  }, []);

  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }
 
  if(tours.length === 0){
    return (
    <div className= "notour-container">
     <h2> No Tour left </h2>
    <button className="tour-price" onClick= {()=>fetchTours()}>Refresh</button>    
    </div>
    )
  }


  return (
    <div className="App">
    <h1>Welcome to tour Guide</h1>
    <Tours tours={tours} removeTour= {removeTour}/>  
    </div>
  );
}

export default App;
