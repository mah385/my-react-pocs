import styles from "./AddNewBike.module.css";
/*-------------------------------------------------------------------*/
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
/*-------------------------------------------------------------------*/
import { bikeBrandNameList } from "../../../redux-store/bike/bike-master-data.js";
import { ADD_NEW_BIKE } from "../../../redux-store/bike/bike-action-type.js";
import { DATA_ADDED_SUCCESSFULLY } from "../../../constants/ResponseMessageConstants.js";
/*-------------------------------------------------------------------*/
import MyFormInput from "../../MyForm/MyFormInput/MyFormInput.jsx";
import MyFormSelect from "../../MyForm/MyFormSelect/MyFormSelect.jsx";

/*-------------------------------------------------------------------*/

function AddNewBike() {
  function getNewBike() {
    return {
      id: "",
      brand: "",
      engineCapacity: "",
      mileage: "",
      transmission: "",
      kerbWeight: "",
      fuelTankCapacity: "",
      seatHeight: "",
    };
  }

  const dispatch = useDispatch();
  const [newBike, setNewBike] = useState(getNewBike());

  function handleFormSubmitToAddNewBike(e) {
    e.preventDefault();
    dispatch({
      type: ADD_NEW_BIKE,
      payload: { newBike: { ...newBike, id: uuidv4() } },
    });
    handleClearButton();
    toast.success(DATA_ADDED_SUCCESSFULLY);
  }

  function handleOnChange(e) {
    setNewBike((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function handleClearButton() {
    setNewBike(getNewBike());
  }

  return (
    <form
      onSubmit={(e) => handleFormSubmitToAddNewBike(e)}
      className={`${styles.myFormContainer}`}
    >
      <h3>Add New Bike</h3>
      <div className="d-flex flex-column">
        <MyFormSelect
          options={bikeBrandNameList}
          name="brand"
          label="Brand"
          value={newBike.brand}
          onChange={(e) => handleOnChange(e)}
          required
        />
        <MyFormInput
          type="text"
          name="model"
          label="Model"
          value={newBike.model}
          onChange={(e) => handleOnChange(e)}
          // required
        />
        <MyFormInput
          type="text"
          name="engineCapacity"
          label="Engine Capacity"
          value={newBike.engineCapacity}
          onChange={(e) => handleOnChange(e)}
          required
        />
        <MyFormInput
          type="text"
          name="mileage"
          label="Mileage"
          value={newBike.mileage}
          onChange={(e) => handleOnChange(e)}
          // required
        />
        <MyFormInput
          type="text"
          name="transmission"
          label="Transmission"
          value={newBike.transmission}
          onChange={(e) => handleOnChange(e)}
          // required
        />
        <MyFormInput
          type="text"
          name="kerbWeight"
          label="Kerb Weight"
          value={newBike.kerbWeight}
          onChange={(e) => handleOnChange(e)}
          // required
        />
        <MyFormInput
          type="text"
          name="fuelTankCapacity"
          label="Fuel Tank Capacity"
          value={newBike.fuelTankCapacity}
          onChange={(e) => handleOnChange(e)}
          // required
        />
        <MyFormInput
          type="text"
          name="seatHeight"
          label="Seat Height"
          value={newBike.seatHeight}
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

export default AddNewBike;
