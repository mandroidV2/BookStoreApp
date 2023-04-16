import { ACTION_TYPES } from "./BookItem.actionTypes";

const handleCoverImageLoadError = (_, { getState, setState }) => {
    setState({ coverFailedToLoad: true });
};

export const ACTION_HANDLERS = {
    [ACTION_TYPES.ON_COVER_IMAGE_LOAD_ERROR]: handleCoverImageLoadError,
};
