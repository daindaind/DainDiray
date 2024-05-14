import React from 'react';
import styled from 'styled-components/native';
import theme from '../theme';
import PlusIcon from 'react-native-vector-icons/Entypo';
import {StyleSheet, Text} from 'react-native';

const Home = ({
  navigation: {navigate},
}: {
  navigation: any;
}): React.JSX.Element => {
  return (
    <View>
      <Text style={styles.Title}>Home</Text>

      <Btn onPress={() => navigate('Write')}>
        <PlusIcon name="plus" size={32} color="black" />
      </Btn>
    </View>
  );
};

export default Home;

const View = styled.View`
  flex: 1;
  position: relative;
  padding: 40px;
  background-color: ${theme.colors.BG_COLOR};
`;
const Btn = styled.TouchableOpacity`
  ${theme.styles.FLEX_COLUMN_CENTER}
  width: 70px;
  height: 70px;

  position: absolute;
  bottom: 0;
  right: 0;

  margin-bottom: 60px;
  margin-right: 40px;

  border-radius: 100px;
  background-color: ${theme.colors.BTN_COLOR};
`;
// const BtnText = styled.Text``;
// const Title = styled.Text`
//   margin-top: 40px;

//   color: ${theme.colors.TEXT_COLOR};
//   font-size: 50px;
//   font-family: MYArirang;
// `;

const styles = StyleSheet.create({
  Title: {
    marginTop: 40,

    color: `${theme.colors.TEXT_COLOR}`,
    fontSize: 50,
    fontFamily: 'MYArirang_gothic',
  },
});
