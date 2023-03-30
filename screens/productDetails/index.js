import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Button,
  Modal,
  Pressable,
  TextInput
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import ProductDetailItem from "../../components/productDetailItem";
import { Context } from "../../context";

const ProductDetails = () => {
  const route = useRoute();
  const { productId } = route.params;

  const [productDetailData, setProductDetailData] = useState({});
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [reason, setReason] = useState("");
  const { addFavourites, favourites } = useContext(Context);

  const navigation = useNavigation();

  const handleModal = () => {
    setModalVisible(true);
  };

  const handleChangeText = (enteredText) => {
    setReason(enteredText);
  };

  const isCurrentItemIsPresentInFavouriteItemArray =
    favourites && favourites.length > 0
      ? favourites.filter((item) => item.id === productId)
      : false;
      
  useEffect(() => {
    async function getProduct() {
      setLoading(true);
      const ref = await fetch(`https://dummyjson.com/products/${productId}`);
      const finalResult = await ref.json();
      if (finalResult) {
        setLoading(false);
        setProductDetailData(finalResult);
      }
    }
    getProduct();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button onPress={handleModal} title={ isCurrentItemIsPresentInFavouriteItemArray.length > 0 ? 'unfavourite' : 'addfavourite'  }/>;
      }
    });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color={"red"} />;
  }

  return (
    <View>
      <ProductDetailItem productDetailData={productDetailData} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.modalInputText}
              placeholder="why you like this product?"
              onChangeText={handleChangeText}
              value={reason}
            />
            <View style={styles.buttonWrapper}>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => {
                  addFavourites(productId, reason);
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Add</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonWrapper: {
    flexDirection: "row"
  },
  button: {
    padding: 10,
    elevation: 2,
    marginEnd: 5
  },
  buttonOpen: {
    backgroundColor: "#F194FF"
  },
  buttonClose: {
    backgroundColor: "#2196F3"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  modalInputText: {
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  }
});

export default ProductDetails;
