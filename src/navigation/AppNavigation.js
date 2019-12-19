import React, {Component} from 'react';
import {View, Text, Button } from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";

class HomeScreen extends Component{
    render(){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/*<View>*/}
                <Text>HomeScreen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details', {hell: '123456789'})}
                />
            </View>
        );
    }
};
class DetailsScreen extends Component{
    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        console.log("====>",this.props.navigation.getParam('hell'));
        console.log("====>",this.props.navigation.state.params.hell);
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/*<View>*/}
                <Text>DetailsScreen</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details', {hell: 'from details'})}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title="Go to fist screen"
                    onPress={() => this.props.navigation.popToTop()}
                />
            </View>
        );
    }
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