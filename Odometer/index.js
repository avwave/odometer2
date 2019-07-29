import React, { Component } from 'react';
import { View } from 'react-native'
import Reel from './Reel'
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  changeReel = (reel, value) => {
    console.log("TCL: index -> changeReel -> reel, value", reel, value)

  }
  render() {
    let decimalrange = [0,1,2,3,4,5,6,7,8,9]
    return (
      <View style={{flex: 1}}>
      <View style={{height: 20}} />
      <View style={{backgroundColor: "#fff", padding: 20, flexDirection: 'row', justifyContent: 'center'}}>
        <Reel
          style={{height: 200, width: 40}}
          itemStyle={{textAlign: 'center'}}
          items={decimalrange}
          index={0}
          onSelectChange={index => this.changeReel(0,index)}
          />
        <Reel
          style={{height: 200, width: 40}}
          itemStyle={{textAlign: 'center'}}
          items={decimalrange}
          index={0}
          onSelectChange={index => this.changeReel(1,index)}
          />
        <Reel
          style={{height: 200, width: 40}}
          itemStyle={{textAlign: 'center'}}
          items={decimalrange}
          index={0}
          onSelectChange={index => this.changeReel(2,index)}
          />
        <Reel
          style={{height: 200, width: 40}}
          itemStyle={{textAlign: 'center'}}
          items={decimalrange}
          index={0}
          onSelectChange={index => this.changeReel(0,index)}
          />
        <Reel
          style={{height: 200, width: 40}}
          itemStyle={{textAlign: 'center'}}
          items={decimalrange}
          index={0}
          onSelectChange={index => this.changeReel(1,index)}
          />
        <Reel
          style={{height: 200, width: 40}}
          itemStyle={{textAlign: 'center'}}
          items={decimalrange}
          index={0}
          onSelectChange={index => this.changeReel(2,index)}
          />
      </View>
    </View>
    );
  }
}

export default index;