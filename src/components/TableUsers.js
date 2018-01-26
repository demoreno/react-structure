import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

export default class TableUsers extends React.Component{

    constructor(props){
        super(props);
        this.renderUsers = this.renderUsers.bind(this);
    }

    renderUsers(key){
        const { users } = this.props;
        const user = users[key];

        return (
            <TableRow>
                <TableRowColumn>{user.id}</TableRowColumn>
                <TableRowColumn>{user.email}</TableRowColumn>
                <TableRowColumn>{user.phone}</TableRowColumn>
                <TableRowColumn>{user.username}</TableRowColumn>
            </TableRow>
        );
    }

    render(){
        const { users } = this.props;

        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Email</TableHeaderColumn>
                        <TableHeaderColumn>Phone</TableHeaderColumn>
                        <TableHeaderColumn>Username</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Object.keys(users).map(this.renderUsers)}
                </TableBody>
            </Table>
        );
    }
}