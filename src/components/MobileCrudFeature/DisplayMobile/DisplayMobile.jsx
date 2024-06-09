import styles from "./DisplayMobile.module.css";
/*-------------------------------------------------------------------*/
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { MdDeleteForever, MdOutlineEdit } from "react-icons/md";
/*-------------------------------------------------------------------*/
import { mobileAction } from "../../../redux-store/mobile/mobile-reducer.js";
import { DATA_DELETED_SUCCESSFULLY } from "../../../constants/ResponseMessageConstants.js";

/*-------------------------------------------------------------------*/

function DisplayMobile(props) {
  const dispatch = useDispatch();
  let mobileList = [];
  mobileList = useSelector((state) => state.useMobileReducer.mobileList);

  function onClickHandleDeleteMobileByMobileId(mobileId) {
    dispatch(mobileAction.deleteMobile({ mobileId: mobileId }));
    toast.success(DATA_DELETED_SUCCESSFULLY);
  }

  function onClickHandleLoadMobileForUpdating(mobileToBeUpdated) {
    dispatch(mobileAction.loadMobile({ mobileToBeUpdated: mobileToBeUpdated }));
    props.propToggleToShowUpdateComponent();
  }

  return (
    <div className={`${styles.myDisplayMobileContainer} text-center`}>
      {mobileList.length === 0 ? (
        <h1>NO MOBILES TO DISPLAY</h1>
      ) : (
        <table className="table-bordered">
          <thead className="bg-warning">
            <tr>
              <th>Sl. No.</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Storage (GB)</th>
              <th>Camera (MP)</th>
              <th>Battery (mAH)</th>
              <th>Display (inch)</th>
              <th>RAM (GB)</th>
              <th>Edit</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody className="bg-light">
            {mobileList.map((mobile, index) => {
              return (
                <tr key={mobile.id}>
                  <td>{index + 1}</td>
                  <td>{mobile.brand}</td>
                  <td>{mobile.model}</td>
                  <td>{mobile.storage}</td>
                  <td>{mobile.camera}</td>
                  <td>{mobile.battery}</td>
                  <td>{mobile.display}</td>
                  <td>{mobile.ram}</td>
                  <td
                    className="text-success"
                    style={{ cursor: "pointer" }}
                    onClick={() => onClickHandleLoadMobileForUpdating(mobile)}
                  >
                    <span>
                      <MdOutlineEdit />
                    </span>
                  </td>
                  <td
                    className="text-danger"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      onClickHandleDeleteMobileByMobileId(mobile.id)
                    }
                  >
                    <span>
                      <MdDeleteForever />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default DisplayMobile;

DisplayMobile.propTypes = {
  propToggleToShowUpdateComponent: PropTypes.func,
};
