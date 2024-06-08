// import styles from "./BikeCrudFeature.module.css";

import { useState } from "react";

import UpdateBike from "./UpdateMobile/UpdateBike.jsx";
import AddNewBike from "./AddNewBike/AddNewBike.jsx";
import DisplayBike from "./DisplayBike/DisplayBike.jsx";

function BikeCrudFeature() {
  const [showUpdateComponent, setShowUpdateComponent] = useState(false);

  function onClickHandleShowUpdateComponent(showUpdateComponentFlag) {
    setShowUpdateComponent(showUpdateComponentFlag);
  }

  return (
    <>
      {showUpdateComponent ? (
        <UpdateBike
          propToggleToShowUpdateComponent={() =>
            onClickHandleShowUpdateComponent(false)
          }
        />
      ) : (
        <>
          <AddNewBike />
          <DisplayBike
            propToggleToShowUpdateComponent={() =>
              onClickHandleShowUpdateComponent(true)
            }
          />
        </>
      )}
    </>
  );
}

export default BikeCrudFeature;
