import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // ✅ ต้องมี

import Profile from './Component/Screen/Profile'; // ✅ อย่าลืมตรวจสอบชื่อให้ถูกว่า Frofile หรือ Profile

const Tab = createBottomTabNavigator(); // ✅ เพิ่มบรรทัดนี้


export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={Profile} options= {{ headerShown: false }}  /> 
    
      </Tab.Navigator>
    </NavigationContainer>
  );
}
