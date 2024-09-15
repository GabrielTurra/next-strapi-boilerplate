import * as S from './main.styles';

interface MainProps {
  title: string;
  description: string;
}

const Main = ({ title, description }: MainProps) => (
  <S.Wrapper>
    <h1>{title}</h1>
    <p>{description}</p>
  </S.Wrapper>
);

export default Main;
