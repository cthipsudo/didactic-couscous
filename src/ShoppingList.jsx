import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";

export default function ShoppingList() {
  const [items, setItems] = useState([
    { id: 1, product: "Bananas", quantity: 9 },
    { id: 2, product: "Eggs", quantity: 12 },
  ]);

  const addItem = (item) => {
    setItems((itemData) => {
      return [...itemData, { ...item, id: 9 }];
    });
  };

  return (
    <div>
      <h1>Shopping List!!</h1>
      <ul>
        {items.map((i) => {
          return (
            <li key={i.id}>
              {i.product} - {i.quantity}
            </li>
          );
        })}
      </ul>
      <ShoppingListForm itemFunc={addItem} />
    </div>
  );
}
