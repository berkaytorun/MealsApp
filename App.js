import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#acfc' },
                headerTintColor: '#fff',
                sceneContainerStyle: { backgroundColor: '#fcc' },
                drawerContentStyle: { backgroundColor: '#cfc' },
                drawerInactiveTintColor: '#a5f',
                drawerActiveTintColor: '#f11',
            }}
        >
            <Drawer.Screen
                name='Meal Categories'
                component={CategoriesScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons
                            name='list'
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name='Favorites'
                component={FavoritesScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons
                            name='star'
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};

export default function App() {
    return (
        <>
            <StatusBar style='light' />
            <FavoritesContextProvider>
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
            </FavoritesContextProvider>
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
