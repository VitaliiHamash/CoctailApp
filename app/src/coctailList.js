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
      filters : this.props.food.name, // We can add from this.props.food after APPLY button on filter.js
      page : 0,
      refreshing : false,
      


    }
  }
  


  componentDidMount(){
  
    this.props.fetchUsers('Punch / Party Drink')
    
  }

  handleRefresh = () => {
    this.setState({
      page:0,
      refreshing: true,
   }, () => {
    this.props.fetchUsers('Punch / Party Drink')
   } )
  }

  handleLoadMore = () =>{
     this.setState({
      page: this.state.page + 1,
     }, () => {
       this.props.fetchUsers('Ordinary_Drink')
     })
  }




  render() {
    
    return (
      <SafeAreaView>
            <Text style={{textAlign: 'left',fontSize: 30, marginRight:10,marginBottom:15,marginLeft:10}}>Drinks</Text>
            <Icon style={[{ color: 'black', marginBottom:15,marginLeft:10}]}
                  size={32} name={'filter'}
                  onPress={() => this.props.navigation.navigate('Filters')}/>
      {this.props.list.loading == true ? (
      <Text>Loading</Text>
    ) : (
      <View>
      {this.props.list.users[1] !== false && (
         <SectionList
         sections={[
          { title: 'Ordinary Drinks', data: this.props.list.users[1].data },
           
           
         ]}
         renderItem={({ item }) => (
           <View style={styles.row}>
             <Text>{item.strDrink}</Text>
             <Image style={{width:20, height:20}} source={{uri:item.strDrinkThumb}} />
           </View>
         )}
         renderSectionHeader={({ section }) => (
           <View style={styles.sectionHeader}>
             <Text style={styles.text}>{section.title}</Text>
              
           </View>
         )}
         keyExtractor={item => item.idDrink}
         refreshing={this.state.refreshing}
         onRefresh={this.handleRefresh}
         onEndReached={this.handleLoadMore}
         onEndReachedThreshold={0}  
         
        />
       
        )}
      </View>
    )}
      </SafeAreaView>
    )

    
       
  
      
    
  }
}


const  mapStateToProps = (state) => {
  console.log(state)
    return {
        list: state.listReducer,
        food: state.foodReducer.foodList
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers:(filters)=> dispatch(fetchUsers(filters))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(CoctailList);