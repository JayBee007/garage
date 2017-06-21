import C from '../actions/constants'

const initialState = {
    depts : []
}
function deptsReducer(state = initialState, action) {
    switch(action.type){
        case C.LOAD_DEPARTMENTS_SUCCESS:
            return action.depts
        default:
            return state;
    }
}


export default deptsReducer