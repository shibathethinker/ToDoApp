const INITIAL_STATE={id:0}

export default generateId=(state=INITIAL_STATE,action)=>{
switch(action.type)
{
case "Id":console.log('hi'+state.id);
state.id+=1; return {...state}
default: return {...state}
}
}