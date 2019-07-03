import { fromJS } from 'immutable'
import { CHANGE_HOME_DATA, ADD_LIST_DATA, TOGGLE_SCROLL_TOP } from './constants'

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    page: 1,
    showScroll: false
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_HOME_DATA:
            return state.merge({
                'topicList': fromJS(action.topicList),
                'articleList': fromJS(action.articleList),
                'recommendList': fromJS(action.recommendList),
            })
        case ADD_LIST_DATA:
            return state.merge({
                articleList: state.get('articleList').concat(fromJS(action.articleList)),
                page: action.page
            })
        case TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.flag)
        default:
            return state;
    }
}