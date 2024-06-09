import styles from "./UpdateMobile.module.css";
/*-------------------------------------------------------------------*/
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
/*-------------------------------------------------------------------*/
import {
  mobileBrandNameList,
  mobileStorageList,
} from "../../../redux-store/mobile/mobile-master-data.js";
import { mobileAction } from "../../../redux-store/mobile/mobile-reducer.js";
import { DATA_UPDATED_SUCCESSFULLY } from "../../../constants/ResponseMessageConstants.js";
/*-------------------------------------------------------------------*/
import MyFormInput from "../../MyForm/MyFormInput/MyFormInput.jsx";
import MyFormSelect from "../../MyForm/MyFormSelect/MyFormSelect.jsx";

/*-------------------------------------------------------------------*/

function UpdateMobile(props) {
  const dispatch = useDispatch();

  const [updatedMobile, setUpdatedMobile] = useState(
    useSelector((state) => state.useMobileReducer.updatedMobile),
  );

  function handleFormSubmitToUpdateMobile(e) {
    e.preventDefault();
    dispatch(mobileAction.updateMobile({ updatedMobile: updatedMobile }));
    handleCancelButton();
    toast.success(DATA_UPDATED_SUCCESSFULLY);
  }

  function handleOnChange(e) {
    setUpdatedMobile((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function handleCancelButton() {
    dispatch(mobileAction.resetMobile());
    props.propToggleToShowUpdateComponent();
  }

  return (
    <form
      onSubmit={(e) => handleFormSubmitToUpdateMobile(e)}
      className={`${styles.myFormContainer}`}
    >
      <h3>Update Mobile</h3>
      <div className="d-flex flex-column">
        <MyFormSelect
          options={mobileBrandNameList}
          name="brand"
          label="Brand"
          value={updatedMobile.brand}
          onChange={(e) => handleOnChange(e)}
          required
        />
        <MyFormInput
          type="text"
          name="model"
          label="Model"
          value={updatedMobile.model}
          onChange={(e) => handleOnChange(e)}
          // required
        />
        <MyFormSelect
          options={mobileStorageList}
          name="storage"
          label="Storage (GB)"
          value={updatedMobile.storage}
          onChange={(e) => handleOnChange(e)}
          required
        />
        <MyFormInput
          type="number"
          name="camera"
          label="Camera (MP)"
          value={updatedMobile.camera}
          onChange={(e) => handleOnChange(e)}
          // required
        />
        <MyFormInput
          type="number"
          name="battery"
          label="Battery (mAH)"
          className="form-control"
          value={updatedMobile.battery}
          onChange={(e) => handleOnChange(e)}
          // required
        />
        <MyFormInput
          type="number"
          name="display"
          label="Display (inch)"
          value={updatedMobile.display}
          onChange={(e) => handleOnChange(e)}
          // required
        />
        <MyFormInput
          type="number"
          name="ram"
          label="RAM (GB)"
          value={updatedMobile.ram}
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

export default UpdateMobile;

UpdateMobile.propTypes = {
  propToggleToShowUpdateComponent: PropTypes.func,
};
