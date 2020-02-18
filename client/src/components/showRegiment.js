import React, { Component } from 'react'
import { allRegiments, verifyUser,deleteRegiment } from "../services/api_helper"
import { Link, withRouter } from "react-router-dom"

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

  deleteReg = async (e, regimentId) => {
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
    return (
      <div className="outerRegiment1">
        <Link to="/createRegiment">
          Create Workout Regiment
        </Link>
        <div className= "outerRegiments">
          {this.state.regiments.map((regiment, key) => (         
          <div className="regiments" key={key}>         
            <h2> {regiment.title}</h2>           
            <Link to={`/regiments/${regiment.id}/exercises`} >
              <div className="regimentImageDiv">
                <img src={regiment.image} alt={regiment.title} className="regimentImage" />
                <span className="regiment-label">Enter Regiment</span>
              </div>
            </Link>
            <span className="regiment-label">{regiment.info}</span>
            <div>
            <button onClick={e => {this.deleteReg(e, regiment.id)}}>
              Delete
            </button>
            <Link to={`/updateRegiment/${regiment.id}`} id={regiment.id}>
              <button>Update</button>
                </Link>
            </div>
          </div>))}
        </div>
      </div>
    )
  }
}

export default withRouter(Regiment)

