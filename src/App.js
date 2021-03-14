import React from 'react';
import './App.css';
import Header from './components/Header.jsx'
import ReviewContainer from './containers/ReviewContainer';

class App extends React.Component {
  render(){
    return(
      <>
        <Header/>
        <ReviewContainer/>
      </>
    )
  }
}

export default App;
