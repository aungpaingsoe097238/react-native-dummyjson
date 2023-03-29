import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { View, Text, FlatList, ActivityIndicator, ScrollView } from "react-native";
import ProductListItem from "../../components/productListItem";
import { Context } from "../../context";

const ProductListing = () => {
  const { loading, products } = useContext(Context);
  const navigation = useNavigation()

  if (loading) {
    <ActivityIndicator size="large" color={"red"}></ActivityIndicator>;
  }

  const handleOnPress = (getId) => {
    navigation.navigate('productdetails',{
      productId : getId
    });
  }

  return (
    <View>
      <ScrollView>
      <FlatList
        data={products.products}
        renderItem={(itemData) => <ProductListItem onPress={ () => handleOnPress(itemData.item.id) } title={itemData.item.title}  />}
        keyExtractor={(itemData) => itemData.id}
        numColumns={2}
      />
      </ScrollView>
    </View>
  );
};

export default ProductListing;
