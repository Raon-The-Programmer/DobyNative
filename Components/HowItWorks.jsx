import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HowItWorks = () => {
    return (
        <View style={styles.container}>
            <View style={styles.stageContainer}>
                <View style={styles.circle}>
                    <MaterialCommunityIcons name="cart" size={24} color="black" />
                </View>
                <Text style={styles.stageText}>Order</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.stageContainer}>
                <View style={styles.circle}>
                    <MaterialCommunityIcons name="bike" size={24} color="black" />
                </View>
                <Text style={styles.stageText}>Pickup</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.stageContainer}>
                <View style={styles.circle}>
                    <MaterialCommunityIcons name="washing-machine" size={24} color="black" />
                </View>
                <Text style={styles.stageText}>Laundry</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.stageContainer}>
                <View style={styles.circle}>
                    <MaterialCommunityIcons name="truck-delivery" size={24} color="black" />
                </View>
                <Text style={styles.stageText}>Delivery</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 30,
        marginBottom:20
    },
    stageContainer: {
        alignItems: 'center',
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        flex: 1,
        height: 2,
        backgroundColor: '#e0e0e0',
    },
    stageText: {
        marginTop: 5,
        fontSize: 12,
        fontWeight:'300'
    },
});

export default HowItWorks;
