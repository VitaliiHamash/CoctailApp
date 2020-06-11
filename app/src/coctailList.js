import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  SectionList,
  Button,
  Image
} from 'react-native';

import { connect } from 'react-redux';
import { fetchUsers } from './actions/user';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles/styles'



class CoctailList extends React.Component {

  constructor(props){
    super(props)
    this.state= {
      filters : 'Punch / Party Drink',
      Ordinary_Drink: []

    }
  }
  


  componentDidMount(){
    this.props.fetchUsers(this.state.filters)
    this.state.Ordinary_Drink = this.props.list.users.drinks
    setTimeout(() => {
      console.log(this.state)
    }, 2000)
   
  }




  render() {
    
    

    return this.props.list.loading == true ? (
    <Text>Loading</Text>
  ) : (
    <View>
    {this.props.list.users !== false && this.props.list.users.drinks && (
       <SectionList
       sections={[
         { title: 'Ordinary Drinks', data: this.props.list.users.drinks },
        //  { title: 'Cocktail', data: completedTasks },
       ]}
       renderItem={({ item }) => (
         <View style={styles.row}>
           <Text>{item.strDrink}</Text>
           {/* <Image style={{width:40, height:40}} source={{uri:item.strDrinkThumb}} /> */}
         </View>
       )}
       renderSectionHeader={({ section }) => (
         <View style={styles.sectionHeader}>
           <Text style={styles.text}>{section.title}</Text>
            
         </View>
       )}
       keyExtractor={item => item.idDrink}
       
         
       
      />
     
      )}
    </View>
  )
       
  
      
    
  }
}


const  mapStateToProps = (state) => {
  console.log(state)
    return {
        list: state.listReducer
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers:(filters)=> dispatch(fetchUsers(filters))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(CoctailList);