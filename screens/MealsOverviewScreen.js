import { useLayoutEffect } from "react";
// import { useRoute } from "@react-navigation/native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../component/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  //we get {navigation} and {route} prop in any screen that is register in the navigation Stack
  /*   const rout = rout.params.categoryId 
 either ways this or the up will work 
 (whether passing the {route} prop or using a hock imported) */

  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  //Title in the navigation bar after retrieving the catId and then get the title out from there
  useLayoutEffect(() => { 
    /* diff useLayoutEffect vs useEffect is that useLayout render the title symiltanously with the other screen components,
     so that there will be no glitch in the title which is loaded after the components have been loaded 
     and then you will see something else for a fraction of a second*/
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals}/>
  
}

export default MealsOverviewScreen;

