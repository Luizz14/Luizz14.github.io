import Header from './components/Header';
import Session from './components/Session';
import About from './components/About';
import Title from './components/Title';
import Experience from './components/Experience';
import Skills from './components/Skills'; 
import Portfolio from './components/Portfolio';
import IconReact from './components/IconsTec/IconReact';
import IconDjango from './components/IconsTec/IconDjango';

import Linguage from './Linguage';

import './App.css';
import { useEffect, useState } from 'react';

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDZe15oS0C0lJeQfo7MyGOkQqDPRT7i9vU",
//   authDomain: "portfolio-ea088.firebaseapp.com",
//   projectId: "portfolio-ea088",
//   storageBucket: "portfolio-ea088.appspot.com",
//   messagingSenderId: "844726668401",
//   appId: "1:844726668401:web:e09f339399845caaf45fd0",
//   measurementId: "G-MVE9FRS88D"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {

  const [language, setLanguage] = useState([])
  const [skills, setSkills] = useState([])
  const [portfolio, setPortfolio] = useState([])

    useEffect(() => {
        Linguage.getHeader().then(data => {
            setLanguage(data)
        })

        Linguage.getSkills().then(data => {
          setSkills(data)
        })

        Linguage.getPortfolio().then(data => {
          setPortfolio(data)
        })

        Linguage.getExperience
    }, [])

  return (
    <div className="App">
      <Header />
      <Session />
      <Title 
        Title={`Me chamo Luiz Gustavo,`}
        Id={'Sobre'}
      />
      <About />
      <Title 
        Title={'Minhas experiências profissionais e acadêmicas'} 
        Id={'Sobre'}/>
      <Experience experienceName={'Frente de caixa'} 
        experienceLocation={'Restaurante Irineu’s'} 
        experienceDate={'Jun 2020 - Jul 2022'} 
        experienceDescription={'Aos 15 anos comecei a trabalhar como caixa no restaurante de praia até os 17 anos, desenvolvi habilidades sociais ... .'}
      />
      
      {}

      <Title Title={'Skills'}
      Id={'Experiências'} 
      />

      {skills.map((item, key) => (
        <Skills 
          key={key}
          skillsName={item.SkillsName} 
          skillsDescription={item.Discription}
          skillsPoints={item.Points}
        />
      ))}
      <Title Title={'Portfolio'}
      Id={'Portfolio'} />
      {portfolio.map((item, key) => (
        <Portfolio 
        key={key}
        portfolioName={item.PortfolioName} 
        portfolioLink={item.Repository} 
        portfolioDescription={item.Discription} 
        portfolioTec={(<IconReact />)}
      />
      ))}
    </div>
  );
}

export default App;
