import React, { useState } from 'react';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex justify-center mt-8">
      <input
        type="search"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search courses"
        className="w-full px-4 py-2 text-gray-700"
      />
    </div>
  );
}

export default SearchBar;