import api from "@api/httpService";

const API_PATHS = {
    BOOK_SEARCH: '/search.json',
};

export const fetchBooks = (payload) => {
    return api.get(API_PATHS.BOOK_SEARCH, payload);
};
