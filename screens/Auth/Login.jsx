import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TextInput, Pressable } from 'react-native';
const Login = () => {
  return (
   <SafeAreaView className="flex-1">
      
        <View className="flex-1 w-full px-10 pt-10  gap-8">
          <View className='mt-10'>
            <Text className="text-3xl text-left font-bold">
              Welcome back
            </Text>
            <Text className="text-md  text-left">
              Sign in to your SkillCircle account.
            </Text>
          </View>
          <View className='w-full gap-4'>
            <View>
              <Text className='font-semibold'>Email</Text><TextInput
              className="border px-3 rounded-2xl border-gray-400 flex-row justify-between"
              placeholder="skills@skillconnect.com"
              placeholderTextColor="gray"
            /></View>
            <View>
              <Text className='font-semibold'>Password</Text><TextInput
              className="border px-3 rounded-2xl border-gray-400 flex-row justify-between"
              placeholder="**********" 
              placeholderTextColor="gray"
            /></View>
            
              <Text className='font-semibold text-orange-500 text-right'>Forgot Password?</Text>
             <Pressable className=" w-full py-4  bg-orange-500 rounded-2xl">
            <Text className="text-white text-center text-xl font-semibold">
             Sign in
            </Text>
          </Pressable>
          <View className='flex-row '>
            <View className='border-t w-[45%]   mt-2  border-gray-400'/>
            <Text className='text-gray-400 text-sm mx-2'>Or</Text>
            <View className='border-t w-[45%]  justify-center  mt-2  border-gray-400'/>
          </View>
          <Pressable className=" w-full py-4  bg-white rounded-2xl">
            <Text className="text-black text-center text-xl font-semibold">
             Sign in with Google
            </Text>
          </Pressable>
         <View className='flex-row justify-center'><Text>New here? </Text><Text className='text-orange-500'>Create account</Text></View> 
          </View>
        </View>
          
         
        
      
    </SafeAreaView>
  )
}

export default Login