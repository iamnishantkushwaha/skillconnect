import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { View, Text, FlatList, Pressable, Image } from 'react-native';

import { Heart } from 'lucide-react-native';

const Profileheader = ({ isActive, setisActive }) => {
  const [skills, setskills] = useState([
    'React',
    'Nodejs',
    'Java',
    'Expressjs',
  ]);

  return (
    <View>
       <View className="px-6 py-4 mb-2 border-b border-black flex-row justify-between items-center">
    <Text className="text-2xl font-bold">Profile</Text>

    
  </View>
      <View className="px-5 py-7 items-center gap-5">
        <View>
          <View className="flex-row gap-2">
            <View className="bg-green-600  p-8 rounded-full"></View>
            <View className="font-semibold text-black">
              <Text className="text-xl font-bold">Rahul Sharma</Text>
              <Text className="font-normal text-gray-500">
                Bhopal , Joined June 2025
              </Text>
            </View>
          </View>
          <Text className=" ml-10 pl-8 text-gray-400 font-normal">
            Fullstack dev and photography enthusiast. Teaching React and
            Lightroom editing. Open to skill trades.
          </Text>
        </View>
        <View className="flex-row px-5 justify-center items-center gap-4">
          <View>
            <Text className="text-black font-bold text-xl">238</Text>
            <Text className="font-normal text-gray-500">Followers</Text>
          </View>
          <View>
            <Text className="text-black text-xl font-bold">67</Text>
            <Text className="font-normal text-gray-500">Following</Text>
          </View>
          <View>
            <Text className="text-black text-xl font-bold">67</Text>
            <Text className="font-normal text-gray-500">Session</Text>
          </View>
          <View>
            <Text className="text-black text-xl font-bold">4.8</Text>
            <Text className="font-normal text-gray-500">Review</Text>
          </View>
        </View>
        <View className="flex-row gap-5 justify-center">
          <Pressable className="bg-white border px-10  py-2 rounded-lg border-black ">
            <Text className="font-bold">Edit Profile</Text>
          </Pressable>
          <Pressable className="bg-white  border px-10 py-2 rounded-lg border-black ">
            <Text className="font-bold">Share</Text>
          </Pressable>
        </View>
      </View>
      <View className="border-y border-gray-300">
        <View className="px-5 py-3 gap-3 ">
          <Text className="text-gray-400">SKILLS OFFERED</Text>
          <View className="flex-row gap-3 pb-3">
            {skills.map((skill, idx) => {
              return (
                <Text
                  key={idx}
                  className="bg-red-300 px-3 py-0.5 rounded-full text-red-900 font-medium"
                >
                  {skill}
                </Text>
              );
            })}
          </View>
        </View>
      </View>
      <View className="flex-row pt-2 border-gray-300 border-b justify-evenly items-center ">
        <Pressable
          onPress={() => setisActive(true)}
          className={`justify-center w-[50%] pb-2 items-center ${
            isActive ? 'border-b-2 border-red-900 ' : 'border-0'
          }`}
        >
          <Text className="font-semibold text-xl  text-red-900">Post</Text>
        </Pressable>
        <Pressable
          onPress={() => setisActive(false)}
          className={`justify-center pb-2  items-center w-[50%] ${
            !isActive ? 'border-b-2  border-red-900' : 'border-0'
          }`}
        >
          <Text className="font-semibold  text-xl  text-red-900">Saved</Text>
        </Pressable>
      </View>
    </View>
  );
};

const Renderposts = ({ item: post, handlelike }) => {
  return (
    <View className="bg-white mx-5  flex-column p-3 mt-4 mb-2 gap-2 flex-1  rounded-xl">
      <Text>{post.description}</Text>
      {post.Image ? (
        <Image
          source={{ uri: post.Image }}
          className="h-40 w-full rounded-xl"
          resizeMode="cover"
        />
      ) : null}
      <View className="border-t border-gray-300">
        <View className="flex-row gap-1 pt-2">
          <Pressable
            onPress={() => {
              handlelike(post.id);
            }}
          >
            {post.isliked ? (
              <Heart size={20} fill="red" color="red" />
            ) : (
              <Heart size={20} />
            )}
          </Pressable>
          <Text>{post.likes}</Text>
        </View>
      </View>
    </View>
  );
};
const Profile = () => {
  const [isActive, setisActive] = useState(true);
  const [savedposts, setsavedposts] = useState();
  const [posts, setposts] = useState([
    {
      id: 1,
      name: 'Riya Sharma',
      skill: 'UI/UX Design',
      rating: 4.9,
      time: '2h ago',
      description:
        "Offering 1:1 Figma sessions for beginners — auto-layout, components, and prototyping from scratch. Bring a project idea and we'll build it together.",
      tags: ['figma', 'ux design', 'beginner friendly'],
      likes: 24,
      isliked: false,
      comments: 8,
      Image:
        'https://images.unsplash.com/photo-1783638204039-110e6856aee7?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 2,
      name: 'Karan Mehta',
      skill: 'Guitar',
      rating: 4.7,
      time: '5h ago',
      description:
        'Free group jam session this Saturday, 4 PM at BKT Park. Intermediate players welcome — bring your own instrument.',
      tags: ['guitar', 'group session', 'free'],
      likes: 41,
      isliked: false,
      comments: 15,
      Image: '',
    },
    {
      id: 3,
      name: 'Nisha Joshi',
      skill: 'Cooking',
      rating: 5.0,
      time: '1d ago',
      description:
        'Learn simple home-style Indian recipes in a hands-on cooking workshop.',
      tags: ['cooking', 'workshop', 'beginner'],
      likes: 32,
      isliked: false,
      comments: 11,
      Image: '',
    },
  ]);

  const handlelike = id => {
    setposts(
      posts.map(item =>
        item.id == id
          ? {
              ...item,
              isliked: !item.isliked,
              likes: item.isliked ? item.likes - 1 : item.likes + 1,
            }
          : item,
      ),
    );
  };
  return (
    <SafeAreaView className="flex-1 ">
      <FlatList
        data={isActive ? posts : savedposts}
        ListHeaderComponent={
          <Profileheader isActive={isActive} setisActive={setisActive} />
        }
        renderItem={({ item }) => (
          <Renderposts item={item} handlelike={handlelike} />
        )}
        keyExtractor={item => item.id.toString()}
        className="gap-3 flex-1 flex-column "
        
      ></FlatList>
    </SafeAreaView>
  );
};

export default Profile;
