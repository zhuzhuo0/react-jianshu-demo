import { fromJS } from 'immutable'
import { CHANGE_LOGIN_STATUS } from './constants'

const defaultState = fromJS({
    loginStatus: false
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_LOGIN_STATUS:
            return state.set('loginStatus', action.flag)
        default:
            return state
    }
}