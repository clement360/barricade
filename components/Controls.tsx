import React from 'react';
import { Text, View } from '../components/Themed';

import { StyleSheet, Pressable, ButtonProps } from 'react-native';
import API from '@aws-amplify/api'

export type Props = {};

const Controls: React.FC<Props> = () => {
    const baseGateState = "UNKNOWN";
    const baseTransmissionState = "UNKNOWN";

    const [gateState, setGateState] = React.useState(baseGateState);
    const [transmissionState, setTransmissionState] = React.useState(baseTransmissionState);

    const sendCommand = async (command: string) => {
        const restData = await API.post(
            'barricadelambda', '/command',
              {body: { command: command }});
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonGroup}>
                <Text style={styles.header}>Transmission</Text>
                <Button
                    title="lock"
                    accessibilityLabel="lock"
                    onPress={() => sendCommand('lock')}
                    color="blue" />
                <Text style={styles.status}>{transmissionState}</Text>
                <Button
                    title="unlock"
                    accessibilityLabel="unlock"
                    onPress={() => sendCommand('unlock')}
                    color="red" />
            </View>
            <View style={styles.buttonGroup}>
                <Text style={styles.header}>Gate</Text>
                <Button
                    title="close"
                    accessibilityLabel="close"
                    onPress={() => sendCommand('close')}
                    color="blue" />
                <Text style={styles.status}>{gateState}</Text>
                <Button
                    title="open"
                    accessibilityLabel="open"
                    onPress={() => sendCommand('open')}
                    color="red" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonGroup: {
        padding: 10,
        margin: 20,
        backgroundColor: 'rgb(232, 232, 232)',
        borderRadius: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 16,
        textAlign: 'center',
    },
    status: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 16
    }
});


function Button(props: ButtonProps) {
    const { onPress, title } = props;

    const buttonProps = StyleSheet.create({
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: 'black',
        },
        text: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
        },
    });

    return (
        <Pressable style={buttonProps.button} onPress={onPress}>
            <Text style={buttonProps.text}>{title}</Text>
        </Pressable>
    );
}


export default Controls;