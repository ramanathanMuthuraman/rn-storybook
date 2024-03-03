import {Text} from 'react-native';
import styled from 'styled-components/native';
import theme from 'styled-theming';

export type MyButtonProps = {
  onPress: () => void;
  text: string;
};

const ButtonTheme = theme('name', {
  light: {
    bg: '#ddd',
  },
  dark: {
    bg: '#999',
  },
});

const Btn = styled.TouchableOpacity`
  background-color: ${props => ButtonTheme(props).bg};
`;

export const MyButton = ({onPress, text}: MyButtonProps) => {
  return (
    <Btn onPress={onPress} activeOpacity={0.8}>
      <Text>{text}</Text>
    </Btn>
  );
};
