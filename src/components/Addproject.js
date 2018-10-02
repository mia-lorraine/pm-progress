import React from 'react';
import axios from 'axios';
import { Button } from 'react-mdl';
import { NavLink } from 'react-router-dom';

let formButtonStyle = {
  float : 'right'
};

const AddProject = ({newProject}) => {
  let name, manager, date, type;

  const submit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3001/projects', {
        name: name.value,
        manager: manager.value,
        date: date.value,
        type: type.value
      })
      .then(response => {
        console.log(response);
        console.log(response.data);
      });
    name.value = date.value = manager.value = type.value = '';
  };

  return (
    <div className="create-project-wrap">
      <div className="form-container">
        <h3>Create A Project</h3>
        <form onSubmit={submit} className= "form black-container">
          <label>
            <br />
          </label>
          <label>
            <p>Name:</p><br />
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
            <p>Manager:</p><br />
            <select ref={(input) => manager = input} >
              <option value='------'> --------  </option>
              <option value='David Holt'> David Holt </option>
              <option value='Greg VonRehder'> Greg VonRehder </option>
              <option value='Ryan Roth'> Ryan Roth </option>
              <option value='Jeremy Lo'> Jeremy Lo </option>
              <option value='Jorg Hesser'> Jorg Hesser </option>
              <option value='Ayumu Tokiwa'> Ayumu Tokiwa </option>
            </select>
          <label>
              <br />
              <br />
              <p>Date:</p>
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
            <p>Type:</p><br />
            <select ref ={(input) => type = input} >
              <option value="Hardware"> Hardware </option>
              <option value="Software"> Software </option>
              <option value="Mechanics"> Mechanics </option>
            </select>
          </label>
          <br />
          <br />
          <Button raised><NavLink to="/">Back</NavLink></Button>
          <Button raised colored style={formButtonStyle} type="submit" value="SUBMIT">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
