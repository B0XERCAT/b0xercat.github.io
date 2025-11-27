let projectDataStore = [];
let projectModalInstance = null;
let projectModalKeyListenerAttached = false;
let lastFocusedElementBeforeModal = null;

// DOM 생성 유틸리티
const DOMRenderer = {
    // 히어로 섹션 생성
    createHero: (data) => {
        const hero = document.createElement('section');
        hero.id = data.id;
        hero.className = 'hero';
        
        hero.innerHTML = `
            <div class="hero-content">
                ${data.image ? `
                    <div class="hero-media">
                        <img src="${data.image}" alt="${data.title.join(' ')} 대표 이미지" />
                    </div>
                ` : ''}
                <div class="hero-text">
                    <h1 class="hero-title">
                        ${data.title.map(line => `<span class="line">${line}</span>`).join('')}
                    </h1>
                    <p class="hero-description">${data.description}</p>
                </div>
            </div>
            <div class="scroll-indicator">
                <div class="scroll-arrow"></div>
            </div>
        `;
        
        return hero;
    },
    
    // About 섹션 생성
    createAbout: (section) => {
        const aboutSection = document.createElement('section');
        aboutSection.id = section.id;
        aboutSection.className = 'about';
        
        const aboutText = section.content.text.map(text => `<p>${text}</p>`).join('');
        const skills = section.content.skills.map(skill => `
            <div class="skill-item">
                <h3>${skill.title}</h3>
                <p>${skill.description}</p>
            </div>
        `).join('');
        
        aboutSection.innerHTML = `
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">${section.title}</h2>
                    <div class="section-line"></div>
                </div>
                <div class="about-content">
                    <div class="about-text">${aboutText}</div>
                    <div class="about-skills">${skills}</div>
                </div>
            </div>
        `;
        
        return aboutSection;
    },
    
    // Projects 섹션 생성
    createProjects: (section) => {
        const projectsSection = document.createElement('section');
        projectsSection.id = section.id;
        projectsSection.className = 'projects';

        const projects = section.content.projects.map((project, index) => {
            const cardImage = project.cardImage || project.image || project.modalImage;
            return `
            <div class="project-card" data-project-index="${index}" role="button" tabindex="0" aria-label="${project.title} 상세 보기">
                <div class="project-image">
                    ${cardImage ? `<img src="${cardImage}" alt="${project.title} 카드 이미지" loading="lazy" />` : '<div class="project-image-fallback"></div>'}
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
            </div>
        `;
        }).join('');
        
        projectsSection.innerHTML = `
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">${section.title}</h2>
                    <div class="section-line"></div>
                </div>
                <div class="projects-grid">${projects}</div>
            </div>
        `;
        
        return projectsSection;
    },
    
    // Contact 섹션 생성
    createContact: (section) => {
        const contactSection = document.createElement('section');
        contactSection.id = section.id;
        contactSection.className = 'contact';
        
        const links = section.content.links.map(link => `
            <a href="${link.href}" class="contact-link" ${link.target === '_blank' ? 'target="_blank"' : ''}>${link.text}</a>
        `).join('');
        
        contactSection.innerHTML = `
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">${section.title}</h2>
                    <div class="section-line"></div>
                </div>
                <div class="contact-content">
                    <p class="contact-text">${section.content.text}</p>
                    <div class="contact-links">${links}</div>
                </div>
            </div>
        `;
        
        return contactSection;
    },
    
    // 푸터 생성
    createFooter: (data) => {
        const footer = document.createElement('footer');
        footer.className = 'footer';
        
        footer.innerHTML = `
            <div class="container">
                <p>${data.text}</p>
            </div>
        `;
        
        return footer;
    }
};

