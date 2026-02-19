import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../components/Search.css';

function Search() {
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  // to show the input after clicking on the search icon
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:5003/sessions')
      .then((response) => setDatas(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);

    if (value.length > 2) {
      const results = datas.filter((val) =>
        val.title.toLowerCase().includes(value.toLowerCase()),
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }

    if (value.length === 0) {
      setShowInput(false);
    }
  };
  // to close the input when keyress enter
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setShowInput(false);
      // reset text
      setSearch('');
      // reset results
      setFilteredResults([]);
    }
  };
  // to close the input after clicking on the result
  const handleResultClick = () => {
    setShowInput(false);
    setSearch('');
    setFilteredResults([]);
  };
  return (
    <div className="search-container">
      {!showInput && <span onClick={() => setShowInput(true)}>⌕</span>}

      {showInput && (
        <input
          type="text"
          placeholder="Search sessions..."
          value={search}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      )}

      {filteredResults.length > 0 && (
        <div className="search-dropdown">
          {filteredResults.map((val) => (
            <Link
              to={`/sessions/${val.id}`}
              key={val.id}
              className="search-result"
              onClick={handleResultClick}
            >
              {val.title}
            </Link>
          ))}
        </div>
      )}
      {/* start showing result after taping 2 char */}
      {search.length > 2 && filteredResults.length === 0 && (
        <div className="search-dropdown">
          <p>No results found</p>
        </div>
      )}
    </div>
  );
}

export default Search;
