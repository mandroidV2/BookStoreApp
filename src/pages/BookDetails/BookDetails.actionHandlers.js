import _get from 'lodash/get';

import { EMPTY_OBJECT } from "@constants/app.constants";
import { ACTION_TYPES } from "./BookDetails.actionTypes";

const handleInit = (_, { getState, setState }) => {
    const { route }  = getState();
    const book = _get(route, 'params.book', EMPTY_OBJECT);
    setState({ book });
};

export const ACTION_HANDLERS = {
    [ACTION_TYPES.HANDLE_INIT]: handleInit,
};
