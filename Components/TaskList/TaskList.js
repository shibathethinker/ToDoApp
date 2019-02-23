import {View,Text,StyleSheet,FlatList} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../CutomButton/CustomButton';
import { Actions } from 'react-native-router-flux';
import Task from '../Task/Task';




 class TaskList extends React.Component{

constructor(props)
{
    super(props);
}

renderListItem(singleItem)
{
    //console.log(singleItem);
return <Task title={singleItem.item.title}  desc={singleItem.item.desc} dueDate={singleItem.item.dueDate} id={singleItem.item.id}/>
}
componentWillMount()
{
  //  if(this.props.init)
   // {this.props.loadInitialData();}
}
componentDidMount()
{
    
}


render()
{    
let renderList=this.props.fullData.fullData;
    let list=   (renderList.length==0?(<View></View>):
   <FlatList data={renderList}  renderItem={this.renderListItem} keyExtractor={val=>val.id.toString()}></FlatList>);   

    return (
<View style={taskListStyle.containerStyle}>
{list}
<CustomButton title='+'  onPressHandler={()=>{Actions.createTask()}} type='round' 
styleVal={{position:'absolute',bottom:0,alignSelf:'flex-end'}}/>
</View>
    )
}

}
const mapStateToProps=(state)=>{return state;}

const taskListStyle=StyleSheet.create({
containerStyle:{
flex:1
}
})

TaskList.defaultProps={init:false}
export default connect(mapStateToProps,{})(TaskList)