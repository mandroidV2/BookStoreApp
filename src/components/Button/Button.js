import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import { EMPTY_OBJECT, EMPTY_STRING } from '@constants/app.constants';
import styles from './styles';

const Button = ({
    title,
    onPress,
    buttonStyle,
    titleStyle,
}) => {
    return (
        <TouchableOpacity
            style={[styles.button, buttonStyle]}
            onPress={onPress}
        >
            <Text style={[styles.titleText, titleStyle]}>{title}</Text>
        </TouchableOpacity>
    )
};

Button.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
    buttonStyle: PropTypes.object,
    titleStyle: PropTypes.object,
};

Button.defaultProps = {
    title: EMPTY_STRING,
    onPress: _noop,
    buttonStyle: EMPTY_OBJECT,
    titleStyle: EMPTY_OBJECT,
};

export default Button;
