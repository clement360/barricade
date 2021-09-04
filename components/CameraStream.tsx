import React from 'react';
import { View } from "./Themed";
import { WebView } from 'react-native-webview';

const nestSource = '<iframe allowfullscreen webkitallowfullscreen mozallowfullscreen src="https://video.nest.com/embedded/live/w5WvJ7GOXm?autoplay=0" frameborder="0" width="720" height="576"></iframe>'; 

export default function CameraStream() {
    return (
        <View>
            <WebView
                scalesPageToFit={true}
                bounces={false}
                javaScriptEnabled
                style={{ height: 500, width: 300 }}
                source={{
                    html: `
                        <!DOCTYPE html>
                        <html>
                            <head></head>
                            <body>
                            <div id="baseDiv">${nestSource}</div>
                            </body>
                        </html>
                    `,
                }}
                automaticallyAdjustContentInsets={false}
                />
        </View>
    );
}