import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { Dot } from 'lucide-react-native';
import { Image } from 'react-native';
const PostDetails = ({ navigation, route }) => {
  console.log(route);

  const { post } = route.params;
  return (
    <SafeAreaView className="flex-1 bg-cream">
    <View className="px-6 py-4 mb-2 border-b border-black flex-row justify-center items-center">
    <Text className="text-2xl font-bold text-center">Posts</Text>


  </View>
      <ScrollView>
        <View className="flex-column px-6 mt-3 pb-3 gap-6">
          <View className='gap-4'>
            <View className="flex-row items-center justify-between">
              <View className="flex-row gap-2">
                <View className="p-6 rounded-full bg-green-300"></View>
                <View className="flex-column justify-center items-start">
                  <Text className="text-black font-semibold pl-3">
                    Riya Sharma
                  </Text>
                  <View className="flex-row gap-1">
                    <View className="flex-row h-6 justify-center items-center">
                      <Dot />
                      <Text>UI</Text>
                    </View>

                    <View className="flex-row h-6 justify-center items-center">
                      <Dot />
                      <Text>4.5</Text>
                    </View>
                    <View className="flex-row h-6 justify-center items-center">
                      <Dot />
                      <Text>2h ago</Text>
                    </View>
                  </View>
                </View>
              </View>
              <Pressable className="border-orange-500 h-10 border-2 rounded-full px-5 justify-center">
                <Text className="font-medium text-orange-500">Follow</Text>
              </Pressable>
            </View>

            <Text className="font-normal">
              Offering 1:1 Figma sessions for beginners — auto-layout,
              components, and prototyping from scratch. Bring a project idea and
              we'll build it together.
            </Text>
            <View className="flex-row gap-2 pb-2">
              {post.tags.map((item, idx) => (
                <View
                  key={idx}
                  className=" border-2 px-2 bg-neutral-100 border-gray-500  rounded-xl "
                >
                  <Text className="text-gray-500 font-medium">{item}</Text>
                </View>
              ))}
            </View>
           </View>
            <Image
              className="h-60 rounded-xl w-100"
              source={{
                uri: 'https://plus.unsplash.com/premium_photo-1781710760389-dbc993cf7e0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
              }}
            />
            <View className="bg-white p-4 gap-3 rounded-2xl">
              <View className="flex-row justify-between items-center border-b border-black">
                <Text className="text-black pb-2 font-medium">Format</Text>
                <Text className="text-black pb-2 font-semibold">
                  1:1 Video Call
                </Text>
              </View>
              <View className="flex-row justify-between items-center border-b border-black">
                <Text className="text-black pb-2 font-medium">Duration</Text>
                <Text className="text-black pb-2 font-semibold">
                  45 minutes
                </Text>
              </View>
              <View className="flex-row justify-between items-center border-b border-black">
                <Text className="text-black pb-2 font-medium">Price</Text>
                <Text className="text-black pb-2 font-semibold">
                  Rs600 per session
                </Text>
              </View>
              <View className="flex-row justify-between items-center ">
                <Text className="text-black font-medium">Next Opening</Text>
                <Text className="text-orange-800 font-semibold">
                  Sat 6 July ,10:00AM
                </Text>
              </View>
            </View>
            <View>
              <Text className='font-semibold text-xl flex-column pb-8'>Comments (8)</Text>
              {/*   //starting comments card */}
              <View>
                <View className='flex-row items-center'>
                  <View className="h-11 w-11 bg-red-500  rounded-full"></View>
                  <Text className='pl-3 text-md font-semibold'>Vikas singh</Text>
                </View>
                <Text className='pl-12'>
                  Took this last week, super clear explanations. Worth it.
                </Text>
                <View className='pl-11 pt-1 flex-row gap-3'>
                  <Text className='font-normal text-gray-400'>2h ago</Text>
                  <Pressable>
                    <Text className='text-gray-400 font-normal'>Reply</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        
      </ScrollView>
      <View className='h-20 border-gray-400  border-t justify-center items-center '><Pressable className=' py-4 px-8 rounded-xl w-60  bg-orange-400'><Text className='text-md text-center text-white font-semibold'>Book Session</Text></Pressable></View>
    </SafeAreaView>
  );
};

export default PostDetails;
