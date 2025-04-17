//Search bad input component here
const SearchBar = ({ searchTerm, onChange }) => {
    return (
      <input
        type="text"
        placeholder="Search by product name..."
        value={searchTerm}
        onChange={onChange}
        className="search-bar"
      />
    );
  };
  
  export default SearchBar;
  