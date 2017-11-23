import React from 'react';
import Header from './../layouts/Header';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

export default class Home extends React.Component{

    constructor(props) {
        super(props);

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            open : false
        };
    }

    handleOpen() {
        this.setState({open: true});
    }
    
    handleClose(){
        this.setState({open: false});
    };


    render(){

        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleClose}
            />,
        
            <FlatButton
              label="Submit"
              primary={true}
              disabled={true}
              onClick={this.handleClose}
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
                        <RaisedButton label="Modal Dialog" onClick={this.handleOpen} />
                            <FlatButton label="Action2" />
                        </CardActions>

                        <CardText expandable={true}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </CardText>
                    </Card>
                </div>                
            </div>
        );
    }
}