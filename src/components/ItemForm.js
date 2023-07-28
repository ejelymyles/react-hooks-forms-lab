import React, { useState }from "react";
import { v4 as uuid } from "uuid";

// when the form is submitted (onSubmit) (build a handler)
//the handler should create an item. in  the handler create a new item object following the given properties
// import item 
// make input fields (input and select) controlled inputs
//set initial state for select input to "Produce"
// add the new item to the list by updating state.
// use  a prop called onItemFormSubmit as a callback and pass the new item to it. 
// to add a new element to the array in state, use the spreadd operator, 


function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const[itemCategory, setItemCategory] = useState("Produce")

  function handleNameSelection(event){
    setItemName(event.target.value);
  }

  function handleCategorySelection(event){
    setItemCategory(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault();
    const newItem ={
      id: uuid(),
      name: itemName,
      category: itemCategory,
    }
    onItemFormSubmit(newItem)

    setItemName("");
    setItemCategory("Produce");
  }



  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleNameSelection}/>
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleCategorySelection}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
//for the push 