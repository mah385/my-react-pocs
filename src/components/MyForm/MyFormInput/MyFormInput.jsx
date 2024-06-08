import styles from "./MyFormInput.module.css";

import PropTypes from "prop-types";

function MyFormInput(props) {
  return (
    <div className={`${styles.inputContainer} input-group m-2`}>
      <div className={`${styles.inputLabel} input-group-text`}>
        {props.label}
      </div>
      {props.type === "select" ? (
        <select
          {...props}
          ref={props.refer}
          className={`${styles.inputField} form-select`}
        >
          <option>Please Select</option>
          {props.options.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      ) : (
        <input
          {...props}
          ref={props.refer}
          className={`${styles.inputField} form-control`}
        />
      )}
    </div>
  );
}

export default MyFormInput;

MyFormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  refer: PropTypes.func,
  options: PropTypes.array,
};
