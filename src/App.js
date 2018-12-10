import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-profile">
          <div className="main-profile-position">
            <div className="profile">
              <div className="profile-name">
                <p className="p-padrao brazucas">BRAZUCAS</p>
                <div className="name">
                  <p className="p-padrao player-name">CAIO AUGUSTO </p>
                  <span>|</span>
                  <p className="p-padrao prof"> BANDIDO</p>
                </div>
              </div>
              <div className="profile-dados">
                <div className="profile-bar">
                  <div className="bar-one">
                    <div className="bar-top">
                      <div className="life">
                        <div className="bar"></div>
                        <div className="icon-life"></div>
                      </div>
                      <div className="colete">
                        <div className="bar"></div>
                        <div className="icon-colete"></div>
                      </div>
                    </div>
                    <div className="bar-botton">
                      <div className="carteira"></div>
                      <div className="bank"></div>
                      <div className="money"></div>
                    </div>
                  </div>
                  <div className="bar-two">
                      <div className="level"></div>
                      <div className="nSei"></div>
                      <div className="gas"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
