import React from 'react';
import Header from './../layouts/Header';

export default class Home extends React.Component{

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