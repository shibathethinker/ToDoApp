const INIT_STATE={fullData:[]}

export default createTaskReducer=(state=INIT_STATE,action)=>{
    //console.log('from reducer')
switch(action.type)
{
case "createTask":fullData=state.fullData;fullData.push(action.payload);
return {...state,fullData}

case "delete":console.log("about to delete");

let allData=state.fullData.filter((value,index,arr)=>{return value.id!=action.payload});
console.log(allData);
return  {...state,fullData:allData}

case 'initial':let obj={...state,fullData:action.payload}
console.log('inside initital')
console.log(action.payload)
return obj;

default: return {...state};
}

}