import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

export default class TableUsers extends React.Component{

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
                {users.map((user) => (
                    <TableRow>
                        <TableRowColumn>{user.id}</TableRowColumn>
                        <TableRowColumn>{user.email}</TableRowColumn>
                        <TableRowColumn>{user.phone}</TableRowColumn>
                        <TableRowColumn>{user.username}</TableRowColumn>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        );
    }
}