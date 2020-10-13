import React, { Component } from 'react';
import { addContactAction } from '../../../action/ContactAction';
import {TextInputGroup} from '../../template/Template_Common';
import {withRouter} from "react-router-dom";  /* requied for redirection i.e. this.props.history.push('/'); */
import { connect } from 'react-redux';
import requireAuth from '../../higherOrder/requireAuth';

/*
  This is for controlled component where you are not using Props and each input is connected to a state instead
*/
class AddContact extends Component {

  constructor(props){
    super(props);
    this.state = {  firstName : '', 
                    lastName: '', 
                    username: '', 
                    password: '', 
                    errors: {}
                 };
  };

  onchange = e => this.setState({[e.target.name]: e.target.value});

  onsubmit = (e) => {
    e.preventDefault();

    //check for errors
    const valid = this.validateContact();

    if (valid)
    {
      this.props.addContactAction(this.state);

     //remove value after submitting
     this.setState({ firstName:'', lastName:'',  username:'',  password:'',  errors:{}});

     //Finally redirect to home page
     this.props.history.push('/');
    }
  };


  render()
  {
    const {firstName, lastName, username, password, errors} = this.state;
    
    return (
    <div className="card mb-5">
      <div className="card-header">Add Contact</div>
      <div className="card-body">
        <form onSubmit={this.onsubmit.bind(this)}>
          <TextInputGroup name="firstName" placeholder="Enter firstname" value={firstName} onChange={this.onchange} error={errors.firstName} />
          <TextInputGroup name="lastName" placeholder="Enter lastname" value={lastName} onChange={this.onchange} error={errors.lastName} />
          <TextInputGroup type="email" name="username" placeholder="Enter username" value={username} onChange={this.onchange} error={errors.username}/>
          <TextInputGroup type="password" name="password" placeholder="Enter password" value={password} onChange={this.onchange} error={errors.password}/>
          <input type="submit" value="Add Contact" className="btn btn-block btn-success" />
        </form>
      </div>
    </div>
    );
  }


  validateContact() {
    const {firstName, lastName, username, password } = this.state;

    if (firstName === '') {
      this.setState({
        errors: { firstName: 'firstName is required' }
      });
      return false;
    }
    if (lastName === '') {
      this.setState({
        errors: { lastName: 'lastName is required' }
      });
      return false;
    }
    if (username === '') {
      this.setState({
        errors: { username: 'username is required' }
      });
      return false;
    }
    if (password === '') {
      this.setState({
        errors: { password: 'password is required' }
      });
      return false;
    }
    return true;
  }

}

export default connect(null, {addContactAction})(withRouter(requireAuth(AddContact)));