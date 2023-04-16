import React, { useCallback, useEffect } from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';

import withActionHandlers from '@connectors/withActionHandlers';
import { debounce } from '@utils/debounce';
import SearchInput from '@components/SearchInput';
import LoadingIndicator from '@components/LoadingIndicator';
import { EMPTY_ARRAY, EMPTY_STRING, ON_END_REACHED_THRESHOLD } from '@constants/app.constants';
import BookReader from '@shared/book/book.reader';
import { BROWSE_BOOKS_BY_STRING, BROWSE_BOOK_BY, DEBOUNCE_BOOK_SEARCH_TIMER } from '@shared/book/book.constants';
import { ACTION_HANDLERS } from './BrowseBooks.actionHandlers';
import { ACTION_TYPES } from './BrowseBooks.actionTypes';
import BookItem from './components/BookItem';
import styles from './styles';

const BrowseBooks = (props) => {
    const {
        browseBooksBy, isInitialFetching, isRefreshing, isFetchingMore, books, onAction,
    } = props;

    useEffect(() => {
        onAction({
            type: ACTION_TYPES.HANDLE_INIT,
        });
    }, [onAction])

    const renderFooter = () => (
        <View style={styles.footerText}>
            {isFetchingMore && <LoadingIndicator visible={isFetchingMore} />}
        </View>
    )

    const renderEmpty = () => (
        <View style={styles.emptyText}>
            <Text style={styles.noData}>{`No Books Found`}</Text>
        </View>
    )

    const handleSearchTextChange = debounce((searchText) => {
        onAction({
            type: ACTION_TYPES.SEARCH_TEXT_CHANGE,
            payload: { searchText }
        })
    }, DEBOUNCE_BOOK_SEARCH_TIMER);

    const handleRefreshBookList = useCallback(() => {
        onAction({
            type: ACTION_TYPES.HANDLE_REFRESH,
        });
    }, [onAction]);

    const handleBookListEndReached = useCallback(() => {
        onAction({
            type: ACTION_TYPES.ON_END_REACHED,
        });
    }, [onAction]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchInputContainer}>
                <SearchInput
                    placeholder={`Search books by ${browseBooksBy}...`}
                    onChangeText={handleSearchTextChange}
                />
            </View>
            <Text style={styles.title}>{`Browse books by ${BROWSE_BOOKS_BY_STRING[browseBooksBy]}`}</Text>
            {isInitialFetching ?
                <LoadingIndicator visible={isInitialFetching} size='large' fullScreen />
                :
                <FlatList
                    contentContainerStyle={{ flexGrow: 1 }}
                    refreshing={isRefreshing}
                    onRefresh={handleRefreshBookList}
                    data={books}
                    renderItem={({ item }) => (
                        <BookItem key={BookReader.key(item)} book={item} />
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={styles.itemSeperatorStyle} />
                    )}
                    ListFooterComponent={renderFooter}
                    ListEmptyComponent={renderEmpty}
                    onEndReachedThreshold={ON_END_REACHED_THRESHOLD}
                    onEndReached={handleBookListEndReached}
                />
            }
        </SafeAreaView>
    );
}

BrowseBooks.propTypes = {
    browseBooksBy: PropTypes.string,
    isInitialFetching: PropTypes.bool,
    isRefreshing: PropTypes.bool,
    isFetchingMore: PropTypes.bool,
    books: PropTypes.array,
    onAction: PropTypes.func,
};

BrowseBooks.defaultProps = {
    browseBooksBy: BROWSE_BOOK_BY.TITLE,
    isRefreshing: false,
    isInitialFetching: true,
    isFetchingMore: false,
    books: EMPTY_ARRAY,
    onAction: _noop,
};

export default withActionHandlers(ACTION_HANDLERS, {
    offset: 0,
    count: 0,
    searchText: EMPTY_STRING,
    isRefreshing: false,
    isInitialFetching: true,
    isFetchingMore: false,
    books: EMPTY_ARRAY,
})(BrowseBooks);
