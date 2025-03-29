// Typewriter effect for hero section
const typeText = document.getElementById('type-text');
const textArray = [
    "cybersecurity specialist",
    "ethical hacker",
    "digital forensics expert",
    "penetration tester"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
    const currentText = textArray[textIndex];
    
    if (isDeleting) {
        typeText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typeText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        typingSpeed = 500; // Pause before typing next word
    }
    
    setTimeout(type, typingSpeed);
}

// Set last login time
function setLastLogin() {
    const now = new Date();
    const options = { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
    };
    document.getElementById('last-login').textContent = now.toLocaleDateString('en-US', options);
}

// Set update date for certifications page
function setUpdateDate() {
    if (document.getElementById('update-date')) {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('update-date').textContent = now.toLocaleDateString('en-US', options);
    }
}

// Form submission handler
function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());
    
    console.log('Form submitted:', formValues);
    alert('Message sent successfully! (This is a demo)');
    form.reset();
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Start typewriter effect on home page
    if (typeText) {
        setTimeout(type, 1000);
    }
    
    // Set dates
    setLastLogin();
    setUpdateDate();
    
    // Add form submit handler if form exists
    const messageForm = document.getElementById('messageForm');
    if (messageForm) {
        messageForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Add terminal button functionality
    const terminalBtns = document.querySelectorAll('.terminal-btn');
    terminalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.classList.contains('close')) {
                // Add closing animation
                document.querySelector('.terminal').style.animation = 'fadeOut 0.5s forwards';
                setTimeout(() => {
                    alert('Terminal closed. (This is a demo)');
                    document.querySelector('.terminal').style.animation = '';
                }, 500);
            } else if (this.classList.contains('minimize')) {
                // Add minimizing animation
                document.querySelector('.terminal-body').style.display = 'none';
                setTimeout(() => {
                    alert('Terminal minimized. (This is a demo)');
                    document.querySelector('.terminal-body').style.display = 'block';
                }, 500);
            }
        });
    });
});