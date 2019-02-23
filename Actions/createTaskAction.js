import {AsyncStorage} from 'react-native';
export default CreateTaskAction=(data)=>{
return async(dispatch)=>{
//Call asyncstorage.then dispatch({action})
//Date.toString()
console.log(data);
await AsyncStorage.setItem(data.id.toString(10),JSON.stringify(data)). 
then(()=>{dispatch(  {type:"createTask",payload:data} )})
}
}