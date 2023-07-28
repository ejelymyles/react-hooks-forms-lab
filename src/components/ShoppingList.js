import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const[updatedItems, setUpdatedItems] = useState(items)
   const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleItemFormSubmit(newItem) {
    setUpdatedItems([...updatedItems, newItem]);
  }

   function handleSearchText(event){
    setSearch(event.target.value)
  }

  const itemsToDisplay = updatedItems.filter((item) => {
    const filterByCategory = selectedCategory === "All" || item.category === selectedCategory; 
    const filterBySearch = search === "" || item.name.toLowerCase().includes(search.toLowerCase());

    return filterByCategory && filterBySearch
  });


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={handleSearchText} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
