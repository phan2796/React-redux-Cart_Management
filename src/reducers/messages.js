import * as MSG from '../constants/Message';
import * as types from '../constants/ActionType';

var initalState = MSG.MSG_WELCOME;

const messages = (state = initalState, action) => {
    switch (action.type) {
        case types.CHANGE_MSG:
            state = action.msg;
            console.log(action);
            return state;

        default:
            return state;
    }
}
export default messages