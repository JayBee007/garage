import C from '../actions/constants'

const initialState = {
    depts : [],
    success:null,
    error:null
}
function deptsReducer(state = initialState, action) {
    switch(action.type){
        case C.LOAD_DEPARTMENTS:
            return {...state,depts:action.depts}
        case C.LOAD_DEPARTMENTS_SUCCESS:
            return {...state,success:true,error:false}
        case C.LOAD_DEPARTMENTS_ERROR:
            return {...state,success:false,error:action.error}
        default:
            return state;
    }
}


export default deptsReducer