import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import { Form ,reduxForm , Field} from 'redux-form';
import { TextField } from 'redux-form-material-ui';

class FormUser extends React.Component{

    render(){
        const { handleSubmit, error } = this.props;
        const actionsNewUser = [
            <FlatButton label="Cancel" primary={true} onClick={this.props.handleModalUser}/>,

            <FlatButton label="Submit" primary={true} onClick={handleSubmit}/>
        ];

        return(
            <Dialog title="New User" actions={actionsNewUser} modal={true} open={this.props.modalUser}>
                <Form onSubmit={handleSubmit}>
                    {error && <strong>{error}</strong>}
                    <br/>
                    <Field name="firstName" component={TextField} hintText="First Name"/>
                    <Field name="lastName" component={TextField} hintText="Last Name"/>
                    <Field name="age" component={TextField} hintText="Age"/>
                    <Field name="email" component={TextField} hintText="Email"/>
                </Form>
            </Dialog>
        );
    }
}

FormUser = reduxForm({
    form: 'FormUser'
})(FormUser);

export default FormUser;