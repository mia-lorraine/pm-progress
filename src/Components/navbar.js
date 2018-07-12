import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';


class NavBar extends Component {
  render() {
  return (
    <div style={{height: '100px', position: 'relative'}}>
        <Layout fixedHeader>
            <Header title={<span><span style={{ color: '#ddd' }}> NPI Tool / </span><strong>BK Precision</strong></span>}>
                <Navigation>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                </Navigation>
            </Header>

            <Content />
        </Layout>
    </div>
    );
  }
}



export default NavBar;
