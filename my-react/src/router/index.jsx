import React, { Component } from 'react'
import Routes from '../router/routes'
import RouteMap from '../router/map'
export default class RouterView extends Component {
    render() {
        let {routes}=this.props
        console.log(this.props)
        return <RouteMap routes={ routes?routes:Routes} />

    }
}
