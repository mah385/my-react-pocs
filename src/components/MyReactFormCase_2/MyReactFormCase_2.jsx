import styles from "./MyReactFormCase_2.module.css";
/*--------------------------------------------------------------------*/
import { useRef } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
/*--------------------------------------------------------------------*/
import { DATA_ADDED_SUCCESSFULLY } from "../../constants/ResponseMessageConstants.js";
/*--------------------------------------------------------------------*/
import MyFormInput from "../MyForm/MyFormInput/MyFormInput.jsx";
import MyFormSelect from "../MyForm/MyFormSelect/MyFormSelect.jsx";

/*--------------------------------------------------------------------*/

function MyReactFormCase_2() {
  const refFullName = useRef();
  const refUsername = useRef();
  const refEmail = useRef();
  const refDob = useRef();
  const refGender = useRef();
  const refAddress = useRef();
  const refContact = useRef();

  function handleFormSubmitToAddNewUser(e) {
    e.preventDefault();
    console.log(refFullName);
    const newUser = {
      id: uuidv4(),
      fullName: refFullName.current.value,
      username: refUsername.current.value,
      email: refEmail.current.value,
      dob: refDob.current.value,
      gender: refGender.current.value,
      address: refAddress.current.value,
      contact: refContact.current.value,
    };
    toast.success(DATA_ADDED_SUCCESSFULLY);
    toast.info(JSON.stringify(newUser, null, 2));
    handleClearButton();
  }

  function handleClearButton() {
    refFullName.current.value = "";
    refUsername.current.value = "";
    refEmail.current.value = "";
    refDob.current.value = "";
    refGender.current.value = "";
    refAddress.current.value = "";
    refContact.current.value = "";
  }

  return (
    <form
      onSubmit={(e) => handleFormSubmitToAddNewUser(e)}
      className={`${styles.myFormContainer}`}
    >
      <h4>MyReactFormCase_2</h4>
      <h5>By using useRef()</h5>
      <div className="d-flex flex-column">
        <MyFormInput
          type="text"
          name="fullName"
          label="Full Name"
          refer={refFullName}
          // required
        />
        <MyFormInput
          type="text"
          name="username"
          label="Username"
          refer={refUsername}
          required
        />
        <MyFormInput
          type="email"
          name="email"
          label="Email"
          refer={refEmail}
          required
        />
        <MyFormInput
          type="date"
          name="dob"
          label="DOB"
          refer={refDob}
          required
        />
        <MyFormSelect
          options={["MALE", "FEMALE", "OTHER"]}
          name="gender"
          label="Gender"
          refer={refGender}
          required
        />
        <MyFormInput
          type="text"
          name="address"
          label="Address"
          refer={refAddress}
          required
        />
        <MyFormInput
          type="text"
          name="contact"
          label="Contact"
          refer={refContact}
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

export default MyReactFormCase_2;
