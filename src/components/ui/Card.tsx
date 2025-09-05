import { View, ViewProps } from "react-native"; import { useTheme } from "../../theme/ThemeProvider";
export default function Card({style,...p}:ViewProps){ const t=useTheme(); return <View {...p} style={[{backgroundColor:t.color.surface,borderRadius:t.radius.md,padding:t.space.md,borderWidth:1,borderColor:t.color.border},style]} />; }
