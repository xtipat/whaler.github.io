import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import BinDetails from './BinDetails.js';

const markerStyle = {
  position: 'absolute',
  width: 40,
  height: 40,
  left: -20,
  top: -20,
  
  border: '5px solid #f44336',
  borderRadius: 40,
  backgroundColor: '#f44336',
  textAlign: 'center',
  color: 'white',
  fontSize: 16,
  padding: 4
};

class BinMarker extends Component {
  constructor (props) {
    super(props);
    this.state = {modalShow: false};
  }
  static defaultProps = {};
  checkClickable(){
    if(this.props.clickable)
      return(
      <button style={markerStyle} onClick={() => this.setState({ modalShow: true })}>
        <FontAwesomeIcon icon={this.props.icon}/>
      </button>
      );
    else{
      return(
      <button style={markerStyle}>
        <FontAwesomeIcon icon={this.props.icon}/>
      </button>
      );
    }
  }
  render(){
    let modalClose = () => this.setState({ modalShow: false });
    return(
      <div>
      {this.checkClickable()}
      <BinDetails
        show={this.state.modalShow}
        onHide={modalClose}
        fbkey={this.props.fbkey}
        icon={this.props.icon}
      />
      </div>
    );
  }
}

export default BinMarker;
