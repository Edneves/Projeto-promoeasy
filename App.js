import 'react-native-gesture-handler';
import React, {Fragment} from 'react';
import TabNavigator from './src/components/navigator/TabNavigator'
import Header from './src/components/Header'




export default function App() {
  return (
    <Fragment>
      <Header />
      <TabNavigator />
    </Fragment>
  );
}


