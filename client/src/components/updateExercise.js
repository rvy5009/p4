import React, { Component } from "react";
import { updateExercise, allExercises } from "../services/api_helper";
import { withRouter } from "react-router-dom";

class UpdateExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      done: "",
      image: "",
      instructions: "",
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    try {
      const resp = await allExercises(id);
      this.setState({
        name: resp.name,
        image: resp.image,
        done: resp.done,
        instructions: resp.instructions,
      });
    } catch (e) {
      console.log(e);
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div>
        <div>
          
          <form
          onSubmit={e => {
            e.preventDefault();
            updateExercise(this.props.match.params.id, this.state);
            this.props.history.push("/regiments")
          }}
          >
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="image">Image url</label>
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="info">done </label>
          <input
            type="text"
            name="done"
            value={this.state.done}
            onChange={this.handleChange}
          />

          <br />
          <label htmlFor="info">instructions </label>
          <input
            type="text"
            name="instructions"
            value={this.state.instructions}
            onChange={this.handleChange}
          />

          <br />
          <button type="submit">Update Exercise </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(UpdateExercise)