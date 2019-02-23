import {Scene,Router} from 'react-native-router-flux';
import TaskList from './Components/TaskList/TaskList';
import Main from './Components/Main/Main';
import React from 'react';
import CreateTask from './Components/CreateTask/CreateTask';


export default RouterComponent= ()=>{
    return (
<Router>
<Scene key="main">
<Scene key="main" title='Task List' component={Main} initial></Scene>
<Scene key="taskList" component={TaskList} title='Task List'  renderBackButton={()=>null}></Scene>
<Scene key="task" component={TaskList} title='Task'></Scene>
<Scene key="createTask" component={CreateTask} title='Create A Task'></Scene>
</Scene>
</Router>
);

}

