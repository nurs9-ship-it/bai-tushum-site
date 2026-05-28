// БАЗА ДАННЫХ СОТРУДНИКОВ (Вы можете менять имена и должности прямо тут!)
const teamData = {
    credit: [
        { name: "Асанов Бектур", role: "Главный специалист по кредитованию" },
        { name: "Исмаилова Асель", role: "Старший кредитный эксперт" },
        { name: "Кадыров Нурбек", role: "Кредитный эксперт" },
        { name: "Маматова Айгуль", role: "Кредитный эксперт" },
        { name: "Осмонов Данияр", role: "Младший кредитный инспектор" },
        { name: "Султанова Динара", role: "Стажер кредитного отдела" }
    ],
    operations: [
        { name: "Абдыкадырова Назима", role: "Начальник операционного отдела" },
        { name: "Токторов Азамат", role: "Старший операционист" },
        { name: "Жапарова Айпери", role: "Операционный специалист" }
    ],
    cash: [
        { name: "Усенова Бактыгуль", role: "Старший кассир" },
        { name: "Алиев Руслан", role: "Кассир-операционист" }
    ]
};

// ТЕКСТЫ НА 3 ЯЗЫКАХ
const translations = {
    ru: {
        heroTitle: "Банк «Бай-Түшүм»",
        heroDesc: "Универсальный банк с более чем 25-летней историей. Мы являемся одним из лидеров в финансовом секторе Кыргызстана, предоставляя надежные услуги для вас и вашего бизнеса.",
        heroBtn: "Официальный сайт",
        teamTitle: "Наша Команда",
        deptCredit: "Отдел кредитования (6 сотрудников)",
        deptOps: "Отдел операций (3 сотрудника)",
        deptCash: "Касса (2 сотрудника)",
        mapTitle: "Филиалы и Терминалы на карте"
    },
    kg: {
        heroTitle: "«Бай-Түшүм» Банкы",
        heroDesc: "25 жылдан ашык тарыхы бар универсалдуу банк. Биз сиз жана сиздин бизнесиңиз үчүн ишенимдүү кызматтарды көрсөтүү менен Кыргызстандын каржы секторундагы лидерлердин бирибиз.",
        heroBtn: "Расмий сайт",
        teamTitle: "Биздин Команда",
        deptCredit: "Кредиттөө бөлүмү (6 кызматкер)",
        deptOps: "Операциялык бөлүм (3 кызматкер)",
        deptCash: "Касса (2 кызматкер)",
        mapTitle: "Филиалдар жана Терминалдар картада"
    },
    en: {
        heroTitle: "Bank «Bai-Tushum»",
        heroDesc: "A universal bank with over 25 years of history. We are one of the leaders in the financial sector of Kyrgyzstan, providing reliable services for you and your business.",
        heroBtn: "Official Website",
        teamTitle: "Our Team",
        deptCredit: "Credit Department (6 employees)",
        deptOps: "Operations Department (3 employees)",
        deptCash: "Cash Desk (2 employees)",
        mapTitle: "Branches and Terminals on the map"
    }
};

// Функция отрисовки карточек сотрудников
function renderTeam() {
    const renderSection = (deptKey, containerId) => {
        const container = document.getElementById(containerId);
        container.innerHTML = "";
        teamData[deptKey].forEach(worker => {
            container.innerHTML += `
                <div class="member-card">
                    <div class="member-avatar">
                        <!-- Здесь заглушка. Когда будет фото, замените иконку на <img src="имя_файла.jpg"> -->
                        <svg width="50" height="50" fill="currentColor" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
                    </div>
                    <h4>${worker.name}</h4>
                    <p>${worker.role}</p>
                </div>
            `;
        });
    };

    renderSection('credit', 'credit-container');
    renderSection('operations', 'ops-container');
    renderSection('cash', 'cash-container');
}

// Функция переключения языков
function changeLanguage(lang) {
    // Меняем активную кнопку в шапке
    document.querySelectorAll('.lang-switcher button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');

    // Переводим текст на странице
    document.getElementById('hero-title').innerText = translations[lang].heroTitle;
    document.getElementById('hero-desc').innerText = translations[lang].heroDesc;
    document.getElementById('hero-btn').innerText = translations[lang].heroBtn;
    document.getElementById('team-title').innerText = translations[lang].teamTitle;
    document.getElementById('dept-credit').innerText = translations[lang].deptCredit;
    document.getElementById('dept-ops').innerText = translations[lang].deptOps;
    document.getElementById('dept-cash').innerText = translations[lang].deptCash;
    document.getElementById('map-title').innerText = translations[lang].mapTitle;
}

// Запуск при загрузке страницы
window.onload = function() {
    renderTeam();
    changeLanguage('ru'); // По умолчанию сайт откроется на русском
};