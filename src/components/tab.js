import React from 'react';
import { Tab, Tabs } from 'react-mdl';
import '../styles/tab.css';

class Window extends React.Component {
      constructor(props) {
          super(props)
          this.state = {
             activeTab: 0
            // overviewTab: []
          };
      }
      render() {
          return (
            <div className="demo-tabs">
              <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>Overview</Tab>
                <Tab>Request FROM Supplier</Tab>
                <Tab>Provide TO Supplier</Tab>
                <Tab>Documentation</Tab>
                <Tab>Tooling, art, packaging...</Tab>
                <Tab>Cost  & Pricing </Tab>
                <Tab>Website/Promotion</Tab>
              </Tabs>
            <section >
              <div className="content" activeTab = {this.state.activeTab}> Tab No. {this.state.activeTab} </div>
              <p> static data </p>
            </section>
          </div>
          );
      }
  }

export default Window;
