import {
    RECRUITMENT_PAGE_LOADED,
    RECRUITMENT_PAGE_UNLOADED,
} from '../constants/actionTypes'

export default (state = {}, action) => {
    switch (action.type) {
        case RECRUITMENT_PAGE_LOADED:
            return {
                ...state,
                test: state.articles.map(data => {
                    return data
                }),
            }
        default:
            return state
    }
};
