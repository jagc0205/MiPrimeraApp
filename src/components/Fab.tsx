import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View, Platform, TouchableOpacity } from 'react-native';

interface Props {
    title: string;
    position?: 'br' | 'bl'
    onPress: () => void;
}


export const Fab = ({ title, onPress, position = 'br' }: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={ 0.6 }
                onPress={onPress}
                style={[
                    styles.fabLocation,
                    (position === 'br') ? styles.br : styles.bl
                ]}
            >
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
    const android = () => {
        return (
            <View
                style={[
                    styles.fabLocation,
                    (position === 'br') ? styles.br : styles.bl
                ]}>

                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('white', false, 33)}
                >
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>
                            {title}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return (Platform.OS === "ios") ? ios() : android();


}

const styles = StyleSheet.create({

    fabLocation: {
        position: 'absolute',
        bottom: 40,
    },
    bl: { left: 30, },
    br: { right: 30, },
    buttonContainer: {
        backgroundColor: "#841584",
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    }
})