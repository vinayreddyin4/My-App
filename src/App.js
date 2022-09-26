import React, { useState, useEffect } from "react";
import "./App.css";
//import { useSelector,useDispatch } from 'react-redux'
//import {fetchPosts} from './Actions'
import "./data.json";
import axios from "axios";

function App() {
  // const {posts, loading} = useSelector((state) => ({...state.data}));
  // const dispatch = useDispatch();
  const [myData, setMydata] = useState([]);
  const [search, setSearch] = useState("");
  const [showCount, setShowCount] = useState(10);

  useEffect(() => {
    axios
      .get("https://itunes.apple.com/search?term=jack+johnson", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
      .then((response) => response.data)
      .then((data) => {
        setMydata(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let filterData = [];
  if (search === "" || !(myData.results || []).length) {
    filterData = myData.results || [];
  } else {
    const _searchString = search.toLocaleLowerCase();
    filterData = myData.results.filter((val) => {
      if (
        val.artistName.toLowerCase().includes(_searchString) ||
        val.primaryGenreName.toLowerCase().includes(_searchString)
      ) {
        return val;
      }
    });
  }

  return (
    <div className="App">
      <header>
        <h2>Music Website</h2>
        <br />
        <p>Able to search the music by Artistname and PrimaryGenreName </p>
        <br/>
        <div>
          <input
            type="search"
            placeholder="Search..."
            onChange={(event) => {
              setSearch(event.target.value);
              showCount > 10 && setShowCount(10);
            }}
          />
        </div>
        <br />
        <br />
        {filterData.length ? (
          filterData.map((item, index) => {
            return index + 1 <= showCount ? (
              <div
                className="card"
                style={{ width: "355px", height: "500px", float: "left" }}
                key={item.trackId}
              >
                <img
                  src={item.artworkUrl100}
                  className="card-img-top"
                  alt=""
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.artistName}</h5>
                  <p className="card-text">{item.primaryGenreName}</p>
                  <a href={item.artistViewUrl} className="btn btn-secondary">
                    Play Music
                  </a>
                  <br />
                </div>
              </div>
            ) : null;
          })
        ) : (
          <h2>No Data Found</h2>
        )}
        <br />
      </header>
      {filterData.length > showCount && (
        <button
          type="button"
          className="btn btn-success"
          onClick={() => setShowCount(showCount + 10)}
        >
          Load more Albums
        </button>
      )}
    </div>
  );
}

//API : https://itunes.apple.com/search?term=jack+johnson.
export default App;