// 페이지 초기화
function initPage() {
    const main = document.querySelector('main');
    
    // 히어로 섹션 생성
    const hero = DOMRenderer.createHero(portfolioData.hero);
    main.appendChild(hero);
    
    // 섹션들 생성
    portfolioData.sections.forEach(section => {
        let sectionElement;
        
        switch(section.type) {
            case 'about':
                sectionElement = DOMRenderer.createAbout(section);
                break;
            case 'projects':
                sectionElement = DOMRenderer.createProjects(section);
                projectDataStore = section.content.projects.slice();
                break;
            case 'contact':
                sectionElement = DOMRenderer.createContact(section);
                break;
            default:
                return;
        }
        
        main.appendChild(sectionElement);
    });
    
    // 푸터 생성
    const footer = DOMRenderer.createFooter(portfolioData.footer);
    document.body.appendChild(footer);
    
    // 프로젝트 모달 초기화
    initProjectModal(projectDataStore);

    // 페이지 초기화 완료 후 애니메이션 초기화
    // animations.js가 로드된 후에 실행되도록 약간의 지연 추가
    setTimeout(() => {
        if (typeof initAnimations === 'function') {
            initAnimations();
        }
    }, 0);
}

// 부드러운 스크롤 (링크 클릭)
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                if (typeof ScrollToPlugin !== 'undefined' && typeof gsap !== 'undefined') {
                    gsap.to(window, {
                        duration: 1.2,
                        scrollTo: {
                            y: target,
                            offsetY: 80
                        },
                        ease: 'power2.inOut'
                    });
                } else {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

// 커스텀 커서 초기화
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    if (typeof gsap !== 'undefined') {
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, {
                duration: 0.5,
                x: e.clientX,
                y: e.clientY,
                ease: 'power2.out'
            });
        });
        
        gsap.set(cursor, { x: window.innerWidth / 2, y: window.innerHeight / 2 });
    }
    
    // 커서 스타일 추가
    const style = document.createElement('style');
    style.textContent = `
        .custom-cursor {
            width: 20px;
            height: 20px;
            border: 2px solid rgba(0, 0, 0, 0.3);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: width 0.3s, height 0.3s;
        }
        
        a:hover ~ .custom-cursor,
        .btn:hover ~ .custom-cursor {
            width: 40px;
            height: 40px;
        }
    `;
    document.head.appendChild(style);
}

