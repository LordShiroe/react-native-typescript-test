import { GET_USERS } from 'actions/types'
import User from 'interfaces/User'

const initialState = {
    users: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                state,
                users: action.payload as User[]
            }
        default:
            return state
    }
}