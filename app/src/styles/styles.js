import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
    },
    row: {
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    sectionHeader: {
      backgroundColor: '#efefef',
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    cent:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  title:{
      fontSize: 64,
      marginBottom: 48,
      },
  listContainer:{
      backgroundColor:'grey',
      padding:16
  },
  listText:{
      fontSize:30
  },
  itemRow:{
      flex: 1,
      flexDirection:"row"
  },  

  photoList: {
      flex: 1,
      flexDirection:'row',
      marginBottom: 7,
      justifyContent:'space-between',
      alignItems:'center'
  },
  button:{
    width: 362,
    borderRadius:3,
    alignItems: "center",
    backgroundColor: "black",
    padding: 10,
    marginBottom: 10,
    alignSelf: "center"
  },
  text:{
    fontSize:16,
    fontWeight:"bold"
  }
  });