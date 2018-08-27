import React from 'react';
import axios from 'axios'
import '../styles/App.css'


const AddRedux = ({newData}) => {
  let pname, supplier, pmanager, gnotes, est_date;

  const submit = (e) => {
      e.preventDefault();

      axios
      .post('http://localhost:3000/overview', {
      pname: pname.value,
      supplier: supplier.value,
      pmanager: pmanager.value,
      gnotes: gnotes.value,
      est_date: est_date.value
    })
      .then(response => {
        console.log(response);
        console.log(response.data);
      })


      newData({
        pname: pname.value,
        supplier: supplier.value,
        pmanager: pmanager.value,
        gnotes: gnotes.value,
        est_date: est_date.value,

      });
      pname.value = supplier.value = pmanager.value = gnotes.value = est_date.value = ""

    }

  return (
    <div className = "form-container">
      <form onSubmit={submit} className = "form black-container">
        <label>
          <br />
        </label>
        <label>
          <h3> Project Name: </h3> <br />
          <input
            id = "pname"
            type = "text"
            required
            ref={(input) => pname = input}
          />
          </label>
          <label>
            <h3> Supplier </h3> <br />
            <input
              id = "supplier"
              type = "text"
              required
              ref={(input) => supplier = input}
            />
            </label>
          <label>
          <br />
          <br />
            <h3> Manager: </h3> <br />
            <select ref ={(input) => pmanager = input} >
                  <option value='------'> --------  </option>
                <option value='David Holt'> David Holt </option>
                <option value='Greg VonRehder'> Greg VonRehder </option>
                <option value='Ryan Roth'> Ryan Roth </option>
                <option value='Jeremy Lo'> Jeremy Lo </option>
                <option value='Jorg Hesser'> Jorg Hesser </option>
                <option value='Ayumu Tokiwa'> Ayumu Tokiwa </option>
              </select>

              <label>
                <h3> General Notes </h3> <br />
                <input
                  id = "gnotes"
                  type = "text"
                  required
                  ref={(input) => gnotes = input}
                />
                </label>
                <label>
                  <br />
                  <br />
                <h3>  Estimated Completion Date: </h3>
                  <br />
                  <input
                    id = "est_date"
                    type = "date"
                    required
                    ref={(input) => est_date = input}
                  />
                  </label>
            </label>
                <input type ="submit" value="SUBMIT" />
            </form>
            </div>

  );
}

export default AddRedux;
