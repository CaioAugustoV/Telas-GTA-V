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
        <style jsx>{`
          .main-profile{
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
          }
          .main-profile-position{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            height: 100vh;
          }
          .profile{
            width: 30vw;
            height: auto;
            padding: 2vh 2vw 2vh 2vw;
          }
          .profile p{
            margin: 0;
          }
          .profile-bar{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          .profile-name{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          .p-padrao{
            font-size: 1.2rem;
            font-weight: 400;
          }
          .brazucas{
            color: white;
          }
          .player-name{
            color: white;
            padding: 0px 5px;
          }
          .prof{
            color: #09eb95;
            padding: 0px 0px 0px 5px;
          }
          .name span{
            font-size: 1.2rem;
            font-weight: 400;
            color: white;
          }
          .name{
            display: flex;
            flex-direction: row;
          }
          .bar-one{
            width: 22vw;
          }
          .life{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 10px 0px;
          }
          .colete{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          .bar{
            height: 2vw;
            width: 19vw;
            background: rgba(60, 69, 64, 0.8);
            border: solid 1px #5d6d63;
          }
          .icon-life{
            height: 2vw;
            width: 2vw;
            background: rgba(60, 69, 64, 0.8);
            border: solid 1px #5d6d63;
          }
          .icon-colete{
            height: 2vw;
            width: 2vw;
            background: rgba(60, 69, 64, 0.8);
            border: solid 1px #5d6d63;
          }
          .bar-botton{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 10px 0px;
          }
          .carteira{
            height: 2vw;
            width: 7vw;
            background: rgba(60, 69, 64, 0.8);
            border: solid 1px #5d6d63;
          }
          .bank{
            height: 2vw;
            width: 7vw;
            background: rgba(60, 69, 64, 0.8);
            border: solid 1px #5d6d63;
          }
          .money{
            height: 2vw;
            width: 7vw;
            background: rgba(60, 69, 64, 0.8);
            border: solid 1px #5d6d63;
          }
          .bar-two{
            padding: 10px 0px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .level{
            width: 7vw;
            height: 4vw;
            background: rgba(60, 69, 64, 0.8);
            border: solid 1px #5d6d63;
          }
          .nSei{
            background: rgba(60, 69, 64, 0.8);
            border: solid 1px #5d6d63;
            width: 7vw;
            height: 1.3vw;
          }
          .gas{
            background: rgba(60, 69, 64, 0.8);
            border: solid 1px #5d6d63;
            width: 7vw;
            height: 1.3vw;
          }  
        `}</style>
      </div>
    );
  }
}

export default App;
