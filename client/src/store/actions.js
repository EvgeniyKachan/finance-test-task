export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAILED = 'LOAD_FAILED';

export const loadTickersSuccess = ticker => ({
    type: LOAD_SUCCESS,
    payload: ticker,
});

export const loadTickersFailed = error => ({
    type: LOAD_FAILED,
    error: error,
});

export const tickerLoad = () => dispatch => {

    fetch('http://localhost:4000')
        .then(response => {
            if (response.ok) {
                
                return response.json();
            }

            throw new Error('Can not load');
        })
        .then(result => {
            const action = loadTickersSuccess(result);
            dispatch(action);
        })
        .catch(error => {
            dispatch(loadTickersFailed(error));
        })
};