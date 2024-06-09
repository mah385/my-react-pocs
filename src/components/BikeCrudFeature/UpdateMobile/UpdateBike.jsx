import styles from "./UpdateBike.module.css";
/*-------------------------------------------------------------------*/
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
/*-------------------------------------------------------------------*/
import { bikeAction } from "../../../redux-store/bike/bike-reducer.js";
import { bikeBrandNameList } from "../../../redux-store/bike/bike-master-data.js";
import { DATA_UPDATED_SUCCESSFULLY } from "../../../constants/ResponseMessageConstants.js";
/*-------------------------------------------------------------------*/
import MyFormInput from "../../MyForm/MyFormInput/MyFormInput.jsx";
import MyFormSelect from "../../MyForm/MyFormSelect/MyFormSelect.jsx";

/*-------------------------------------------------------------------*/

function UpdateBike(props) {
  const dispatch = useDispatch();

  const [updatedBike, setUpdatedBike] = useState(
    useSelector((state) => state.useBikeReducer.updatedBike),
  );

  function handleFormSubmitToUpdateBike(e) {
    e.preventDefault();
    dispatch(bikeAction.updateBike({ updatedBike: updatedBike }));
    handleCancelButton();
    toast.success(DATA_UPDATED_SUCCESSFULLY);
  }

  function handleOnChange(e) {
    setUpdatedBike((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function handleCancelButton() {
    dispatch(bikeAction.resetBike());
    props.propToggleToShowUpdateComponent();
  }

  return (
    <form
      onSubmit={(e) => handleFormSubmitToUpdateBike(e)}
      className={`${styles.myFormContainer}`}
    >
      <h3>Update Bike</h3>
      <div className="d-flex flex-column">
        <MyFormSelect
          options={bikeBrandNameList}
          name="brand"
          label="Brand"
          value={updatedBike.brand}
          onChange={(e) => handleOnChange(e)}
          required
        />
        <MyFormInput
          type="text"
          name="model"
          label="Model"
          value={updatedBike.model}
          onChange={(e) => handleOnChange(e)}
          // required
        />
        <MyFormInput
          type="text"
          name="engineCapacity"
          label="Engine Capacity"
          value={updatedBike.engineCapacity}
          onChange={(e) => handleOnChange(e)}
          required
        />
        <MyFormInput
          type="text"
          name="mileage"
          label="Mileage"
          value={updatedBike.mileage}
          onChange={(e) => handleOnChange(e)}
          // required
        />
        <MyFormInput
          type="text"
          name="transmission"
          label="Transmission"
          value={updatedBike.transmission}
          onChange={(e) => handleOnChange(e)}
          // required
        />
        <MyFormInput
          type="text"
          name="kerbWeight"
          label="Kerb Weight"
          value={updatedBike.kerbWeight}
          onChange={(e) => handleOnChange(e)}
          // required
        />
        <MyFormInput
          type="text"
          name="fuelTankCapacity"
          label="Fuel Tank Capacity"
          value={updatedBike.fuelTankCapacity}
          onChange={(e) => handleOnChange(e)}
          // required
        />
        <MyFormInput
          type="text"
          name="seatHeight"
          label="Seat Height"
          value={updatedBike.seatHeight}
          onChange={(e) => handleOnChange(e)}
          // required
        />
      </div>
      <div className="d-flex gap-5 mb-2">
        <button
          type="submit"
          className="border border-2 border-primary btn btn-outline-primary"
        >
          Update
        </button>
        <button
          type="button"
          className="border border-2 border-danger btn btn-outline-danger"
          onClick={handleCancelButton}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default UpdateBike;

UpdateBike.propTypes = {
  propToggleToShowUpdateComponent: PropTypes.func,
};
