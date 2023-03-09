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
import English from './English';

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

  const [language, setLanguage] = useState(English)
  const [header, setHeader] = useState([])
  const [session, setSession] = useState([])
  const [experience, setExperience] = useState([])
  const [skills, setSkills] = useState([])
  const [portfolio, setPortfolio] = useState([])

  // useEffect(() => {
  //     setLanguage(Linguage)
  // }, [])

    useEffect(() => {
        language.getSkills().then(data => {
          setSkills(data)
        })

        language.getPortfolio().then(data => {
          setPortfolio(data)
        })

        language.getExperience().then(data => {
          setExperience(data)
        })

        language.getSessions().then(data => {
          setSession(data)
        })

        language.getHeader().then(data => {
          setHeader(data)
        })
    }, [])

  return (
    <div className="App">
      {header.map((item, key) => (
        <Header
          key={key}
          TextHeader={item.HeaderTitle}
        />
      ))}

      {session.map((item, key) => (
        <Session
          key={key}
          NameSession={item.SessionsName}
        />
      ))}

      <Title 
        Title={`Me chamo Luiz Gustavo,`}
        Id={'Sobre'}
      />
      
      <About />

      <Title 
        Title={'Minhas experiências profissionais e acadêmicas'} 
        Id={'Sobre'}/>
      
      {experience.map((item, key) => (
        <Experience 
          key={key}
          experienceName={item.ExperienceName}
          experienceLocation={item.Location}
          experienceDate={item.Duration}
          experienceDescription={item.Discription}
        />
      ))}

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
