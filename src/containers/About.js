import React from 'react';
import Header from '../components/Header';
import {
    Step,
    Stepper,
    StepLabel,
  } from 'material-ui/Stepper';
  import RaisedButton from 'material-ui/RaisedButton';
  import FlatButton from 'material-ui/FlatButton';

export default class About extends React.Component{

    constructor(props){
        super(props);

        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.getStepContent = this.getStepContent.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);

        this.state = {
            finished: false,
            stepIndex: 0,
        };
    }
    
    handleNext() {
        const {stepIndex} = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 3,
        });
    };
    
    handlePrev() {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };
    
    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return 'Select campaign settings...';
            case 1:
                return 'What is an ad group anyways?';
            case 2:
                return 'This is the bit I really care about!';
            case 3:
                return 'This is the bit I really care about 132456!';
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    }
    
    render(){
        const {finished, stepIndex} = this.state;
        const contentStyle = {margin: '0 16px'};

        return (
            [
                <Header/>,
                
                <div className='main-content'>

                    <div style={{width: '100%', margin: 'auto'}}>

                            <Stepper activeStep={stepIndex}>
                                <Step>
                                    <StepLabel>Step 1</StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel>Step 2</StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel>Step 3</StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel>Step 4</StepLabel>
                                </Step>
                            </Stepper>

                            <div style={contentStyle}>
                                {finished ? (
                                    <p>
                                        <a href="#" onClick={(event) => { event.preventDefault();
                                                this.setState({stepIndex: 0, finished: false});}}>
                                            Click here
                                        </a> to reset the example.
                                    </p>
                                ) : (
                                    <div>
                                        <p>{this.getStepContent(stepIndex)}</p>

                                        <div style={{marginTop: 12}}>
                                            <FlatButton label="Back" disabled={stepIndex === 0}
                                                        onClick={this.handlePrev} style={{marginRight: 12}}/>
                                            <RaisedButton label={stepIndex === 2 ? 'Finish' : 'Next'}
                                                          primary={true} onClick={this.handleNext}/>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
            ]
        );
    }
}