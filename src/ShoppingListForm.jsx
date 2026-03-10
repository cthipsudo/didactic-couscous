import { useState } from "react";

export default function ShoppingListForm({ itemFunc }) {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });
  const handleChange = (evt) => {
    setFormData((formData) => {
      return { ...formData, [evt.target.name]: evt.target.value };
    });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    itemFunc(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Product is: {formData.product}</h1>
      <h2>Quantity is: {formData.quantity}</h2>
      <label htmlFor="product">Product Name</label>
      <input
        type="text"
        placeholder="product name"
        name="product"
        id="product"
        onChange={handleChange}
        value={formData.product}
      />
      <label htmlFor="quantity">quantity</label>
      <input
        type="text"
        placeholder="quantity"
        name="quantity"
        id="quantity"
        onChange={handleChange}
        value={formData.quantity}
      />
      <button>submit</button>
    </form>
  );
}
