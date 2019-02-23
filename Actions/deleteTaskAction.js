import {AsyncStorage} from 'react-native';

export default deleteTask=(id)=>{
    //return {type:'delete',payload:id}
   
   return async (dispath) =>{
await AsyncStorage.getItem(id.toString()).
then((data)=>{AsyncStorage.removeItem(data)}).
then(dispath({type:'delete',payload:id}));
    }
}