import React, { useState } from "react";
import s from "./AddEmployee.module.css";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { addEmployee } from "../../redux/actions/actions";
import Button from "@material-ui/core/Button";

const AddEmployee = (props) => {
  const [newEmployee, setNewEmployee] = useState({});
  const changeHandler = (event) => {
    switch (event.target.name) {
      case "name":
        setNewEmployee({ ...newEmployee, name: event.target.value });
        break;
      case "phone":
        setNewEmployee({ ...newEmployee, phone: event.target.value });
        break;
      case "email":
        setNewEmployee({ ...newEmployee, email: event.target.value });
        break;
      default:
        break;
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.addEmployee(newEmployee);
    console.log(props.users);
  };
  return (
    <div className={s.employee_block}>
      <form className={s.employee_form} onSubmit={submitHandler}>
        <TextField
          name="name"
          onChange={changeHandler}
          id="standard-basic"
          label="Name"
        />
        <TextField
          name="phone"
          onChange={changeHandler}
          id="standard-basic"
          label="Phone"
        />
        <TextField
          name="email"
          onChange={changeHandler}
          id="standard-basic"
          label="E-Mail"
        />
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  addEmployee,
};
const mapStateToProps = (state) => {
  return { users: [...state.users] };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);
