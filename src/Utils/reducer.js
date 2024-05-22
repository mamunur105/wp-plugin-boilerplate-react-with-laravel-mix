/* global rtsbParams */

import * as Types from "./actionType";

export const initialState = {
	saveType: null,
	options: {
		isLoading: true,
        modules: {},
	},
	generalData:{
		isLoading: true,
		selectedMenu: '/',
	},
};

const reducer = (state, action) => {
	switch (action.type) {
		case Types.UPDATE_OPTIONS:
            return {
                ...state,
                options: action.options,
            };
        case Types.UPDATE_MODULES:
            return {
                ...state,
                options: {
                    ...state.options,
                    modules: action.modules,
                },
            };
		case Types.GENERAL_DATA:
            return {
                ...state,
                generalData : action.generalData,
            };
        default:
			return state;
	}
};

export default reducer;

