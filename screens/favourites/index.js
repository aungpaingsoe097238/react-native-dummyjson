import { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Context } from "../../context";
import FavouritesItem from "../../components/favouriteItem";

const Favourites = () => {
  const { favourites } = useContext(Context);

  if (!favourites.length) {
    return (
      <View>
        <Text>No Favourites</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favourites}
        renderItem={({ item }) => <FavouritesItem favourites={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Favourites;
