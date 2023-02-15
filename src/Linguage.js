export default {
    getHeader: async () => {
        return [
            {
                HeaderTitle: 'Olá, Eu sou Gustavo',
            },
        ]
    },
    
    getSessions: async () => {
        return [
            {
                SessionsName: 'Sobre'
            },
            {
                SessionsName: 'Experiências'
            },
            {
                SessionsName: 'Portfolio'
            },
        ]
    },

    getTitleSubsection: async () => {
        return [
            {
                Title: 'Me chamo Luiz Gustavo,',
            },
            {
                Title: 'Minhas experiências profissionais e acadêmicas',
            },
            {
                Title: 'Skills',
            },
            {
                Title: 'Portfolio',
            },
        ]
    },

    getExperience: async () => {
        return [
            {
                ExperienceName: 'Frente de caixa',
                Location: 'Restaurante Irineu’s',
                Duration: 'Jun 2020 - Jul 2022',
                Discription: 'Aos 15 anos comecei a trabalhar como caixa no restaurante de praia até os 17 anos, e com essa experiencia consegui desenvolver minhas habilidades sociais e profissionais.',
            },
            {
                ExperienceName: 'Técnico em desenvolvimento de sistemas',
                Location: 'SENAI CETAF',
                Duration: 'Jan 2021 - Dez 2022',
                Discription: 'No curso técnico de desenvolvimento de sistemas, aprendi a programar com a linguagem C# da Microsoft, utilizando também o banco de dados Sql Server, e as principais tecnologias Web como HTML, CSS e JavaScript.',
            },
            {
                ExperienceName: 'Sistemas de informação',
                Location: 'UNIT',
                Duration: 'Fev 2023 - Dez 2026',
                Discription: 'Capaz de analisar problemas reais; conceber, planejar, desenvolver e gerenciar soluções computacionais adequados ao contexto tecnológico, considerando os aspectos organizacionais e humanos, fundamentados em sólidos conhecimentos de computação.',
            }
        ]
    },

    getSkills: async () => {
        return [
            {
                SkillsName: 'Inglês',
                Points: '5',
                Discription: 'Fiz curso de inglês e atualmente estou no nível B2',
            },
            {
                SkillsName: 'Back-end',
                Points: '4',
                Discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
                SkillsName: 'Front-end',
                Points: '6',
                Discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
                SkillsName: 'Web',
                Points: '6',
                Discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
        ]
    },

    getPortfolio: async () => {
        return [
            {
                PortfolioName: 'To-do',
                Repository: 'https://github.com/Luizz14/To-do',
                Discription: 'Uma simples aplicação react onde pode adicionar, remover afazeres, e consumindo de uma API externa.',
                UsedTechnology: 'ReactJs',
                Development: ''
            },
            {
                PortfolioName: 'Netflix',
                Repository: 'https://github.com/Luizz14/Lufix',
                Discription: 'Um clone da netflix sendo replicado em react e consumindo da API externa TmDb.',
                UsedTechnology: 'ReactJs',
                Development: ''
            },
            {
                PortfolioName: 'Sistema de restaurante',
                Repository: 'https://github.com/Luizz14/Sistema-de-Restaurante',
                Discription: 'Um sistema de gerenciamento de mesas para restaurante usando Python para web com o framework Django.',
                UsedTechnology: 'ReactJs',
                Development: ''
            },
            {
                PortfolioName: 'Game Launcher',
                Repository: '',
                Discription: 'Um launcher para jogos com estilo de design serviço de streaming.',
                UsedTechnology: 'ReactJs',
                Development: 'Yes'
            },
            {
                PortfolioName: 'Sistema de gerenciamento de pousada',
                Repository: '',
                Discription: 'Um sistema de pousada para agendar estadias utilizando ReactJs e nodeJs.',
                UsedTechnology: 'ReactJs',
                Development: 'Yes'
            },
        ]
    }

}