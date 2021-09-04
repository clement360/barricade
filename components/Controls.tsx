import React from 'react';
import { Text, View } from '../components/Themed';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export type Props = {};

const Controls: React.FC<Props> = () => {
    const baseGateState = "UNKNOWN";
    const baseTransmissionState = "UNKNOWN";
    
    // import API from '@aws-amplify/api'
    // const restData = await API.post('barricadelambda', '/command')

    const [gateState, setGateState] = React.useState(baseGateState);
    const [transmissionState, setTransmissionState] = React.useState(baseTransmissionState);

    const sendCommand = (command: string) => console.log(command);

    return (
        <View style={styles.container}>
            <View>
                <View>
                    <AntDesign.Button
                        name="up"
                        accessibilityLabel="lock"
                        onPress={() => sendCommand('lock')}
                        color="blue" />
                    <Text style={styles.greeting}>{transmissionState}</Text>
                    <AntDesign.Button
                        name="down"
                        accessibilityLabel="unlock"
                        onPress={() => sendCommand('unlock')}
                        color="red" />
                </View>
                <View>
                    <AntDesign.Button
                        name="right"
                        accessibilityLabel="close"
                        onPress={() => sendCommand('close')}
                        color="blue" />
                    <Text style={styles.greeting}>{gateState}</Text>
                    <AntDesign.Button
                        name="left"
                        accessibilityLabel="open"
                        onPress={() => sendCommand('open')}
                        color="red" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    greeting: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 16
    }
});

export default Controls;