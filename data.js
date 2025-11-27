// 포트폴리오 데이터
const portfolioData = {
    hero: {
        id: 'home',
        title: ['안녕하세요!'],
        description: '작은 순간에 몰입하고, 소소한 성장을 쌓아가는 개발자 권서진입니다.',
        image: './images/cat.jpeg'
    },
    sections: [
        {
            id: 'projects',
            type: 'projects',
            title: 'Projects',
            content: {
                projects: [
                    {
                        title: '코드당',
                        description: '성균관대학교 온라인 저지 플랫폼',
                        cardImage: './images/codedang-card.png',
                        modalImage: './images/codedang-screen.png',
                        stack: ['TypeScript', 'React', 'Next.js'],
                        role: 'Frontend Developer',
                        detail: '반응형 인터랙티브 웹 애플리케이션으로, GSAP을 활용해 자연스러운 모션과 사용자 경험을 구현했습니다.'
                    },
                    {
                        title: '코밋 웹사이트',
                        description: '동아리 스터디 모집 플랫폼',
                        cardImage: './images/comit-card.png',
                        modalImage: './images/comit-screen.png',
                        stack: ['React', 'Next.js', 'Spring Boot'],
                        role: 'Full-stack Developer',
                        detail: '디자인 시스템부터 배포까지 담당하며, 모듈화된 컴포넌트와 서버사이드 렌더링을 적용했습니다.'
                    },
                    {
                        title: '네 글자 퀴즈',
                        description: '프로젝트 설명',
                        cardImage: './images/4letters-card.png',
                        modalImage: './images/4letters-screen.png',
                        stack: ['Vue', 'Firebase'],
                        role: 'Frontend Engineer',
                        detail: '실시간 데이터가 필요한 프로젝트로, Firebase를 이용해 빠른 프로토타이핑과 배포를 진행했습니다.'
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
        text: '© 2025 Portfolio. All rights reserved.'
    }
};

