import "./App.css";
/*-------------------------------------------------------------------*/
import { useState } from "react";
/*-------------------------------------------------------------------*/
import BikeCrudFeature from "./components/BikeCrudFeature/BikeCrudFeature.jsx";
import MobileCrudFeature from "./components/MobileCrudFeature/MobileCrudFeature.jsx";

/*-------------------------------------------------------------------*/

function App() {
  const [showBikeCrudFeature, setShowBikeCrudFeature] = useState(false);

  return (
    <div className="app m-2">
      <button
        type="button"
        className="domainButton btn btn-sm btn-outline-dark w-100 mb-1 text-danger"
        onClick={() => {
          setShowBikeCrudFeature((prevState) => {
            return !prevState;
          });
        }}
      >
        Show {!showBikeCrudFeature ? "Bike" : "Mobile"} CRUD Feature
      </button>
      <div className="crud-feature d-flex gap-2 justify-content-center">
        {showBikeCrudFeature ? <BikeCrudFeature /> : <MobileCrudFeature />}
      </div>
    </div>
  );
}

export default App;
