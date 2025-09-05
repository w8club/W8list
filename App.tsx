import "react-native-gesture-handler";
import { ThemeProvider } from "./src/theme/ThemeProvider";
import RootNavigator from "./src/navigation/RootNavigator";
export default function App(){ return(<ThemeProvider><RootNavigator/></ThemeProvider>); }
