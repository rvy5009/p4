import React, { Component } from "react";
import { updateRegiment, oneRegiment, verifyUser } from "../services/api_helper";
import { withRouter, Link} from "react-router-dom";

class UpdateRegiment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      image: "",
      info: "",
    };
  }

  async componentDidMount() {
    verifyUser()
    const id = this.props.match.params.id;
    console.log(id)
    try {
      const resp = await oneRegiment(id);
      // console.log(resp)
      this.setState({
        title: resp.title,
        image: resp.image,
        info: resp.info
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
                <Link to={`/regiments`} >
          Regmients
        </Link> 
        <div>
          
          <form
          onSubmit={e => {
            e.preventDefault();
            updateRegiment(this.props.match.params.id, this.state);
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
          <label htmlFor="info">info </label>
          <input
            type="text"
            name="info"
            value={this.state.info}
            onChange={this.handleChange}
          />

          <br />
          <button type="submit">Update Regiment </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(UpdateRegiment)