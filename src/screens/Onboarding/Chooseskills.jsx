import React from 'react';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Pressable } from 'react-native';
const Chooseskills = ({navigation}) => {
  let skills = [
    'Web Development',
    'App Development',
    'UI/UX Design',
    'Graphic Design',
    'Digital Marketing',
    'Video Editing',
  ];
  const [selected, setselected] = useState([]);
  const toggle = skill => {
    if (!selected.includes(skill)) {
      setselected([...selected, skill]);
    } else {
      setselected(selected.filter(item => item != skill));
    }
  };
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 py-6 pt-20  flex-column justify-between items-center">
        <View className="flex-1 gap-8">
          <View>
            <Text className="px-4 text-3xl text-center font-bold">
              What do you want to learn?
            </Text>
            <Text className="text-md font-semibold text-center">
              Pick a few — you can change these any time.
            </Text>
          </View>
          <View className=" flex-row gap-4 px-4 flex-wrap">
            {skills.map((skill, idx) => {
              return (
                <Pressable
                  key={idx}
                  onPress={() => {
                    toggle(skill);
                  }}
                  className={`py-3 px-4 border items-center justify-center ${
                    selected.includes(skill)
                      ? 'bg-orange-500'
                      : 'bg-transparent '
                  } border-gray-400 rounded-full`}
                >
                  <Text
                    numberOfLines={1}
                    className={`text-sm  font-semibold ${
                      selected.includes(skill) ? 'text-white' : 'text-black'
                    }`}
                  >
                    {skill}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>
        <View className="w-full items-center gap-2 flex-column justify-center border-t border-gray-400">
          <Text className="text-md font-semibold">
            {selected.length} selected
          </Text>
          <Pressable onPress={()=>navigation.navigate('FindYourCircle')} className=" w-[85%] py-4  bg-orange-500 rounded-2xl">
            <Text className="text-white text-center text-xl font-semibold">
              Continue
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Chooseskills;
