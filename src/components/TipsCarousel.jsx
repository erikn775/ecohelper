import React from 'react';
import { Carousel } from 'rsuite';
import '../stylesheets/tips.css'

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

    render(){
        return(
            <>
            <Carousel autoplay className="custom-slider">
                {this.state.tips.map(tip => 
                    <img src={tip.content} /> )}
            </Carousel>
            </>
        )
    }
}
export default TipsCarousel