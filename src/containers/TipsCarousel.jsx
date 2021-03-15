import React from 'react';
import TipsCard from './TipsCard.jsx';

class TipsCarousel extends React.Component {
    state = {
        tips: []
    }

    componentDidMount(){
        fetch('http://127.0.0.1:3000/tips')
            .then(response => response.json())
            .then(tipsData => {
                this.setState({
                    tips: tipsData
                })
            })
    }

    displayTips = () => {
        const desplayedTip = 
        this.state.tips.map(tip => <TipsCard key={tip.id} tips={tip.content}/>)
    }

    render(){
        return(
            <>
            <h3>Eco Tips</h3>

            </>
        )
    }
}
export default TipsCarousel