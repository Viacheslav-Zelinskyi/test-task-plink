import "./order.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Order = () => {
  const store = useSelector((store) => store);
  const history = useHistory();

  if (!(store.user.email && store.selectedProduct.sku)) history.push("/");

  return (
    <div className="orderPage">
      <div className="orderBox">
        <p className="orderHeader">Order information</p>
        <div className="orderRow">
          <span style={{ textAlign: "center" }}>
            <p className="infoLabel">Fullname: </p>
            <p>{store.user.fullName}</p>
          </span>
          <span style={{ textAlign: "center" }}>
            <p className="infoLabel">E-mail: </p>
            <p>{store.user.email}</p>
          </span>
        </div>
        <div className="orderRow">
          <span style={{ textAlign: "center" }}>
            <p className="infoLabel">Country: </p>
            <p>{store.user.country}</p>
          </span>
          <span style={{ textAlign: "center" }}>
            <p className="infoLabel">City: </p>
            <p>{store.user.city}</p>
          </span>
        </div>
        <div className="orderRow">
          <span style={{ textAlign: "center" }}>
            <p className="infoLabel">Address: </p>
            <p>{store.user.address}</p>
          </span>
        </div>
        <div className="orderRow">
          <span style={{ textAlign: "center" }}>
            <p className="infoLabel">Product: </p>
            <p>{store.selectedProduct.product}</p>
          </span>
          <span style={{ textAlign: "center" }}>
            <p className="infoLabel">Price: </p>
            <p>{store.selectedProduct.price} $</p>
          </span>
          <span style={{ textAlign: "center" }}>
            <p className="infoLabel">SKU: </p>
            <p>{store.selectedProduct.sku}</p>
          </span>
        </div>
        <div className="orderRow">
          <span style={{ textAlign: "center" }}>
            <p className="infoLabel">RAM: </p>
            <p>{store.selectedProduct.ram} GB</p>
          </span>
          <span style={{ textAlign: "center" }}>
            <p className="infoLabel">HDD: </p>
            <p>{store.selectedProduct.hdd} GB</p>
          </span>
        </div>
        <div className="orderRow">
          <button className="submitOrder">Submit</button>
          <button
            className="cancelOrder"
            onClick={() => (window.location.href = "/")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
