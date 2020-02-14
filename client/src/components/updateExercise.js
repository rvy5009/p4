import React, { Component } from "react";
import { updateExerciseApi, oneExercise } from "../services/api_helper";
import { withRouter,Link } from "react-router-dom";


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
      const resp = await oneExercise(this.props.regId,id);
      console.log(resp)
      this.setState({
        name: resp.name,
        image: resp.image,
        done: resp.done,
        instructions: resp.instructions
      });
    } catch (e) {
      console.log(e);
    }
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div>
        <div>
        <Link to={`/regiments/${this.props.regimentId}/exercises`} >
            Exercises
          </Link>
          <form
            onSubmit={e => {
            e.preventDefault();
            updateExerciseApi(this.props.regimentId, this.state,this.props.exerciseId)
            this.props.history.push("/regiments")
          }}
          >
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
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