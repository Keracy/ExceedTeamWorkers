import React from "react";

const SearchInput = (props) => {
  return (
    <div>
      <input type="text" onChange={props.changeHandler} />
    </div>
  );
};

export default SearchInput;
