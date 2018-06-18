import React, { Component } from 'react';
import Slider from "react-slick";
import img1 from '../../assets/media/ribbon/1.png';
import img2 from '../../assets/media/ribbon/2.png';
import img3 from '../../assets/media/ribbon/3.png';
import img4 from '../../assets/media/ribbon/4.png';
import img5 from '../../assets/media/ribbon/5.png';
import img6 from '../../assets/media/ribbon/6.png';
import exp from '../../assets/media/exp.svg';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="commonPageContainer">
        <div className="headerContainerCta">
          <span className="headerTint"></span>
          <div className="headerCtaContainerM">
            <div>
            </div>
            <div>
            <h1>MAF Plumbing, <br/> Heating & Gas Services</h1>
            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. </p>
            <div className="actualCta">
              <a>Our Services</a>
              <a>Emergency Callout</a>
            </div>
            </div>
          </div>
        </div>
        <section>
          <div className="sectionSubContainer">
            <div className="sectionHeaderContainer">
              <h2>What we offer</h2>
            </div>
            <div className="trippleFeatures">
              <div>
                <i className="flaticon-bathroom"></i>
                <h4>Bathroom Services</h4>
                <p>Increase your property’s value and create a bathroom you’ll love. The products we use are of the highest quality and take care of every detail.</p>
              </div>
              <div>
                <i className="flaticon-construction"></i>
                <h4>Plumbing Services</h4>
                <p>We provide a comprehensive choice of pluming services throughout County Durham, Middlesbrough, Stockon, Richmond and Catterick.</p>
              </div>
              <div>
                <i className="flaticon-gas-pipe"></i>
                <h4>Gas & Heating Services</h4>
                <p>We cover a wide range of services, from installing radiators and boilers to maintaing appliances, repairing gas leaks and issuing safety certificates.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="ribbonCompanies">
          <div className="ribbonContainer">
            <img src={img1}/>
            <img src={img2}/>
            <img src={img3}/>
            <img src={img4}/>
            <img src={img5}/>
            <img src={img6}/>
          </div>
        </section>
        <section>
          <div className="testimonialsContainer">
            <TestiSlider/>
          </div>
        </section>
        <section className="priceMatchContainer">
          <div className="priceMatchActual">
            <div>
              <h2>Price Match Guarantee</h2>
              <p>We will beat any genuine written quotation</p>
            </div>
            <div>
              <a>Our Services</a>
              <a>Contact Us</a>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

class TestiSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <img src={exp}/>
          <h3>“ Best plumber we have used in recent years. We needed a refurb to our heating system. m.a.f. responded quickly and completed a first class job with minimum mess and for a very good price. ” </h3>
        </div>
        <div>
          <img src={exp}/>
          <h3>“ Best plumber we have used in recent years. We needed a refurb to our heating system. m.a.f. responded quickly and completed a first class job with minimum mess and for a very good price. ” </h3>
        </div>
        <div>
          <img src={exp}/>
          <h3>“ Best plumber we have used in recent years. We needed a refurb to our heating system. m.a.f. responded quickly and completed a first class job with minimum mess and for a very good price. ” </h3>
        </div>
        <div>
          <img src={exp}/>
          <h3>“ Best plumber we have used in recent years. We needed a refurb to our heating system. m.a.f. responded quickly and completed a first class job with minimum mess and for a very good price. ” </h3>
        </div>
        <div>
          <img src={exp}/>
          <h3>“ Best plumber we have used in recent years. We needed a refurb to our heating system. m.a.f. responded quickly and completed a first class job with minimum mess and for a very good price. ” </h3>
        </div>
      </Slider>
    );
  }
}
