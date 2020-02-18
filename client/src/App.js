import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { registerUser, loginUser, verifyUser, updateExerciseApi } from './services/api_helper'
import './App.css';

import CreateRegiment from './components/addRegiment'
import RegisterForm from './components/registerForm'
import LoginForm from './components/loginForm'
import Regiment from './components/showRegiment'
import UpdateRegiment from './components/updateRegiment'
import AddExercise from './components/addExercise'
import Exercise from './components/showExercises'
import Header from './components/header'
import UpdateExercise from './components/updateExercise'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      password: "",
      currentUser: null,
      errorText: ""

    }
  }
  handleRegister = async (e, registerData) => {
    e.preventDefault()
    const currentUser = await registerUser(registerData)
    this.setState({ currentUser })
    this.props.history.push('/regiments')

  }

  handleLogin = async (e, loginData) => {
    e.preventDefault()
    const currentUser = await loginUser(loginData);
    console.log(currentUser)
    this.setState({ currentUser })
    this.props.history.push("/regiments")
  }
  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken')
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    this.props.history.push("/")
  }
  componentDidMount() {

    verifyUser();
    if (localStorage.getItem('authToken')) {
      const name = localStorage.getItem('name')
      const email = localStorage.getItem('email')
      const user = { name, email }
      user && this.setState({
        currentUser: user
      })
    }
  }

  handleSubmit = async (e, data, regimentId, exerciseId) => {
    e.preventDefault();
    await updateExerciseApi(regimentId, data, exerciseId)
    this.props.history.push(`/regiments/${regimentId}/exercises`)
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />


        <Route path="/login" render={() => (
          <LoginForm
            handleLogin={this.handleLogin}
          />
        )} />

        <Route path="/register" render={() => (
          <RegisterForm
            handleRegister={this.handleRegister}
            errorText={this.state.errorText}
          />
        )} />
        <Route exact path="/regiments" render={() => (
          <Regiment />
        )} />
        <Route exact path="/createRegiment" render={() => <CreateRegiment />} />
        <Route exact path="/updateRegiment/:id" component={UpdateRegiment} />
        <Route exact path="/regiments/:id" render={() => <AddExercise />} />
        <Route exact path={`/regiments/:id/exercises`}
          render={() => <Exercise />}
        />
        <Route exact path={`/regiments/:reg_id/exercises/:exer_id`}
          render={(props) => <UpdateExercise
            regimentId={props.match.params.reg_id}
            exerciseId={props.match.params.exer_id}
            handleSubmit={this.handleSubmit}
          />}
        />

      </div>
    );
  }
}
export default withRouter(App);
