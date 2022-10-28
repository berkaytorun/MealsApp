import { CATEGORIES } from '../data/dummy-data';
import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

function CategoriesScreen({ navigation }) {
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
                <CategoryGridTile
                    color={itemData.item.color}
                    title={itemData.item.title}
                    onNavigate={() => {
                        navigation.navigate('Meals Overview', {
                            categoryId: itemData.item.id,
                            title: itemData.item.title,
                        });
                    }}
                />
            )}
            numColumns={2}
        />
    );
}

export default CategoriesScreen;
