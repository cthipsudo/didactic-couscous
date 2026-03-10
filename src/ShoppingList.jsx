import { v4 as uuid } from "uuid";
import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";

export default function ShoppingList() {
  const [items, setItems] = useState([
    { id: uuid(), product: "Bananas", quantity: 9 },
    { id: uuid(), product: "Eggs", quantity: 12 },
  ]);

  const addItem = (item) => {
    setItems((itemData) => {
      return [...itemData, { ...item, id: uuid() }];
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
