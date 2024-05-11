import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Write from './screens/Write';

const Tabs = createNativeStackNavigator();

const Navigator = (): React.JSX.Element => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Wirte" component={Write} />
    </Tabs.Navigator>
  );
};

export default Navigator;
