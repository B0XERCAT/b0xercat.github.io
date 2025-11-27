// GSAP 플러그인 등록
if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    if (typeof ScrollToPlugin !== 'undefined') {
        gsap.registerPlugin(ScrollToPlugin);
    }
}

// 애니메이션 실행 여부 추적
let animationsInitialized = false;
let heroAnimationStarted = false;
let heroTimelineInstance = null;

// 로더 애니메이션
function initLoader() {
    const loaderTimeline = gsap.timeline();
    
    loaderTimeline
        .to('.loader-text', {
            duration: 0.8,
            opacity: 0,
            y: -20,
            ease: 'power2.out'
        })
        .to('.loader', {
            duration: 1,
            opacity: 0,
            ease: 'power2.inOut'
        })
        .set('.loader', { display: 'none' })
        .call(() => {
            // 로더 후 메인 애니메이션 시작 (한 번만 실행)
            if (!animationsInitialized) {
                initAnimations();
                animationsInitialized = true;
            }
        });
}

// 히어로 섹션 애니메이션
function initHeroAnimation() {
    if (heroAnimationStarted) {
        return;
    }
    heroAnimationStarted = true;
    
    // 기존 타임라인이 있으면 kill
    if (heroTimelineInstance) {
        heroTimelineInstance.kill();
    }
    
    const heroTitleLines = gsap.utils.toArray('.hero-title .line');
    
    // 초기 상태 명시적으로 설정
    heroTitleLines.forEach((line) => {
        gsap.set(line, { y: 150, opacity: 0, clearProps: 'none' });
    });
    gsap.set('.hero-description', { y: 30, opacity: 0, clearProps: 'none' });
    gsap.set('.scroll-indicator', { y: 20, opacity: 0, clearProps: 'none' });
    
    // 타임라인으로 애니메이션 실행
    heroTimelineInstance = gsap.timeline({ delay: 0.8 });
    
    heroTitleLines.forEach((line, index) => {
        heroTimelineInstance.to(line, {
            duration: 1.2,
            y: 0,
            opacity: 1,
            ease: 'power3.out'
        }, index === 0 ? 0 : 0.2);
    });

    heroTimelineInstance.to('.hero-description', {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'power2.out'
    }, "-=0.8");

    heroTimelineInstance.to('.scroll-indicator', {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'power2.out'
    }, "-=0.4");
}

// 섹션 헤더 애니메이션
function initSectionHeaderAnimations() {
    const sectionHeaders = gsap.utils.toArray('.section-header');
    
    if (sectionHeaders.length === 0) return;
    
    // 초기 상태 설정
    gsap.set('.section-header', { y: 50, opacity: 0 });
    
    sectionHeaders.forEach((header) => {
        gsap.to(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            y: 0,
            opacity: 1,
            ease: 'power2.out'
        });
    });
}

// About 섹션 애니메이션
function initAboutAnimations() {
    const aboutText = document.querySelector('.about-text');
    const aboutSkills = document.querySelectorAll('.about-skills .skill-item');
    
    if (!aboutText) return;
    
    // 초기 상태 설정
    gsap.set('.about-text', { x: -50, opacity: 0 });
    gsap.set('.about-skills .skill-item', { x: 50, opacity: 0 });
    
    gsap.to('.about-text', {
        scrollTrigger: {
            trigger: '.about-content',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        x: 0,
        opacity: 1,
        ease: 'power2.out'
    });

    gsap.to('.about-skills .skill-item', {
        scrollTrigger: {
            trigger: '.about-content',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        x: 0,
        opacity: 1,
        stagger: 0.2,
        ease: 'power2.out'
    });
}

// 프로젝트 카드 애니메이션
function initProjectAnimations() {
    const projectCards = gsap.utils.toArray('.project-card');
    
    projectCards.forEach((card, index) => {
        // 초기 상태를 보이게 설정
        gsap.set(card, { opacity: 1, y: 0 });
        
        // 애니메이션 적용
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            y: 50,
            opacity: 0,
            delay: index * 0.15,
            ease: 'power2.out'
        });
    });

    // 프로젝트 오버레이 호버 애니메이션
    document.querySelectorAll('.project-card').forEach((card) => {
        const overlay = card.querySelector('.project-overlay');

        card.addEventListener('mouseenter', () => {
            gsap.to(overlay, {
                duration: 0.3,
                opacity: 1,
                ease: 'power2.out'
            });
            gsap.from(overlay.children, {
                duration: 0.5,
                y: 20,
                opacity: 0.5,
                stagger: 0.1,
                delay: 0.2,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(overlay, {
                duration: 0.3,
                opacity: 0,
                ease: 'power2.in'
            });
        });
    });
}

// Contact 섹션 애니메이션
function initContactAnimations() {
    const contactText = document.querySelector('.contact-text');
    const contactLinks = document.querySelectorAll('.contact-link');
    
    if (!contactText) return;
    
    // 초기 상태 설정
    gsap.set('.contact-text', { y: 30, opacity: 0 });
    gsap.set('.contact-link', { y: 30, opacity: 0 });
    
    gsap.to('.contact-text', {
        scrollTrigger: {
            trigger: '.contact-content',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'power2.out'
    });

    gsap.to('.contact-link', {
        scrollTrigger: {
            trigger: '.contact-content',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 0,
        opacity: 1,
        stagger: 0.15,
        delay: 0.3,
        ease: 'power2.out'
    });
}

// 메인 애니메이션 초기화
function initAnimations() {
    if (!gsap) {
        console.warn('GSAP is not loaded');
        return;
    }
    
    // DOM이 생성될 때까지 약간 대기
    setTimeout(() => {
        // 히어로 섹션 애니메이션
        initHeroAnimation();
        
        // 섹션 헤더 애니메이션
        initSectionHeaderAnimations();
        
        // About 섹션 애니메이션
        initAboutAnimations();
        
        // 프로젝트 카드 애니메이션
        initProjectAnimations();
        
        // Contact 섹션 애니메이션
        initContactAnimations();
        
        // ScrollTrigger 새로고침 (동적으로 추가된 요소를 인식)
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }
    }, 100);
}

// 페이지 로드 애니메이션 초기화
(function() {
    let loaded = false;
    
    function init() {
        if (loaded) return;
        loaded = true;
        
        if (typeof gsap !== 'undefined') {
            initLoader();
        }
    }
    
    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

