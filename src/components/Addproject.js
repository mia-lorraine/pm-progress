import React from 'react';
import { NavLink } from 'react-router-dom';

const AddProject = ({addProject}) => {
  let name, manager, date, type;

  const submit = (e) => {
    e.preventDefault();
    addProject({
      name: name.value,
      manager: manager.value,
      date: date.value,
      type: type.value
    });
    name.value = date.value = manager.value = type.value = '';
  };

  return (
    <div className= "form-container">
      <form onSubmit={submit} className = "form black-container">
        <label>
          <h3> Add a Project </h3>
          <br />
        </label>
        <label>
          Name: <br />
          <input
            id = "name"
            type = "text"
            required
            ref={(input) => name = input}
          />
        </label>
        <label>
          <br />
          <br />
            Manager: <br />
          <input
            id="date"
            type="text"
            required
            ref={(input) => manager = input}
          />
          <label>
            <br />
            <br />
                  Date:
            <br />
            <input
              id = "name"
              type = "date"
              required
              ref={(input) => date = input}
            />
          </label>
        </label>
        <label>
          <br />
          <br />
                Type: <br />
          <select ref ={(input) => type = input} >
            <option value="Hardware"> Hardware </option>
            <option value="Software"> Software </option>
            <option value="Mechanics"> Mechanics </option>
          </select>
        </label>
        <br />
        <br />
        <button>
          <NavLink to="/">Submit</NavLink>
        </button> 

      </form>
    </div>

  );
};

export default AddProject;
