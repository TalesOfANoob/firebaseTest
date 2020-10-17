import createDataContext from './createDataContext'
import myFirebase from '../myFirebase'


const authReducer = (state,action)=>{
    switch(action.type){
        case "auth":
            return {...state,userId:action.payload};
        
        default:
            return state;
    }
}

const signIn = dispatch =>async()=>{
    
    try{
        await myFirebase
        .auth()
        .signInWithEmailAndPassword("test@test.com","test1234")}
    catch(error){
            console.log(error.code,"\n",error.message);
    }
    userId=await myFirebase.auth().currentUser;

    dispatch({type:"auth",payload:userId});
};

const signOut = dispatch =>async()=>{

    myFirebase.auth().signOut();

    dispatch({type:"auth",payload:null});

}

export const {Provider,Context} = createDataContext(
    authReducer,
    {signIn},
    {
        userId:null
    }
)