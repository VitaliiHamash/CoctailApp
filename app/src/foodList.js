import React, { Component } from 'react';
import { Image,FlatList, View } from 'react-native';

import {Container, Content, Text} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { deleteFood } from './actions/food';

import { styles } from './styles/styles' 


class FoodList extends Component {
  render() {
    return (
      <Container style={styles.container}>
                 <FlatList 
        data={this.props.foods}
        renderItem={(data) => <Content><Image style={{width:400, height:400}} source={{uri:data.item.name.image}}/>
          <View style={styles.photoList}>
              <Icon style={[{ color: 'black', marginBottom:15,marginLeft:10}]}
                    size={32} name={'delete'}
                    onPress={() => this.props.delete(data.item.key)}/>
              <Text style={{textAlign: 'right', marginRight:10,marginBottom:15,marginLeft:10}}>{data.item.name.date}</Text>
          </View>
        </Content>
        
          
        }
        />
        </Container>
        
 
    )
  }
}


const mapStateToProps = (state)=> {
  return {
      foods: state.foodReducer.foodList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      delete: (key) => dispatch(deleteFood(key))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodList)