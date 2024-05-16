import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import Navigator from './navigator';
import Realm, {ObjectSchema} from 'realm';
import {Text} from 'react-native';
import {DBContext} from './context';
import {RealmProvider} from '@realm/react';

// export class FeelingSchema extends Realm.object<FeelingSchema> {
//   static schema: ObjectSchema = {
//     name: 'Feeling',
//     properties: {
//       _id: 'int',
//       emotion: 'string',
//       message: 'string',
//     },
//     primaryKey: '_id',
//   };
// }

const App = (): React.JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [realm, setRealm] = useState<Realm | null>(null);
  const startLoading = async () => {
    const connection = await Realm.open({
      path: 'DainDairyDB',
      schema: [FeelingSchema],
    });
    setRealm(connection.schemaListeners.listeners);
    onFinish();
    // console.log('realm', connection?.schemaExtras?.Feeling);
  };
  const onFinish = () => setLoading(false);

  if (loading) {
    return <Text>로딩 중</Text>;
  }

  useEffect(() => {
    startLoading();
  }, []);

  // return (
  //     <RealmProvider schema={[FeelingSchema]}>
  //       <NavigationContainer>
  //         <Navigator />
  //       </NavigationContainer>
  //     </RealmProvider>
  // );
  return (
    <DBContext.Provider value={realm}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </DBContext.Provider>
  );
};

export default App;
