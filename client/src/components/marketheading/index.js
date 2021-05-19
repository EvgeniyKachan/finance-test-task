import React from 'react';
import {connect} from 'react-redux';

function Marketheading(props) {

    return(
        <div className='marketheading-block'>
        { props.state.map((item, index) => {         
            return(
                <div key={index}> 
                   <div className='market-item'>
                       <div>{ item.ticker }</div>
                       <div className='market-percent'>
                            <div>{ `${item.dividend} ` +'%' }</div>
                            <div>{ item.yield }</div>
                       </div>

                   </div>
                </div>
            )
           })            
        }
        </div>
    )
}

const mapStateToProps = state => {

    return {
        state
    };
}

export default connect(mapStateToProps)(Marketheading)