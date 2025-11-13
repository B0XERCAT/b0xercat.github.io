// 포트폴리오 데이터
const portfolioData = {
    hero: {
        id: 'home',
        title: ['안녕하세요!'],
        description: '작은 순간에 몰입하고, 소소한 성장을 쌓아가는 개발자 권서진입니다.'
    },
    sections: [
        {
            id: 'projects',
            type: 'projects',
            title: 'Projects',
            content: {
                projects: [
                    {
                        overlayTitle: 'Project 1',
                        overlayDescription: '웹 애플리케이션',
                        title: 'Project Title 1',
                        description: '프로젝트 설명',
                        link: '#',
                        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    },
                    {
                        overlayTitle: 'Project 2',
                        overlayDescription: '웹 애플리케이션',
                        title: 'Project Title 2',
                        description: '프로젝트 설명',
                        link: '#',
                        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                    },
                    {
                        overlayTitle: 'Project 3',
                        overlayDescription: '웹 애플리케이션',
                        title: 'Project Title 3',
                        description: '프로젝트 설명',
                        link: '#',
                        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
                    },
                    {
                        overlayTitle: 'Project 4',
                        overlayDescription: '웹 애플리케이션',
                        title: 'Project Title 4',
                        description: '프로젝트 설명',
                        link: '#',
                        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
                    }
                ]
            }
        },
        {
            id: 'contact',
            type: 'contact',
            title: 'Contact',
            content: {
                text: '새로운 프로젝트나 협업에 관심이 있으시다면 언제든지 연락주세요.',
                links: [
                    {
                        text: 'Email',
                        href: 'mailto:seojin3154@naver.com',
                        target: '_self'
                    },
                    {
                        text: 'GitHub',
                        href: 'https://github.com/B0XERCAT',
                        target: '_blank'
                    },
                    {
                        text: 'LinkedIn',
                        href: 'https://linkedin.com/in/b0xercat',
                        target: '_blank'
                    }
                ]
            }
        }
    ],
    footer: {
        text: '© 2024 Portfolio. All rights reserved.'
    }
};

