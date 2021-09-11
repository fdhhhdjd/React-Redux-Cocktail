import React from "react";

const Search = () => {
  return (
    <div>
      <section className="section search">
        <form className="search-form">
          <div className="form-control">
            <label htmlFor="name">Search Cocktail</label>
            <input type="text" name="name" id="name" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Search;
