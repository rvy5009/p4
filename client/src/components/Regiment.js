import React, { Component } from 'react'
import { allRegiments } from "../services/api_helper";

import { Link } from "react-router-dom";

export default class Regiment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      regiments: []
    }
  }
  
  componentDidMount = async () => {
    // try {
      const results = await allRegiments();
      console.log(results);
      this.setState({
        regiments: results,
      });
    // } catch (e) {
    //   console.log(e);
    // }
  };

  render() {
    console.log(this.state.results);

    return (
      <div>
        hello
      </div>
    )
  }
}

