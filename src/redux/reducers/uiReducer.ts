import { CHANGE_COLOR } from 'actions/types'

const initialState = {
    color: '#f4f4f4',
    background: '#cccccc'
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_COLOR:
            return {
                state,
                color: action.payload
            }
        default:
            return state
    }
}