import React from 'react';
import {Text,StyleSheet,TextInput,View,Dimensions,TouchableOpacity,Modal,
    TouchableHighlight,TouchableWithoutFeedback,AsyncStorage,ScrollView,FlatList} from 'react-native';
import {connect} from 'react-redux';
import CreateTaskAction from '../../Actions/createTaskAction';
import getId from  '../../Actions/getId';
import GlobalStyles from '../GlobalStyles';
import CustomButton from '../CutomButton/CustomButton';
//import CalendarPicker from 'react-native-calendar-picker';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Actions } from 'react-native-router-flux';

class CreateTask extends React.Component{
    constructor(props)
    {
        super(props);    
        this.onDateChange=this.onDateChange.bind(this);
        this.onTaskSubmit=this.onTaskSubmit.bind(this);
        this.createSubTask=this.createSubTask.bind(this);
        this.subtaskList=[];
        this.state={modalVisible:false,dueDate:'',subtaskId:0,scroll:0};    
        
        
    }
    componentDidMount()
    {
        this.props.getId();
    }

    onDateChange(date,type)
    {        
this.setState({dueDate:date.toString().substr(0,21)});
    }

    createSubTask()
    {
     //   console.log(this.state.subtaskId);
this.setState({subtaskId:this.state.subtaskId+1})
let id=this.state.subtaskId;
this.subtaskList.push(<TextInput  key={id} name={id} style={createTaskStyles.singleLineInput} placeholder='subtask.....' />)
    }

onTaskSubmit()
{
    console.log(this.props.latestId.id);
    //this.props.fullData.push({title:this.state.title,desc:this.state.desc,dueDate:this.state.dueDate});
    this.props.CreateTaskAction({id:this.props.latestId.id,title:this.state.title,desc:this.state.desc,dueDate:this.state.dueDate});
    Actions.taskList();
}

    render()
    {
        let dimWidth=Dimensions.get('window').width;
        let dimHeight=Dimensions.get('window').height;
        console.log(dimHeight);
        let multilineStyle={...createTaskStyles.multiLineInput,...{width:dimWidth-10}}
        let dateTextStyle={...createTaskStyles.singleLineInput,width:150,alignSelf:'center'}
        
return (
    <View style={{flex:1}}>
    <View style={{height:dimHeight-180}}>
<ScrollView   ref={ref=>this.ScrollView=ref} contentContainerStyle={{alignItems:'center'}} 
onContentSizeChange={(w,h)=>{this.ScrollView.scrollToEnd()} }  >

<View style={{alignItems:'center',flexDirection:'column'}}>
<TextInput  name='taskName' style={createTaskStyles.singleLineInput} placeholder='task name.....'  onChangeText={(text)=>{this.setState({title:text})}} ></TextInput>
<TextInput name='taskDescription' style={multilineStyle} placeholder='task description.....' multiline={true} onChangeText={(text)=>{this.setState({desc:text})}}></TextInput>

<TouchableOpacity onPress={()=>{this.setState({modalVisible:true})}} style={{width:dimWidth-10}}>
<View style={{justifyContent:'space-between'}}>
<Text style={{top:40,paddingLeft:40}}>Due Date</Text>
  <TextInput style={dateTextStyle} >{this.state.dueDate}</TextInput>
  </View>
  </TouchableOpacity>
{/*The following modal opens  to show the calendar*/ }
<DateTimePicker isVisible={this.state.modalVisible} mode='datetime' onCancel={()=>{}} onConfirm={this.onDateChange}></DateTimePicker>
{/*End of Modal*/}
<View style={{flexDirection:'column',alignItems:'center'}}>{this.subtaskList}</View>
</View>
</ScrollView>
</View>


<CustomButton type='square'  onSubmit={this.createSubTask}
styleVal={{position:'absolute',bottom:50,width:150,height:40,alignSelf:'center'}} title='Add Subtask'/>

<CustomButton type='square'  onSubmit={this.onTaskSubmit}
styleVal={{position:'absolute',bottom:0,width:100,height:40,alignSelf:'center'}} title='Submit'/>

</View>
);

    }
}

const mapStateToProps=(state)=>{return state;}

const createTaskStyles=StyleSheet.create({
singleLineInput:{
borderBottomColor:GlobalStyles.black.color,
borderBottomWidth:2,
width:200
},
multiLineInput:{
margin:10,
borderColor:GlobalStyles.black.color,
borderBottomColor:GlobalStyles.black.color,
borderBottomWidth:2,
}
})

export default connect(mapStateToProps,{getId,CreateTaskAction})(CreateTask);