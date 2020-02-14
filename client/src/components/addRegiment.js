import React, { Component } from "react";
import { newRegiment, verifyUser } from "../services/api_helper";
import {withRouter, Link} from 'react-router-dom'
class CreateRegiment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regiments: {
        title: "",
        image: "",
        info: ""
      }
    };
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      regiments: {
        ...this.state.regiments,
        [name]: value
      }
    });
  };


  handleSubmit = async e => {
  
    e.preventDefault();
    verifyUser()
    try {
      newRegiment(this.state.regiments);

    } catch (e) {
      console.log(e);
    }
    this.props.history.push('/regiments')
  };

  render() {
    
    return (
      <div>
        <Link to={`/regiments`} >
          Regmients
        </Link> 
        <div>
          <form onSubmit={e => this.handleSubmit(e)}>
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
    );
  }
}

export default withRouter(CreateRegiment);





