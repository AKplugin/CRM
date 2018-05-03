import axios from 'axios';

export const addEvent = (data) => {
    return (dispatch) => {
        axios.post('http://localhost:5000/api/add-event', data)
            .then(res => {
                dispatch({ type: 'FETCH_EVENT', payload: res.data });
            });
    }
}

export const fetchEvents = () => {
    return (dispatch) => {
        axios.get('http://localhost:5000/api/get-event')
            .then(res => {
                dispatch({ type: 'FETCH_EVENT', payload: res.data });
            });
    }
}

export const deleteEvent = (id) => {
    return (dispatch) => {
        axios.post('http://localhost:5000/api/delete-event', {id: id})
            .then(res => {
                dispatch({ type: 'FETCH_EVENT', payload: res.data });
            })
    }
}