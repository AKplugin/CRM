import axios from 'axios';

/**
 * @param {*data} returns user email and password to the node server for authentication 
 * On response, the dispatch action to store user data is called.
 */
export const fetchLogin = (data) => {
    return (dispatch) => {
        axios
            .post('http://localhost:5000/api/login', data)
            .then(resp => {
                axios.defaults.headers.common['Authorization'] = resp.data.token;
                localStorage.setItem('Authorization', resp.data.token);
                dispatch({ type: 'FETCH_USER', payload: resp.data });
            })
            .catch(errors => {
                console.log(errors)
            })
    }
}

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

export const logoutUser = () => {
    return (dispatch) => {
        axios.defaults.headers.common['Authorization'] = '';
        localStorage.setItem('Authorization', '');
        dispatch({ type: 'LOGOUT_USER' });
    }
}

export const updateStaff = (data) => {
    return (dispatch) => {
        console.log(data)
    }
}