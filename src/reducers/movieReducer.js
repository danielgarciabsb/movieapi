export default (state=[], action) => {

    switch (action.type) {

        case 'FETCH_MOVIES_ON_GENRE':
            return [...state, action.payload];

        default:
            return state;
    }
};