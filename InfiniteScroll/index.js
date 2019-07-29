import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Reel from "./InfiniteScrollReel";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      odometerValue:"000000"
    };
  }
  changeReel = (reel, value) => {
    console.log("TCL: index -> changeReel -> reel, value", reel, value);
    let {odometerValue} = this.state
    odometerValue = odometerValue.substring(0, reel) + value + odometerValue.substring(reel + 1);
    this.setState({odometerValue})
  };

  render() {
    let decimalrange = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    decimalrange = decimalrange.map(item => {
      return { key: item };
    });
    
    return (
      <View style={{ flex: 1 }}>
        <Text>{this.state.odometerValue}</Text>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            backgroundColor: "#fff",
            padding: 20,
            flexDirection: "row",
            justifyContent: "center"
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
      </View>
    );
  }
}



export default index;
