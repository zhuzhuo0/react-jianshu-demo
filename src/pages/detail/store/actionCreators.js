import axios from 'axios'
import { CHANGE_DETAIL } from './constants'

const changeDetail = (result) => ({
    type: CHANGE_DETAIL,
    title: result.title,
    content: result.content
})

export const getDetailData = (id) => {
    return (dispatch) => {
        axios.get(`/api/detail.json?id=${id}`).then(res => {
            let result = res.data.data;
            dispatch(changeDetail(result))
        })
    }
}