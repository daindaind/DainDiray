import React, {useState} from 'react';
import styled from 'styled-components/native';
import theme from '../theme';
import {Alert} from 'react-native';

const emotions = ['🥲', '🥰', '🥹', '😇', '🙂', '😞', '🧐'];

const Write = (): React.JSX.Element => {
  const [selectedEmotion, setSelectedEmotion] = useState('');
  const [feelings, setFeelings] = useState('');
  const onChangeText = (text: string) => setFeelings(text);
  const onEmotionPress = (face: string) => setSelectedEmotion(face);
  const onSubmit = () => {
    if (feelings === '' || selectedEmotion === '') {
      Alert.alert('', 'please complete form!');
    }
  };

  // console.log(selectedEmotion, feelings);

  return (
    <View>
      <Title>How do you feel today?</Title>

      <Emotions>
        {emotions.map((emotion, index) => (
          <Emotion
            $selected={emotion === selectedEmotion}
            key={index}
            onPress={() => onEmotionPress(emotion)}>
            <EmotionText>{emotion}</EmotionText>
          </Emotion>
        ))}
      </Emotions>

      <ContentInput
        returnKeyType="done"
        onSubmitEditing={onSubmit}
        value={feelings}
        onChangeText={onChangeText}
        placeholder="Write your feelings ..."
      />

      <Btn onPress={onSubmit}>
        <BtnText>Save</BtnText>
      </Btn>
    </View>
  );
};

const View = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  background-color: ${theme.colors.BG_COLOR};
`;

const Title = styled.Text`
  margin-top: 20px;

  font-size: 26px;
  font-weight: 500;
  color: ${theme.colors.TEXT_COLOR};
`;

const ContentInput = styled.TextInput`
  width: 85%;
  padding: 15px 20px;

  margin-top: 20px;

  border-radius: 40px;
  background-color: white;
`;

const Btn = styled.TouchableOpacity`
  ${theme.styles.FLEX_COLUMN_CENTER}
  width: 85%;
  padding: 10px;

  margin-top: 20px;

  border-radius: 40px;
  background-color: ${theme.colors.BTN_COLOR};
`;

const BtnText = styled.Text`
  color: black;
`;

const Emotions = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 85%;

  margin-top: 40px;
`;

const Emotion = styled.TouchableOpacity<{$selected: boolean}>`
  ${theme.styles.FLEX_COLUMN_CENTER}
  padding: 10px 8px;

  border-radius: 10px;
  background-color: ${props =>
    props.$selected ? '#FFDB5C' : `${theme.colors.BTN_COLOR}`};
`;

const EmotionText = styled.Text`
  font-size: 15px;
`;

export default Write;
