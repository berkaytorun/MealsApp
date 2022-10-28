import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import List from '../components/List';
import MealDetails from '../components/MealDetails';
import SubTitle from '../components/SubTitle';
import { MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';

function MealDetailScreen({ route, navigation }) {
    const { mealId } = route.params;
    const currentMeal = MEALS.find((meal) => meal.id === mealId);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        icon='ios-star'
                        color='#fff'
                        onPress={() => console.log('favorite')}
                    />
                );
            },
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: currentMeal.imageUrl }}
            />
            <Text style={styles.title}>{currentMeal.title}</Text>
            <MealDetails
                style={styles.details}
                textStyle={styles.textStyle}
                duration={currentMeal.duration}
                complexity={currentMeal.complexity}
                affordability={currentMeal.affordability}
            />

            <ScrollView
                style={styles.listContainer}
                showsVerticalScrollIndicator={false}
            >
                <SubTitle text='Ingredients' />
                <List data={currentMeal.ingredients} />
                <SubTitle text='Steps' />
                <List data={currentMeal.steps} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 16,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        margin: 8,
        color: '#33d',
    },
    textStyle: {
        color: '#33d',
    },
    listContainer: {
        width: '90%',
    },
});

export default MealDetailScreen;
