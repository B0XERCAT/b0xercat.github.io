// 포트폴리오 데이터
const portfolioData = {
  hero: {
    id: "home",
    title: ["안녕하세요!"],
    description:
      "작은 순간에 몰입하고 , 소소한 성장을 쌓아가는 개발자 권서진입니다.",
    image: "./images/cat.jpeg",
  },
  sections: [
    {
      id: "projects",
      type: "projects",
      title: "Projects",
      content: {
        projects: [
          {
            title: "코드당",
            description: "성균관대학교 온라인 저지 플랫폼",
            cardImage: "./images/codedang-card.png",
            modalImage: "./images/codedang-screen.png",
            stack: ["TypeScript", "React", "Next.js"],
            role: "Frontend Developer",
            detail:
              "zustand 활용 회원가입 모달, GraphQL 기반 관리자 페이지, 코드 에디터 내 테스트 기능 등 총 122개의 PR에 기여했습니다.",
            links: {
              github: "https://github.com/skkuding/codedang",
              live: "https://codedang.com",
            },
          },
          {
            title: "코밋 웹사이트",
            description: "동아리 스터디 모집 플랫폼",
            cardImage: "./images/comit-card.png",
            modalImage: "./images/comit-screen.png",
            stack: ["React", "Next.js", "Spring Boot"],
            role: "Full-stack Developer",
            detail:
              "Spring Security 기반 JWT 인증 기능과 User 모듈을 개발하고, 관리자 데이터 테이블의 인라인 편집 기능을 구현했습니다.",
            links: {
              github: "https://github.com/skku-comit/comit-website",
              live: "https://skku-comit.dev",
            },
          },
          {
            title: "네 글자 퀴즈",
            description: "네 글자 단어를 맞추는 스피드 퀴즈",
            cardImage: "./images/4letters-card.png",
            modalImage: "./images/4letters-screen.png",
            stack: ["Vue", "Firebase"],
            role: "Frontend Engineer",
            detail:
              "카카오톡 공유 API를 이용해 게임 결과 공유 기능을 구축했으며, crypto-js를 활용해 점수·타이머 등 민감 데이터를 암호화한 URL 형태로 안전하게 전달하도록 구현했습니다. 또한 Kakao AdFit 광고를 연동해 서비스 내 광고 노출 기능을 완성했습니다.",
            links: {
              github: "https://github.com/B0XERCAT/four-letters-quiz",
              live: "https://fourlettersquizz.web.app",
            },
          },
        ],
      },
    },
    {
      id: "contact",
      type: "contact",
      title: "Contact",
      content: {
        text: "새로운 프로젝트나 협업에 관심이 있으시다면 언제든지 연락주세요.",
        links: [
          {
            text: "Email",
            href: "mailto:seojin3154@naver.com",
            target: "_self",
          },
          {
            text: "GitHub",
            href: "https://github.com/B0XERCAT",
            target: "_blank",
          },
          {
            text: "LinkedIn",
            href: "https://linkedin.com/in/b0xercat",
            target: "_blank",
          },
        ],
      },
    },
  ],
  footer: {
    text: "© 2025 Portfolio. All rights reserved.",
  },
};
