import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const filteredItems = items.filter((item) => {
    return selectedCategory === "All" || item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select
          name="filter"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="All">Filter by personality trait</option>
          <option value="Courageous Explorer">Courageous Explorer</option>
          <option value="Visionary Artist">Visionary Artist</option>
          <option value="Laughter Magnet">Laughter Magnet</option>
          <option value="Intellectual Leader">Intellectual Leader</option>
          <option value="Fearless Adventurer">Fearless Adventurer</option>
          <option value="Creative Genius">Creative Genius</option>
          <option value="Charming Storyteller">Charming Storyteller</option>
          <option value="Innovative Thinker">Innovative Thinker</option>
          <option value="Joyful Optimist">Joyful Optimist</option>
          <option value="Dream Chaser">Dream Chaser</option>
          <option value="Masterful Problem Solver">
            Masterful Problem Solver
          </option>
          <option value="Endless Jokester">Endless Jokester</option>
          <option value="Deep Thinker">Deep Thinker</option>
          <option value="Adventurous Spirit">Adventurous Spirit</option>
          <option value="Empathic Listener">Empathic Listener</option>
          <option value="World Traveler">World Traveler</option>
          <option value="Witty Entertainer">Witty Entertainer</option>
          <option value="Grounded Philosopher">Grounded Philosopher</option>
          <option value="Fearless Leader">Fearless Leader</option>
          <option value="Creative Visionary">Creative Visionary</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
