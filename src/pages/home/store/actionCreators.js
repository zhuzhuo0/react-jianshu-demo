import axios from 'axios';
import { CHANGE_HOME_DATA, ADD_LIST_DATA, TOGGLE_SCROLL_TOP } from './constants'

const changeHomeData = (result) => ({
    type: CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

const changeArticleData = (result, page) => ({
    type: ADD_LIST_DATA,
    articleList: result,
    page
})

export const getHomeData = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(res => {
            let result = res.data.data;
            dispatch(changeHomeData(result))
        })
    }
}

export const addArticleData = (page) => {
    return (dispatch) => {
        axios.get(`/api/homeList.json?page=${++page}`).then(res => {
            let result = res.data.data;
            dispatch(changeArticleData(result, page))
        })
    }
}

export const toggleScrollTop = (flag) => ({
    type: TOGGLE_SCROLL_TOP,
    flag
})