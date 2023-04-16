import _get from 'lodash/get';

export const getErrorMessage = function(err) {
    const defaultMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Something went wrong.';
    // get the message from custom errorDetails properties if any
    const message = _get(err, 'data.errorDetails.displayMessage') || _get(err, 'data.errorDetails.debugMessage');
    return message || _get(err, 'message', defaultMessage);
};
