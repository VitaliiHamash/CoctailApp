import React, { Component } from 'react'

import { connect } from 'react-redux';
import { fetchUsers } from './actions/user';
import { addFood } from './actions/food';

import {styles} from './styles/styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Text,
    TouchableOpacity,
    ScrollView
  } from 'react-native';

import { CheckBox } from 'react-native-elements'



class filterList extends Component {


  constructor(props){
    super(props);
    this.state = {
      Ordinary_Drink : true,
      Cocktail: true,
      Milk_Float_Shake: true,// c=Milk / Float / Shake
      Other_Unknown: true, // c=Other/Unknown
      Cocoa: true,
      Shot: true,
      Coffee_Tea: true, // c=Coffee / Tea
      Homemade_Liqueur: true,
      Beer: true,
      Punch_Party_Drink:true,                  // c=Punch / Party Drink
    }
    this.handleFilters = this.handleFilters.bind(this)
    this.returnState = this.returnState.bind(this)
  }

returnState(){
  return this.state
}


handleFilters(){
  let data = this.returnState() 
  console.log(data) 
  let filterList = []
  
  for (const property in data) {
    if (data[property] == true){
          if (property == 'Ordinary_Drink') {
            filterList.push('Ordinary_Drink')
          } 
          if (property == 'Cocktail') {
            filterList.push('Cocktail')
          }
          if (property == 'Milk_Float_Shake') {
            filterList.push('Milk / Float / Shake')
          }
          if (property == 'Other_Unknown') {
            filterList.push('Other/Unknown')
          }
          if (property == 'Cocoa') {
            filterList.push('Cocoa')
          }
          if (property == 'Shot') {
            filterList.push('Shot')
          }
          if (property == 'Coffee_Tea') {
            filterList.push('Coffee / Tea')
          }
          if (property == 'Homemade_Liqueur') {
            filterList.push('Homemade_Liqueur')
          }
          if (property == 'Beer') {
            filterList.push('Beer')
          }
          if (property == 'Punch_Party_Drink') {
            filterList.push('Punch_Party_Drink')
          }
    }
  }
  console.log(filterList)
  
  this.props.add(filterList);
}


    render() {
        return (
          <ScrollView style={styles.container}>
           
            <Text style={{textAlign: 'left',fontSize: 30, marginRight:10,marginBottom:15,marginLeft:10}}>Filters</Text>
            <Icon style={[{ color: 'black', marginBottom:15,marginLeft:10}]}
                  size={32} name={'arrow-left'}
                  onPress={() => this.props.navigation.navigate('Drinks')}/>
           
           <CheckBox
             title='Ordinary Drink'
             checked={this.state.Ordinary_Drink}
             checkedColor='black'
             onPress={() => this.setState({Ordinary_Drink: !this.state.Ordinary_Drink})}
            />
              <CheckBox
             title='Cocktail'
             checked={this.state.Cocktail}
             checkedColor='black'
             onPress={() => this.setState({Cocktail: !this.state.Cocktail})}
            />
            <CheckBox
             title='Milk / Float / Shake'
             checked={this.state.Milk_Float_Shake}
             checkedColor='black'
             onPress={() => this.setState({Milk_Float_Shake: !this.state.Milk_Float_Shake})}
            />
            <CheckBox
             title='Other/Unknown'
             checked={this.state.Other_Unknown}
             checkedColor='black'
             onPress={() => this.setState({Other_Unknown: !this.state.Other_Unknown})}
            />
            <CheckBox
             title='Cocoa'
             checked={this.state.Cocoa}
             checkedColor='black'
             onPress={() => this.setState({Cocoa: !this.state.Cocoa})}
            />
              <CheckBox
             title='Shot'
             checked={this.state.Shot}
             checkedColor='black'
             onPress={() => this.setState({Shot: !this.state.Shot})}
            />
             <CheckBox
             title='Coffee / Tea'
             checked={this.state.Coffee_Tea}
             checkedColor='black'
             onPress={() => this.setState({Coffee_Tea: !this.state.Coffee_Tea})}
            />
              <CheckBox
             title='Homemade Liqueur'
             checked={this.state.Homemade_Liqueur}
             checkedColor='black'
             onPress={() => this.setState({Homemade_Liqueur: !this.state.Homemade_Liqueur})}
            />
              <CheckBox
             title='Beer'
             checked={this.state.Beer}
             checkedColor='black'
             onPress={() => this.setState({Beer: !this.state.Beer})}
            />
               <CheckBox
             title='Punch / Party Drink'
             checked={this.state.Punch_Party_Drink}
             checkedColor='black'
             onPress={() => this.setState({Punch_Party_Drink: !this.state.Punch_Party_Drink})}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={this.handleFilters}
            ><Text style={{color:"white"}}>APPLY</Text></TouchableOpacity>
          </ScrollView>
        )
    }
}

const  mapStateToProps = (state) => {
    return {
        list: state.listReducer
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers:(filters)=> dispatch(fetchUsers(filters)),
        add: (food) => dispatch(addFood(food)),
        delete: (key) => dispatch(deleteFood(key)),
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(filterList);