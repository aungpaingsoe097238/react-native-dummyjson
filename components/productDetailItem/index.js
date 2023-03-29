import { View, Text, StyleSheet } from "react-native";

const ProductDetailItem = ({ productDetailData }) => {
  return (
    <View style={ styles.container }>
      <Text>{ productDetailData.title }</Text>
      <Text>{ productDetailData.description }</Text>
      <Text>{ productDetailData.price }</Text>
      <Text>{ productDetailData.rating }</Text>
      <Text>{ productDetailData.category }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    padding : 30,
    paddingHorizontal: 15,
    borderWidth : 1,
    margin: 10,
    borderColor : '#88da9e',
    borderRadius: 15
  }
});


export default ProductDetailItem;
