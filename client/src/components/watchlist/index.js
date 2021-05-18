import React from 'react';
import {connect} from 'react-redux';
import {tickerLoad} from '../../store/actions';

function Watchlist(props) {
    console.log('Watchlist', props)
    //console.log('Watchlist', props)
    return(

       
        <div>
            <div>
             { props.state.map(function(item, index) {
                 return(
                     <div key={index}> 
                     { console.log('item', item) }
                        <h1>{ console.log('item.ticker', item.ticker) }</h1>
                        <h1>{item.exchange}</h1>
                     </div>
                 )

                })            
             }
             </div>
            <div>
                {props.ticker}
            </div> 
            <div> 
                 {props.exchange}
            </div>
            <div> 
                 
            </div>
            <button onClick={props.load}>Load tickers</button>
        </div>

    )
}

const mapStateToProps = state => {

    console.log('state', state);

    
    return {
        state
        // ticker:  state.ticker,
        // exchange: state.exchange,
        // price: state.price,
        // change:  state.change,
        // change_percent: state.change_percent,
        // dividend: state.dividend,
        // last_trade_time: state.last_trade_time,
        // yield: state.yield,

    };
}

const mapDispatchObj = {
    load: tickerLoad,
};

export default connect(mapStateToProps, mapDispatchObj)(Watchlist)