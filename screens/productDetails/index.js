import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import ProductDetailItem from "../../components/productDetailItem"

const ProductDetails = () => {
  const route = useRoute()
  const { productId } = route.params;

  const [productDetailData, setProductDetailData] = useState({});
  const [loading, setLoading] = useState(false);
  
  if (loading) {
    <ActivityIndicator size="large" color={"red"}></ActivityIndicator>;
  }
 
  useEffect(() => {
    async function getProduct() {
      setLoading(true);
      const ref = await fetch(`https://dummyjson.com/products/${productId}`); 
      const finalResult = await ref.json();
      if(finalResult){
        setLoading(false)
        setProductDetailData(finalResult)
      }
    }
    getProduct();
  }, []);

  return (
    <View>
      <ProductDetailItem productDetailData={ productDetailData } />
    </View>
  );
};


export default ProductDetails;
