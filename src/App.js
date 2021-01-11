import React from 'react';
import './App.css';
import { CurrentSlide, PlusSlides } from './ShowSlides';
import MarkusSpiske01 from './assets/img/pexelsmarkusspiske360591.jpg'
import MarkusSpiske02 from './assets/img/pexelsmarkusspiske1089438.jpg'
import MarkusSpiske03 from './assets/img/pexelsmarkusspiske1089440.jpg'
import MarkusSpiske04 from './assets/img/pexelsneo2653362.jpg'
import MarkusSpiske05 from './assets/img/pexelspixabay270632.jpg'
import MarkusSpiske06 from './assets/img/pexelsvitalyvlasov1342460.jpg'

class App extends React.Component {
  render () {
    return (
        <div className="App container">
        <h2 >Slideshow Gallery</h2>
          <div className="mySlides">
            <div className="numbertext">1 / 6</div>
            <img src={MarkusSpiske01} style= {{ width:"auto", height:"500px" }} alt="" />
          </div>

          <div className="mySlides">
            <div className="numbertext">2 / 6</div>
            <img src={MarkusSpiske02} style= {{ width:"auto", height:"500px" }} alt="" />
          </div>

          <div className="mySlides">
            <div className="numbertext">3 / 6</div>
            <img src={MarkusSpiske03} style= {{ width:"auto", height:"500px" }} alt="" />
          </div>
            
          <div className="mySlides">
            <div className="numbertext">4 / 6</div>
            <img src={MarkusSpiske04} style= {{ width:"auto", height:"500px" }} alt="" />
          </div>

          <div className="mySlides">
            <div className="numbertext">5 / 6</div>
            <img src={MarkusSpiske05} style= {{ width:"auto", height:"500px"}} alt="" />
          </div>
            
          <div className="mySlides">
            <div className="numbertext">6 / 6</div>
            <img src={MarkusSpiske06} style= {{ width:"auto", height:"500px"  }} alt="" />
          </div>
            
          <span className="prev" onClick={PlusSlides} src="none" value = "-1">❮</span>
          <span className="next" onClick={PlusSlides} src="none" value = "1">❯</span>

          <div className="caption-container">
            <p id="caption"></p>
          </div>

          <div className="row">
            <div className="column">
              <img className="demo cursor" src={MarkusSpiske01} onClick={CurrentSlide} value="1" style= {{ width:"100%" }} alt="The Woods" />
            </div>
            <div className="column">
            <img className="demo cursor" src={MarkusSpiske02} onClick={CurrentSlide} value="2" style= {{ width:"100%" }} alt="Cinque Terre" />
            </div>
            <div className="column">
            <img className="demo cursor" src={MarkusSpiske03} onClick={CurrentSlide} value="3" style= {{ width:"100%" }} alt="Mountains and fjords" />
            </div>
            <div className="column">
            <img className="demo cursor" src={MarkusSpiske04} onClick={CurrentSlide} value="4" style= {{ width:"100%" }} alt="Northern Lights" />
            </div>
            <div className="column">
            <img className="demo cursor" src={MarkusSpiske05} onClick={CurrentSlide} value="5" style= {{ width:"100%" }} alt="Nature and sunrise" />
            </div>    
            <div className="column">
            <img className="demo cursor" src={MarkusSpiske06}  onClick={CurrentSlide} value="6" style= {{ width:"100%" }} alt="Snowy Mountains" />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
