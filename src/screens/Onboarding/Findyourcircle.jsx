import React from 'react';
import { MapPin } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TextInput, Pressable } from 'react-native';
const Findyourcircle = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 py-6 pt-20  flex-column justify-between items-center">
        <View className="flex-1 gap-8">
          <View>
            <Text className="px-4 text-3xl text-center font-bold">
              Where are you based?
            </Text>
            <Text className="text-md font-semibold text-center">
              We'll show you teachers and sessions nearby.
            </Text>
          </View>
          <View className="relative">
            {' '}
            <TextInput
              className="border px-3 text-black rounded-2xl border-gray-400 flex-row justify-between"
              placeholder="Enter Location"
              placeholderTextColor="gray"
              
            />
            <View className="absolute top-3 right-3 "><MapPin  size={20} strokeWidth={2} color="gray" /></View>
          </View>
        </View>
        <View className="w-full items-center  pt-5   justify-center border-t border-gray-400">
          
          <Pressable onPress={()=>navigation.navigate('Signup')} className=" w-[85%] py-4  bg-orange-500 rounded-2xl">
            <Text className="text-white text-center text-xl font-semibold">
             Find my circle
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Findyourcircle;
