import React from 'react';
import { Carousel } from 'rsuite';
import '../stylesheets/tips.css';
import { connect } from 'react-redux';
import {fetchTipData} from '../actions/tipsActions.jsx'

class TipsCarousel extends React.Component {
    
    componentDidMount(){
        this.props.fetchTipData()
    }

    render(){
        return(
            <>
            <Carousel autoplay className="custom-slider">
                {this.props.tips.map(tip => <img src={tip.content} /> )}
            </Carousel>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTipData: () => dispatch(fetchTipData())
    }
}

const mapStateToProps = (state) => {
    return {
      tips: state.tips.tips
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TipsCarousel)