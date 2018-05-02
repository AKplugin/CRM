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


export const logoutUser = () => {
    return (dispatch) => {
        axios.defaults.headers.common['Authorization'] = '';
        localStorage.setItem('Authorization', '');
        dispatch({ type: 'LOGOUT_USER' });
    }
}
