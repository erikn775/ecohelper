import React from "react";
import {connect} from 'react-redux'


function DisplayTotal(props) {
  return (
    <div>
      <h2>Estimated Total Cost: ${props.totalCost}. Potential 25 Year Savings: ${props.totalSavings}</h2>
    </div>
  );
}

const mapStateToProps = (state) => {
  //console.log(state)
  return {
    totalCost: state.totalCost,
    totalSavings: state.totalSavings
  }
}


export default connect(mapStateToProps)(DisplayTotal);
// export default connect(firstArg, secondArg)(DisplayTotal)
// export default DisplayTotal