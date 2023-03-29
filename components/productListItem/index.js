import { View, Text, Pressable, StyleSheet } from "react-native";

const ProductListItem = ({ title, onPress }) => {
  return (
    <View style={styles.productOutlineItemContainer}>
      <Pressable android_ripple={{color:'#cad346'}} onPress={onPress} style={styles.productInnerItemContainer}>
        <View>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  productOutlineItemContainer: {
    flex: 1,
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'green'
  },
  productInnerItemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  title : {
    fontWeight: "bold",
    fontSize: 12
  }
});

export default ProductListItem;
