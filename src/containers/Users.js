import React from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import { requestUsers, deleteUsers } from '../actions/actionCreators';
import { bindActionCreators } from 'redux';
import {CardText} from 'material-ui/Card';
import TableUsers from './../components/TableUsers';
import FormUser from './../components/FormUser';
import { SubmissionError } from 'redux-form';
import validator from 'validator';

class Users extends React.Component{

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.requestUsers = this.requestUsers.bind(this);
        this.handleModalUser = this.handleModalUser.bind(this);
        this.handleSubmitNewUsers = this.handleSubmitNewUsers.bind(this);

        this.state = {
            modalUser : false
        }
    }

    requestUsers(){
        this.props.requestUsers();
    }

    handleClick(){
        this.props.deleteUsers();
    }

    handleModalUser() {
        this.setState({modalUser: !this.state.modalUser});
    }

    handleSubmitNewUsers(values){
        if(!validator.isEmail(values.email)){
            throw new SubmissionError({
                _error: 'Is not a email'
            })
        }
    }

    render(){
        const { users } = this.props;

        return (
            [
                <Header/>,

                <div className='main-content'>
                    <Card>
                        <CardHeader title="Users" actAsExpander={true}/>

                        <FormUser onSubmit={this.handleSubmitNewUsers} modalUser={this.state.modalUser}
                                  handleModalUser={this.handleModalUser}/>

                        <CardActions>
                            <RaisedButton label="Request Users" onClick={this.requestUsers} />

                            <RaisedButton label="Drop Users" onClick={this.handleClick} />

                            <RaisedButton label="New User" onClick={this.handleModalUser} />
                        </CardActions>

                        {users.length > 0 &&
                            <CardText>
                                <TableUsers users={users} />
                            </CardText>
                        }

                    </Card>
                </div>
            ]
        );
    }
}

const mapStateToProps = state => ({
    profile : state.profile,
    users : state.users
});

const mapDispactchToProps = dispatch => 
    bindActionCreators({requestUsers, deleteUsers} , dispatch);

export default connect(mapStateToProps , mapDispactchToProps)(Users);