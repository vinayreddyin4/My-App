import React from 'react';
import './App.css';
import { useSelector,useDispatch } from 'react-redux'
import {fetchPosts} from './Actions'

function App() {
  const {posts, loading} = useSelector((state) => ({...state.data}));

  const dispatch = useDispatch();
  return (
    <div className="App">
    <header className="App-header">

      <button onClick={() => {
        dispatch(fetchPosts())
      }}>Fetch Data</button>
      
       {!loading ? posts.results.map(item => {
         <div>
            <ul>
              <li key={item.id}>{item.kind}</li> 
              <li>{item.collectionCensoredName}</li> 
              <li>{item.artistName}</li> 
            </ul>
        </div>
        })

       : <h2>Loading</h2>}

      {/* {!loading ? (posts.map((post) => {
        <li key={post.id}>{post.kind}</li>

        console.log(post.kind,"123 my data") 
        }) ) : (<h2>Loading....</h2>)
      } */}
      </header>
    </div>
  );
}

//API : https://itunes.apple.com/search?term=jack+johnson.
export default App;
