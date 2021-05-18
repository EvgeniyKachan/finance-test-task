import React from 'react';
import {connect} from 'react-redux';
import {tickerLoad} from '../../store/actions';
import Marketheading from '../marketheading';


function Watchlist(props) {

    window.onload = function() {
        props.load();
    };

    return(  
        <div className='watchlist-wrap'>
            <Marketheading />
            <div className='watchlist-block'>
                { props.state.map((item, index) => {
                    return(
                        <div key={index}> 
                        { console.log('item', item) }
                        <div>
                            <div>{ item.ticker }</div>
                            <div>{ item.exchange }</div>
                            <div>{ item.price }</div>
                            <div>{ item.change }</div>
                            <div>{ item.change_percent }</div>
                            <div>{ item.last_trade_time }</div>
                        </div>
                        </div>
                    )

                })            
                }
            </div>
        </div>

    )
}

const mapStateToProps = state => {

    return {
        state
    };
}

const mapDispatchObj = {
    load: tickerLoad,
};

export default connect(mapStateToProps, mapDispatchObj)(Watchlist)