import React, { Component } from 'react'
import { allRegiments, verifyUser,deleteRegiment } from "../services/api_helper";

import { Link, withRouter,Route } from "react-router-dom";
import UpdateExercise from './updateExercise'


class Regiment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      regiments: []
    }
  }

  async componentDidMount() {
    verifyUser()
    try {
    const results = await allRegiments()
    
    this.setState({
      regiments: results,
    })
    } catch (e) {
      console.log(e)
    }
  }

  delete = async (e, regimentId) => {
    e.preventDefault()
    try {
      await deleteRegiment(regimentId)
      const regiments = this.state.regiments.filter(regiment => regiment.id !== regimentId)
      this.setState({
        regiments
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    // console.log(this.state.regiments)
    return (
      <div>
        {this.state.regiments.map((regiment, key) => (
          <div key={key}> {regiment.title}

            <Route path={`/regiments/${regiment.id}/exercises/:id`}
              render={() => <UpdateExercise regId={regiment.id}/>}
            />
          <Link to={`/regiments/${regiment.id}/exercises`} >
            <button>Exercises</button>
          </Link>
          <button onClick={e => {this.delete(e, regiment.id)}}>
            Delete
          </button>
          <Link to={`/updateRegiment/${regiment.id}`} id={regiment.id}>
            <button>Update</button>
          </Link>
        </div>))}
      </div>
    )
  }
}

export default withRouter(Regiment)

