import styles from "./AddNewMobile.module.css";
/*-------------------------------------------------------------------*/
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
/*-------------------------------------------------------------------*/
import {
  mobileBrandNameList,
  mobileStorageList,
} from "../../../redux-store/mobile/mobile-master-data.js";
import { mobileAction } from "../../../redux-store/mobile/mobile-reducer.js";
import { DATA_ADDED_SUCCESSFULLY } from "../../../constants/ResponseMessageConstants.js";
/*-------------------------------------------------------------------*/
import MyFormInput from "../../MyForm/MyFormInput/MyFormInput.jsx";
import MyFormSelect from "../../MyForm/MyFormSelect/MyFormSelect.jsx";

/*-------------------------------------------------------------------*/

function AddNewMobile() {
  function getNewMobile() {
    return {
      id: "",
      brand: "",
      model: "",
      storage: "",
      camera: "",
      battery: "",
      display: "",
      ram: "",
    };
  }

  const dispatch = useDispatch();
  const [newMobile, setNewMobile] = useState(getNewMobile());

  function handleFormSubmitToAddNewMobile(e) {
    e.preventDefault();
    dispatch(
      mobileAction.addNewMobile({ newMobile: { id: uuidv4(), ...newMobile } }),
    );
    handleClearButton();
    toast.success(DATA_ADDED_SUCCESSFULLY);
  }

  function handleOnChange(e) {
    setNewMobile((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function handleClearButton() {
    setNewMobile(getNewMobile());
  }

  return (
    <form
      onSubmit={(e) => handleFormSubmitToAddNewMobile(e)}
      className={`${styles.myFormContainer}`}
    >
      <h3>Add New Mobile</h3>
      <div className="d-flex flex-column">
        <MyFormSelect
          options={mobileBrandNameList}
          name="brand"
          label="Brand"
          value={newMobile.brand}
          onChange={(e) => handleOnChange(e)}
          required
        />
        <MyFormInput
          type="text"
          name="model"
          label="Model"
          value={newMobile.model}
          onChange={(e) => handleOnChange(e)}
          // required
        />
        <MyFormSelect
          options={mobileStorageList}
          name="storage"
          label="Storage (GB)"
          value={newMobile.storage}
          onChange={(e) => handleOnChange(e)}
          required
        />
        <MyFormInput
          type="number"
          name="camera"
          label="Camera (MP)"
          value={newMobile.camera}
          onChange={(e) => handleOnChange(e)}
          // required
        />
        <MyFormInput
          type="number"
          name="battery"
          label="Battery (mAH)"
          className="form-control"
          value={newMobile.battery}
          onChange={(e) => handleOnChange(e)}
          // required
        />
        <MyFormInput
          type="number"
          name="display"
          label="Display (inch)"
          value={newMobile.display}
          onChange={(e) => handleOnChange(e)}
          // required
        />
        <MyFormInput
          type="number"
          name="ram"
          label="RAM (GB)"
          value={newMobile.ram}
          onChange={(e) => handleOnChange(e)}
          // required
        />
        {/*https://www.geeksforgeeks.org/how-to-use-html-select-tag-in-reactjs/*/}
      </div>
      <div className="d-flex gap-5 mb-2">
        <button
          type="submit"
          className="border border-2 border-primary btn btn-outline-primary"
        >
          Submit
        </button>
        <button
          type="button"
          className="border border-2 border-danger btn btn-outline-danger"
          onClick={handleClearButton}
        >
          Clear
        </button>
      </div>
    </form>
  );
}

export default AddNewMobile;
