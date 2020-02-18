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
      <div className="outerExercise">
        <Link to={`/regiments/`} >
          Regmients
        </Link>  
        <Link to={`/regiments/${this.props.match.params.id}`} >
          Add Exercise
        </Link>
     
      <div className="exercises">
        


        {this.state.exercises.map((exercise, key) => (
          <div key={key} className="exerciseMap"> <span className="exercise-name">{exercise.name}</span>
            {/* {exercise.done} */}
            <div className= "videoWrapper">
              <ReactPlayer 
                className="exerciseVideo"
                url={exercise.image}
                height='100%'
                width='100%'
              />
            </div>
            {exercise.instructions}
          <div>
          <button onClick={e => {this.delete(e, exercise.id)}}>
            Delete
          </button>
            <Link to={`/regiments/${this.props.match.params.id}/exercises/${exercise.id}`} id={exercise.id}>
              <button>Update</button>
            </Link>
          </div>
          </div>))}
        
        </div>
        </div>
    )
  }
}
// https://www.youtube.com/watch?v=eSjpIepPlok
export default withRouter(Exercise)

