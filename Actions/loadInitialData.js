import {AsyncStorage} from 'react-native';
export default   loadInitialData= ()=>{
    let data=[];
    return async(dispatch)=>{                
//AsyncStorage.getAllKeys().then((data)=>{dispatch({type:'initial',payload:data})});
 await AsyncStorage.getAllKeys().then((data)=>{  AsyncStorage.multiGet(data).then(
(data)=>{
            let tempObj=[];
            for (let item of data)
            {tempObj.push(JSON.parse(item[1]))}
            dispatch({type:'initial',payload:tempObj});
                }
            )
})
}      

    }
