import { View, Text, StyleSheet } from "react-native";

const FavouriteItem = ({ favourites }) => {
  return (
    <View style={ styles.container }>
      <Text>{favourites.title}</Text>
      <Text>{favourites.reason}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 12,
    marginBottom: 10,
    backgroundColor: "yellow",
    padding : 20
  }
});

export default FavouriteItem;
