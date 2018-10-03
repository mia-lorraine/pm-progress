import React from 'react';
import axios from 'axios'
import '../styles/App.css'

const AddProject = () => {
  let name, manager, date, status;

  const submit = (e) => {
      e.preventDefault();
      axios
        .post('http://localhost:3001/projects', {
        name: name.value,
        manager: manager.value,
        date: date.value,
        status: status.value
    })
      .then(response => {
        console.log(response);
        console.log(response.data);
      })
      name.value = date.value = manager.value = status.value = '';
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
                <select ref ={(input) => status = input} >
                      <option value='1'> Continuing </option>
                    <option value='0'> New </option>
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
