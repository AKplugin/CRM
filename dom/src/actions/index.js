import axios from 'axios';

export const storeUser = (data) => {
    return (dispatch) => {
        dispatch({type:'FETCH_USER', payload: {token: data} });
    }
}

/**
 * @param {*data} returns teacher details to the node server for inserting in db 
 * On response, the dispatch action to send the success msg and to fetch the list of teachers.
 */
export const addTeacher = (data) => {
    return (dispatch) => {
        axios.post('http://localhost:5000/api/add-teacher', data)
            .then(res => {
                dispatch({ type: 'SUCCESS_STATUS' });
                dispatch({ type: 'FETCH_STAFF', payload: res.data.listOfStaffs });
            });
    }
}

export const getTeacher = () => {
    return (dispatch) => {
        axios.get('http://localhost:5000/api/get-teacher')
            .then(res => {
                dispatch({ type: 'FETCH_STAFF', payload: res.data.listOfStaffs });
            });
    }
}

export const getTeacherDetails = (data) => {
    return (dispatch) => {
        axios.post('http://localhost:5000/api/get-teacher-details', data)
            .then(res => {
                dispatch({ type: 'GET_SELECTED_TEACHER', payload: res.data });
            });
    }
}

export const removeStaff = (data) => {
    return (dispatch) => {
        axios.post('http://localhost:5000/api/remove-staff', data)
            .then(res => {
                dispatch({ type: 'FETCH_STAFF', payload: res.data.listOfStaffs });
                dispatch({ type: 'REMOVE_STAFF' });
            });
    }
}

export const searchTeacher = (teacher) => {
    return (dispatch) => {
        axios.post('http://localhost:5000/api/search-teacher', teacher)
            .then(res => {
                console.log(res)
            })
    }
}

export const updateStaff = (data) => {
    return (dispatch) => {
        console.log(data)
    }
}