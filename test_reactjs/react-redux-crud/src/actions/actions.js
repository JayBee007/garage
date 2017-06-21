import C from './constants'
import Api from '../api';

export function loadDeptSuccess(depts) {
    return {
        type: C.LOAD_DEPARTMENTS_SUCCESS,
        depts
    }
}

export function loadDept () {
    return function(dispatch) {
        return Api.getAllDepartments().then(depts => {
            dispatch(loadDeptSuccess(depts))
        }).catch(err => {
            throw(err)
        })
    }
}