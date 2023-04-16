import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Routes } from '@navigator/routeNames';
import HomeScreen from '@pages/HomeScreen';
import BrowseBooks from '@pages/BrowseBooks';
import BookDetails from '@pages/BookDetails';

const RootStack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer independent={true}>
            <RootStack.Navigator>
                <RootStack.Screen name={Routes.home} component={HomeScreen} />
                <RootStack.Screen name={Routes.browseBooks} component={BrowseBooks} />
                <RootStack.Screen name={Routes.bookDetails} component={BookDetails} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
