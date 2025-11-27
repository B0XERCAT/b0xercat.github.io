// 포트폴리오 데이터
const portfolioData = {
    hero: {
        id: 'home',
        title: ['안녕하세요!'],
        description: '작은 순간에 몰입하고, 소소한 성장을 쌓아가는 개발자 권서진입니다.',
        image: './cat.jpeg'
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
                        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1280&q=80&sat=-30&sig=1',
                        stack: ['React', 'TypeScript', 'GSAP'],
                        role: 'Frontend Developer',
                        detail: '반응형 인터랙티브 웹 애플리케이션으로, GSAP을 활용해 자연스러운 모션과 사용자 경험을 구현했습니다.'
                    },
                    {
                        overlayTitle: 'Project 2',
                        overlayDescription: '웹 애플리케이션',
                        title: 'Project Title 2',
                        description: '프로젝트 설명',
                        link: '#',
                        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                        image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1280&q=80&sat=-30&sig=2',
                        stack: ['Next.js', 'Styled-Components', 'Vercel'],
                        role: 'Full-stack Developer',
                        detail: '디자인 시스템부터 배포까지 담당하며, 모듈화된 컴포넌트와 서버사이드 렌더링을 적용했습니다.'
                    },
                    {
                        overlayTitle: 'Project 3',
                        overlayDescription: '웹 애플리케이션',
                        title: 'Project Title 3',
                        description: '프로젝트 설명',
                        link: '#',
                        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                        image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1280&q=80&sat=-30&sig=3',
                        stack: ['Vue', 'Pinia', 'Firebase'],
                        role: 'Frontend Engineer',
                        detail: '실시간 데이터가 필요한 프로젝트로, Firebase를 이용해 빠른 프로토타이핑과 배포를 진행했습니다.'
                    },
                    {
                        overlayTitle: 'Project 4',
                        overlayDescription: '웹 애플리케이션',
                        title: 'Project Title 4',
                        description: '프로젝트 설명',
                        link: '#',
                        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                        image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1280&q=80&sat=-30&sig=4',
                        stack: ['Svelte', 'Tailwind CSS', 'Supabase'],
                        role: 'Product Engineer',
                        detail: '간결한 코드와 빠른 성능을 목표로 Svelte를 도입했고, Supabase로 백엔드를 구성했습니다.'
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

