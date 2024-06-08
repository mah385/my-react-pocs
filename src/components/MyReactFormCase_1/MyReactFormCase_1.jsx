import styles from "./MyReactFormCase_1.module.css";
/*--------------------------------------------------------------------*/
import { useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
/*--------------------------------------------------------------------*/
import { DATA_ADDED_SUCCESSFULLY } from "../../constants/ResponseMessageConstants.js";
/*--------------------------------------------------------------------*/
import MyFormInput from "../MyForm/MyFormInput/MyFormInput.jsx";

/*--------------------------------------------------------------------*/

function MyReactFormCase_1() {
  function getNewUser() {
    return {
      id: "",
      fullName: "",
      username: "",
      email: "",
      dob: "",
      gender: "",
      address: "",
      contact: "",
    };
  }

  const [newUser, setNewUser] = useState(getNewUser());

  function handleFormSubmitToAddNewUser(e) {
    e.preventDefault();
    toast.success(DATA_ADDED_SUCCESSFULLY);
    toast.info(JSON.stringify({ ...newUser, id: uuidv4() }, null, 2));
    handleClearButton();
  }

  function handleOnChange(e) {
    setNewUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function handleClearButton() {
    setNewUser(getNewUser());
  }

  return (
    <form
      onSubmit={(e) => handleFormSubmitToAddNewUser(e)}
      className={`${styles.myFormContainer}`}
    >
      <h4>MyReactFormCase_1</h4>
      <h5>By using useState()</h5>
      <div className="d-flex flex-column">
        <MyFormInput
          type="text"
          name="fullName"
          label="Full Name"
          value={newUser.fullName}
          onChange={(e) => handleOnChange(e)}
          required
        />
        <MyFormInput
          type="text"
          name="username"
          label="Username"
          value={newUser.username}
          onChange={(e) => handleOnChange(e)}
          required
        />
        <MyFormInput
          type="email"
          name="email"
          label="Email"
          value={newUser.email}
          onChange={(e) => handleOnChange(e)}
          required
        />
        <MyFormInput
          type="date"
          name="dob"
          label="DOB"
          value={newUser.dob}
          onChange={(e) => handleOnChange(e)}
          required
        />
        <MyFormInput
          type="select"
          options={["MALE", "FEMALE", "OTHER"]}
          name="gender"
          label="Gender"
          value={newUser.gender}
          onChange={(e) => handleOnChange(e)}
          required
        />
        <MyFormInput
          type="text"
          name="address"
          label="Address"
          value={newUser.address}
          onChange={(e) => handleOnChange(e)}
          required
        />
        <MyFormInput
          type="text"
          name="contact"
          label="Contact"
          value={newUser.contact}
          onChange={(e) => handleOnChange(e)}
          required
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

export default MyReactFormCase_1;
