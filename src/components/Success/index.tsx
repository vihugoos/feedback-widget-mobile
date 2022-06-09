import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

import successImg from '../../assets/success.png'
import { styles } from './styles'
import { Copyright } from '../Copyright'

interface Props {
    onSendAnotherFeedback: () => void;
}

export function Success({ onSendAnotherFeedback }: Props) {
    return (
        <View style={styles.container}>

            <Image 
                source={successImg}
                style={styles.image}
            />

            <Text style={styles.title}> 
                Thank you for the feedback!
            </Text>

            <TouchableOpacity 
                style={styles.button}
                onPress={onSendAnotherFeedback}
            >
                <Text style={styles.buttonTitle}>
                    I want to send other
                </Text>
            </TouchableOpacity>

            <Copyright />
            
        </View>
    )
}
