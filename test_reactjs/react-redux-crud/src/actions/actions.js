import C from './constants'
import Api from '../api';

function loadDeptartments(depts) {
    return {
        type: C.LOAD_DEPARTMENTS,
        depts
    }
}

function loadDeptSuccess() {
    return {
        type: C.LOAD_DEPARTMENTS_SUCCESS
    }
}

function loadDeptError(error) {
    return {
        type: C.LOAD_DEPARTMENTS_ERROR,
        error
    }
}


export function loadDept () {
    return function(dispatch) {
        return Api.getAllDepartments().then(depts => {
            dispatch(loadDeptSuccess());
            dispatch(loadDeptartments(depts));
        }).catch(err => dispatch(loadDeptError("Something went wrong!"))
        );
    }
}