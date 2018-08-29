import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'

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
      })

      // newProject({
      //   name: name.value,
      //   manager: manager.value,
      //   date: date.value,
      //   type: type.value
      // });


      name.value = date.value = manager.value = type.value = '';

    }

  return (
    <div className = "form-container">
      <form onSubmit={submit} className = "form black-container">
        <label>
          <br />
        </label>
        <label>
          <h3> Name: </h3> <br />
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
            <h3> Manager: </h3> <br />
            <select ref ={(input) => manager = input} >
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
                <h3>  Date: </h3>
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
              <h3>  Type:  </h3> <br />
                <select ref ={(input) => type = input} >
                <option value="Hardware"> Hardware </option>
                <option value="Software"> Software </option>
                <option value="Mechanics"> Mechanics </option>
                  </select>
                </label>
                <br />
                <br />
                <input type ="submit" value="SUBMIT" />
            </form>
            </div>

  );
}

export default AddProject;
