// 等待文档加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 初始化粒子背景
    initParticles();
    
    // 滚动监听，用于触发元素显示动画
    initScrollAnimation();
    
    // 平滑滚动效果
    initSmoothScroll();
});

// 初始化粒子背景
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 100,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1.5,
                        "opacity_min": 0.2,
                        "sync": false
                    }
                },
                "size": {
                    "value": 4,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 3,
                        "size_min": 0.3,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1.2
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 180,
                        "line_linked": {
                            "opacity": 0.8
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 6
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
}

// 初始化滚动动画
function initScrollAnimation() {
    // 获取所有需要动画的元素
    const fadeElements = document.querySelectorAll('.fade-in-element');
    
    // 检查元素是否在视口中
    function checkIfInView() {
        const windowHeight = window.innerHeight;
        const windowTopPosition = window.scrollY;
        const windowBottomPosition = windowTopPosition + windowHeight;

        fadeElements.forEach(function(element) {
            const elementHeight = element.offsetHeight;
            const elementTopPosition = getElementPosition(element);
            const elementBottomPosition = elementTopPosition + elementHeight;

            // 检查元素是否在视口中
            if (
                elementBottomPosition >= windowTopPosition &&
                elementTopPosition <= windowBottomPosition
            ) {
                element.classList.add('visible');
            }
        });
    }
    
    // 获取元素相对于文档顶部的位置
    function getElementPosition(element) {
        let position = 0;
        while (element) {
            position += element.offsetTop;
            element = element.offsetParent;
        }
        return position;
    }
    
    // 页面加载和滚动时检查元素位置
    window.addEventListener('scroll', checkIfInView);
    window.addEventListener('resize', checkIfInView);
    window.addEventListener('load', checkIfInView);
    
    // 立即执行一次检查
    checkIfInView();
}

// 平滑滚动效果
function initSmoothScroll() {
    // 获取所有内部链接
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // 平滑滚动到目标位置
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // 导航栏高度的偏移量
                    behavior: 'smooth'
                });
            }
        });
    });
} 