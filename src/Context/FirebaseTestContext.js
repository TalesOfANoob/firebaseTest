import createDataContext from './createDataContext'
import myFirebase from '../myFirebase'


const getCollectionRef= (collectionName)=>{

    const dbRef=myFirebase.firestore();
    return dbRef.collection(collectionName);
}

const firebaseReducer = (state,action)=>{
    switch(action.type){
        case "fetch_collection":

            return action.payload;

        case "add_doc":
        
            return [...state,action.payload];

        case "del_doc":

            return state.filter((doc)=> doc.id !== action.payload);

        case "set_doc":
            const copy=[...state];
            copy[copy.findIndex(item=>item.id == action.payload.id)].data = action.payload.data;
           
            return copy;

        default:    

            return state;
    }
}

const fetchCollection = dispatch =>async(collectionName)=>{
    
    const collRef=getCollectionRef(collectionName);
    const data=[];
    const snapshot = collRef.get();
    (await snapshot).forEach(doc=>{
        data.push({
            id:doc.id,
            data:doc.data(),
        })
    })
    dispatch({type:"fetch_collection",payload:data});
};


const addDocument = dispatch => async(collectionName,doc)=>{

    const collRef=getCollectionRef(collectionName);
    const res = await collRef.add(doc);
    const doc_data = await res.get();
    dispatch({type:"add_doc",payload:{id:res.id,data:doc_data.data()}});
    

};

const delDocument = dispatch => async(collectionName,doc_id)=>{

    
    const collRef=getCollectionRef(collectionName);
    await collRef.doc(doc_id).delete();
    dispatch({type:"del_doc",payload:doc_id});
}

const setDoc = dispatch => async(collectionName,id,data)=>{

    
    const collRef=getCollectionRef(collectionName);
    await collRef.doc(id).set(data);
    dispatch({type:"set_doc",payload:{id,data}});
}


export const {Provider,Context} = createDataContext(
    firebaseReducer,
    {fetchCollection,addDocument,delDocument,setDoc},
    []
)