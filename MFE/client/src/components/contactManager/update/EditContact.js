import React, { Component } from 'react';
import { getContactAction, editContactAction }  from '../../../action/ContactAction';
import {TextInputGroup} from '../../template/Template_Common';
import {withRouter} from "react-router-dom";  /* requied for redirection i.e. this.props.history.push('/'); */
import { connect } from 'react-redux';

class EditContact extends Component {

  constructor(props){
    super(props);
    this.state = {  uid : '', 
                    firstName: '', 
                    lastName: '', 
                    username: '', 
                    errors: {}
                 };
  };

  componentDidMount(){ 
      const { id } = this.props.match.params;
      const { getContactAction } = this.props;
      getContactAction(id);
  };

  componentWillReceiveProps(nextProps, nextState){
    const {uid, firstName, lastName, username } = nextProps.currentContact;
    this.setState({
         uid,
         firstName,
         lastName,
         username
    });
  }


  onchange = e => this.setState({[e.target.name]: e.target.value});

  onsubmit = e => {
    e.preventDefault();

    //check for errors
    const valid = this.validateContact();

    if (valid)
    {
      this.props.editContactAction(this.state);

     //remove value after submitting
     this.setState({ uid:'', firstName:'',  lastName:'',  username:'',  errors:{}});

     //Finally redirect to home page
     this.props.history.push('/');
    }
  };


  render()
  {
    const {firstName, lastName, username, errors} = this.state;

    return (
    <div className="card mb-5">
      <div className="card-header">Edit Id: [{this.props.match.params.id}]</div>
      <div className="card-body">
        <form onSubmit={this.onsubmit.bind(this)}>
          <TextInputGroup name="firstName" placeholder="Enter firstname" value={firstName} onChange={this.onchange.bind(this)} error={errors.firstName} />
          <TextInputGroup name="lastName" placeholder="Enter lastname" value={lastName} onChange={this.onchange.bind(this)} error={errors.lastName} />
          <TextInputGroup type="email" name="username" placeholder="Enter username" value={username} onChange={this.onchange.bind(this)} error={errors.username}/>
          <input type="submit" value="Update Contact" className="btn btn-block btn-success" />
        </form>
      </div>
    </div>
    );
  }


  validateContact() {
    const {firstName, lastName, username } = this.state;

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
    return true;
  }

}

const mapStateToProps = state => ({
  currentContact: state.twm_contact.currentContact
});



const loadData = store => store.dispatch(getContactAction('dba@gmail.com'));  //No need for return if one line(explicitely it will return)
export {loadData};

export default connect(mapStateToProps, 
                        { editContactAction, 
                          getContactAction
                        }
                      )(withRouter(EditContact));