import { Component } from 'react'
import { createNewUsersAction } from './store/users/actions'
import { connect } from 'react-redux'

class App extends Component {
	state = {}
	render() {
		return <>{this.props.user}</>
	}
}

const selector = (state) => ({ user: state.user })
const cusomDispatchFn = (dispatch) => ({
	createUser: dispatch(createNewUsersAction()),
})

export default connect(selector, cusomDispatchFn)(App)
