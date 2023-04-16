import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import styles from './styles';
import { EMPTY_OBJECT } from '@constants/app.constants';

const searchIcon = require('@assets/images/search.png');

const SearchInput = ({ onChangeText, placeholder, textInputStyle, ...props }) => {
    return (
        <View style={styles.containerStyles}>
            <Image
                source={searchIcon}
                style={styles.iconStyle}
            />
            <TextInput
                autoCorrect={false}
                multiline={false}
                style={[styles.inputStyle, textInputStyle]}
                placeholder={placeholder}
                onChangeText={onChangeText}
                {...props}
            />
        </View>
    )
};

SearchInput.propTypes = {
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func,
    textInputStyle: PropTypes.object,
};

SearchInput.defaultProps = {
    placeholder: 'Search...',
    onChangeText: _noop,
    textInputStyle: EMPTY_OBJECT,
};

export default SearchInput;
