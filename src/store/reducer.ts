interface State {
    booleanValue: boolean;
}

const initialState: State = {
    booleanValue: false
};

export const Reducer = (state: State = initialState, action: any): State => {
    switch (action.type) {
        case 'CHANGE_BOOLEAN_VALUE':
            return {
                ...state,
                booleanValue: action.newValue
            };
        default:
            return state;
    }
};