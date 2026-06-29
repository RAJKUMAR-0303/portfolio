document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. STICKY HEADER & ACTIVE NAV LINKS ON SCROLL
    // -------------------------------------------------------------
    const header = document.getElementById('main-header');
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active link tracking on scroll
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSectionId}`) {
                item.classList.add('active');
            }
        });
    });

    // -------------------------------------------------------------
    // 2. MOBILE NAVIGATION OVERLAY
    // -------------------------------------------------------------
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNavMenu = document.getElementById('mobile-nav-menu');
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

    menuToggle.addEventListener('click', () => {
        const isActive = mobileNavMenu.classList.contains('active');
        if (isActive) {
            mobileNavMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = 'auto'; // allow scroll
        } else {
            mobileNavMenu.classList.add('active');
            menuToggle.classList.add('active');
            document.body.style.overflow = 'hidden'; // block scroll
        }
    });

    // Close mobile nav when clicking a link
    mobileNavItems.forEach(item => {
        item.addEventListener('click', () => {
            mobileNavMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });


    // -------------------------------------------------------------
    // 3. TAGLINE TYPEWRITER ANIMATION (HERO SECTION)
    // -------------------------------------------------------------
    const typewriterElement = document.getElementById('typewriter-tag');
    if (typewriterElement) {
        const words = ["Scalable", "Android", "Fullstack", "Interactive", "AI-Powered"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let delay = 150;

        function typeEffect() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                // Delete letters
                typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                delay = 80;
            } else {
                // Add letters
                typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                delay = 150;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                // Pause at full word
                delay = 1800;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                // Switch word
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                delay = 300;
            }

            setTimeout(typeEffect, delay);
        }
        
        // Start typing loop after small delay
        setTimeout(typeEffect, 1000);
    }


    // -------------------------------------------------------------
    // 4. INTERACTIVE PORTFOLIO BOT (CHATBOT)
    // -------------------------------------------------------------
    const demoBtns = document.querySelectorAll('.demo-btn');
    const chatBody = document.getElementById('demo-chat-body');

    // Portfolio Bot Data mapping to Rajkumar R
    const demoData = {
        'demo-prompt-1': {
            userPrompt: 'What is your Tech Stack?',
            aiResponse: `I specialize in web development, native Android systems, and backend infrastructures. Here is a modular outline of my tech stack:`,
            canvasNode: `
                <div class="mock-canvas-node">
                    <div class="node-header">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>
                        <span>Skills Matrix</span>
                    </div>
                    <div class="node-item"><span>🚀 <strong>Frontend:</strong> React, JavaScript (ES6+), HTML5, CSS3</span></div>
                    <div class="node-item"><span>🛠️ <strong>Backend:</strong> Node.js, Python, Java</span></div>
                    <div class="node-item"><span>📱 <strong>Mobile:</strong> Android SDK (Java API integrations)</span></div>
                    <div class="node-item"><span>💾 <strong>Databases:</strong> SQL, MongoDB</span></div>
                </div>
            `
        },
        'demo-prompt-2': {
            userPrompt: 'Tell me about your Projects',
            aiResponse: `I build software solutions targeting medical image processing, database logistics, and automated verification:`,
            canvasNode: `
                <div class="mock-canvas-node">
                    <div class="node-header" style="color: #06b6d4;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                        <span>Key Projects</span>
                    </div>
                    <div class="node-item"><span>🧠 <strong>Brain Tumor Detection:</strong> Deep Learning in Python & OpenCV.</span></div>
                    <div class="node-item"><span>🩸 <strong>Blood Bank Management:</strong> Java web app managing donor directories.</span></div>
                    <div class="node-item"><span>🤖 <strong>Smart Attendance:</strong> Face tracking via OpenCV & Android App.</span></div>
                </div>
            `
        },
        'demo-prompt-3': {
            userPrompt: 'Are you open for hire?',
            aiResponse: `Yes, I am currently active and open to discussing full-time job offers, freelance contracts, or project collaborations!`,
            canvasNode: `
                <div class="mock-canvas-node">
                    <div class="node-header" style="color: #ec4899;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                        <span>Hiring Details</span>
                    </div>
                    <div class="node-item"><span>💼 <strong>Role Interest:</strong> Fullstack Engineer, Android Developer</span></div>
                    <div class="node-item"><span>🌍 <strong>Location:</strong> India (Open to Remote or Relocation)</span></div>
                    <div class="node-item"><span>📧 <strong>Inquiries:</strong> Fill the form below or email me directly!</span></div>
                </div>
            `
        }
    };

    let activeDemoId = 'demo-prompt-1';
    let isTyping = false;

    function runDemo(demoId) {
        if (isTyping) return; // avoid concurrent typing triggers
        isTyping = true;

        // Reset sidebar active buttons
        demoBtns.forEach(btn => {
            if (btn.id === demoId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        const data = demoData[demoId];
        chatBody.innerHTML = '';

        // Add user bubble
        const userDiv = document.createElement('div');
        userDiv.className = 'chat-msg user-msg';
        userDiv.innerHTML = `<div class="msg-bubble">${data.userPrompt}</div>`;
        chatBody.appendChild(userDiv);

        // Add AI typing bubble
        const aiDiv = document.createElement('div');
        aiDiv.className = 'chat-msg ai-msg';
        aiDiv.innerHTML = `
            <div class="msg-bubble" id="demo-typing-bubble">
                <div class="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        chatBody.appendChild(aiDiv);
        chatBody.scrollTop = chatBody.scrollHeight;

        // Simulate network latency
        setTimeout(() => {
            const typingBubble = document.getElementById('demo-typing-bubble');
            if (!typingBubble) return;

            // Remove typing indicator
            typingBubble.innerHTML = '';
            
            // Create text container
            const textBlock = document.createElement('div');
            typingBubble.appendChild(textBlock);
            
            const fullText = data.aiResponse;
            let index = 0;

            // Type text loop
            const timer = setInterval(() => {
                if (index < fullText.length) {
                    textBlock.innerHTML += fullText.charAt(index);
                    index++;
                    chatBody.scrollTop = chatBody.scrollHeight;
                } else {
                    clearInterval(timer);
                    
                    // Typing completed, insert the custom canvas block
                    const container = document.createElement('div');
                    container.innerHTML = data.canvasNode;
                    typingBubble.appendChild(container.firstElementChild);
                    
                    chatBody.scrollTop = chatBody.scrollHeight;
                    isTyping = false;
                }
            }, 12);
        }, 1000);
    }

    // Set up click listeners for chatbot prompts
    demoBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetId = e.currentTarget.id;
            if (targetId === activeDemoId && chatBody.children.length > 0) return;
            activeDemoId = targetId;
            runDemo(targetId);
        });
    });

    // Run first prompt initially
    runDemo('demo-prompt-1');


    // -------------------------------------------------------------
    // 5. CONTACT FORM VALIDATION & INTERACTIVITY
    // -------------------------------------------------------------
    const form = document.getElementById('contact-form');
    const successCard = document.getElementById('form-success');
    const resetFormBtn = document.getElementById('reset-form-btn');

    // Form inputs
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Validation patterns
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateField(input, errorElementId, condition) {
        const group = input.parentElement;
        if (condition) {
            group.classList.remove('error');
            return true;
        } else {
            group.classList.add('error');
            return false;
        }
    }

    // Input listeners to clear errors on keyup/change
    nameInput.addEventListener('input', () => {
        validateField(nameInput, 'name-error', nameInput.value.trim() !== '');
    });

    emailInput.addEventListener('input', () => {
        validateField(emailInput, 'email-error', emailRegex.test(emailInput.value.trim()));
    });

    messageInput.addEventListener('input', () => {
        validateField(messageInput, 'message-error', messageInput.value.trim() !== '');
    });

    form.addEventListener('submit', (e) => {
        // Validate all fields
        const isNameValid = validateField(nameInput, 'name-error', nameInput.value.trim() !== '');
        const isEmailValid = validateField(emailInput, 'email-error', emailRegex.test(emailInput.value.trim()));
        const isMessageValid = validateField(messageInput, 'message-error', messageInput.value.trim() !== '');

        if (!isNameValid || !isEmailValid || !isMessageValid) {
            e.preventDefault();
            return;
        }

        // Check if running locally via file:// protocol
        if (window.location.protocol === 'file:') {
            // Let the standard HTML form submission happen to bypass local CORS/Origin blocks.
            // We set a tiny timeout to disable the button without canceling the submit.
            const submitBtn = document.getElementById('submit-btn');
            setTimeout(() => {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Redirecting to mailer...';
            }, 10);
            return;
        }

        // Running via http:// or https:// (web server / online) - use seamless AJAX fetch
        e.preventDefault();
        const submitBtn = document.getElementById('submit-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending Message...';

        fetch("https://formsubmit.co/ajax/rajkumarrajan0303@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: nameInput.value,
                email: emailInput.value,
                inquiry_type: document.getElementById('plan-select').value,
                message: messageInput.value,
                _subject: "New Portfolio Website Inquiry!"
            })
        })
        .then(response => {
            if (response.ok) {
                successCard.classList.add('active');
            } else {
                alert("Oops! There was a problem submitting your form. Please try again.");
            }
        })
        .catch(error => {
            console.error("Form submission error:", error);
            alert("Could not connect to the mail server. Please check your connection and try again.");
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        });
    });

    // Reset Form button action
    resetFormBtn.addEventListener('click', () => {
        form.reset();
        
        // Remove error classes
        nameInput.parentElement.classList.remove('error');
        emailInput.parentElement.classList.remove('error');
        messageInput.parentElement.classList.remove('error');
        
        // Hide success card
        successCard.classList.remove('active');
    });
});
