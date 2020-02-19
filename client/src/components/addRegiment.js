import React, { Component } from "react"
import { withRouter, Link } from 'react-router-dom'

class AddRegiment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      regiments: {
        title: "",
        image: "",
        info: ""
      }
    }
  }

  onChange = e => {
    const { name, value } = e.target
    this.setState({
      regiments: {
        ...this.state.regiments,
        [name]: value
      }
    })
  }

  render() {
    return (
      <div className="addRegiment">
        <Link to={`/regiments`} >
          Regmients
        </Link> 
        <div>
          <form onSubmit={e => {
            e.preventDefault()
            this.props.handleAddRegiment(e, this.state.regiments)
          }}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.regiments.title}
              onChange={this.onChange}
              required
            />
            <input
              type="text"
              name="image"
              placeholder="image"
              value={this.state.regiments.image}
              onChange={this.onChange}
              required
            />
            <input
              type="text"
              name="info"
              placeholder="info"
              value={this.state.regiments.info}
              onChange={this.onChange}
              required
            />
            <input type="submit" value="Create Regiment" />
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(AddRegiment)





