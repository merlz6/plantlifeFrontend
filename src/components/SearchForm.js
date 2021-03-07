import React from 'react';
import { SearchIcon } from '../shared/AppIcons';

function SearchForm(props) {
  const { handleSubmit, handleChange, searchString } = props;
  return (
    <div className="SearchFormHolder">
    <h1 className="leftheader">Mikes Plants</h1>
    <form onSubmit={handleSubmit} className="form-horizontal">
      <input
        placeholder="Search"
        type="text"
        name="searchString"
        required
        onChange={handleChange}
        value={searchString}
      />
      <button className="submit" type="submit">
        <SearchIcon height="2rem" width="2rem" />
      </button>
    </form>
    </div>
  );
}

export default SearchForm;
