import styles from "./MyReactFormCase_3.module.css";
/*--------------------------------------------------------------------*/
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
/*--------------------------------------------------------------------*/
import { DATA_ADDED_SUCCESSFULLY } from "../../constants/ResponseMessageConstants.js";
/*--------------------------------------------------------------------*/
import MyFormInput from "../MyForm/MyFormInput/MyFormInput.jsx";

/*--------------------------------------------------------------------*/

function MyReactFormCase_3() {
  function handleFormSubmitToAddNewUser(e) {
    e.preventDefault();
    const eventTarget = new FormData(e.target);
    const newUser = {
      id: uuidv4(),
      ...Object.fromEntries(eventTarget.entries()),
    };
    toast.success(DATA_ADDED_SUCCESSFULLY);
    toast.info(JSON.stringify(newUser, null, 2));
    e.target.reset();
    // handleClearButton();
  }

  function handleClearButton() {}

  return (
    <form
      onSubmit={(e) => handleFormSubmitToAddNewUser(e)}
      className={`${styles.myFormContainer}`}
    >
      <h4>MyReactFormCase_3</h4>
      <h5>By using FormData</h5>
      <div className="d-flex flex-column">
        <MyFormInput type="text" name="fullName" label="Full Name" required />
        <MyFormInput type="text" name="username" label="Username" required />
        <MyFormInput type="email" name="email" label="Email" required />
        <MyFormInput type="date" name="dob" label="DOB" required />
        <MyFormInput
          type="select"
          options={["MALE", "FEMALE", "OTHER"]}
          name="gender"
          label="Gender"
          required
        />
        <MyFormInput type="text" name="address" label="Address" required />
        <MyFormInput type="text" name="contact" label="Contact" required />
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

export default MyReactFormCase_3;
