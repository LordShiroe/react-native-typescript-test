import { GET_USERS } from './types'

export const fetchUsers = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => dispatch({
            type: GET_USERS,
            payload: users
        }))
}