import React, { Component } from 'react'
import { allExercises, verifyUser, deleteExercise } from "../services/api_helper";
import ReactPlayer from 'react-player'
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

  delete = async (e, exId ) => {
    e.preventDefault()
    const id = this.props.match.params.id
    try {
      await deleteExercise(id, exId)
      const exercises = this.state.exercises.filter(exercise => exercise.id !== exId)
      this.setState({
        exercises
      })
    } catch (e) {
      console.log(e)
    }

  }

  render() {
    // console.log(this.props.match.params.id)
    // console.log(this.state.exercises)
    return (
      <div className="exercises">
        
        <Link to={`/regiments/`} >
          Regmients
        </Link>  
        <Link to={`/regiments/${this.props.match.params.id}`} >
          <button>Add Exercise</button>
        </Link>

        {this.state.exercises.map((exercise, key) => (
          <div key={key} className="exerciseMap"> {exercise.name}
            {/* {exercise.done} */}
            <ReactPlayer url={exercise.image} className="exerciseVideo" alt="video" height={80} width={80}/>
            {exercise.instructions}
          <button onClick={e => {this.delete(e, exercise.id)}}>
            Delete
          </button>
            <Link to={`/regiments/${this.props.match.params.id}/exercises/${exercise.id}`} id={exercise.id}>
              <button>Update</button>
            </Link>
          </div>))}
        
      </div>
    )
  }
}
// https://www.youtube.com/watch?v=eSjpIepPlok
export default withRouter(Exercise)

