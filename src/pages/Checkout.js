import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./Checkout.css";
import { toast } from "react-toastify";

function Checkout() {
  const { cartItems } = useContext(CartContext);
  const shippingFee = 160;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const isFormValid = Object.values(formData).every((val) => val.trim() !== "");

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + shippingFee;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      toast.error("Please complete all fields before proceeding.");
      return;
    }
    console.log("Order submitted:", { ...formData, cartItems });
    toast.success("Order placed! Thank you!");
  };

  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit} className="checkout-form">
          {["fullName", "email", "phone", "address", "city", "postalCode"].map((field) => (
            <label key={field}>
              {field.replace(/([A-Z])/g, " $1")}: 
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
              />
            </label>
          ))}
        </form>
      </div>

      <div className="checkout-right">
        <h3>Order Summary</h3>
        <ul className="summary-items">
          {cartItems.map((item, idx) => (
            <li key={idx}>
              <span>{item.name} (x{item.quantity})</span>
              <span>R{item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
        <div className="summary-line">
          <span>Subtotal</span>
          <span>R{subtotal}</span>
        </div>
        <div className="summary-line">
          <span>Nationwide delivery (Courier Guy)</span>
          <span>R{shippingFee}</span>
        </div>
        <div className="summary-line total">
          <span>Total</span>
          <span>R{total}</span>
        </div>

        {!isFormValid && (
          <div className="checkout-warning">Please fill in all fields to proceed.</div>
        )}

        <button
          className="pay-button"
          onClick={handleSubmit}
          disabled={!isFormValid}
          style={{ backgroundColor: isFormValid ? "#111" : "#ccc" }}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default Checkout;
