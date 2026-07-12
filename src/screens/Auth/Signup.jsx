import React from 'react'
import {View,Text,TextInput,Pressable} from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
const Signup = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1">
      
        <View className="flex-1 w-full px-10 pt-10  gap-8">
          <View className='mt-10'>
            <Text className="text-3xl text-left font-bold">
             Create your account
            </Text>
            <Text className="text-md  text-left">
              Start teaching or learning in minutes.
            </Text>
          </View>
          <View className='w-full gap-4'>
            <View className='gap-1'>
              <Text className='font-semibold'>FullName</Text><TextInput
              className="border px-3 rounded-2xl border-gray-400 flex-row justify-between"
              placeholder="Nishant"
              placeholderTextColor="gray"
            /></View>
           <View className='gap-1'>
              <Text className='font-semibold'>Email</Text><TextInput
              className="border px-3 rounded-2xl border-gray-400 flex-row justify-between"
              placeholder="skills@skillconnect.com"
              placeholderTextColor="gray"
            /></View>
           <View className='gap-1'>
              <Text className='font-semibold'>Password</Text><TextInput
              className="border px-3 rounded-2xl border-gray-400 flex-row justify-between"
              placeholder="**********" 
              placeholderTextColor="gray"
            /></View>
             
              <Text className='font-medium text-gray-400 '>By continuing, you agree to SkillCircle's Terms and Privacy Policy.</Text>
             <Pressable  onPress={()=>navigation.navigate('Home')} className=" w-full py-4  bg-orange-500 rounded-2xl">
            <Text className="text-white text-center text-xl font-semibold">
             Create Account
            </Text>
          </Pressable>
         
          
         <View className='flex-row  justify-center'><Text className='font-medium'>Already have an account? </Text><Text onPress={()=>navigation.navigate('Login')} className='text-orange-500 font-medium'>Sign in </Text></View> 
          </View>
        </View>
          
         
        
      
    </SafeAreaView>
  )
}

export default Signup