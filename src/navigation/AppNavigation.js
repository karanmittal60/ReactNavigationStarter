import React from 'react';
import {View, Text } from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/*<View>*/}
            <Text>HomeScreen</Text>
        </View>
    );
};
const DetailsScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/*<View>*/}
            <Text>DetailsScreen</Text>
        </View>
    );
};

const AppNavigator = createStackNavigator(
    {
        Details: DetailsScreen,
        Home: HomeScreen,
    },
    {
        initialRouteName: 'Home',
    }
);


export default createAppContainer(AppNavigator);