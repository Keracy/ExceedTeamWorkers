import React, { useState } from "react";
import s from "./AddEmployee.module.css";

const AddEmployee = () => {
  const [newUser, setNewUser] = useState({});
  return (
    <div className={s.employee_block}>
      <form className={s.employee_form}>
        <input
          className={s.employee_input}
          placeholder="Enter employeer's Name"
          type="text"
        />
        <input
          className={s.employee_input}
          placeholder="Enter employeer's Phone"
          type="phone"
        />
        <input
          className={s.employee_input}
          placeholder="Enter employeer's E-Mail"
          type="email"
        />
      </form>
    </div>
  );
};

export default AddEmployee;
