import axios from 'axios';

export const addEvent = (data) => {
    return (dispatch) => {
        axios.post('http://localhost:5000/api/add-event', data)
            .then(res => {

            });
    }
}