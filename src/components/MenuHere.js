import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkedAlt, faGift, faUserCircle, faPlusCircle, faMapPin, faCompass, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../assets/scss/menubar.scss';
import AddBinInfo from './AddBinInfo.js';
import MapPage from '../MapPage.js'

const styles = {
  exMenuL: {
    transform: 'translate(-180%, 0)'
  },

  exMenuM: {
    transform: 'translate(-45%, -80%)'
  },

  exMenuR: {
    transform: 'translate(90%, 0)'
  },
};

export default class MenuHere extends React.Component{
  constructor (props){
    super(props);
    this.state = {modalShow: false, locLoaded: false,error: false};
    this.checkModalShow = this.checkModalShow.bind(this)
  }
  getGeoLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
      position => {
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        locLoaded: true
      })
      },
      error => {
        this.setState({locLoaded: true, error: true});
      }
      )
    }
    else{
      this.setState({locLoaded: true, error: true});
    }
  }
  componentDidMount() {
    this.getGeoLocation();
  }
  checkModalShow(){
    if(this.state.locLoaded)
    {
      if(!this.state.error){
        this.setState({ modalShow: true });
      }
      else{
        alert("Can't detect GPS");
      }
    }
    else{
      alert("Detecting your location...please try again in a second");
    }
  }
  render(){
    let modalClose = () => this.setState({ modalShow: false });
    return(
      <div>
        <div
        className='extended-menu-wrap'
        style={ styles.exMenuL }
        onClick={this.checkModalShow}
        >
          <FontAwesomeIcon
            icon='map-pin'
            className='extended-menu-icon'
            size='2x'
          />
          <div className='extended-menu-label'>here</div>
        </div>
        <AddBinInfo
          show={this.state.modalShow}
          onHide={modalClose}
          lat = {this.state.lat}
          lng = {this.state.lng}
        />
      </div>
    );
  }
}
