import React, { Component } from "react"
import { withRouter,Link } from 'react-router-dom'

class AddExercise extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exercises: {
        name: "",
        done: "",
        image: "",
        instructions: ""
      }
    }
  }

  onChange = e => {
    const { name, value } = e.target
    this.setState({
      exercises: {
        ...this.state.exercises,
        [name]: value
      }
    })
  }

  render() {
    return (
      <div className="addExercise">
        <Link to={`/regiments/${this.props.match.params.id}/exercises`} >
          Exercises
        </Link>
        <div >
          <form onSubmit={e => {
            e.preventDefault()
            this.props.handleAddExercise(e,this.props.regimentId, this.state.exercises)
          }} >
            <input
              type="text"
              name="name"
              placeholder="name"
              value={this.state.exercises.name}
              onChange={this.onChange}
              required
            />
            <input
              type="text"
              name="image"
              placeholder="image"
              value={this.state.exercises.image}
              onChange={this.onChange}
              required
            />
            <input
              type="text"
              name="done"
              placeholder="done"
              value={this.state.exercises.done}
              onChange={this.onChange}
              required
            />
            <input
              type="text"
              name="instructions"
              placeholder="instructions"
              value={this.state.exercises.instructions}
              onChange={this.onChange}
              required
            />
            <input type="submit" value="Add Exercise" />
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(AddExercise)





