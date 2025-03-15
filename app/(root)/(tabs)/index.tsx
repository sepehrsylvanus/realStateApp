import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-lg my-10">Welcome to sani state</Text>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/explore">ex</Link>
      <Link href="/profile">Sign In</Link>
      <Link href="/properties/1">Sign In</Link>
    </View>
  );
}
