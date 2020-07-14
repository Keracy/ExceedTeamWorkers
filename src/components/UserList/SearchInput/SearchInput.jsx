import React from "react";
import s from "./SearchInput.module.css";

const SearchInput = (props) => {
  return (
    <div>
      <input
        placeholder="Search"
        className={s.text_input}
        type="text"
        onChange={props.changeHandler}
      />
    </div>
  );
};

export default SearchInput;
