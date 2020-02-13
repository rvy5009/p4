import React, { Component } from 'react'
import { allExercises, verifyUser } from "../services/api_helper";

import { Link, withRouter } from "react-router-dom";
class Exercise extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exercises: []
    }
  }

  async componentDidMount() {
    verifyUser()
    try {
      const id = this.props.match.params.id;
      const results = await allExercises(id)

      this.setState({
        exercises: results,
      })
    } catch (e) {
      console.log(e)
    }
  }

  // delete = async (e, exerciseId) => {
  //   e.preventDefault()
  //   try {
  //     await deleteRegiment(exerciseId)
  //     const exercises = this.state.exercises.filter(exercise => exercise.id !== exerciseId)
  //     this.setState({
  //       exercises
  //     })
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  render() {
    console.log(this.state.exercises)
    return (
      <div>

        <Link to={`/regiments/${this.props.match.params.id}`} >
          <button>Add Exercise</button>
        </Link>
        {this.state.exercises.map((exercise, key) => (
          <div key={key}> {exercise.name}
\
            {/* <button onClick={e => {this.delete(e, exercise.id)}}>
            Delete
          </button> */}
            <Link to={`/regiments/3/exercises/${exercise.id}`} id={exercise.id}>
              <button>Update</button>
            </Link>
          </div>))}
        
      </div>
    )
  }
}

export default withRouter(Exercise)

