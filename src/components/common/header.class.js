import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/media/logo.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className="headerFlexContainer">
        <div className="topHead">
          <div className="mainHead">
            <div className="navLeft">
              <NavLink to="/"><img src={logo} alt="MAF Plumbing Heating & Gas Services Darlington"/></NavLink>
            </div>
            <div className="navMid">
              <div>
                <i className="flaticon-technology"></i>
              </div>
              <div>
                <div>
                  <h4>Mob: 07921 516436</h4>
                  <h4>Tel: 01325 242098</h4>
                </div>
                <h4>info@mafplumingandheating.co.uk</h4>
              </div>
            </div>
            <div className="navRight">
              <img src={"https://www.hometeam.co.uk/wp-content/uploads/2015/06/baxi.jpg"} alt="baxi certified darlington"/>
              <img src={"https://www.cloverleafmaintenance.co.uk/wp-content/uploads/Gas_Safe_Register.svg_.png"} alt="gas safe registered engineers darlington"/>
            </div>
          </div>
        </div>
        <div className="actualNaviContainer">
          <div className="naviSubContainer">
            <a className="active">Home</a>
            <a>Bathrooms</a>
            <a>Plumbing</a>
            <a>Gas & Heating</a>
            <a>Boilers <ion-icon name="arrow-dropdown"></ion-icon></a>
            <a>Finance</a>
            <a>Contact</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;