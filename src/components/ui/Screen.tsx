import { SafeAreaView, View } from "react-native"; import { useTheme } from "../../theme/ThemeProvider";
export default function Screen({children}:{children:React.ReactNode}){ const t=useTheme(); return(<SafeAreaView style={{flex:1,backgroundColor:t.color.bgLight}}><View style={{flex:1,padding:t.space.lg}}>{children}</View></SafeAreaView>); }
