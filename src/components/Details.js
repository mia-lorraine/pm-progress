import React from 'react';
import axios from 'axios';
import { Tab, Tabs } from 'react-mdl';

import '../styles/tab.css'

let backdropStyle = {
    position : 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgb(255,255,255)',
    padding: 50
}
// let modalStyle = {
//     backgroundColor: 'rgb(255,255,255)',
//     borderRadius: 5,
//     maxWidth: 500,
//     minHeight: 300,
//     margin: '0 auto',
//     padding:30,
//     position: "relative"
// }

class Details extends React.Component {
  constructor(){
    super();
    this.state = {
      activeTab: 0,
      projectDetails: []

    }
  }

  hideDetails = (e) => {
        this.props.hideDetails && this.props.hideDetails(e);
    }


    getData() {
      axios
      .get("http://localhost:3001/projectDetails")
      .then(response => {
        console.log(response.data);
        var data = response.data.projectDetails
        this.setState({
          projectDetails: data
        })
      })
    }


    toggleCategories(project){
      if(this.state.activeTab === 0){
        return(
          <form>
          <table>
            <thead>
              <tr>
                <th>Overview</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Project Name:</td>
                <td>BK</td>
              </tr>
              <tr>
                <td>Supplier: </td>
                <td>BK</td>
              </tr>
              <tr>
                <td>Project Manager: </td>
                <td>David Holt </td>
              </tr>
              <tr>
                <td>General Notes: </td>
                <td><div contentEditable="true"> This is a new handheald battery test
                  with data logging. Targeting the security, fire alarm and SCDA industries. Designed and built by BK.</div></td>
              </tr>
              <tr>
                <td> Product Development Folder Link </td>
                <td><div contentEditable="true">Common/Product Development/BK Taiwan / 603B </div></td>
              </tr>
              <tr>
                <td> Est. Completion Date </td>
                <td>4.15.2018</td>
              </tr>
            </tbody>
           </table>
           </form>
        )} else if(this.state.activeTab === 1){
            return(
              <div>
                <table>
                  <thead>To request FROM supplier:</thead>

                  <tbody>
                    <tr>
                      <th>item </th>
                      <th>requested</th>
                      <th>received</th>
                      <th>accepted</th>
                      <th>notes</th>
                    </tr>
                    <tr>
                      <td> Sample(s) including any software </td>
                      <td><input type= "checkbox" name= "b1" value = ""  /></td>
                      <td><input type= "checkbox" name= "b2" value = "" /></td>
                      <td><input type= "checkbox" name= "b3" value = "" /></td>
                      <td><div className = "textbox"contentEditable="true">
                      <br/>

                    </div></td>
                  </tr>
                  <tr>
                    <td>Link to Eval Results Report: </td>
                    <td><input type = "text" name= "link"/></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>First Articles </td>
                    <td><input type= "checkbox" name= "b4" value ="" /> </td>
                    <td><input type= "checkbox" name= "b5" value = "" /> </td>
                    <td><input type= "checkbox" name= "b6" value = "" /> </td>
                    <td><div className= "textbox"contentEditable="true">
                  </div> </td>
                </tr>
                <tr>
                  <td>Pricing (cost) for instrument and included accessories </td>
                  <td><input type= "checkbox" name= "b7" value ="" /> </td>
                  <td><input type= "checkbox" name= "b8" value = "" /> </td>
                  <td><input type= "checkbox" name= "b9" value = "" /> </td>
                  <td><div className = "textbox"contentEditable="true">  </div></td>
                </tr>
                <tr>
                  <td>Terms and conditions </td>
                  <td><input type= "checkbox" name= "b10" value ="" /> </td>
                  <td><input type= "checkbox" name= "b11" value = "" /> </td>
                  <td><input type= "checkbox" name= "b12" value = "" /> </td>
                  <td><div className = "textbox"contentEditable="true"> </div></td>
                </tr>
                <tr>
                  <td>User Manual </td>
                  <td><input type= "checkbox" name= "b13" value =""/> </td>
                  <td><input type= "checkbox" name= "b14" value = "" /> </td>
                  <td><input type= "checkbox" name= "b15" value = "" /> </td>
                  <td><div className = "textbox"contentEditable="true">  </div></td>
                </tr>
                <tr>
                  <td>Tooling: Overlay drawings, IGS files.  </td>
                  <td><input type= "checkbox" name= "b16" value ="" /> </td>
                  <td><input type= "checkbox" name= "b17" value = "" /> </td>
                  <td><input type= "checkbox" name= "b18" value = "" /> </td>
                  <td><div className = "textbox"contentEditable="true"> <br/>
                   <br/> </div></td>
              </tr>
              <tr>
                <td>Firmware upgrade instructions (if applicable)</td>
                <td><input type= "checkbox" name= "b19" value =""  /></td>
                <td><input type= "checkbox" name= "b20" value = "" /></td>
                <td><input type= "checkbox" name= "b21" value = ""   /></td>
                <td><div className = "textbox"contentEditable="true"> </div></td>
              </tr>
              <tr>
                <td>CE declaration  </td>
                <td><input type= "checkbox" name= "b22" value =""  /> </td>
                <td><input type= "checkbox" name= "b23" value = "" /> </td>
                <td><input type= "checkbox" name= "b24" value = ""   /> </td>
                <td><div className = "textbox"contentEditable="true">  </div>  </td>
              </tr>
              <tr>
                <td>Other approvals (if available) </td>
                <td><input type = "checkbox" name= "b25" value ="" /> </td>
                <td><input type = "checkbox" name= "b26" value = "" /> </td>
                <td><input type = "checkbox" name= "b27" value = ""  /> </td>
                <td><div className = "textbox"contentEditable="true">  </div>   </td>
              </tr>
              <tr>
                <td>Service and calabration information, service strategy (e.g
                    board level or component level repair, does supplier provide spare parts.) </td>
                  <td><input type= "checkbox" name= "b28" value ="" /> </td>
                  <td><input type= "checkbox" name= "b29" value = "" /> </td>
                  <td><input type= "checkbox" name= "b30" value = ""  /> </td>
                  <td><div className= "textbox"contentEditable="true">  </div>  </td>
                </tr>
                  </tbody>
                 </table>
                </div>
            )} else if(this.state.activeTab === 2){
              return (
                <table>
                  <thead> To provide TO supplier: </thead>
                  <tr>
                  <th>item </th>
                  <th>submitted </th>
                  <th>accepted (by supplier)</th>
                  <th>accepted (by B&K) </th>
                  <th>notes </th>
                  </tr>
                  <tr>
                    <td>Result of product evaluation </td>
                    <td><input type = "checkbox" name= "b1" value =""  /> </td>
                    <td><input type = "checkbox" name= "b2" value = ""  /> </td>
                    <td>N/A </td>
                    <td><input type = "text" name = "notes"/>  </td>
                  </tr>
                  <tr>
                    <td>Required functional improvements or modifications if any (specifications, features) </td>
                    <td><input type = "checkbox" name= "b3" value ="" /> </td>
                    <td><input type = "checkbox" name= "b4" value = "" /> </td>
                    <td><input type = "checkbox" name= "b5" value = ""  /> </td>
                    <td><input type = "text" name = "notes"/>  </td>
                  </tr>
                  <tr>
                    <td> Requirements for OEM version (BK version) of application (PC) software and firmware, CD labels </td>
                    <td> <input type = "checkbox" name= "b6" value =""/> </td>
                    <td> <input type = "checkbox" name= "b7" value = "" /> </td>
                    <td> N/A </td>
                    <td> <input type = "text" name = "notes"/>  </td>
                  </tr>
                  <tr>
                    <td>User manual (PDF) </td>
                    <td><input type = "checkbox" name= "b8" value ="" /> </td>
                    <td><input type = "checkbox" name= "b9" value = "" /> </td>
                    <td>N/A </td>
                    <td><input type = "text" name = "notes"/>  </td>
                  </tr>
                  <tr>
                    <td>Required tooling/overlay modifications if any </td>
                    <td><input type = "checkbox" name= "b10" value =""/> </td>
                    <td><input type = "checkbox" name= "b11" value = "" /> </td>
                    <td><input type = "checkbox" name= "b12" value = "" /> </td>
                    <td><input type = "text" name = "notes"/>  </td>
                  </tr>
                  <tr>
                    <td> Box artwork  </td>
                    <td> <input type = "checkbox" name= "b13" value ="" /> </td>
                    <td> <input type = "checkbox" name= "b14" value = "" /> </td>
                    <td> <input type = "checkbox" name= "b15" value = ""  /> </td>
                    <td> <input type = "text" name = "notes"/>  </td>
                  </tr>
                  <tr>
                    <td>Initial purchase order (first articles) with detailed acceptance instructions  </td>
                    <td><input type = "checkbox" name= "b16" value ="" /> </td>
                    <td><input type = "checkbox" name= "b17" value = "" /> </td>
                    <td>N/A </td>
                    <td><input type = "text" name = "notes"/>  </td>
                  </tr>
                  <tr>
                    <td>Info what goes inside of box, inclduing packaging instructions (optional)  </td>
                    <td><input type = "checkbox" name= "b18" value ="" /> </td>
                    <td><input type = "checkbox" name= "b19" value = "" /> </td>
                    <td>N/A </td>
                    <td><input type = "text" name = "notes"/>  </td>
                  </tr>
                 </table>
              )} else if (this.state.activeTab === 3) {
                return (
                  <table>
                    <thead> To provide TO supplier: </thead>
                    <tr>
                      <th> item </th>
                      <th> completed </th>
                      <th> reviewed by </th>
                      <th> File URL </th>
                      <th> Notes </th>
                    </tr>
                    <tr>
                      <td> User Manual </td>
                      <td> <input type ="checkbox" name = "complete" /> </td>
                      <td>
                      <div className = "button-style">
                       <input type= "checkbox" name = "selected" value = "" /> Ayumu T. () <br/>
                       <input type= "checkbox" name = "selected" value = "" /> Greg V. () <br/>
                       <input type= "checkbox" name = "selected" value = "" /> Ryan R. () <br/>
                       <input type= "checkbox" name = "selected" value = "" /> Jeremy L. () <br/>
                       <input type= "checkbox" name = "selected" value = "" /> Jorg H. () <br/>
                       <input type= "checkbox" name = "selected" value = "" /> David H. () <br/>
                      </div>
                      </td>
                      <td> <input type= "text" /> </td>
                      <td> <input type= "text" /> </td>
                    </tr>
                    <tr>
                      <td> Data Sheet </td>
                      <td> <input type ="checkbox" name = "complete" /> </td>
                      <td>
                      <div className= "button-style">
                       <input type= "checkbox" name = "selected" value = "" /> Ayumu T. () <br/>
                       <input type= "checkbox" name = "selected" value = "" /> Greg V. () <br/>
                       <input type= "checkbox" name = "selected" value = "" /> Ryan R. () <br/>
                       <input type= "checkbox" name = "selected" value = "" /> Jeremy L. () <br/>
                       <input type= "checkbox" name = "selected" value = "" /> Jorg H. () <br/>
                       <input type= "checkbox" name = "selected" value = "" /> David H. () <br/>
                      </div>
                      </td>
                      <td> <input type = "text" /> </td>
                      <td> <input type = "text" /> </td>
                    </tr>
                   </table>
                )}else if(this.state.activeTab === 4){
                  return(
                    <table>
                      <tr>
                        <th></th>
                        <th>completed </th>
                        <th>reviewed by </th>
                        <th>Other </th>
                      </tr>
                      <tr>
                        <td>Box artwork </td>
                        <td><input type = "checkbox" value = "complete" /> </td>
                        <td><input type = "text"  /> </td>
                        <td><input type = "checkbox" value = "" /> does not apply </td>
                      </tr>
                      <tr>
                        <td>Overlay drawings </td>
                        <td><input type = "checkbox" value = "complete" /> </td>
                        <td><input type = "text"  /> </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Tooling instructions </td>
                        <td><input type = "checkbox" value = "complete"/> </td>
                        <td><input type = "text"  /> </td>
                        <td><input type = "checkbox" value = "" /> does not apply </td>
                      </tr>
                      <tr>
                        <td>Tooling folder </td>
                        <td><input type = "checkbox" value = "complete"  /> </td>
                        <td><input type = "text"  /> </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Photos (a valid B&K product inventory ID must be in this system) </td>
                        <td><input type = "checkbox" value = "complete"  /> </td>
                        <td><input type = "text"  /> </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Section Notes: </td>
                        <td><input type= "text"/> </td>
                      </tr>
                    </table>
                  )}else if(this.state.activeTab === 5){
                    return(
                      <table>
                      <thead>cost</thead>
                      <tr>
                        <th></th>
                        <th>completed</th>
                        <th>reviewed by</th>
                        <th>Files URL</th>
                        <th>Notes </th>
                      </tr>
                      <tr>
                        <td>Competitive Analysis/Pricing:</td>
                        <td><input type= "checkbox"  /></td>
                        <td><input type= "text" /></td>
                        <td><input type= "text" /></td>
                      </tr>
                      <tr>
                        <td>Solomon Populated:</td>
                        <td><input type="checkbox"/> yes </td>
                        <td><input type= "text" /></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Cost and Price approved by Jorg:</td>
                        <td><input type= "checkbox"/>yes</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                      </table>
                    )} else if (this.state.activeTab === 6){
                      return(
                        <table>
                        <thead>Website & Promo</thead>
                        <tr>
                          <th></th>
                          <th>reviewed/completed</th>
                          <th>sent/reviewed by</th>
                          <th>other </th>
                        </tr>
                        <tr>
                          <td>Updated selection guides and selection tool on web:</td>
                          <td><input type= "checkbox"/>yes</td>
                          <td>Reviewed By: <input type= "text"/></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Web content management system populated?</td>
                          <td><input type = "checkbox"  />yes</td>
                          <td></td>
                          <td>Approved by Jorg?<input type= "checkbox"/> yes </td>
                        </tr>
                        <tr>
                          <td>Inform Sefram (manual, data sheet, transfer price) </td>
                          <td><input type="checkbox"  /> completed </td>
                          <td>Sent By: <input type="text" name = "notes"/></td>
                        </tr>
                        <tr>
                          <td>Live on Website</td>
                          <td><input type="checkbox"/>yes</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Press release</td>
                          <td><input type="checkbox" />completed</td>
                          <td><input type="text" /></td>
                          <td><input type="checkbox"/>released</td>
                        </tr>
                        <tr>
                          <td>Internal sales training document</td>
                          <td><input type= "checkbox"/> completed</td>
                          <td>reviewed by: <input type = "text"/></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Distrubutor notification email</td>
                          <td><input type="checkbox"/> completed</td>
                          <td>reviewed by: <input type = "text"/></td>
                          <td><input type="checkbox"/> released</td>
                        </tr>
                        <tr>
                          <td>Distributor notification email</td>
                          <td><input type="checkbox"/> completed</td>
                          <td>reviewed by : <input type = "text"/></td>
                          <td><input type="checkbox"/> released</td>
                        </tr>
                        <tr>
                          <td>Section Notes</td>
                          <td><input type="text"/> </td>
                        </tr>
                        </table>
                      )}
    }; //closes toggleCategories


componentDidMount() {
this.getData();
}


  render() {
    const {projectDetails} = this.state;
    let project = this.props.item
    if(!this.props.show) {
      return null;
    }
    return (
      <div style={backdropStyle}>

      {console.log(projectDetails)};
            <ul>
                <li>Project Name: {project.name}</li>
                <li>Project Manager: {project.manager}</li>
                <li>Project Date: {project.date}</li>
            </ul>
        <button onClick={(e) => {this.hideDetails(e)}}>Close</button>

        <div className="demo-tabs">
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>Overview</Tab>
            <Tab>Request FROM Supplier</Tab>
            <Tab>Provide TO Supplier</Tab>
            <Tab>Documentation</Tab>
            <Tab>Tooling, art, packaging...</Tab>
            <Tab>Cost & Pricing </Tab>
            <Tab>Website/Promotion</Tab>
        </Tabs>
          <section>
            <div className="projectDetailsDefault">{this.toggleCategories(project)}</div>
          </section>
        </div>
      </div>
    );
  }
} // End of Component

export default Details;
