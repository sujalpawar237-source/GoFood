import React, { useEffect, useState } from "react";
import { useCart, useDispatchCart } from "./ContextReducer";

function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = React.useRef();
  let options = props.options;
  let priceOptions = Object.keys(options);

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

 const handleAddToCart = async () => {
  let food = data.find(
    item =>
      item.id === props.foodItem._id &&
      item.size === size
  );

  if (food) {
    dispatch({
      type: "UPDATE",
      id: props.foodItem._id,
      price: finalPrice,
      qty: parseInt(qty),
      size: size,
    });
  } else {
    dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: parseInt(qty),
      size: size,
    });
  }
};
  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
      <img
        className="card-img-top"
        src={props.foodItem.img}
        alt= {props.foodItem.name}
        style={{ height: "160px", objectFit: "fill" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.foodItem.name}</h5>

        <div className="container w-100 ">
          <select
            name=""
            id=""
            className="m-2 h-100  bg-success rounded"
            onChange={(e) => setQty(e.target.value)}
          >
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>

          <select
            className="m-2 h-100  bg-success rounded"
            ref={priceRef}
            onChange={(e) => setSize(e.target.value)}
          >
            {priceOptions.map((data) => {
              return (
                <option key={data} value={data}>
                  {data}
                </option>
              );
            })}
          </select>

          <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>
        </div>
        <hr />
        <button
          className={"btn btn-success justify-center ms-2"}
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
