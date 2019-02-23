import React from 'react';
import {connect} from 'react-redux';
import TaskList from '../TaskList/TaskList';
import {StyleSheet,Text,View} from 'react-native';
import loadInitialData from '../../Actions/loadInitialData';

 class Main extends React.Component
{
constructor(props)
{
    super(props);
}
componentWillMount()
{
}
componentDidMount()
{
  //**Not getting called either */
  console.log(this.props);
  this.props.loadInitialData();
}

render()
{
return (
    <View style={{flex:1}}>        
<TaskList >
</TaskList>
</View>
)
}
}

StyleSheet.create({})

const mapStateToProps=(state)=>{return state}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'blue',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',    
      fontSize:20,
      marginBottom: 5,
      marginTop:50
    },
  });

export default connect(mapStateToProps,{loadInitialData})(Main)