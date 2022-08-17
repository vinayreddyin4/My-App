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
 const [showCount, setShowCount] =useState(10)


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
   .catch(err => {
     console.log(err)
   })
 }, [])

  return (
    <div className="App">
      <header >
        <h2>Music Website</h2>
        <br />
        <p>Able to search the music by Artistname and PrimaryGenreName </p>
        <br />
        <div>
          <input type="search"
            placeholder="Search by Artist Name" 
            onChange={event => setSearch(event.target.value)}
          />
        </div>
        <br/>
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
        }).map((item, index) => {
        return( index + 1 <= showCount ?
            <div className="card" style={{width:"355px",height:"500px", float:"left"}} key={item.trackId}>
              <img src={item.artworkUrl100} className="card-img-top" alt="" height="250px" />
              <div className="card-body">
                <h5 className="card-title">{item.artistName}</h5>
                <p className="card-text">{item.primaryGenreName}</p>
                <a href={item.artistViewUrl} className="btn btn-secondary">Play Music</a>
                <br/>
              </div>
            </div> : undefined
          )
        })
      }
      <br/>
      </header>
      {myData.results ? 
      <button type="button" className="btn btn-success" 
      onClick={() => setShowCount(showCount + 10)} >Load more Albums</button> : undefined}
   </div>
  )
}

//API : https://itunes.apple.com/search?term=jack+johnson.
export default App;
