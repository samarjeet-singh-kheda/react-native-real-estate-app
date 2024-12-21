import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text className="text-3xl font-bold bg-accent-100">
        Welcome to Restate
      </Text>

      <Link href="/sign-in" className="font-rubik-extrabold">
        Sign In
      </Link>
      <Link href="/explore" className="font-rubik font-extrabold">
        Explore
      </Link>
      <Link href="/profile" className="font-bold">
        Profile
      </Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/789">Properties</Link>
    </View>
  );
}
