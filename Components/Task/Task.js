import React from 'react';
import {Text,View,StyleSheet,Dimensions,TouchableHighlight} from 'react-native';
import GlobalStyles from '../GlobalStyles';
import {CheckBox} from 'react-native-elements';
import {connect} from 'react-redux';
import deleteTask from '../../Actions/deleteTaskAction';

 class Task extends React.Component{
//render(){
 //winWidth=Dimensions.get('window').width -10;
 constructor(props)
 {
     super(props);
     this.state={checked:false};
     this.onCheckBoxPressed=this.onCheckBoxPressed.bind(this);
 }

onCheckBoxPressed(event)
{
    //console.log('pressed');
this.setState({checked:!this.state.checked})

//Remove this item
this.props.deleteTask(this.props.id)
}

 render(){
     let windowWidth=Dimensions.get('window').width ;
     let outerViewWidth=windowWidth-4;
     let innerViewWidth=outerViewWidth-40;
    return (

        <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row',width:outerViewWidth,elevation:5,borderRadius:4,height:40,margin:4}}>
        
        <CheckBox iconType='font-awesome'  checkedColor='green' style={{width:20}} 
        checked={this.state.checked}  onPress={this.onCheckBoxPressed} onIconPress={this.onCheckBoxPressed}></CheckBox>

        <TouchableHighlight style={{flexDirection:'column',alignItems:'stretch',justifyContent:'flex-start',width:innerViewWidth }}>
<View>
<Text style={TaskStyles.headerStyle}>{this.props.title} </Text>
<Text>due @ {this.props.dueDate}</Text>
</View>
      </TouchableHighlight>
</View>);
 }
//}
}

const TaskStyles=StyleSheet.create({
    containerStyles:{
elevation:5,
borderRadius:4,
flexDirection:'column',
width:Dimensions.get('window').width-14,
borderColor:'white',
justifyContent:'center',
alignItems:'center',
height:40,
margin:4
    },
headerStyle:{
textDecorationLine:'underline',
fontWeight:'bold',
color:GlobalStyles.black.color
},
bodyStyle:{


}

})

const mapStateToProps=(state)=>{return state;}

export default connect(mapStateToProps,{deleteTask})(Task)
