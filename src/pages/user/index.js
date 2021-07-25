import "./user.css";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/reducers/user";
import { useHistory } from "react-router-dom";

const User = () => {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const history = useHistory();

  if (!store.selectedProduct.sku) history.push("/");

  const handleSubmit = (event) => {
    const values = {
      fullName: event.target.fullname.value,
      email: event.target.email.value,
      country: event.target.country.value,
      city: event.target.city.value,
      address: event.target.address.value,
    };
    event.preventDefault();
    dispatch(selectUser(values));
    history.push("/order");
  };

  return (
    <div className="userPage">
      <div className="userBox">
        <form className="form" onSubmit={handleSubmit}>
          <p className="formHeader">Customer information</p>
          <div className="formRow">
            <div className="inputField">
              <TextField id="standard-basic" label="Fullname" name="fullname" />
            </div>
            <div className="inputField">
              <TextField id="standard-basic" label="E-mail" name="email" />
            </div>
          </div>
          <div className="formRow">
            <div className="inputField">
              <TextField id="standard-basic" label="Country" name="country" />
            </div>
            <div className="inputField">
              <TextField id="standard-basic" label="City" name="city" />
            </div>
          </div>
          <div className="formRow">
            <div className="inputField">
              <TextField id="standard-basic" label="Address" name="address" />
            </div>
          </div>
          <button className="submitButton">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default User;
