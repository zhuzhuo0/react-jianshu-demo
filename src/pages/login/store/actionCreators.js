import axios from 'axios';
import { CHANGE_LOGIN_STATUS } from './constants'

const changeLoginStatus = (flag) => ({
    type: CHANGE_LOGIN_STATUS,
    flag
})

export const getDoLoginAction = (account, password) => {
    return (dispatch) => {
        axios.get(`/api/login.json?account=${account}&password=${password}`).then(res => {
            dispatch(changeLoginStatus(true))
        }).catch(() => {
            console.log('登录失败')
        })
    }
}

export const getDoLoginOutAction = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(changeLoginStatus(false))
        }, 200)
    }
}