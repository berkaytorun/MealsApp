import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#acfc' },
                headerTintColor: '#fff',
                sceneContainerStyle: { backgroundColor: '#fcc' },
            }}
        >
            <Drawer.Screen
                name='Meal Categories'
                component={CategoriesScreen}
            />
            <Drawer.Screen
                name='Favorites'
                component={FavoritesScreen}
            />
        </Drawer.Navigator>
    );
};

export default function App() {
    return (
        <>
            <StatusBar style='light' />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: { backgroundColor: '#acfc' },
                        headerTintColor: '#fff',
                        contentStyle: { backgroundColor: '#fcc' },
                    }}
                    initialRouteName='Meal Categories'
                >
                    <Stack.Screen
                        name='Categories Drawer'
                        component={DrawerNavigator}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='Meals Overview'
                        component={MealsOverviewScreen}
                    />

                    <Stack.Screen
                        name='Meal Detail'
                        component={MealDetailScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
