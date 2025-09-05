import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ComingSoon from "../components/ui/ComingSoon"; const Stack=createNativeStackNavigator();
export default function Navigator(){
  return(<Stack.Navigator>
    <Stack.Screen name="Root">{()=><ComingSoon title="Replace me with real screens" />}</Stack.Screen>
  </Stack.Navigator>);
}
