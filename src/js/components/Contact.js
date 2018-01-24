import React from 'react';
import Header from './../containers/Header';
import { requestUsers } from './../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Contact extends React.Component{

    componentDidMount(){        
        this.props.requestUsers();
    }

    render(){
        return (
            <div>
                <Header/>
                
                <div className='main-content'>
                    <h1>Contact</h1>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    profile : state.profile,
    users : state.users
});

const mapDispactchToProps = dispatch => 
    bindActionCreators({requestUsers} , dispatch);

export default connect(mapStateToProps , mapDispactchToProps)(Contact);