import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-lg font-bold text-blue-500">Hi, press the button to find out more about extinct animals! </Text>

          <Button
        title="Learn About Extinct Animals"
        onPress={() => router.push("/animalsapi")}
      />
    </View>
    
  );
}

