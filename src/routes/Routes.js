import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Uppgift1 } from '../view/uppgift1/Uppgift1'
import { Uppgift2 } from '../view/uppgift2/Uppgift2'
import { Uppgift3 } from '../view/uppgift3/Uppgift3'


export const Routes = (props) => {
	return (
		<Router>
			{props.children}
			<Switch>
				<Route exact path={'/uppgift1'} component={Uppgift1} />
				<Route exact path={'/uppgift2'} component={Uppgift2} />
				<Route exact path={'/uppgift3'} component={Uppgift3} />
				<Route component={Uppgift1} />
			</Switch>
		</Router>
	)
}