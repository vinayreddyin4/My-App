import React,{useState, useEffect} from 'react';
import './App.css';
//import { useSelector,useDispatch } from 'react-redux'
//import {fetchPosts} from './Actions'
import './data.json'
import axios from 'axios';


function App() {
 // const {posts, loading} = useSelector((state) => ({...state.data}));
 // const dispatch = useDispatch();
 
 const [myData, setMydata] = useState([])
 const [search, setSearch] = useState("")

 useEffect(() => {
  axios.get('https://itunes.apple.com/search?term=jack+johnson', {
     headers : {
       'Content-Type': 'application/json',
       'Accept' :'application/json'
     }
   })
   .then(response => response.data)
   .then(data1 => {
     console.log(data1,"i")
     setMydata(data1)
   })
 }, [])

  return (
    <div className="App">
      <header >
        <h2>Music Website</h2>
        <br />
        <div>
          <input type="search"
            placeholder="Search by Artist Name" 
            onChange={event => setSearch(event.target.value)}
          />
        </div>
        <br />
        {console.log(myData.results,"my dddd")}
        {myData.results && myData.results.filter(val => {
          if(search === "") {
            return(val)
          } else if(val.artistName.toLowerCase().includes(search.toLocaleLowerCase() )){
            return val
          } else if (val.primaryGenreName.toLowerCase().includes(search.toLocaleLowerCase())){
            return val
          }
        }).map((item) => {
        // console.log(item,"single")
        return(
            <div className="card" style={{width:"355px",height:"500px", float:"left"}} >
            <img src={item.artworkUrl100} className="card-img-top" alt="" height="250px" />
            <div className="card-body">
              <h5 className="card-title">{item.artistName}</h5>
              <p className="card-text">{item.primaryGenreName}</p>
              <a href={item.artistViewUrl} className="btn btn-secondary">Play Music</a>
              <br></br>
            </div>
          </div>
          )
        })
      }
      </header>
   </div>
  )
}

//API : https://itunes.apple.com/search?term=jack+johnson.
export default App;
