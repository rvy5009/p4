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


      </div>
    )
  }
}

export default withRouter(Header)
