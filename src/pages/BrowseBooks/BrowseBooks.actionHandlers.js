import _get from 'lodash/get';

import { getErrorMessage } from '@utils/errorUtils';
import { fetchBooks } from '@shared/book/book.service';
import { EMPTY_ARRAY, EMPTY_STRING } from '@constants/app.constants';
import { BROWSE_BOOK_BY, NO_OF_BOOKS_PER_PAGE } from '@shared/book/book.constants';
import { getQStringForBookList } from './BrowseBooks.helpers';
import { ACTION_TYPES } from "./BrowseBooks.actionTypes";

const fetchBookList = async ({ payload }, { getState, setState }) => {
    const { offset, searchText } = payload;
    try {
        const { browseBooksBy, books } = getState();
        setState({ searchText });
        const fetchBooksPayload = {
            offset: offset,
            q: getQStringForBookList(browseBooksBy, searchText),
            limit: NO_OF_BOOKS_PER_PAGE
        };
        // fetch the books data
        const response = await fetchBooks(fetchBooksPayload);
        const moreBooks = _get(response, 'docs', EMPTY_ARRAY);
        const count = _get(response, 'numFound', 0);
        setState({
            books: offset == 0 ? moreBooks : [...books, ...moreBooks],
            offset: offset + NO_OF_BOOKS_PER_PAGE,
            count,
        });
    } catch (error) {
        const msg = getErrorMessage(error);
        // TODO: A toast can be called here
        console.log('error occured ', msg);
    }
};

const handleInit = async (_, { getState, setState }) => {
    const { route }  = getState();
    const browseBooksBy = _get(route, 'params.browseBooksBy', BROWSE_BOOK_BY.TITLE);
    await setState({ browseBooksBy });
    const payload = { offset: 0, searchText: EMPTY_STRING };
    setState({ isInitialFetching: true });
    await fetchBookList({ payload }, { getState, setState });
    setState({ isInitialFetching: false });
};

const handleSearchTextChange = async ({ payload: searchTextPayload }, { getState, setState }) => {
    const { searchText } = searchTextPayload;
    const payload = { offset: 0, searchText };
    setState({ isInitialFetching: true });
    await fetchBookList({ payload }, { getState, setState });
    setState({ isInitialFetching: false });
};

const handleRefreshBookList = async (_, { getState, setState }) => {
    const { searchText } = getState();
    const payload = { offset: 0, searchText };
    setState({ isRefreshing: true });
    await fetchBookList({ payload }, { getState, setState });
    setState({ isRefreshing: false });
};

const handleBookListEndReached = async (_, { getState, setState }) => {
    const {
        count, offset, searchText, isFetchingMore,
    } = getState();

    if (isFetchingMore || count <= offset) {
        return;
    }

    const payload = { offset, searchText };
    setState({ isFetchingMore: true });
    await fetchBookList({ payload }, { getState, setState });
    setState({ isFetchingMore: false });
};

export const ACTION_HANDLERS = {
    [ACTION_TYPES.HANDLE_INIT]: handleInit,
    [ACTION_TYPES.SEARCH_TEXT_CHANGE]: handleSearchTextChange,
    [ACTION_TYPES.HANDLE_REFRESH]: handleRefreshBookList,
    [ACTION_TYPES.ON_END_REACHED]: handleBookListEndReached,
};
