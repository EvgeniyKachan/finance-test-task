import React from 'react';
import {connect} from 'react-redux';
import {tickerLoad} from '../../store/actions';

function Watchlist(props) {

    return(
        <div> 
            <div>
                {props.ticker}
            </div> 
            <div> 
                 {props.exchange}
            </div>
            <button onClick={props.load}>Load tickers</button>
        </div>

    )
}

const mapStateToProps = state => {

    console.log(state);

    return {
        ticker:  state.ticker,
        exchange: state.exchange,
        
    };
}

const mapDispatchObj = {
    load: tickerLoad,
};

export default connect(mapStateToProps, mapDispatchObj)(Watchlist)