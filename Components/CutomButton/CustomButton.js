import {TouchableOpacity,View,Text,StyleSheet} from 'react-native';
import React from 'react';
import {Actions} from 'react-native-router-flux';
import GlobalStyles from '../GlobalStyles';

export default class CustomButton extends React.Component{

    render()
    {
        //Calculate the button style based on passed parameter 
let buttonStylePassed=this.props.type==='round'? buttonStyles.roundButton:buttonStyles.squareButton;
let styleValPassed=this.props.styleVal;
let computedStyle={...buttonStylePassed,...styleValPassed};


return (
<TouchableOpacity style={computedStyle} onPressOut={this.props.onSubmit}
onPress={this.props.onPressHandler}>
<Text style={buttonStyles.buttonTextStyle}>{this.props.title}</Text>
</TouchableOpacity>
)

    }
}

const buttonStyles=StyleSheet.create(
{
roundButton:{
borderRadius:25,
shadowRadius:2,
backgroundColor:GlobalStyles.yellow.color,
alignItems:'center',
justifyContent:'center',
width:50,
elevation:20,
height:50
},
buttonTextStyle:
{
    fontWeight :'bold',
    color:'white',
    fontSize:14
},
squareButton:{
borderRadius:5,
shadowRadius:2,
margin:'auto',
justifyContent:'center',
alignItems:'center',
elevation:20,
backgroundColor:GlobalStyles.blue.color,
fontWeight:'bold'
}

}
)