import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim() !== "") {
      navigate(`/search/${searchText}`);
      setSearchText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default SearchForm;
