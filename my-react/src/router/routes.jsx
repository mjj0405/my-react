import Shopping from '../containers/shopping'
import Login from '../containers/login'
import List from '../containers/list/index'
import Rank from '../containers/list/rank'
import Search from '../containers/list/search'
const routes=[{
    path:'/shopping',
    component:Shopping
},{
    path:'/login',
    component:Login
},{
    path:'/list',
    component:List,
    children:[{
        path:'/list/rank',
        component:Rank
    },{
        path:'/list/search',
        component:Search
    }]
}]
export default routes