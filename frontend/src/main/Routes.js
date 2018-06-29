import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'  

import ClienteNew from '../cliente/clienteNew'
import ClienteEdit from '../cliente/clienteEdit'
import Cliente from '../cliente/cliente'

export default props => (
    <Router history ={hashHistory}>
    <Route path='/cliente' component={Cliente}/>
    <Route path='/clienteEdit' component={ClienteEdit}/>
    <Route path='/clienteNew' component={ClienteNew}/>
        <Redirect from='*' to='/cliente'/>   
    </Router>
)
