import { useState } from "react";
import "./App.css";
import Search from "./Components/Search/Search";
import axios from "axios";
import Results from "./Components/Results/Results";
import { Photos } from "./types/photo";

function App() {
  const API_KEY = "30616540-9a96f45b959a2e19adf7fb978";
  const URL = "https://pixabay.com/api/?key=" + API_KEY;
  const PER_PAGE = 40;

  const [searchTerm, setSearchTerm] = useState("");
  const [photos, setPhotos] = useState<Photos>();
  const [loading, setLoading] = useState(false);

  const fetchPhotos = async (query: string, page: number = 1) => {
    setLoading(true);
    await axios
      .get(
        `${URL}&image_type=photo&per_page=${PER_PAGE}&page=${page}&q=${encodeURIComponent(
          query
        )}`
      )
      .then((results) => {
        const r = results.data as Photos;
        setPhotos(r);
      })
      .catch((error) => console.log(error))
      .finally(function () {
        setSearchTerm(query);
        setLoading(false);
      });
  };

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
          Showing {PER_PAGE} of {photos?.total} results for {`"${searchTerm}"`}
        </div>
      )}

      <Results photos={photos} loading={loading} />
      {/* <Pagination
        pageLimit={20}
        totalRecords={photos?.totalHits || 0}
        pageNeighbours={0}
        onClick={paginate}
      /> */}
    </div>
  );
}

export default App;
