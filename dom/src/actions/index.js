import axios from 'axios';

export const fetchLogin = (data) => {
    return (dispatch) => {
        axios
            .post('http://localhost:5000/api/login', data)
            .then(resp => {
                axios.defaults.headers.common['Authorization'] = resp.data.token;
                dispatch({ type: 'FETCH_USER', payload: resp.data });
            })
            .catch(errors => {
                console.log(errors)
            })
    }
}

export const addTeacher = (data) => {
    return (dispatch) => {
        axios.post('http://localhost:5000/api/add-teacher', data)
        .then(res => {
            debugger
        });
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        dispatch({ type: 'LOGOUT_USER' });
    }
}