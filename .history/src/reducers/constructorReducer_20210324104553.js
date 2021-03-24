// eslint-disable-next-line
export default (state=[], action) => {
    switch (action.type) {
        case 'FETCH_': return action.payload;
        default: return state; 
    }
 };