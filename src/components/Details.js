import React from 'react';
import { Button , Grid, Cell, Textfield } from 'react-mdl';
import axios from 'axios';

import '../styles/tab.css';

let backdropStyle = {
  position: 'fixed',
  top: 60,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#fff',
  paddingTop: 20,
  paddingLeft: 20,
  paddingRight: 20
};


class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0,
      projects: []
    };
  }

  hideDetails = (e) => {
    this.props.hideDetails && this.props.hideDetails(e);
  }


  changeData(project){
    axios
      .post(`http://localhost:3001/projects/${this.props.getId}`, {
        name: project.name.value
      });
  }

  handleChange(event, project) {
    [event.target.name] = event.target.value;
  }
  render() {
    let project = this.props.data;
    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        <div className="Header"><p>ManageBK</p></div>
        <div style={backdropStyle}>
          {/* <ul className="detailsPreview">
            <li><b>Project Name</b>: {project.name}</li>
            <li><b>Project Manager:</b> {project.manager}</li>
            <li><b>Project Date:</b> {project.date}</li>
            <li><Button raised>Complete Project</Button></li>
            <li> <Button raised onClick={(e) => {
              this.hideDetails(e);
              window.location.reload();
            }}><b>Back to Projects</b></Button></li>
          </ul> */}
          <form>
              <Grid className="details-overview">
                  <Cell col={1}>Project Name</Cell>
                  <Cell col={1}>{project.name}</Cell>
              </Grid>
              <Grid className="supplier-overview">
                  <Cell col={1}>Supplier</Cell>
                  <Cell col={3}><input></input></Cell>
              </Grid>
              <Grid className="manager-overview">
                  <Cell col={1}>Project Manager</Cell>
                  <Cell col={1}>{project.manager}</Cell>
              </Grid>
              <Grid className="general-notes-overview">
                  <Cell col={1}>General Notes</Cell>
                  <Cell col={3}>
                    <Textfield onChange={() => {}} label="Enter your notes here" rows={3} style={{width: '100%'}}/>
                  </Cell>
              </Grid>
              <Grid className="folder-overview">
                  <Cell col={1}>Product Development Folder Link:</Cell>
                  <Cell col={3}><input></input></Cell>
              </Grid>
              <Grid className="completion-overview">
                  <Cell col={1}>Est. Completion Date</Cell>
                  <Cell col={3}>{project.est_date}</Cell>
              </Grid>
        <Button type="submit">Submit</Button>
      </form>
        </div>
      </div>
    );
  }
} // End of Component

export default Details;
