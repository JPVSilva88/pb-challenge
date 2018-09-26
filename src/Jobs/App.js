import React, {Component} from "react"
import {Button, ButtonGroup, FormControl, FormGroup, ControlLabel} from "react-bootstrap"
import './App.css'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            jobCount: 0
        }
    }

    handleJobCount(jobCount) {
        this.setState({jobCount})
    }

    renderQuestions() {
        const {jobCount} = this.state
        const questions = [];

        // If no jobs, display only one control
        if (jobCount === 0) {
            return <FormGroup className="group">
                <ControlLabel>What is your current status?</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                    <option value="select">select</option>
                    <option value="other">...</option>
                </FormControl>
            </FormGroup>;
        }

        // If multiple jobs, ask the same questions once per job
        for (let i = 1; i <= jobCount; i++) {
            questions.push(
                <div key={`job-${i}`} className="group">
                    <div style={{fontSize: "large", marginBottom: "5px"}}>Job {i}</div>
                    <FormGroup>
                        <ControlLabel>What is your occupation?</ControlLabel>
                        <FormControl componentClass="select" placeholder="select">
                            <option value="select">select</option>
                            <option value="other">...</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Company Name</ControlLabel>
                        <FormControl />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Income</ControlLabel>
                        <FormControl />
                    </FormGroup>
                </div>)
        }

        return questions;
    }

    render() {
        const {jobCount} = this.state

        return (
            <div>
                <div className="group">
                    <ControlLabel>How many jobs do you have?</ControlLabel>
                    <ButtonGroup>
                        <Button onClick={this.handleJobCount.bind(this, 0)}
                                className={jobCount === 0 ? "selected" : null}>0</Button>
                        <Button onClick={this.handleJobCount.bind(this, 1)}
                                className={jobCount === 1 ? "selected" : null}>1</Button>
                        <Button onClick={this.handleJobCount.bind(this, 2)}
                                className={jobCount === 2 ? "selected" : null}>2</Button>
                        <Button onClick={this.handleJobCount.bind(this, 3)}
                                className={jobCount === 3 ? "selected" : null}>3</Button>
                    </ButtonGroup>
                </div>

                {this.renderQuestions()}

            </div>
        )
    }
}
