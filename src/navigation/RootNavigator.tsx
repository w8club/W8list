import { NavigationContainer } from "@react-navigation/native"; import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OrganizerNavigator from "./OrganizerNavigator"; import AttendeeNavigator from "./AttendeeNavigator"; import SocialNavigator from "./SocialNavigator";
const Tab=createBottomTabNavigator();
export default function RootNavigator(){ return(<NavigationContainer><Tab.Navigator screenOptions={{headerShown:false}}><Tab.Screen name="Organizer" component={OrganizerNavigator}/><Tab.Screen name="Discover" component={AttendeeNavigator}/><Tab.Screen name="Social" component={SocialNavigator}/></Tab.Navigator></NavigationContainer>); }
