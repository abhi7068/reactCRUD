import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Form from './components/Form';
import List from './components/List';
import Update from './components/Update'
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      clothes: [],
      updated:{},
     index:''
    }
  }
  submitButton = (data) => {
    this.state.clothes.push(data);
    this.setState({
      clothes: this.state.clothes
    })
  }
  
  updateInfo = (key) => {
    this.setState({
      updated: this.state.clothes[key],
      index:key
    });
}
  makeUpdate = (data) => {
    console.log(data);
    let { clothes } = this.state;
    clothes[this.state.index] = data;
    this.setState({
      clothes,
      index:''
    })
    
   }
  deleteList = (index) => {
    let { clothes } = this.state;
    this.setState({
      clothes: clothes.filter(cloth => clothes[index] !== cloth)
    });
    
  }
  

  render() {
  /*     console.log(this.state) */
    console.log(this.state)
    return (
      <div className='App'> 
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Form">Add Clothes</Link>
            </li>
            <li>
              <Link to="/ClothList">List</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/Form" component={() => <Form click={this.submitButton}/>}  ></Route>
            <Route exact path="/ClothList" component={() => <List data={this.state.clothes} edit={this.updateInfo}  remove={this.deleteList}/>} ></Route>
            <Route exact path="/Update" component={() => <Update info={this.state.updated} submit={this.makeUpdate}  />}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}



export default App

