import React, { Component } from "react";
import { verifyUser, addExercise } from "../services/api_helper";
import { withRouter } from 'react-router-dom'


class AddExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: {
        name: "",
        done: "",
        image: "",
        instructions: ""
      }
    };
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      exercises: {
        ...this.state.exercises,
        [name]: value
      }
    });
  };


  handleSubmit = async e => {
    verifyUser()
    const id = this.props.match.params.id;
    console.log(id)
    console.log(this.state.exercises)
    e.preventDefault();
    verifyUser()
    try {
      addExercise(id, this.state.exercises);

    } catch (e) {
      console.log(e);
    }
    this.props.history.push('/regiments')
  };

  render() {
    
    return (
      <div>
        <div>
          <form onSubmit={e => this.handleSubmit(e)}>
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
    );
  }
}

export default withRouter(AddExercise);





