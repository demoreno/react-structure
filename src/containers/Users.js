import React from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import { requestUsers, deleteUsers } from '../actions/actionCreators';
import { bindActionCreators } from 'redux';
import {CardText} from 'material-ui/Card';
import TableUsers from './../components/TableUsers'

class Users extends React.Component{

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.requestUsers = this.requestUsers.bind(this);
    }

    requestUsers(){
        this.props.requestUsers();
    }

    handleClick(){
        this.props.deleteUsers();
    }

    render(){
        const { users } = this.props;

        return (
            [
                <Header/>,

                <div className='main-content'>
                    <Card>
                        <CardHeader title="Users" actAsExpander={true}/>

                        <CardActions>
                            <RaisedButton label="Request Users" onClick={this.requestUsers} />

                            <RaisedButton label="Drop Users" onClick={this.handleClick} />
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