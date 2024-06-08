import stylesMyForm from "../MyForm.module.css";
// import styles from "./MyFormInput.module.css";
/*-------------------------------------------------------------------*/
import PropTypes from "prop-types";

/*-------------------------------------------------------------------*/

function MyFormInput(props) {
  return (
    <div className={`${stylesMyForm.inputContainer} input-group m-2`}>
      <div className={`${stylesMyForm.inputLabel} input-group-text`}>
        {props.label}
      </div>
      <input {...props} className={`${stylesMyForm.inputField} form-control`} />
    </div>
  );
}

export default MyFormInput;

MyFormInput.propTypes = {
  label: PropTypes.string,
};
