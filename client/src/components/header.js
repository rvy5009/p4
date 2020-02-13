import React, {Component} from "react"
import {Link ,withRouter} from "react-router-dom"

class Header extends Component  {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      password: "",
      currentUser: null,
      errorText: ""
    }
  }








  render() {
    return (
      <div>
        {this.props.currentUser ?
          <div>
            <h1> Hello, {this.props.currentUser.name} </h1>
            <button onClick={this.props.handleLogout}> Logout!!</button>
            <Link to="/createRegiment">
            Create regiment
            </Link>
          </div>
          :
          <nav>
            <Link to="/register"><button>Register</button></Link>
            <Link to="/login"><button>Login</button></Link>

          </nav>
          }

      </div>
    )
  }
}

export default withRouter(Header)
