import { View, Text, StyleSheet, StatusBar } from "react-native";
import ProductListing from "./screens/productListing";
import Favourites from "./screens/favourites";
import ProductDetails from "./screens/productDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductContext from "./context";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{ title: "Product List" }}
        name="Productlisting"
        component={ProductListing}
      ></Tab.Screen>
      <Tab.Screen
        options={{ title: "Favourite List" }}
        name="favourites"
        component={Favourites}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <ProductContext>
      <View style={ styles.container }>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator 
            screenOptions={{
              headerStyle : {
                backgroundColor : '#fff'
              },
              contentStyle : {
                backgroundColor : 'yellow'
              }
            }}
          >
            <Stack.Screen
              options={{ headerShown: false }}
              name="bottomTabs"
              component={BottomTabs}
            />
            <Stack.Screen options={ { title: 'Product Detail' } } name="productdetails" component={ProductDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </ProductContext>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
