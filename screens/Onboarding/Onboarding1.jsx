import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Octicons from '@react-native-vector-icons/octicons';

const Onboarding1 = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1  justify-center gap-5 items-center">
        <View className="bg-orange-500  p-4 justify-center items-center rounded-3xl">
          <Octicons name="person" size={50} stokeWidth={1} color="white" />
        </View>
        <Text className="px-20 text-3xl text-center font-bold">
          Learn from people near you
        </Text>
        <Text className="px-10 text-xl text-center ">
          SkillCircle connects you with neighbors who teach what they know —
          guitar, code, pottery, anything.
        </Text>
       
        <Pressable className="px-20 w-[85%] py-4  bg-orange-500 rounded-2xl">
          <Text className="text-white text-center text-xl font-semibold">
            Get Started
          </Text>
        </Pressable>
        <Text className="text-xl font-semibold">I already have an account</Text>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding1;
