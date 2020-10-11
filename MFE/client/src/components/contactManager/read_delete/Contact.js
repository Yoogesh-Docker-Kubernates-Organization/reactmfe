import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deleteContactAction } from '../../../action/ContactAction';
import { connect } from 'react-redux';

class Contact extends Component{

    constructor(props){
        super(props);
    }
    
    deleteContact = id => {
        this.props.deleteContactAction(id);
    }


    render() {
        const { uid, firstName, lastName, username } = this.props.contact;
        const { isUserLoggedIn } = this.props;
           return (
                    <table className="table table-sm table-hover table-striped">
                        <tbody>
                            <tr>
                                <td>{firstName}</td>
                                <td>{lastName}</td>
                                <td>{username}
                                  {isUserLoggedIn &&
                                  <span>
                                    <i className="fas fa-times" 
                                        style={{curser: 'pointer', float: 'right', color: 'red'}}
                                        onClick={this.deleteContact.bind(this, uid)} />

                                    <Link to={`/contact/edit/${uid}`}>
                                        <i className="fas fa-pencil-alt" 
                                            style={{ curser:'pointer', float: 'right', color:'black', marginRight:'1rem'}} />
                                    </Link>
                                    </span>}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                );
}

}


const mapStateToProps = (state) => ({
    isUserLoggedIn: state.twm_auth.isAuthenticated
});



export default connect(mapStateToProps, {deleteContactAction})(Contact);