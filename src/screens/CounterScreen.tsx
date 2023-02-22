import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab';

export const CounterScreen = () => {

    const [contador, setContador] = useState(10);

    return (
        <View style={styles.container}>
            <Text style={styles.counter}>
                Contador: {contador}
            </Text>

            <Fab 
                title='+1'
                onPress={() => setContador(contador + 1)}
                position='br'
            />
            <Fab 
                title='-1'
                onPress={() => setContador( contador - 1 )}
                position='bl'
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    counter: {
        fontSize: 45,
        textAlign: 'center',
        top: -10,
    }
})