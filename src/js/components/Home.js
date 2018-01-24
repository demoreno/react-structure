import React from 'react';
import Header from './../containers/Header';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

import { requestProfile, requestUsers } from './../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Home extends React.Component{

    constructor(props) {
        super(props);

        this.handleModal = this.handleModal.bind(this);
        
        this.state = {
            open : false
        };
    }

    componentDidMount(){
        this.props.requestProfile();        
    }

    handleModal() {
        this.setState({open: !this.state.open});
    }
    
    render(){
        const { profile } = this.props;
        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleModal}
            />,
        
            <FlatButton
              label="Submit"
              primary={true}
              disabled={true}
              onClick={this.handleModal}
            />
        ];

        return (
            <div>
                
                <Header/>

                <div className='main-content'>
                    <Card>
                        <CardHeader
                            title="Without Avatar"
                            subtitle="Subtitle"
                            actAsExpander={true}
                            showExpandableButton={true}
                        />
                
                        <Dialog
                        title="Dialog With Actions"
                        actions={actions}
                        modal={true}
                        open={this.state.open}
                        >
                        Only actions can close this dialog.
                        </Dialog>

                        <CardActions>
                        <RaisedButton label="Modal Dialog" onClick={this.handleModal} />
                            <FlatButton label="Action2" />
                        </CardActions>

                        <CardText expandable={true}>
                            <h1>{profile.title}</h1>
                        </CardText>
                        
                    </Card>
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
    bindActionCreators({requestProfile, requestUsers} , dispatch);

export default connect(mapStateToProps , mapDispactchToProps)(Home);