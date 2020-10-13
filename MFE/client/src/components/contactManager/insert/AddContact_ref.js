import React, { Component } from 'react';
import {TextInputGroup_ref} from '../../template/Template_Common';
import { addContactAction } from '../../../action/ContactAction';
import {withRouter} from "react-router-dom";  /* requied for redirection i.e. this.props.history.push('/'); */
import { connect } from 'react-redux';
import requireAuth from '../../higherOrder/requireAuth';

/*
  This is for Uncontrolled component where the field are comming as props
*/
class AddContact extends Component {

  constructor(props)
  {
    super(props);

    //we will set this state by a rest call which happens as soon as the component will mount
    this.state = { 
      transactionId:'',
      errors:''
    };

    this.usernameInput = React.createRef();
    this.passwordInput = React.createRef();
    this.firstnameInput = React.createRef();
    this.lastnameInput = React.createRef();
  };

  // In real scenario, these are passed from parent component like <AddContact username='newuser@gmail.com' password: '1234' firstName: 'Krisha' lastName: 'Sharma'/>
  static defaultProps = {
    username: 'newuser@gmail.com',
    password: '1234',
    firstName: 'Krisha',
    lastName: 'Sharma'
   };
   
  onsubmit = (e) => {
    e.preventDefault();

    const contact = {
                      username: this.usernameInput.current.value,
                      password: this.passwordInput.current.value,
                      firstName: this.firstnameInput.current.value,
                      lastName: this.lastnameInput.current.value
                    }

    //check for errors
    const valid = this.validateContact(contact);

    if (valid)
    {
      this.props.addContactAction(contact);

     //Finally redirect to home page
     this.props.history.push('/');
    }
  }


  render() 
  {
    const { firstName, lastName, username, password} = /*this.state*/ this.props;
    const {errors} = this.state;

    return (<div className="card mb-5">
      <div className="card-header">Add Contact</div>
      <div className="card-body">
        <form onSubmit={this.onsubmit.bind(this)}>
          <TextInputGroup_ref type="email" name="username" placeholder="Enter username" defaultValue={username} reference={this.usernameInput} error={errors.username} />
          <TextInputGroup_ref type="password" name="password" placeholder="Enter password" defaultValue={password} reference={this.passwordInput} error={errors.password} />
          <TextInputGroup_ref name="firstName" placeholder="Enter firstname" defaultValue={firstName} reference={this.firstnameInput} error={errors.firstName} />
          <TextInputGroup_ref name="lastName" placeholder="Enter lastname" defaultValue={lastName} reference={this.lastnameInput} error={errors.lastName} />
          <input type="submit" value="Add Contact" className="btn btn-block btn-success" />
        </form>
      </div>
    </div>);
  }

  validateContact(contact) {
    const {firstName, lastName, username, password } = contact;

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

  //Using Fetch to get request from rest call for more Information Go to ...... https://jsonplaceholder.typicode.com/
  componentDidMount()
  {
    const url = `${process.env.GO_SERVICE_BASE_URL}/user?username=dba@gmail.com`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
          console.log(data);
          this.setState({
            transactionId: data.transactionId,
          });
      })
  }
}

export default connect(null, {addContactAction})(withRouter(requireAuth(AddContact)));

