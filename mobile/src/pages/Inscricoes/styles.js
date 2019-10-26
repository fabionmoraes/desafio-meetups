import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  padding: 15px;
  align-items: center;
  flex: 1;
`;

export const Grid = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 0 },
})`
  margin-top: 20px;
`;

export const Bloco = styled.View`
  border-radius: 4px;
  background: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
  overflow: hidden;
`;

export const Imagem = styled.Image`
  align-self: stretch;
  height: 160px;
`;

export const Body = styled.View`
  padding: 13px;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 20px;
  padding-bottom: 13px;
  font-weight: bold;
`;

export const Linha = styled.Text`
  color: #999;
  padding-bottom: 10px;
  align-items: center;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  color: #fff;
`;
export const ButtonIcon = styled.TouchableOpacity``;

export const Text = styled.Text`
  font-size: 22px;
  color: #fff;
  margin-left: 5px;
  margin-right: 5px;
`;

export const Icone = styled.Text``;

export const Carrega = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Nda = styled.View`
  flex: 1;
  justify-content: center;
`;

export const GridT = styled.Text`
  color: #fff;
  font-size: 18px;
`;
