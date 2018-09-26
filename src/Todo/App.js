import React, {Component} from "react"
import ReactDOM from "react-dom"
import {Button, ListGroupItem, ListGroup, FormGroup, ControlLabel, FormControl} from "react-bootstrap"
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  handleClick = () => {
    const val = this.task.value;

    if(!val || val === "") {
      return;
    }

    this.setState(({data}) => {
      data.push({
        text: val,
        isItem: true
      })
      return {data}
    })

    this.task.value = "";
  }

  handleRemove = (i) => {
    this.setState(({data}) => {
      data.splice(i,1)
      return {data}
    })
  }

  render() {
    const list = [...this.state.data]

    if (list.length === 0) {
      list.push({
        text: <i>Nothing added</i>
      })
    }

    return (
      <div>
        <ListGroup>
          {list.map((item, i) =>
            <ListGroupItem key={i} className="list-item">
              {item.text}
              {item.isItem && <Button onClick={() => this.handleRemove(i)}>x</Button>}
            </ListGroupItem>)
          }
        </ListGroup>
        <form>
          <FormGroup>
            <ControlLabel>Add Task</ControlLabel>
            <FormControl inputRef={input => this.task = input} />
          </FormGroup>
          <Button onClick={this.handleClick}>Add</Button>
        </form>
      </div>
    )
  }
}
