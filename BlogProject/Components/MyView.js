import React from 'react';
import {
    View,
    Text
} from 'react-native';

const MyComponent = ({
    name
}) => {
    return (
        <View>
            <Text>
                Hi {name}!
            </Text>
        </View>
    );
}

export default MyComponent;
