import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Reel from "./InfiniteScrollReel";
var { width, height } = Dimensions.get('window');
class index extends Component {
  static defaultProps = {
    boxHeight: 25,
    digits: 6,
    initial: 0,
  }
  
  constructor(props) {
    super(props);
    this.state = {
      odometerValue: "000000",
      digits: [],
    };
    
    this.decimalrange = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => {
      return { key: item };
    });
  }

  componentDidMount() {
    const digits = this.padStart(this.props.initial.toString(), this.props.digits, '0').split('');
    this.props.onOdometerChange(Number(digits.join('')));
    this.setState({ digits, selectedDigits: digits });
  }

  componentDidUpdate(prevProps) {
      if (this.props.initial !== prevProps.initial) {
          const digits = this.padStart(this.props.initial.toString(), this.props.digits, '0').split('');
          this.setState({ digits, selectedDigits: digits });
      }
  }
    
  


  padStart = (targetString, targetStringLength, pad) => {
    let targetLength = targetStringLength >> 0; //truncate if number or convert non-number to 0;
    if (targetString.length > targetLength) {
        return String(targetString);
    }
    targetLength -= targetString.length;
    let padString = pad;
    if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
    }
    return padString.slice(0, targetLength) + String(targetString);
  };
  
  changeReel = (reel, value) => {
    console.log("TCL: index -> changeReel -> reel, value", reel, value);
    let { odometerValue } = this.state;
    odometerValue =
      odometerValue.substring(0, reel) +
      value +
      odometerValue.substring(reel + 1);
    this.setState({ odometerValue });
    this.props.onOdometerChange(odometerValue);
  };

  renderPickers = () => {
    const BOX_HEIGHT = this.props.boxHeight;
    
    const mapDigits = this.state.digits.map((digit, i) => {
      return (
        <Reel
          key={`reel${i}`}
          reelId={`${i}`}
          style={{ height: BOX_HEIGHT*3, width: BOX_HEIGHT }}
          itemStyle={{ textAlign: "center" }}
          data={this.decimalrange}
          digit={digit}
          boxHeight={BOX_HEIGHT}
          onSelectChange={index => this.changeReel(i, index)}
        />
      )
    })
    
    return mapDigits
  }
  render() {
    const BOX_HEIGHT = this.props.boxHeight;
    return (
      <View
        style={{
          flex: 1,
          position: "relative"
        }}
      >
        <View
          style={{
            position:'relative',
            alignItems: "center",
            
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#fff"
          }}
        >
          {this.renderPickers()}
          
        </View>
        <View style={{ left: 0, top: 0, position:'absolute', height:BOX_HEIGHT*3, width:null}}>
          <View style={{
            backgroundColor: '#000',
            opacity: 0.5,
            height: BOX_HEIGHT,
            width: 360
          }}/>
          <View style={{
            height: BOX_HEIGHT,
            width: 360
          }}/>
          <View style={{
            backgroundColor: '#000',
            opacity: 0.5,
            height: BOX_HEIGHT,
            width: 360
          }}/>
        </View>
      </View>
    );
  }
}

export default index;
