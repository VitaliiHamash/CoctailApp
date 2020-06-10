import React, { Component } from 'react'
import ImagePicker from 'react-native-image-picker';

import { connect } from 'react-redux';
import { addFood } from  './actions/food';

import {Container, Content, H1} from 'native-base';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class FoodForm extends Component {

  state = {
    food: null
  }
  
  handleChooseImage = () => {

    const options = {
      title:'Choose from...',
      takePhotoButtonTitle:'Camera',
      chooseFromLibraryButtonTitle: 'Library',

      noData:true,
    }; 
    
    getTime = () => {
      currentDate = new Date().getDate()
      month = new Date().getMonth() + 1
      year = new Date().getFullYear()
      hours = new Date().getHours()
      minute = new Date().getMinutes()
      seconds = new Date().getSeconds()
      return currentDate + '/' + month + '/' + year + ' ' + hours + ':' + minute + ':' + seconds; 
    } 
    
    ImagePicker.showImagePicker(options, response => {
      if(response.uri){
        this.setState({food:{image:response.uri, date:getTime()}});
        console.log(this.state)
        this.props.add(this.state.food)
      }
    })
    


    }



  render() {
    
    return (
      
      <Container style={{flex:1, alignItems:"center", justifyContent:"center"}}>
            
          <Content>
                <Icon style={[{ color: 'black', marginTop:130}]} size={250} name={'image-plus'} onPress={this.handleChooseImage} />
                <H1 onPress={this.handleChooseImage} >Upload photo...</H1>
          </Content>
            
      </Container>
    )
  }
}

const  mapStateToProps = (state) => {
  console.log(state);
  return {
      foods: state.foodReducer.foodList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      add: (food) => dispatch(addFood(food)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodForm);