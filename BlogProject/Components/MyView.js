import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 20
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#888',
        fontFamily: 'Helvetica'
    }
})

const MyComponent = ({
    name
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Hi {name}!
            </Text>
        </View>
    );
}

export default MyComponent;
