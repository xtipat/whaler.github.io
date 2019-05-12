import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Switch, withRouter } from 'react-router-dom';
import Menubar from './Menubar.js';
import Profile from './Profile.js'
import Redeem from './Redeem.js';
import Details from './components/Details'
import ModalRedeem from './components/ModalRedeem'

import 'react-bootstrap/dist/react-bootstrap.min.js';
import './assets/scss/_base.scss';
//import GoogleMapReact from 'google-map-react';
import MapPage from './MapPage.js'
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTrash, faTimesCircle, faCheckCircle, faMapMarkedAlt, faSearch, faGift,
  faUserCircle, faPlusCircle, faMapPin, faCompass, faTimes, faCircleNotch
} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash, faTimesCircle, faCheckCircle, faMapMarkedAlt, faSearch,
  faGift, faUserCircle, faPlusCircle, faMapPin, faCompass, faTimes, faCircleNotch);

function App() {
  return (
    <Container fluid>
      <Row className='justify-content-sm-center outer-wrap'>
        <Col xs={12} sm={8} md={6} lg={4} className='page-wrap'>
          <Page />
          <ModalRedeem/>
          <Menubar />
        </Col>
      </Row>
    </Container>
  );
}

const Page = () => (
  <Switch>
      <Route exact path='/' component={MapPage} />
      <Route path='/redeem' component={Redeem} />
      <Route path='/profile' component={Profile} />
      <Route path="/details" component={Details}/>
  </Switch>
)

export default withRouter(App);
