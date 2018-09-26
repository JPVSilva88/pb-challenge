import React, {Component} from "react"
import {Button, ListGroupItem, ListGroup} from "react-bootstrap"
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  handleClick = () => {
    const p = prompt();

    if(!p || p === "") {
      return;
    }

    this.setState(({data}) => {
      data.push({
        text: p,
        isItem: true
      })
      return {data}
    })
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
        <Button onClick={this.handleClick}>Add</Button>
      </div>
    )
  }
}
