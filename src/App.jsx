import Header from './components/Header';
import TitleSession from './components/TitleSession';
import About from './components/About';
import Title from './components/Title';
import Experience from './components/Experience';
import Skills from './components/Skills'; 
import Portfolio from './components/Portfolio';
import IconReact from './components/IconsTec/IconReact';
import IconDjango from './components/IconsTec/IconDjango';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='session'>
        <TitleSession Name={'Sobre'} />
        <TitleSession Name={'Experiências'} />
        <TitleSession Name={'Portfolio'} />
      </div>
      <Title 
        Title={'Me chamo Luiz Gustavo,'} 
        Id={'Sobre'}/>
      <About />
      <Title 
        Title={'Minhas experiências profissionais e acadêmicas'} 
        Id={'Sobre'}/>
      <Experience experienceName={'Frente de caixa'} 
        experienceLocation={'Restaurante Irineu’s'} 
        experienceDate={'Jun 2020 - Jul 2022'} 
        experienceDescription={'Aos 15 anos comecei a trabalhar como caixa no restaurante de praia até os 17 anos, desenvolvi habilidades sociais ... .'}/>
      <Experience 
        experienceName={'Técnico em desenvolvimento de sistemas '} 
        experienceLocation={'SENAI CETAF'} 
        experienceDate={'Jan 2021 - Dez 2022'} 
        experienceDescription={'No curso técnico de desenvolvimento de sistemas, aprendi a programar com a linguagem C# da Microsoft, utilizando também o banco de dados Sql Server, e as principais tecnologias Web como HTML, CSS e JavaScript.'}/>
      <Experience 
        experienceName={'Sistemas de informação '} 
        experienceLocation={'UNIT'} 
        experienceDate={'Fev 2023 - Dez 2026'} 
        experienceDescription={'Capaz de analisar problemas reais; conceber, planejar, desenvolver e gerenciar soluções computacionais adequados ao contexto tecnológico, considerando os aspectos organizacionais e humanos, fundamentados em sólidos conhecimentos de computação.'}/>
      <Title Title={'Skills'} />
      <Skills 
        skillsName={'Inglês'} 
        skillsDescription={'Fiz curso de inglês em uma escola ...'} 
        skillsPoints={'5'}/>
      <Skills 
        skillsName={'Back-end'} 
        skillsDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} 
        skillsPoints={'4'}/>
      <Skills 
        skillsName={'Front-end'} 
        skillsDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} 
        skillsPoints={'6'}/>
      <Skills 
        skillsName={'Web'} 
        skillsDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} 
        skillsPoints={'6'}/>
      <Title Title={'Portfolio'} />
      <Portfolio 
        portfolioName={'To-do'} 
        portfolioLink={'#'} 
        portfolioDescription={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} 
        portfolioTec={(<IconReact />, <IconDjango />)}/>
        <Portfolio 
        portfolioName={'Netflix'} 
        portfolioLink={'#'} 
        portfolioDescription={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} 
        portfolioTec={(<IconReact />, <IconDjango />)}/>
        <Portfolio 
        portfolioName={'Sistema de restaurante'} 
        portfolioLink={'#'} 
        portfolioDescription={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} 
        portfolioTec={(<IconReact />, <IconDjango />)}/>
    </div>
  );
}

export default App;
