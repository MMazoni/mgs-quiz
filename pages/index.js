import styled from 'styled-components'
import db from '../db.json';
import Header from '../src/components/Header'
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
      <QuizBackground backgroundImage={db.bg}>
        <Header/>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Header>
              <h1>Jogo</h1>
            </Widget.Header>
            <Widget.Content>
              <p>A história de Metal Gear Solid se passa em 2005, a sudoeste do Alasca no mar de Bering. Ela se foca em Solid Snake, um soldado ex-aposentado que se infiltra numa instalação de eliminação de armas nucleares para neutralizar uma ameaça terrorista da FOXHOUND, uma unidade de forças especiais.</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/MMazoni" />
      </QuizBackground>
  );
}
