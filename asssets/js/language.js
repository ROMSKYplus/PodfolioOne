// Language translations
const translations = {
    en: {
        "brand": "Full-Stack Developer",
        "nav.home": "Home",
        "nav.about": "About",
        "nav.projects": "Projects",
        "nav.videos": "Videos",
        "nav.store": "Store",
        "nav.blog": "Blog",
        "nav.contact": "Contact",
        "home.title": "Hello! I'm a Full-Stack Developer",
        "home.subtitle": "I'm a web and app developer skilled in Laravel, React/Vue.js, and Tailwind CSS.",
        "home.hire_me": "Hire Me",
        "home.view_projects": "View Projects",
        "about.title": "About Me",
        "about.skills_title": "Skills & Experience",
        "about.skills_text": "I'm a Full-Stack Developer specializing in building high-quality websites and applications.",
        "about.tech_skills": "Technical Skills:",
        "about.education_title": "Education",
        "about.education_degree": "Bachelor of Computer Science",
        "about.experience_title": "Work Experience",
        "about.job_title": "Full-Stack Developer",
        "about.job_duration": "2020-Present",
        "projects.title": "Recent Projects",
        "projects.project1.title": "School Management System",
        "projects.project1.description": "Laravel and Vue.js system for managing students, teachers, and fees.",
        "projects.project2.title": "Business Website Template",
        "projects.project2.description": "Modern, customizable website template for small businesses.",
        "projects.project3.title": "E-commerce Mobile App",
        "projects.project3.description": "React Native app with Laravel backend for product sales.",
        "projects.view_project": "View Project",
        "projects.view_code": "Code",
        "projects.view_all": "View All Projects",
        "videos.title": "Tutorial Videos",
        "videos.video1.title": "Laravel for Beginners",
        "videos.video1.description": "Learn to build websites with Laravel from scratch.",
        "videos.video2.title": "Vue.js with Laravel",
        "videos.video2.description": "How to create SPAs with Vue.js and Laravel API.",
        "videos.video3.title": "Building APIs with Laravel",
        "videos.video3.description": "Learn to create RESTful APIs using Laravel.",
        "videos.view_all": "View All Videos",
        "store.title": "Products for Sale",
        "store.product1.title": "School Management System",
        "store.product1.description": "Complete system for private school administration.",
        "store.product2.title": "Business Website Template",
        "store.product2.description": "High-quality, customizable business website template.",
        "store.product3.title": "E-commerce Mobile App",
        "store.product3.description": "Mobile app for product sales businesses.",
        "store.buy_now": "Buy Now",
        "store.view_all": "View All Products",
        "blog.title": "Blog & Tutorials",
        "blog.post1.title": "Building APIs with Laravel",
        "blog.post1.description": "Complete guide to creating RESTful APIs using Laravel.",
        "blog.post2.title": "Using Vue.js with Laravel",
        "blog.post2.description": "How to make Laravel and Vue.js work together effectively.",
        "blog.post3.title": "Creating SPAs with React",
        "blog.post3.description": "Steps to build Single Page Applications using React.js.",
        "blog.read_more": "Read More",
        "blog.view_all": "View All Posts",
        "contact.title": "Contact",
        "contact.form.name": "Name",
        "contact.form.email": "Email",
        "contact.form.message": "Message",
        "contact.form.submit": "Send Message",
        "contact.info_title": "Contact Information",
        "contact.address": "Phnom Penh, Cambodia",
        "contact.hire_title": "For Work Inquiries",
        "contact.hire_text": "If you're interested in my services, please contact me via email or phone.",
        "contact.hire_button": "Hire Me",
        "footer.brand": "Full-Stack Developer",
        "footer.description": "I'm a web and app developer skilled in Laravel, React/Vue.js, and Tailwind CSS.",
        "footer.links": "Links",
        "footer.social": "Social",
        "footer.copyright": "© 2023 Full-Stack Developer. All rights reserved."
    },
    km: {
        "brand": "អ្នកអភិវឌ្ឍន៍ Full-Stack",
        "nav.home": "ទំព័រដើម",
        "nav.about": "អំពីខ្ញុំ",
        "nav.projects": "គម្រោង",
        "nav.videos": "វីដេអូ",
        "nav.store": "ហាង",
        "nav.blog": "ប្លុក",
        "nav.contact": "ទំនាក់ទំនង",
        "home.title": "សួស្តី! ខ្ញុំជាអ្នកអភិវឌ្ឍន៍ Full-Stack",
        "home.subtitle": "ខ្ញុំជាអ្នកអភិវឌ្ឍន៍វែបសាយ និងកម្មវិធីដែលមានជំនាញក្នុង Laravel, React/Vue.js និង Tailwind CSS។",
        "home.hire_me": "ជួលខ្ញុំ",
        "home.view_projects": "មើលគម្រោង",
        "about.title": "អំពីខ្ញុំ",
        "about.skills_title": "ជំនាញ និងបទពិសោធន៍",
        "about.skills_text": "ខ្ញុំជាអ្នកអភិវឌ្ឍន៍ Full-Stack ដែលមានជំនាញក្នុងការបង្កើតវែបសាយ និងកម្មវិធីដែលមានគុណភាពខ្ពស់។",
        "about.tech_skills": "ជំនាញបច្ចេកទេស៖",
        "about.education_title": "ការអប់រំ",
        "about.education_degree": "បរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រ",
        "about.experience_title": "បទពិសោធន៍ការងារ",
        "about.job_title": "អ្នកអភិវឌ្ឍន៍ Full-Stack",
        "about.job_duration": "2020-បច្ចុប្បន្ន",
        "projects.title": "គម្រោងថ្មីៗ",
        "projects.project1.title": "ប្រព័ន្ធគ្រប់គ្រងសាលា",
        "projects.project1.description": "ប្រព័ន្ធគ្រប់គ្រងសាលាដែលបង្កើតឡើងដោយ Laravel និង Vue.js សម្រាប់គ្រប់គ្រងសិស្ស គ្រូ និងថ្លៃសិក្សា។",
        "projects.project2.title": "គំរូវែបសាយអាជីវកម្ម",
        "projects.project2.description": "គំរូវែបសាយសម្រាប់អាជីវកម្មតូច ដែលមានលក្ខណៈទំនើប និងងាយស្រួលប្រើ។",
        "projects.project3.title": "កម្មវិធីទូរស័ព្ទ E-commerce",
        "projects.project3.description": "កម្មវិធីទូរស័ព្ទសម្រាប់លក់ឥវ៉ាន់ បង្កើតដោយ React Native និង Laravel API។",
        "projects.view_project": "មើលគម្រោង",
        "projects.view_code": "កូដ",
        "projects.view_all": "មើលគម្រោងទាំងអស់",
        "videos.title": "វីដេអូបង្រៀន",
        "videos.video1.title": "ការបង្រៀន Laravel សម្រាប់អ្នកចាប់ផ្តើម",
        "videos.video1.description": "រៀនពីរបៀបបង្កើតវែបសាយដោយប្រើ Laravel ពីមូលដ្ឋាន។",
        "videos.video2.title": "ការប្រើប្រាស់ Vue.js ជាមួយ Laravel",
        "videos.video2.description": "របៀបបង្កើត SPA ដោយប្រើ Vue.js និង Laravel API។",
        "videos.video3.title": "ការបង្កើត API ដោយ Laravel",
        "videos.video3.description": "រៀនពីរបៀបបង្កើត RESTful API ដោយប្រើ Laravel។",
        "videos.view_all": "មើលវីដេអូទាំងអស់",
        "store.title": "ផលិតផលសម្រាប់លក់",
        "store.product1.title": "ប្រព័ន្ធគ្រប់គ្រងសាលា",
        "store.product1.description": "ប្រព័ន្ធគ្រប់គ្រងសាលាដែលមានលក្ខណៈពេញលេញសម្រាប់សាលាឯកជន។",
        "store.product2.title": "គំរូវែបសាយអាជីវកម្ម",
        "store.product2.description": "គំរូវែបសាយអាជីវកម្មដែលមានគុណភាពខ្ពស់ អាចប្តូរប្រើប្រាស់បាន។",
        "store.product3.title": "កម្មវិធីទូរស័ព្ទ E-commerce",
        "store.product3.description": "កម្មវិធីទូរស័ព្ទសម្រាប់អាជីវកម្មលក់ឥវ៉ាន់។",
        "store.buy_now": "ទិញឥឡូវ",
        "store.view_all": "មើលផលិតផលទាំងអស់",
        "blog.title": "ប្លុក និងការបង្រៀន",
        "blog.post1.title": "របៀបបង្កើត API ដោយ Laravel",
        "blog.post1.description": "មគ្គុទ្ទេសក៍ដ៏ពេញលេញសម្រាប់ការបង្កើត RESTful API ដោយប្រើ Laravel។",
        "blog.post2.title": "ការប្រើប្រាស់ Vue.js ជាមួយ Laravel",
        "blog.post2.description": "របៀបធ្វើឱ្យ Laravel និង Vue.js ធ្វើការជាមួយគ្នាយ៉ាងមានប្រសិទ្ធភាព។",
        "blog.post3.title": "ការបង្កើត SPA ដោយ React",
        "blog.post3.description": "ជំហានដើម្បីបង្កើត Single Page Application ដោយប្រើ React.js។",
        "blog.read_more": "អានបន្ថែម",
        "blog.view_all": "មើលអត្ថបទទាំងអស់",
        "contact.title": "ទំនាក់ទំនង",
        "contact.form.name": "ឈ្មោះ",
        "contact.form.email": "អ៊ីមែល",
        "contact.form.message": "សារ",
        "contact.form.submit": "ផ្ញើសារ",
        "contact.info_title": "ព័ត៌មានទំនាក់ទំនង",
        "contact.address": "ភ្នំពេញ, កម្ពុជា",
        "contact.hire_title": "សម្រាប់ការងារ",
        "contact.hire_text": "បើលោកអ្នកចាប់អារម្មណ៍លើសេវាកម្មរបស់ខ្ញុំ សូមទំនាក់ទំនងមកខ្ញុំតាមរយៈអ៊ីមែល ឬទូរស័ព្ទ។",
        "contact.hire_button": "ជួលខ្ញុំ",
        "footer.brand": "អ្នកអភិវឌ្ឍន៍ Full-Stack",
        "footer.description": "ខ្ញុំជាអ្នកអភិវឌ្ឍន៍វែបសាយ និងកម្មវិធីដែលមានជំនាញក្នុង Laravel, React/Vue.js និង Tailwind CSS។",
        "footer.links": "តំណភ្ជាប់",
        "footer.social": "សារធារណៈ",
        "footer.copyright": "© 2023 អ្នកអភិវឌ្ឍន៍ Full-Stack. រក្សាសិទ្ធគ្រប់យ៉ាង។"
    }
};

// Language switching functionality
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
    
    // Handle language selector clicks
    document.querySelectorAll('.language-selector').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});

function setLanguage(lang) {
    // Update current language display
    document.getElementById('currentLanguage').textContent = lang === 'en' ? 'EN' : 'ខ្មែរ';
    
    // Save to localStorage
    localStorage.setItem('language', lang);
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholder texts
    const form = document.getElementById('contactForm');
    if (form) {
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            const placeholderKey = input.previousElementSibling?.getAttribute('data-i18n');
            if (placeholderKey && translations[lang] && translations[lang][placeholderKey]) {
                input.setAttribute('placeholder', translations[lang][placeholderKey]);
            }
        });
    }
}