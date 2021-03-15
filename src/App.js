import React from 'react';
import './App.css';
import Header from './components/Header.jsx'
import ReviewContainer from './containers/ReviewContainer.jsx';
import TipsCarousel from'./containers/TipsCarousel.jsx'
import {Switch, Route} from "react-router-dom";
import HomeForm from './components/HomeForm.jsx'


class App extends React.Component {
  render(){
    return(
      <div className="app">
        <Header/>
        <Switch>
          <Route exact path="/" component={() => <><TipsCarousel/> <ReviewContainer/></>} />
          <Route exact path="/new_home" component={() => <HomeForm/>}/>
        </Switch>
          
      </div>
    )
  }
}

export default App;