// 페이지 로드 시 초기화
(function() {
    let loaded = false;
    
    function init() {
        if (loaded) return;
        loaded = true;
        
        initPage();
        initSmoothScroll();
        initCustomCursor();
    }
    
    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

// 프로젝트 모달 생성
function createProjectModal() {
    const overlay = document.createElement('div');
    overlay.className = 'project-modal-overlay';
    overlay.setAttribute('aria-hidden', 'true');

    overlay.innerHTML = `
        <div class="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal__title">
            <button type="button" class="modal-close" aria-label="Close modal">&times;</button>
            <div class="modal-content">
                <div class="modal-media">
                    <img src="" alt="" class="modal-image" />
                </div>
                <div class="modal-details">
                    <h3 id="project-modal__title" class="modal-title"></h3>
                    <p class="modal-role"></p>
                    <div class="modal-stack"></div>
                    <p class="modal-description"></p>
                    <div class="modal-links">
                        <a class="modal-link-icon modal-link--github" href="#" target="_blank" rel="noopener" aria-label="GitHub 링크">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.11.79-.25.79-.56v-2.16c-3.2.7-3.88-1.38-3.88-1.38-.53-1.37-1.28-1.74-1.28-1.74-1.05-.71.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.29-.52-1.48.11-3.09 0 0 .97-.31 3.18 1.19a10.95 10.95 0 0 1 5.78 0c2.2-1.5 3.17-1.19 3.17-1.19.63 1.61.23 2.8.11 3.09.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.07.78 2.16v3.19c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
                            </svg>
                        </a>
                        <a class="modal-link-icon modal-link--live" href="#" target="_blank" rel="noopener" aria-label="라이브 사이트 링크">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M5 4h6a1 1 0 0 1 0 2H6v12h12v-5a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm13-1h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V6.41l-8.3 8.3a1 1 0 0 1-1.4-1.42L20.58 5H18a1 1 0 1 1 0-2Z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);

    const closeButtons = overlay.querySelectorAll('.modal-close, .modal-close-secondary');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => closeProjectModal());
    });

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closeProjectModal();
        }
    });

    if (!projectModalKeyListenerAttached) {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && overlay.classList.contains('is-active')) {
                closeProjectModal();
            }
        });
        projectModalKeyListenerAttached = true;
    }

    return {
        overlay,
        media: overlay.querySelector('.modal-image'),
        title: overlay.querySelector('.modal-title'),
        role: overlay.querySelector('.modal-role'),
        stack: overlay.querySelector('.modal-stack'),
        description: overlay.querySelector('.modal-description'),
        closeButton: overlay.querySelector('.modal-close'),
        githubLink: overlay.querySelector('.modal-link--github'),
        liveLink: overlay.querySelector('.modal-link--live'),
        secondaryCloseButton: overlay.querySelector('.modal-close-secondary'),
        lastFocusedElement: null
    };
}

function openProjectModal(project) {
    if (!project) return;

    if (!projectModalInstance) {
        projectModalInstance = createProjectModal();
    }

    const { overlay, media, title, role, stack, description, githubLink, liveLink } = projectModalInstance;

    lastFocusedElementBeforeModal = document.activeElement;
    projectModalInstance.lastFocusedElement = lastFocusedElementBeforeModal;

    const modalImage = project.modalImage || project.detailImage || project.image || project.cardImage;

    if (modalImage) {
        media.src = modalImage;
        media.alt = `${project.title} 대표 이미지`;
        media.classList.remove('is-hidden');
    } else {
        media.src = '';
        media.alt = '';
        media.classList.add('is-hidden');
    }

    title.textContent = project.title;
    role.textContent = project.role || '';
    description.textContent = project.detail || '';
    stack.innerHTML = Array.isArray(project.stack)
        ? project.stack.map(item => `<span class="stack-chip">${item}</span>`).join('')
        : '';

    const githubUrl = project.links?.github || project.github || '';
    const liveUrl = project.links?.live || project.live || '';

    if (githubLink) {
        if (githubUrl) {
            githubLink.href = githubUrl;
            githubLink.classList.remove('is-hidden');
        } else {
            githubLink.href = '#';
            githubLink.classList.add('is-hidden');
        }
    }

    if (liveLink) {
        if (liveUrl) {
            liveLink.href = liveUrl;
            liveLink.classList.remove('is-hidden');
        } else {
            liveLink.href = '#';
            liveLink.classList.add('is-hidden');
        }
    }

    overlay.classList.add('is-active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    overlay.scrollTop = 0;

    if (projectModalInstance.closeButton) {
        projectModalInstance.closeButton.focus();
    }
}

function closeProjectModal() {
    if (!projectModalInstance) return;
    const { overlay, media, stack, title, role, description, githubLink, liveLink } = projectModalInstance;
    overlay.classList.remove('is-active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    media.src = '';
    stack.innerHTML = '';
    title.textContent = '';
    role.textContent = '';
    description.textContent = '';
    if (githubLink) {
        githubLink.href = '#';
        githubLink.classList.add('is-hidden');
    }
    if (liveLink) {
        liveLink.href = '#';
        liveLink.classList.add('is-hidden');
    }

    if (projectModalInstance.lastFocusedElement) {
        projectModalInstance.lastFocusedElement.focus({ preventScroll: true });
        projectModalInstance.lastFocusedElement = null;
    }
}

function initProjectModal(projects) {
    if (!Array.isArray(projects) || projects.length === 0) return;

    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card) => {
        if (card.dataset.modalBound === 'true') return;
        card.dataset.modalBound = 'true';

        const openModal = () => {
            const index = Number(card.dataset.projectIndex);
            const project = projects[index];
            openProjectModal(project);
        };

        card.addEventListener('click', (event) => {
            event.preventDefault();
            openModal();
        });

        card.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openModal();
            }
        });
    });
}
