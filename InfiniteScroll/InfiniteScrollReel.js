import React, { Component } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import get from 'lodash/get'

export default class InfinteScrollReel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      end: true,
      init: true,
      visibles: [],
    };
    length = this.state.data.length;
    data = this.state.data.slice();
  }
  
  onScrollData = () => {
    this.props.onScrollData(this.state.data)
  }

  checkScroll = ({ layoutMeasurement, contentOffset, contentSize }) => {
    if (this.state.data.length >= length * 3)
      this.setState(prevState => ({
        data: prevState.data.slice(length * 2)
      }));

    if (contentOffset.y <= this.props.offset) {
      this.setState(
        prevState => ({
          data: [...prevState.data, ...data]
        }),
        () => {
          this.infListRef.scrollToIndex({ index: length, animated: false})
        }
      );
    }
    if (
      layoutMeasurement.height + contentOffset.y >=
        contentSize.height - this.props.offset &&
      this.state.end
    ) {
      this.setState(prevState => ({
        data: [...prevState.data, ...data],
        end: false
      }));
    } else {
      this.setState({
        end: true
      });
    }
  };

  onScrollEnd = (e) => {
    console.log("TCL: onScrollEnd -> this.state.visibles", this.state.visibles)
    console.log("TCL: onScrollEnd -> contentOffset", e.nativeEvent)
    this.props.onSelectChange(get(this.state, 'visibles[1].item.key', 0))
  }
  
  onViewableItemsChanged = ({ viewableItems, changed }) => {
    this.setState({visibles: viewableItems})
  }

  renderItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <Text style={styles.text}>{item.key}</Text>
      </View>
    );
  };
  componentDidMount() {
    this.setState(prevState => ({
      data: [...prevState.data, ...prevState.data]
    }), () => {
      
    });
  }
  
  render() {
    return (
      <FlatList
        onViewableItemsChanged={this.onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 90
        }}
        keyExtractor={(item, index) => `${this.props.reelId}_${index}`}
        {...this.props}
        ref={ref => {
          this.infListRef = ref;
        }}
        initialScrollIndex={9}
        snapToInterval={25}
        snapToAlignment="start"
        decelerationRate="fast"
        data={this.state.data}
        renderItem={this.renderItem}
        onScroll={({ nativeEvent }) => this.checkScroll(nativeEvent)}
        bounces={false}
        onMomentumScrollEnd={this.onScrollEnd}
        onScrollBeginDrag={this.beginDrag}
        showsVerticalScrollIndicator={this.props.showsVerticalScrollIndicator}
        getItemLayout={(data, index) => (
          
          {length: 25, offset: 25 * index, index}
        )}
      />
    );
  }
}

InfinteScrollReel.propTypes = {
  offset: PropTypes.number,
  showsVerticalScrollIndicator: PropTypes.bool
};

InfinteScrollReel.defaultProps = {
  offset: 25,
  showsVerticalScrollIndicator: false
};

const styles = StyleSheet.create({
  listItem: {
    height: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEFEFE"
  },
  text: {
    color: "#0099A8",
    fontSize: 14,
    fontWeight: "bold"
  }
});