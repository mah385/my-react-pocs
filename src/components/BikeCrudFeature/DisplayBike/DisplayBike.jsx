import styles from "./DisplayBike.module.css";
/*-------------------------------------------------------------------*/
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { MdDeleteForever, MdOutlineEdit } from "react-icons/md";
/*-------------------------------------------------------------------*/
import { bikeAction } from "../../../redux-store/bike/bike-reducer.js";
import { DATA_DELETED_SUCCESSFULLY } from "../../../constants/ResponseMessageConstants.js";

/*-------------------------------------------------------------------*/

function DisplayBike(props) {
  const dispatch = useDispatch();
  let bikeList = [];
  bikeList = useSelector((state) => state.useBikeReducer.bikeList);

  function onClickHandleDeleteBikeByBikeId(bikeId) {
    dispatch(bikeAction.deleteBike({ bikeId: bikeId }));
    toast.success(DATA_DELETED_SUCCESSFULLY);
  }

  function onClickHandleLoadBikeForUpdating(bikeToBeUpdated) {
    dispatch(bikeAction.loadBike({ bikeToBeUpdated: bikeToBeUpdated }));
    props.propToggleToShowUpdateComponent();
  }

  return (
    <div className={`${styles.myDisplayBikeContainer} text-center`}>
      {bikeList.length === 0 ? (
        <h1>NO BIKE TO DISPLAY</h1>
      ) : (
        <table className="table-bordered">
          <thead className="bg-warning">
            <tr>
              <th>Sl. No.</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Engine Capacity (cc)</th>
              <th>Mileage (kmpl)</th>
              <th>Transmission (Manual)</th>
              <th>Kerb Weight (kg)</th>
              <th>Fuel Tank Capacity (litres)</th>
              <th>Seat Height (mm)</th>
              <th>Edit</th>
              <th>Remove</th>
            </tr>
          </thead>

          <tbody className="bg-light-subtle">
            {bikeList.map((bike, index) => {
              return (
                <tr key={bike.id}>
                  <td>{index + 1}</td>
                  <td>{bike.brand}</td>
                  <td>{bike.model}</td>
                  <td>{bike.engineCapacity}</td>
                  <td>{bike.mileage}</td>
                  <td>{bike.transmission}</td>
                  <td>{bike.kerbWeight}</td>
                  <td>{bike.fuelTankCapacity}</td>
                  <td>{bike.seatHeight}</td>
                  <td
                    className="text-success"
                    style={{ cursor: "pointer" }}
                    onClick={() => onClickHandleLoadBikeForUpdating(bike)}
                  >
                    <span>
                      <MdOutlineEdit />
                    </span>
                  </td>
                  <td
                    className="text-danger"
                    style={{ cursor: "pointer" }}
                    onClick={() => onClickHandleDeleteBikeByBikeId(bike.id)}
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

export default DisplayBike;

DisplayBike.propTypes = {
  propToggleToShowUpdateComponent: PropTypes.func,
};
