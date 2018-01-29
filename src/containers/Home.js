import React from 'react';
import Header from '../components/Header';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { requestProfile, requestUsers } from '../actions/actionCreators';
import { bindActionCreators } from 'redux';
import TableUsers from './../components/TableUsers'
import ProfileInfo from './../components/ProfileInfo';

class Home extends React.Component{

    constructor(props) {
        super(props);

        this.handleModal = this.handleModal.bind(this);
        this.getProfile = this.getProfile.bind(this);

        this.state = {
            modal : false
        };
    }

    handleModal() {
        this.setState({modal: !this.state.modal});
    }

    getProfile(){
        this.handleModal();
        this.props.requestProfile();
    }

    render(){
        const { profile, users } = this.props;
        const actions = [
            <FlatButton label="Cancel" primary={true} onClick={this.handleModal}/>,
        
            <FlatButton label="Submit" primary={true} onClick={this.getProfile}/>
        ];

        return (
            [<Header/>,
                <div className='main-content'>
                    <Card>
                        <CardHeader title="Profile Settings" actAsExpander={true}/>

                        <Dialog title="Profile" actions={actions} modal={true} open={this.state.modal}>
                            Only actions can close this dialog.
                        </Dialog>

                        <CardActions>
                            <RaisedButton label="Request Profile" onClick={this.handleModal} />
                        </CardActions>

                        {profile.id &&
                            <CardText>
                                <ProfileInfo profileInfo={profile}/>
                            </CardText>
                        }

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
    bindActionCreators({requestProfile, requestUsers} , dispatch);

export default connect(mapStateToProps , mapDispactchToProps)(Home);