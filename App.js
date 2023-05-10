import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import {Provider} from 'react-redux'

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScren";
import FavoritesScreen from "./screens/FavoritesScreen";
// import FavoritesContextProvider from "./store/context/favorites-context";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            {/* <Stack.Screen
            name="Meals Categories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          /> */}
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                // title: "All Categories",
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Meals Overview"
              component={MealsOverviewScreen}
              // options={({route, navigation}) => {
              //   const catId = route.params.categoryId
              //   return {
              //     title: catId
              //   };
              // }} //getting these params auto
              /* this approach to make the navigation data dynamic one approach */
              //the second approach is from the MealOverviewScreen itself check useLayoutEffect there
            />

            <Stack.Screen name="Meal Details" component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      {/* </FavoritesContextProvider> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
