import { useState, useMemo } from "react";
import "./styles/App.css";
import { products as allProducts } from "./data/product";
import SearchBar from "./components/Search";
import ProductList from "./components/Product";

function App() {
  //state for search product whatever user types in filter stores in this state
  const [searchTerm, setSearchTerm] = useState("");
 //on change event listner for typing in input field on key press so that changes visible
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
// useMemo will only run the filtering logic when searchTerm actually changes On every re-render of the component react will skip re-running this 
// logic if the searchTerm hasn't changed
// this code will return filtered products like if i search for product 5 it gives all values like 5 50 15 25 250 55 whic includes 5
  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");
    return allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);
  //if i do this filtering happens on every re-render, no matter what changed Even if the re-render
  //happened because of something unrelated like a theme toggle, another component state changes it recalculates the entire filter from scratch it makes code laggy
  // const filteredProducts = allProducts.filter((product) =>
  //   product.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div className="App">
      <h1>Optimized Product Filter</h1>
      <SearchBar searchTerm={searchTerm} onChange={handleChange} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
