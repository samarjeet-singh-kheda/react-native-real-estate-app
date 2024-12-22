import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

function Properties() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Properties ID:-{id}</Text>
    </View>
  );
}

export default Properties;
