import React from 'react';

export default class ProfileInfo extends React.Component{


    render(){
        const { profileInfo } = this.props;

        return (
            [
                <p>Id : {profileInfo.id}</p>,
                <p>Title : {profileInfo.title}</p>,
                <p>Body : {profileInfo.body}</p>
            ]
        );
    }
}