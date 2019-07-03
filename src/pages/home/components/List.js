import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { ListItem, ListInfo, LoadMore } from '../style'
import { actionCreators } from './../store'
import { Link } from 'react-router-dom';

class List extends PureComponent {

    render() {
        const { list, page, addArticleList } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => (
                        <Link key={index} to={`/detail/${item.get('id')}`}>
                            <ListItem>
                                <img className='pic' src={item.get('imgUrl')} alt='' />
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }
                <LoadMore onClick={() => addArticleList(page)}>更多文章</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'page'])
})

const mapDispatch = (dispatch) => ({
    addArticleList(page) {
        dispatch(actionCreators.addArticleData(page))
    }
})

export default connect(mapState, mapDispatch)(List);