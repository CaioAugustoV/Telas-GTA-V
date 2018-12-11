import React, { Component } from 'react';
import { Line } from 'rc-progress';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teste: 10
    }
  }
  testeTest = () => {
    this.setState({
      teste: this.state.teste + 10,
    })
    console.log(this.state.teste)
  }
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
                        <div className="bar">
                          <Line 
                            percent={this.state.teste} 
                            strokeWidth="8"
                            trailWidth="8"
                            strokeLinecap="butt"
                            strokeColor="#9af5d2" 
                            trailColor="#09eb95" 
                          />
                        </div>
                        <div className="icon-life">
                          <div className="TESTE"/>
                        </div>
                      </div>
                      <div className="colete">
                        <div className="bar">
                          <Line 
                            percent={this.state.teste} 
                            strokeWidth="8"
                            trailWidth="8"
                            strokeLinecap="butt"
                            strokeColor="#8eeffb" 
                            trailColor="#0ad4ec" 
                            />
                        </div>
                        <div className="icon-colete">
                          <div className="TESTE"/>
                        </div>
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
                    <div className="bar-fine-position">
                      <div className="icon-fome">
                        <div className="TESTE"/>                      
                      </div>
                      <div className="nSei">
                          <Line 
                            percent={this.state.teste} 
                            strokeWidth="18"
                            trailWidth="18"
                            strokeLinecap="butt"
                            strokeColor="#ffbd69" 
                            trailColor="#ec890a" 
                          />
                      </div>
                    </div>
                    <div className="bar-fine-position">
                      <div className="icon-sede">
                        <div className="TESTE"/>
                      </div>
                      <div className="gas">
                        <Line 
                          percent={this.state.teste} 
                          strokeWidth="18"
                          trailWidth="18"
                          strokeLinecap="butt"
                          strokeColor="#78f1ff" 
                          trailColor="#0ad4ec" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a onClick={this.testeTest}>FDTAFYDFAYT</a>
        <style jsx>{`
          .App{
            margin: 0;
            padding: 0;
            font-family: 'BigN' !important;
            background: blue;
          }
          .TESTE{
            background-image: url(https://image.flaticon.com/icons/png/512/1246/1246321.png);
            width: 15px;
            height: 15px;
            background-size: 15px;
          }
          .icon-fome{
            height: 1.3vw;
            width: 1.3vw;
            background: rgba(60, 69, 64, 0.8);
            border: solid 1px #5d6d63;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
          }
          .icon-sede{
            height: 1.3vw;
            width: 1.3vw;
            background: rgba(60, 69, 64, 0.8);
            border: solid 1px #5d6d63;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
          }
          .bar-fine-position{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
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
            padding: 0px 3px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .icon-life{
            height: 2vw;
            width: 2vw;
            background: rgba(60, 69, 64, 0.8);
            border: solid 1px #5d6d63;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
          }
          .icon-colete{
            height: 2vw;
            width: 2vw;
            background: rgba(60, 69, 64, 0.8);
            border: solid 1px #5d6d63;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
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
            width: 4.5vw;
            height: 1.3vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0px 3px;
          }
          .gas{
            background: rgba(60, 69, 64, 0.8);
            border: solid 1px #5d6d63;
            width: 4.5vw;
            height: 1.3vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0px 3px;
          }  
        `}</style>
      </div>
    );
  }
}

export default App;
