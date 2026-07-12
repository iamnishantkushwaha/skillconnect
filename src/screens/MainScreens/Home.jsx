import { View, Text, Pressable ,FlatList} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dot } from 'lucide-react-native';
import { Heart } from 'lucide-react-native';
import { Bell } from 'lucide-react-native';
import { Search } from 'lucide-react-native';
import { UserRound } from 'lucide-react-native';

const Home = () => {
  
  const filters = ['For you', 'Nearby', 'Following', 'Live Now'];
  const [selectedfilters,setselectedfilters]=useState([])
  const [posts,setposts] = useState([
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
    },
  ]);

  const handlefilter=(item)=>{
    if(!selectedfilters.includes(item))
    {
         setselectedfilters([...selectedfilters,item])
    }
    else{
      setselectedfilters(selectedfilters.filter(selitems=>selitems!=item))
    }
  }
  const handlelike = id => {
    setposts(posts.map(item =>
      item.id == id
        ? {
            ...item,
            isliked: !item.isliked,
            likes: item.isliked ? item.likes - 1 : item.likes+1,
          }
        : item
    ))
  };

  
  return (
    <SafeAreaView className="flex-1 bg-cream">
      <View className="px-6 py-4 mb-2 border-b border-black flex-row justify-between items-center">
    <Text className="text-2xl font-bold">SkillCircle</Text>

    <View className="flex-row gap-4">
     <Search />
      <Bell />
      <UserRound />
    </View>
  </View>
      <FlatList data={posts}
      
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      className='flex-column  gap-4'
      ListHeaderComponent={
      <View className="px-6 flex-column gap-4">
        <View className="h-12 gap-3 mt-3 justify-center flex-row  ">
          {filters.map((item, idx) => (
            <Pressable onPress={()=>handlefilter(item)} key={idx} className={`px-2 py-1 text-center h-10  rounded-full border-black border-2 ${selectedfilters.includes(item)?"bg-black ":"bg-transparent"} `}>
             
              <Text  className={`${selectedfilters.includes(item)?"text-white":"text-black"} font-medium`}>
                {item}
              </Text>
            </Pressable>
          ))}
        </View>
        
        <View className="bg-red-300 rounded-lg py-2 px-4 justify-center ">
          <Text className="font-medium text-red-800">
            Riya's Figma session is filling up
          </Text>
          <Text className="font-light text-red-600">
            2 of 4 spots left · Saturday
          </Text>
        </View>
        </View>} 
        renderItem={({item:post})=>(
        <View className='flex-column px-6 mt-3 pb-3 gap-5'>
         
            <View className='bg-white p-4 gap-2 rounded-2xl '>
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
                  <Text className="font-medium text-orange-500">Book</Text>
                </Pressable>
              </View>

              <Text className="font-normal">
                Offering 1:1 Figma sessions for beginners — auto-layout,
                components, and prototyping from scratch. Bring a project idea
                and we'll build it together.
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

              <View className='border-t border-black'>
                <View className='flex-row gap-1 pt-2'>
                  <Pressable
                    onPress={() => {
                      handlelike(post.id);
                    }}
                  >
                    {post.isliked ? (
                      <Heart size={20} fill="red" color="red" />
                    ) : (
                      <Heart size={20}/>
                    )}
                  </Pressable>
                  <Text>{post.likes}</Text>
                </View>
              </View>
            </View>
        
        </View>
      )}/>
    </SafeAreaView>
  );
};

export default Home;
