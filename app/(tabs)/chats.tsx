import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import Matches from "../components/matches";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { chatData } from "../../data";
import { useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  ChatDetails: {
    chat: string;
    imgUrl: string;
    name: string;
    age: number;
  };
};

type ChatData = {
  id: number;
  name: string;
  age: number;
  chat: string;
  imgUrl: string;
  lastMessage: string;
  timeSent: string;
  isOnline: boolean;
};
const android = Platform.OS === "android";

export default function ChatScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      className=""
      style={{
        paddingTop: android ? hp(3) : 0,
      }}
    >
      <View className="px-4">
        <Text className="uppercase font-semibold text-white tracking-wider">
          Matches
        </Text>
      </View>

      <View className="px-4">
        <View className="border-b border-neutral-300 py-4">
          <Text className="uppercase font-semibold text-white tracking-wider ">
            CHAT
          </Text>
        </View>

        <FlatList
          data={chatData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="w-full py-3 items-center flex-row border-b  border-neutral-300"
              //   onPress={() =>
              //     navigation.navigate("ChatDetails", {
              //       chat: item.chat,
              //       imgUrl: item.imgUrl,
              //       name: item.name,
              //       age: item.age,
              //     })
              //   }
            >
              {/* Avatar */}
              <View
                className="w-[17%] justify-center"
                style={{
                  width: hp(7),
                  height: hp(7),
                }}
              >
                <Image
                  source={item.imgUrl}
                  style={{
                    width: "90%",
                    height: "90%",
                  }}
                  className="rounded-full"
                />
              </View>

              {/* Information */}
              <View
                className="w-[82%]"
                style={{
                  height: hp(6),
                }}
              >
                <View className="flex-row justify-between items-center">
                  <View className="flex-row justify-center">
                    <View className="flex-row">
                      <Text className="font-bold text-base  ">
                        {item.name} {", "}
                      </Text>
                      <Text className="font-bold text-base mr-1">
                        {item.age}
                      </Text>
                    </View>
                    {item.isOnline && (
                      <View className=" justify-center items-center">
                        <View className="w-2 h-2 bg-[#F26322] rounded-full ml-1 justify-center items-center"></View>
                      </View>
                    )}
                  </View>
                  <Text className="text-sm tracking-tight">
                    {item.timeSent}
                  </Text>
                </View>
                <View>
                  <Text className="font-semibold text-xs text-neutral-500">
                    {item.lastMessage.length > 45
                      ? item.lastMessage.slice(0, 45) + "..."
                      : item.lastMessage}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
