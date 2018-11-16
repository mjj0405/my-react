import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import RouterView from '../../router/index'
export default class List extends Component {
    render() {
        let {routes}=this.props
        return (
            <div>
                list
                <Link to='/list/rank'>推荐</Link>
                <Link to='/list/search'>搜索</Link>
                <RouterView routes={routes}></RouterView>
            </div>
        )
    }
}
