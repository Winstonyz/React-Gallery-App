import React, { Component } from "react";
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';


import Nav from './components/Nav'
import PhotoContainer from './components/PhotoContainer'
import apiKey from './config'
import Search from './components/Search'
import NoPageError from "./components/NoPageError"


export default class App extends Component{

  //establish a constructor with super() to set up state properties
  constructor(){
    super();
    this.state = {
      photos:[],
      architecture:[],
      people:[],
      landscape:[],
    }
  }

  //componentDidMount() is invoked here after a component is mounted
  //search results shall be saved in the states using function searchPic
  componentDidMount(){
    this.searchPic('architecture')
    this.searchPic('people')
    this.searchPic('landscape')
  }

//function to save search results and set states
  searchPic = (photoCategory) => {
    //Fetch the data from the Flickr API using the Fetch API or a tool like Axios.
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${photoCategory}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        if(photoCategory==="architecture"){
          this.setState({
            architecture: response.data.photos.photo
          })
        }else if (photoCategory==="people"){
          this.setState({
            people: response.data.photos.photo
          })
      }else if (photoCategory==="landscape"){
        this.setState({
          landscape: response.data.photos.photo
        })
      }else{
        this.setState({
          photos: response.data.photos.photo
        })
      }
    })
      .catch(error => {
        alert("Error occurs!")
      })
  }

  //Render method: with Nav and Search components in place, three default searches can be switched
  render(){
    return(
      <div className='container'>
        <Router>
          <Search onSearch={this.searchPic} />
          <Nav />
          <Switch>
            <Route exact path="/" render={ () => <Redirect to="/architecture" />} />
            <Route path="/architecture" render={ () => <PhotoContainer data={this.state.architecture} />} />
            <Route path="/people" render={ () => <PhotoContainer data={this.state.people} />} />
            <Route path="/landscape" render={ () => <PhotoContainer data={this.state.landscape} />} />
            <Route exact path="/search/:tag" render={ ()=> <PhotoContainer data={this.state.photos}/> } />
            <Route component={NoPageError} />

          </Switch>
        </Router>
      </div>
    )
  }
}
//root path is redirected to architecture 