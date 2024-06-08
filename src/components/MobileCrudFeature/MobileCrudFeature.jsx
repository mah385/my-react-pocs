// import styles from "./MobileCrudFeature.module.css";
/*-------------------------------------------------------------------*/
import { useState } from "react";
/*-------------------------------------------------------------------*/
import UpdateMobile from "./UpdateMobile/UpdateMobile.jsx";
import AddNewMobile from "./AddNewMobile/AddNewMobile.jsx";
import DisplayMobile from "./DisplayMobile/DisplayMobile.jsx";

/*-------------------------------------------------------------------*/

function MobileCrudFeature() {
  const [showUpdateComponent, setShowUpdateComponent] = useState(false);

  function onClickHandleShowUpdateComponent(showUpdateComponentFlag) {
    setShowUpdateComponent(showUpdateComponentFlag);
  }

  return (
    <>
      {showUpdateComponent ? (
        <UpdateMobile
          propToggleToShowUpdateComponent={() =>
            onClickHandleShowUpdateComponent(false)
          }
        />
      ) : (
        <>
          <AddNewMobile />
          <DisplayMobile
            propToggleToShowUpdateComponent={() =>
              onClickHandleShowUpdateComponent(true)
            }
          />
        </>
      )}
    </>
  );
}

export default MobileCrudFeature;
