import React, { Component } from 'react'
import { allRegiments, verifyUser } from "../services/api_helper";

// import { Link } from "react-router-dom";

export default class Regiment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      regiments: []
    }
  }

  async componentDidMount() {
    verifyUser();
    try {
    const results = await allRegiments();
    
    this.setState({
      regiments: results,
    });
    } catch (e) {
      console.log(e);
    }
  };

  render() {

    return (
      <div>
        {this.state.regiments.map((regiment, key) => (
        <div key={key}> {regiment.title}</div>))}
       
      </div>
    )
  }
}

