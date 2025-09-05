import Screen from "./Screen"; import Text from "./Text";
export default function ComingSoon({title}:{title:string}){ return(<Screen><Text variant="h1">{title}</Text><Text variant="muted" style={{marginTop:8}}>Stubbed. Design first, wire later.</Text></Screen>); }
