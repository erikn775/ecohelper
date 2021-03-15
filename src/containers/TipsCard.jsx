import React from 'react';

class TipsCard extends React.Component {
    render(){
        return(
            <div className="tips-container">
                <p>💡{this.props.tips}💡</p>
            </div>
        )
    }
}

export default TipsCard