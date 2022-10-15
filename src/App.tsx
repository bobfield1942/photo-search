import React, { useState } from "react";
import "./App.css";
import Search from "./Components/Search/Search";
import axios from "axios";
import Results from "./Components/Search/Results/Results";
import { Photos } from "./types/photo";

function App() {
  var API_KEY = "30616540-9a96f45b959a2e19adf7fb978";
  var URL = "https://pixabay.com/api/?key=" + API_KEY + "&image_type=photo&q=";

  const [searchTerm, setSearchTerm] = useState("");
  const [photos, setPhotos] = useState<Photos>();
  const [isloading, setIsLoading] = useState(false);

  const fetchPhotos = async (query: string) => {
    setIsLoading(true);
    await axios
      .get(URL + encodeURIComponent(query))
      .then((results) => {
        const r = results.data as Photos;
        setPhotos(r);
      })
      .catch((error) => console.log(error))
      .finally(function () {
        setSearchTerm(query);
        setIsLoading(false);
      });
  };

  console.log(photos);

  return (
    <div className="App bg-slate-300 min-h-screen h-full">
      <div className="bg-gray-800 p-4">
        <h1 className="text-xl mb-4 tracking-tight text-white sm:text-2xl">
          <b className="text-blue">foryouandyourcustomers</b> Web Development
          Photo Search Task
        </h1>
        <Search handleSubmit={fetchPhotos} />
      </div>
      {searchTerm && (
        <div className="m-4">
          Showing {photos?.totalHits} of {photos?.total} results for{" "}
          {`"${searchTerm}"`}
        </div>
      )}
      {isloading ? <div>loading</div> : <Results photos={photos} />}
    </div>
  );
}

export default App;
