import { createSlice } from "@reduxjs/toolkit";
//הגדרת סטייט התחלתי
const initValure={
    counter:99
}
//מקבל מינמום 3 מאפיינים
const counterSlice=createSlice({
name:"counter",
//את הערך ההתחלתי 
initialState:initValure,
//פונ' שיוכלו להשפיע על הערכים בסטייט
reducers:{
    //state-הפרמטר הנוכחי   actions-לשלוח מידע נוסף
add1:(state,actions)=>{
state.counter++;

},
resetCouner:(state,actions)=>{
state.counter=0;
},
addCustom:(state,actions)=>{
    state.counter+=actions.payload.counterVal;
},
reduc6:(state,actions)=>{
    state.counter-=actions.payload.counterVal;
}
}
})
//counterSlice-אובייקט שמכיל כל מיני דברים בינהם הרדיוסר שמכיל את אד1
export const {add1,resetCouner,addCustom,reduc6}=counterSlice.actions
// בסטייט  כדי שנוכל להשתשמש ולחבר לרדיוסר
export default counterSlice.reducer