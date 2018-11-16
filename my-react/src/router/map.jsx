import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
export default class RouteMap extends Component {
    render() {
        let {routes}=this.props
        console.log(this.props)
        const defaultRoute=<Route exact path='/' render={()=><Redirect to='/shopping'/>}></Route>
        return (
            <Switch>
                
                {
                    routes.length && routes.map((v,i)=>{
                        return <Route path={v.path} render={(api)=>{
                            const Component=v.component
                            return <Component  routes={v.children} {...api} />
                        }}></Route>                        
                    }).concat([defaultRoute])
                }
                
            </Switch>
        )
    }
}
