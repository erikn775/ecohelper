import React from 'react';
import './App.css';
import Header from './components/Header.jsx'
import ReviewContainer from './containers/ReviewContainer.jsx';
import TipsCarousel from'./containers/TipsCarousel.jsx'
import {Switch, Route} from "react-router-dom";
import HomeForm from './components/HomeForm.jsx'
import HomeRecommendations from './components/HomeRecommendations';
import CarForm from './components/CarForm.jsx'
import Buttons from './components/Buttons.jsx'

class App extends React.Component {
  render(){
    return(
      <div className="app">
        <Header/>
        <Switch>
          <Route exact path="/" component={() => <><Buttons/> <TipsCarousel/> <ReviewContainer/></>} />
          <Route exact path="/home/new" component={() => <HomeForm/>}/>
          <Route exact path="/home/recommendations" render={(props) => <HomeRecommendations {...props} />}/>
          <Route exact path="/car/new" component={() => <CarForm/>}/>
          <Route exact path="/car/recommendations" render={(props) => <HomeRecommendations {...props} />}/>
        </Switch>
      </div>
    )
  }
}

export default App;
