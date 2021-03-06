import React from "react";
import {connect} from 'react-redux'


function DisplayTotal(props) {
  return (
    <div>
      <h2>Estimated Total Cost: ${props.totalCost}. Potential 25 Year Savings: ${props.totalSavings}</h2>
      <p>Don't forget to leave a review at the bottom of the page</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    totalCost: state.upgrades.totalCost,
    totalSavings: state.upgrades.totalSavings
  }
}

export default connect(mapStateToProps)(DisplayTotal);
