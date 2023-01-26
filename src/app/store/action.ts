interface ChangeBooleanValueAction {
    type: 'CHANGE_BOOLEAN_VALUE';
    newValue: boolean;
}

export const changeBooleanValue = (newValue: boolean): ChangeBooleanValueAction => ({
    type: 'CHANGE_BOOLEAN_VALUE',
    newValue
});
