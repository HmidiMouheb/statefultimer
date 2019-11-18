import React from "react";
import './Counter.css'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ms: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
      condition: false,
      interv:''
    };
  }

  startTime = () => {
    this.setState({ condition: !this.state.condition });

    // if (this.state.condition===!false)
   this.setState({interv: setInterval(() => {
      // this.setState({condition:!this.state.condition})
      // if (this.state.condition===!false)

      if (this.state.condition) {
        this.setState({ name: "stop" });

        this.setState({ ms: this.state.ms + 1 });

        this.setState({ seconds: parseInt(this.state.ms / 1000) });

        this.setState({ hours: parseInt(this.state.seconds / 3600) });

        this.setState({ seconds: this.state.seconds % 3600 });

        this.setState({ minutes: parseInt(this.state.seconds / 60) });

        this.setState({ seconds: this.state.seconds % 60 });
      }
    }, 1)
})
  };

  resetTime = () => {
      console.log(this.state.interv)
    this.setState({ seconds: 0, minutes: 0, hours: 0, ms: 0 });
    this.setState({ condition: false });
    clearInterval(this.state.interv)
  };
  render() {
    return (
      <div>
        <p className="numbers">
          {this.state.hours}:{this.state.minutes}:{this.state.seconds}:{this.state.ms}
        </p>
        <pre className="units">Hours   :   Minutes   :   Seconds   :   Ms</pre>
        <button onClick={this.startTime}>
          {this.state.condition ? "Stop" : "Start"}
        </button>
        <button onClick={this.resetTime}>Reset</button>
      </div>
    );
  }
}

export default Counter;

// import React from 'react'
// import StartButton from './StartButton'
// import ResetButton from './ResetButton'

// class Counter extends React.Component {
//     constructor(props){
//         super(props);
//        this.state = {
//         seconds:0,
//         minutes:0,
//         hours:0,
//         milliSeconds: 0
//        }
//     }

//     interv = setInterval(() =>{
//         return (
//             this.setState({seconds:(this.state.seconds)+1}),
//             this.state.seconds === 60 ? this.setState({seconds:0})+ this.setState({minutes:(this.state.minutes)+1}):null,
//             this.state.minutes === 60 ? this.setState({minutes:0})+ this.setState({hours:(this.state.hours)+1}):null
//             )

//         }, 1000)

//     startTime = () =>{
//         if (this.state.seconds===0)
//               {this.interv}
//             else {
//                     return (
//                         this.setState({seconds:this.state.seconds,minutes:this.state.minutes, hours:this.state.hours})

//                         )

//             }

//         }

//     resetTime = () =>{
//         return (
//             this.setState({seconds:0, minutes:0, hours:0})
//             )
//     }
//     render() {
//         return (
//             <div>
//                 <p>{this.state.seconds}:{this.state.minutes}:{this.state.hours}</p>
//                 <StartButton funcstart={this.startTime}/>
//                 <ResetButton funcreset={this.resetTime}/>
//             </div>
//         )
//     }
// }

// export default Counter;
