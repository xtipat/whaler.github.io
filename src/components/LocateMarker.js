import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import '../assets/scss/marker.scss';

export default class LocateMarker extends Component {
  constructor (props) {
    super(props);
  }
  static defaultProps = {};

  render(){
    return(
        <div className='locate-marker-container'
          onClick={this.props.handleLocationPinButton}
          >
          <span className='locate-text'>Click Mark</span>
          <FontAwesomeIcon icon="crosshairs"/>
        </div>
    );
  }
}