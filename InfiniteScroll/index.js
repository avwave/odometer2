import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Reel from "./InfiniteScrollReel";

var { width, height } = Dimensions.get('window');
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      odometerValue: "000000"
    };
  }
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

  render() {
    let decimalrange = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    decimalrange = decimalrange.map(item => {
      return { key: item };
    });

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
          <Reel
            reelId="01"
            style={{ height: 75, width: 60 }}
            itemStyle={{ textAlign: "center" }}
            data={decimalrange}
            index={0}
            onSelectChange={index => this.changeReel(0, index)}
          />
          <Reel
            reelId="02"
            style={{ height: 75, width: 60 }}
            itemStyle={{ textAlign: "center" }}
            data={decimalrange}
            index={0}
            onSelectChange={index => this.changeReel(1, index)}
          />
          <Reel
            reelId="03"
            style={{ height: 75, width: 60 }}
            itemStyle={{ textAlign: "center" }}
            data={decimalrange}
            index={0}
            onSelectChange={index => this.changeReel(2, index)}
          />
          <Reel
            reelId="04"
            style={{ height: 75, width: 60 }}
            itemStyle={{ textAlign: "center" }}
            data={decimalrange}
            index={0}
            onSelectChange={index => this.changeReel(3, index)}
          />
          <Reel
            reelId="05"
            style={{ height: 75, width: 60 }}
            itemStyle={{ textAlign: "center" }}
            data={decimalrange}
            index={0}
            onSelectChange={index => this.changeReel(4, index)}
          />
          <Reel
            reelId="06"
            style={{ height: 75, width: 60 }}
            itemStyle={{ textAlign: "center" }}
            data={decimalrange}
            index={0}
            onSelectChange={index => this.changeReel(5, index)}
          />
        </View>
        <View style={{ left: 0, top: 0, position:'absolute', height:75, width:null}}>
          <View style={{
            backgroundColor: '#000',
            opacity: 0.5,
            height: 25,
            width: 360
          }}/>
          <View style={{
            height: 25,
            width: 360
          }}/>
          <View style={{
            backgroundColor: '#000',
            opacity: 0.5,
            height: 25,
            width: 360
          }}/>
        </View>
      </View>
    );
  }
}

export default index;
