export default {
    getHeader: async () => {
        return [
            {
                HeaderTitle: 'Hello, I`m Gustavo',
            },
        ]
    },
    
    getSessions: async () => {
        return [
            {
                SessionsName: 'About'
            },
            {
                SessionsName: 'Expreciences'
            },
            {
                SessionsName: 'Portfolio'
            },
        ]
    },

    getTitleSubsection: async () => {
        return [
            {
                Title: 'My name is Luiz Gustavo,',
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
                ExperienceName: 'Cashier',
                Location: 'Restaurant Irineu’s',
                Duration: 'Jun 2020 - Jul 2022',
                Discription: 'At my 15 years, I started at working as a cashier at a beach restaurant until I was 17, and with this experience I learned social and professional skills',
            },
            {
                ExperienceName: 'Systems analysis and development technician',
                Location: 'SENAI CETAF',
                Duration: 'Jan 2021 - Dec 2022',
                Discription: 'At  No curso técnico de desenvolvimento de sistemas, aprendi a programar com a linguagem C# da Microsoft, utilizando também o banco de dados Sql Server, e as principais tecnologias Web como HTML, CSS e JavaScript.',
            },
            {
                ExperienceName: 'Information systems',
                Location: 'UNIT',
                Duration: 'Feb 2023 - Dec 2026',
                Discription: 'Able to analysis real problems, planning, development, and management computational solutions / adequados ao contexto tecnológico, considerando os aspectos organizacionais e humanos, fundamentados em sólidos conhecimentos de computação.',
            }
        ]
    },

    getSkills: async () => {
        return [
            {
                SkillsName: 'Inglês',
                Points: '5',
                Discription: 'Since 2020 I`ve been studying English, currently I`m at level B2',
            },
            {
                SkillsName: 'Back-end',
                Points: '4',
                Discription: '.',
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
                Discription: 'A simple application where you can to add, remove and edit tasks, and consuming a external API.',
                UsedTechnology: 'ReactJs',
                Development: ''
            },
            {
                PortfolioName: 'Netflix',
                Repository: 'https://github.com/Luizz14/Lufix',
                Discription: 'A Netflix clone replicated in reactJs and consuming a external TmDb`s API.',
                UsedTechnology: 'ReactJs',
                Development: ''
            },
            {
                PortfolioName: 'Restaurant system',
                Repository: 'https://github.com/Luizz14/Sistema-de-Restaurante',
                Discription: 'A management system for restaurant using Python for web with the framework Django.',
                UsedTechnology: 'ReactJs',
                Development: ''
            },
            {
                PortfolioName: 'Game Launcher',
                Repository: '',
                Discription: 'A game launcher with streamming design style.',
                UsedTechnology: 'ReactJs',
                Development: 'Yes'
            },
            {
                PortfolioName: 'Inn management system',
                Repository: '',
                Discription: 'Um sistema de pousada para agendar estadias utilizando ReactJs e nodeJs.',
                UsedTechnology: 'ReactJs',
                Development: 'Yes'
            },
        ]
    }

}