// =====================================================
//  СЛОВАРЬ ПЕРЕВОДОВ (9 языков)
// =====================================================
const translations = {
    ru: {
        nav_home: 'Главная', nav_about: 'Обо мне', nav_skills: 'Навыки',
        nav_projects: 'Проекты', nav_contact: 'Контакты',
        home_greeting: 'Привет, меня зовут', home_iam: 'Я —',
        home_desc: 'Разрабатываю красивые и быстрые веб-приложения, которые решают реальные задачи.',
        home_works: 'Мои работы', home_contact: 'Связаться', home_scroll: '↓ скролл',
        about_title: 'Обо мне',
        about_desc: 'Я веб-разработчик, увлечённый созданием интерфейсов. Люблю чистый код, продуманный UX и учиться новому каждый день.',
        about_exp: 'года опыта', about_projects: 'проектов', about_clients: 'клиентов',
        skills_title: 'Навыки', projects_title: 'Проекты',
        p1_title: 'Интернет-магазин', p1_desc: 'Магазин с корзиной, фильтрами и оплатой. HTML, CSS, JS.',
        p2_title: 'Погодное приложение', p2_desc: 'Прогноз погоды по API с геолокацией.',
        p3_title: 'Лендинг для бизнеса', p3_desc: 'Адаптивный лендинг с анимациями и формой заявки.',
        p_view: 'Посмотреть →',
        contact_title: 'Связаться со мной',
        f_name: 'Ваше имя', f_email: 'Ваш email', f_msg: 'Сообщение', f_send: 'Отправить сообщение',
        footer: '© 2026 Имя Фамилия. Сделано с ❤️',
        typing: ['Веб-разработчик', 'Фронтенд-разработчик', 'Дизайнер', 'Фрилансер'],
        form_ok: '✅ Сообщение отправлено! Спасибо.'
    },
    en: {
        nav_home: 'Home', nav_about: 'About me', nav_skills: 'Skills',
        nav_projects: 'Projects', nav_contact: 'Contact',
        home_greeting: 'Hi, my name is', home_iam: "I'm a",
        home_desc: 'I build beautiful and fast web applications that solve real problems.',
        home_works: 'My works', home_contact: 'Contact me', home_scroll: '↓ scroll',
        about_title: 'About me',
        about_desc: "I'm a web developer passionate about crafting interfaces. I love clean code, thoughtful UX and learning something new every day.",
        about_exp: 'years of experience', about_projects: 'projects', about_clients: 'clients',
        skills_title: 'Skills', projects_title: 'Projects',
        p1_title: 'Online store', p1_desc: 'Store with cart, filters and checkout. HTML, CSS, JS.',
        p2_title: 'Weather app', p2_desc: 'Weather forecast via API with geolocation.',
        p3_title: 'Business landing page', p3_desc: 'Responsive landing with animations and a lead form.',
        p_view: 'View →',
        contact_title: 'Get in touch',
        f_name: 'Your name', f_email: 'Your email', f_msg: 'Message', f_send: 'Send message',
        footer: '© 2026 John Doe. Made with ❤️',
        typing: ['Web Developer', 'Frontend Developer', 'Designer', 'Freelancer'],
        form_ok: '✅ Message sent! Thank you.'
    },
    de: {
        nav_home: 'Start', nav_about: 'Über mich', nav_skills: 'Fähigkeiten',
        nav_projects: 'Projekte', nav_contact: 'Kontakt',
        home_greeting: 'Hallo, ich heiße', home_iam: 'Ich bin',
        home_desc: 'Ich entwickle schöne und schnelle Webanwendungen, die echte Probleme lösen.',
        home_works: 'Meine Arbeiten', home_contact: 'Kontakt', home_scroll: '↓ scrollen',
        about_title: 'Über mich',
        about_desc: 'Ich bin Webentwickler und begeistert von der Gestaltung von Oberflächen. Ich liebe sauberen Code, durchdachtes UX und lerne jeden Tag etwas Neues.',
        about_exp: 'Jahre Erfahrung', about_projects: 'Projekte', about_clients: 'Kunden',
        skills_title: 'Fähigkeiten', projects_title: 'Projekte',
        p1_title: 'Online-Shop', p1_desc: 'Shop mit Warenkorb, Filtern und Kaufabwicklung. HTML, CSS, JS.',
        p2_title: 'Wetter-App', p2_desc: 'Wettervorhersage per API mit Geolokalisierung.',
        p3_title: 'Business-Landingpage', p3_desc: 'Responsives Landing mit Animationen und Anfrageformular.',
        p_view: 'Ansehen →',
        contact_title: 'Kontakt aufnehmen',
        f_name: 'Dein Name', f_email: 'Deine E-Mail', f_msg: 'Nachricht', f_send: 'Nachricht senden',
        footer: '© 2026 Max Mustermann. Mit ❤️ gemacht',
        typing: ['Webentwickler', 'Frontend-Entwickler', 'Designer', 'Freelancer'],
        form_ok: '✅ Nachricht gesendet! Danke.'
    },
    fr: {
        nav_home: 'Accueil', nav_about: 'À propos', nav_skills: 'Compétences',
        nav_projects: 'Projets', nav_contact: 'Contact',
        home_greeting: 'Bonjour, je m’appelle', home_iam: 'Je suis',
        home_desc: 'Je crée des applications web belles et rapides qui résolvent de vrais problèmes.',
        home_works: 'Mes travaux', home_contact: 'Me contacter', home_scroll: '↓ défilez',
        about_title: 'À propos',
        about_desc: 'Je suis développeur web passionné par la création d’interfaces. J’adore le code propre, l’UX réfléchi et apprendre chaque jour.',
        about_exp: 'années d’expérience', about_projects: 'projets', about_clients: 'clients',
        skills_title: 'Compétences', projects_title: 'Projets',
        p1_title: 'Boutique en ligne', p1_desc: 'Boutique avec panier, filtres et paiement. HTML, CSS, JS.',
        p2_title: 'Application météo', p2_desc: 'Prévisions météo via API avec géolocalisation.',
        p3_title: 'Landing page business', p3_desc: 'Landing responsive avec animations et formulaire.',
        p_view: 'Voir →',
        contact_title: 'Me contacter',
        f_name: 'Votre nom', f_email: 'Votre e-mail', f_msg: 'Message', f_send: 'Envoyer',
        footer: '© 2026 Jean Dupont. Fait avec ❤️',
        typing: ['Développeur Web', 'Développeur Frontend', 'Designer', 'Freelance'],
        form_ok: '✅ Message envoyé ! Merci.'
    },
    es: {
        nav_home: 'Inicio', nav_about: 'Sobre mí', nav_skills: 'Habilidades',
        nav_projects: 'Proyectos', nav_contact: 'Contacto',
        home_greeting: 'Hola, me llamo', home_iam: 'Soy',
        home_desc: 'Desarrollo aplicaciones web bonitas y rápidas que resuelven problemas reales.',
        home_works: 'Mis trabajos', home_contact: 'Contactar', home_scroll: '↓ desliza',
        about_title: 'Sobre mí',
        about_desc: 'Soy desarrollador web apasionado por crear interfaces. Me encanta el código limpio, el UX cuidado y aprender algo nuevo cada día.',
        about_exp: 'años de experiencia', about_projects: 'proyectos', about_clients: 'clientes',
        skills_title: 'Habilidades', projects_title: 'Proyectos',
        p1_title: 'Tienda online', p1_desc: 'Tienda con carrito, filtros y pago. HTML, CSS, JS.',
        p2_title: 'App del clima', p2_desc: 'Pronóstico del tiempo vía API con geolocalización.',
        p3_title: 'Landing para negocio', p3_desc: 'Landing responsive con animaciones y formulario.',
        p_view: 'Ver →',
        contact_title: 'Contáctame',
        f_name: 'Tu nombre', f_email: 'Tu email', f_msg: 'Mensaje', f_send: 'Enviar mensaje',
        footer: '© 2026 Juan Pérez. Hecho con ❤️',
        typing: ['Desarrollador Web', 'Desarrollador Frontend', 'Diseñador', 'Freelancer'],
        form_ok: '✅ ¡Mensaje enviado! Gracias.'
    },
    uk: {
        nav_home: 'Головна', nav_about: 'Про мене', nav_skills: 'Навички',
        nav_projects: 'Проєкти', nav_contact: 'Контакти',
        home_greeting: 'Привіт, мене звати', home_iam: 'Я —',
        home_desc: 'Розробляю красиві та швидкі веб-застосунки, які вирішують реальні завдання.',
        home_works: 'Мої роботи', home_contact: 'Зв’язатися', home_scroll: '↓ скрол',
        about_title: 'Про мене',
        about_desc: 'Я веб-розробник, захоплений створенням інтерфейсів. Люблю чистий код, продуманий UX і вчитися новому щодня.',
        about_exp: 'роки досвіду', about_projects: 'проєктів', about_clients: 'клієнтів',
        skills_title: 'Навички', projects_title: 'Проєкти',
        p1_title: 'Інтернет-магазин', p1_desc: 'Магазин з кошиком, фільтрами та оплатою. HTML, CSS, JS.',
        p2_title: 'Погодний застосунок', p2_desc: 'Прогноз погоди через API з геолокацією.',
        p3_title: 'Лендінг для бізнесу', p3_desc: 'Адаптивний лендінг з анімаціями та формою заявки.',
        p_view: 'Переглянути →',
        contact_title: 'Зв’язатися зі мною',
        f_name: 'Ваше ім’я', f_email: 'Ваш email', f_msg: 'Повідомлення', f_send: 'Надіслати повідомлення',
        footer: '© 2026 Ім’я Прізвище. Зроблено з ❤️',
        typing: ['Веб-розробник', 'Фронтенд-розробник', 'Дизайнер', 'Фрілансер'],
        form_ok: '✅ Повідомлення надіслано! Дякую.'
    },
    kk: {
        nav_home: 'Басты бет', nav_about: 'Мен туралы', nav_skills: 'Дағдылар',
        nav_projects: 'Жобалар', nav_contact: 'Байланыс',
        home_greeting: 'Сәлем, менің атым', home_iam: 'Мен —',
        home_desc: 'Нақты мәселелерді шешетін әдемі әрі жылдам веб-қосымшалар жасаймын.',
        home_works: 'Жұмыстарым', home_contact: 'Байланысу', home_scroll: '↓ скролл',
        about_title: 'Мен туралы',
        about_desc: 'Мен интерфейс жасауға қызығатын веб-әзірлеушімін. Таза кодты, ойластырылған UX-ті және күн сайын жаңа нәрсе үйренуді жақсы көремін.',
        about_exp: 'жыл тәжірибе', about_projects: 'жоба', about_clients: 'клиент',
        skills_title: 'Дағдылар', projects_title: 'Жобалар',
        p1_title: 'Интернет-дүкен', p1_desc: 'Себеті, сүзгілері және төлемі бар дүкен. HTML, CSS, JS.',
        p2_title: 'Ауа райы қолданбасы', p2_desc: 'Геолокациямен API арқылы ауа райы болжамы.',
        p3_title: 'Бизнес лендингі', p3_desc: 'Анимациялары және өтінім формасы бар лендинг.',
        p_view: 'Көру →',
        contact_title: 'Менімен байланысыңыз',
        f_name: 'Атыңыз', f_email: 'Email', f_msg: 'Хабарлама', f_send: 'Хабарлама жіберу',
        footer: '© 2026 Есім Тег. ❤️ жасалған',
        typing: ['Веб-әзірлеуші', 'Фронтенд-әзірлеуші', 'Дизайнер', 'Фрилансер'],
        form_ok: '✅ Хабарлама жіберілді! Рақмет.'
    },
    zh: {
        nav_home: '首页', nav_about: '关于我', nav_skills: '技能',
        nav_projects: '项目', nav_contact: '联系方式',
        home_greeting: '你好，我叫', home_iam: '我是一名',
        home_desc: '我开发美观、快速、解决实际问题的网页应用。',
        home_works: '我的作品', home_contact: '联系我', home_scroll: '↓ 滚动',
        about_title: '关于我',
        about_desc: '我是一名热爱界面设计的网页开发者。我喜欢干净的代码、贴心的用户体验，并每天学习新知识。',
        about_exp: '年经验', about_projects: '个项目', about_clients: '位客户',
        skills_title: '技能', projects_title: '项目',
        p1_title: '网上商店', p1_desc: '带购物车、筛选和支付的商店。HTML、CSS、JS。',
        p2_title: '天气应用', p2_desc: '通过 API 提供定位的天气预报。',
        p3_title: '企业落地页', p3_desc: '带动画和留言表单的自适应落地页。',
        p_view: '查看 →',
        contact_title: '联系我',
        f_name: '您的姓名', f_email: '您的邮箱', f_msg: '留言', f_send: '发送留言',
        footer: '© 2026 姓名。用心制作 ❤️',
        typing: ['网页开发者', '前端开发者', '设计师', '自由职业者'],
        form_ok: '✅ 留言已发送！谢谢。'
    },
    ja: {
        nav_home: 'ホーム', nav_about: '私について', nav_skills: 'スキル',
        nav_projects: '作品', nav_contact: '連絡先',
        home_greeting: 'こんにちは、', home_iam: '私は',
        home_desc: '実際の課題を解決する、美しく高速なウェブアプリを開発しています。',
        home_works: '作品を見る', home_contact: '連絡する', home_scroll: '↓ スクロール',
        about_title: '私について',
        about_desc: 'インターフェース作りに情熱を持つウェブ開発者です。クリーンなコード、思いやりのあるUX、毎日の学びが好きです。',
        about_exp: '年の経験', about_projects: '件のプロジェクト', about_clients: '人のクライアント',
        skills_title: 'スキル', projects_title: '作品',
        p1_title: 'オンラインショップ', p1_desc: 'カート・フィルター・決済付きのショップ。HTML、CSS、JS。',
        p2_title: '天気アプリ', p2_desc: 'ジオロケーション対応のAPI天気予報。',
        p3_title: 'ビジネスLP', p3_desc: 'アニメーションと問い合わせフォーム付きのLP。',
        p_view: '見る →',
        contact_title: 'お問い合わせ',
        f_name: 'お名前', f_email: 'メール', f_msg: 'メッセージ', f_send: '送信する',
        footer: '© 2026 名前。❤️を込めて制作',
    }
};

// Фикс: в словаре ja был пропущен ключ typing — добавляем программно
translations.ja.typing = ['ウェブ開発者', 'フロントエンド開発者', 'デザイナー', 'フリーランサー'];
translations.ja.form_ok = '✅ メッセージを送信しました！ありがとうございます。';
// Строка с © в ja сломана (пропущены кавычки) — исправляем
translations.ja.footer = '© 2026 名前。❤️を込めて制作';


// ---- Дополнительные переводы новых секций ----
Object.assign(translations.ru, {
    video_title: 'Смотрите, как я работаю',
    video_hint: '🖱️ Крутите колесо мыши над видео — оно будет перематываться вперёд и назад',
    video_overlay: 'Прокручивайте колесо мыши',
    services_title: 'Чем я могу помочь',
    s1_title: 'Веб-дизайн', s1_desc: 'Современный, минималистичный дизайн, который выделит вас среди конкурентов.',
    s2_title: 'Разработка сайтов', s2_desc: 'Быстрые и адаптивные сайты на HTML, CSS и JavaScript под любые устройства.',
    s3_title: 'Оптимизация', s3_desc: 'Ускорение загрузки, SEO-оптимизация и улучшение пользовательского опыта.',
    s4_title: 'Поддержка', s4_desc: 'Обновление контента, исправление багов и развитие проекта после запуска.',
    timeline_title: 'Мой путь',
    t1_title: 'Фриланс-разработчик', t1_desc: 'Более 25 завершённых проектов для клиентов из разных стран.',
    t2_title: 'Junior Frontend Developer', t2_desc: 'Работа в студии: вёрстка, анимации, поддержка крупных проектов.',
    t3_title: 'Самообучение', t3_desc: 'Изучение HTML, CSS, JavaScript и создание первых проектов.'
});
Object.assign(translations.en, {
    video_title: 'Watch me in action',
    video_hint: '🖱️ Scroll your mouse wheel over the video to scrub forward and backward',
    video_overlay: 'Scroll the mouse wheel',
    services_title: 'How I can help',
    s1_title: 'Web design', s1_desc: 'Modern, minimalist design that makes you stand out.',
    s2_title: 'Website development', s2_desc: 'Fast, responsive websites in HTML, CSS and JavaScript for any device.',
    s3_title: 'Optimization', s3_desc: 'Faster loading, SEO and better user experience.',
    s4_title: 'Support', s4_desc: 'Content updates, bug fixes and project growth after launch.',
    timeline_title: 'My journey',
    t1_title: 'Freelance developer', t1_desc: '25+ completed projects for clients worldwide.',
    t2_title: 'Junior Frontend Developer', t2_desc: 'Studio work: layouts, animations, support of large projects.',
    t3_title: 'Self-learning', t3_desc: 'Learning HTML, CSS, JavaScript and building first projects.'
});
Object.assign(translations.de, {
    video_title: 'Sehen Sie zu, wie ich arbeite',
    video_hint: '🖱️ Scrollen Sie mit dem Mausrad über das Video — es wird vor- und zurückgespult',
    video_overlay: 'Mausrad scrollen',
    services_title: 'Wobei ich helfen kann',
    s1_title: 'Webdesign', s1_desc: 'Modernes, minimalistisches Design, das Sie hervorhebt.',
    s2_title: 'Webentwicklung', s2_desc: 'Schnelle, responsive Websites mit HTML, CSS und JavaScript.',
    s3_title: 'Optimierung', s3_desc: 'Schnellere Ladezeiten, SEO und bessere User Experience.',
    s4_title: 'Support', s4_desc: 'Inhaltsupdates, Fehlerbehebung und Weiterentwicklung nach dem Launch.',
    timeline_title: 'Mein Weg',
    t1_title: 'Freelance-Entwickler', t1_desc: 'Über 25 abgeschlossene Projekte für Kunden weltweit.',
    t2_title: 'Junior Frontend Developer', t2_desc: 'Studioarbeit: Layouts, Animationen, Betreuung großer Projekte.',
    t3_title: 'Selbstlernen', t3_desc: 'HTML, CSS, JavaScript lernen und erste Projekte bauen.'
});
Object.assign(translations.fr, {
    video_title: 'Regardez-moi travailler',
    video_hint: '🖱️ Faites tourner la molette sur la vidéo pour avancer et reculer',
    video_overlay: 'Faites défiler la molette',
    services_title: 'Comment je peux aider',
    s1_title: 'Webdesign', s1_desc: 'Design moderne et minimaliste qui vous démarque.',
    s2_title: 'Développement web', s2_desc: 'Sites rapides et responsives en HTML, CSS et JavaScript.',
    s3_title: 'Optimisation', s3_desc: 'Chargement plus rapide, SEO et meilleure expérience utilisateur.',
    s4_title: 'Support', s4_desc: 'Mises à jour, corrections et évolution du projet après le lancement.',
    timeline_title: 'Mon parcours',
    t1_title: 'Développeur freelance', t1_desc: 'Plus de 25 projets réalisés pour des clients du monde entier.',
    t2_title: 'Junior Frontend Developer', t2_desc: 'Travail en studio : intégration, animations, maintenance de gros projets.',
    t3_title: 'Auto-apprentissage', t3_desc: 'Apprentissage de HTML, CSS, JavaScript et premiers projets.'
});
Object.assign(translations.es, {
    video_title: 'Mírame trabajar',
    video_hint: '🖱️ Gira la rueda del ratón sobre el video para avanzar y retroceder',
    video_overlay: 'Gira la rueda del ratón',
    services_title: 'Cómo puedo ayudar',
    s1_title: 'Diseño web', s1_desc: 'Diseño moderno y minimalista que te destaca.',
    s2_title: 'Desarrollo web', s2_desc: 'Sitios rápidos y responsivos en HTML, CSS y JavaScript.',
    s3_title: 'Optimización', s3_desc: 'Carga más rápida, SEO y mejor experiencia de usuario.',
    s4_title: 'Soporte', s4_desc: 'Actualizaciones, corrección de errores y crecimiento tras el lanzamiento.',
    timeline_title: 'Mi camino',
    t1_title: 'Desarrollador freelance', t1_desc: 'Más de 25 proyectos completados para clientes del mundo.',
    t2_title: 'Junior Frontend Developer', t2_desc: 'Trabajo en estudio: maquetación, animaciones, soporte de grandes proyectos.',
    t3_title: 'Autoaprendizaje', t3_desc: 'Aprender HTML, CSS, JavaScript y crear primeros proyectos.'
});
Object.assign(translations.uk, {
    video_title: 'Дивіться, як я працюю',
    video_hint: '🖱️ Крутіть коліщатко миші над відео — воно перемотуватиметься вперед і назад',
    video_overlay: 'Прокручуйте коліщатко миші',
    services_title: 'Чим я можу допомогти',
    s1_title: 'Веб-дизайн', s1_desc: 'Сучасний мінімалістичний дизайн, що виділить вас серед конкурентів.',
    s2_title: 'Розробка сайтів', s2_desc: 'Швидкі адаптивні сайти на HTML, CSS і JavaScript для будь-яких пристроїв.',
    s3_title: 'Оптимізація', s3_desc: 'Прискорення завантаження, SEO та покращення досвіду користувачів.',
    s4_title: 'Підтримка', s4_desc: 'Оновлення контенту, виправлення багів і розвиток проєкту після запуску.',
    timeline_title: 'Мій шлях',
    t1_title: 'Фріланс-розробник', t1_desc: 'Понад 25 завершених проєктів для клієнтів з різних країн.',
    t2_title: 'Junior Frontend Developer', t2_desc: 'Робота в студії: верстка, анімації, підтримка великих проєктів.',
    t3_title: 'Самонавчання', t3_desc: 'Вивчення HTML, CSS, JavaScript і створення перших проєктів.'
});
Object.assign(translations.kk, {
    video_title: 'Мен қалай жұмыс істейтінімді көріңіз',
    video_hint: '🖱️ Тінтуір доңгалағын видео үстінде айналтыңыз — ол алға және артқа айналады',
    video_overlay: 'Тінтуір доңгалағын айналтыңыз',
    services_title: 'Қалай көмектесе аламын',
    s1_title: 'Веб-дизайн', s1_desc: 'Сізді бөле тұратын заманауи минималистік дизайн.',
    s2_title: 'Сайт жасау', s2_desc: 'Кез келген құрылғыға арналған жылдам HTML, CSS, JS сайттары.',
    s3_title: 'Оптимизация', s3_desc: 'Жүктелуді жеделдету, SEO және пайдаланушы тәжірибесін жақсарту.',
    s4_title: 'Қолдау', s4_desc: 'Мазмұнды жаңарту, қателерді түзету және іске қосқаннан кейінгі даму.',
    timeline_title: 'Менің жолым',
    t1_title: 'Фриланс-әзірлеуші', t1_desc: 'Әр елдерден келген клиенттерге 25+ аяқталған жоба.',
    t2_title: 'Junior Frontend Developer', t2_desc: 'Студияда жұмыс: верстка, анимациялар, ірі жобаларды қолдау.',
    t3_title: 'Өзін-өзі оқыту', t3_desc: 'HTML, CSS, JavaScript үйрену және алғашқы жобалар жасау.'
});
Object.assign(translations.zh, {
    video_title: '看看我的工作过程',
    video_hint: '🖱️ 在视频上滚动鼠标滚轮，即可前后快进/快退',
    video_overlay: '滚动鼠标滚轮',
    services_title: '我能提供什么帮助',
    s1_title: '网页设计', s1_desc: '现代简约的设计，让您脱颖而出。',
    s2_title: '网站开发', s2_desc: '基于 HTML、CSS、JavaScript 的快速响应式网站。',
    s3_title: '优化', s3_desc: '加速加载、SEO 优化和改善用户体验。',
    s4_title: '维护支持', s4_desc: '内容更新、错误修复和上线后的持续发展。',
    timeline_title: '我的历程',
    t1_title: '自由开发者', t1_desc: '为全球客户完成了 25 多个项目。',
    t2_title: '初级前端开发', t2_desc: '在工作室工作：排版、动画、支持大型项目。',
    t3_title: '自学阶段', t3_desc: '学习 HTML、CSS、JavaScript 并创建第一个项目。'
});
Object.assign(translations.ja, {
    video_title: '私の仕事をご覧ください',
    video_hint: '🖱️ ビデオ上でマウスホイールを回すと、前後にスクラブできます',
    video_overlay: 'ホイールをスクロール',
    services_title: 'できること',
    s1_title: 'ウェブデザイン', s1_desc: 'あなたを際立たせるモダンでミニマルなデザイン。',
    s2_title: 'サイト開発', s2_desc: 'HTML、CSS、JavaScriptで高速かつレスポンシブなサイト。',
    s3_title: '最適化', s3_desc: '読み込み高速化、SEO、UX改善。',
    s4_title: 'サポート', s4_desc: 'コンテンツ更新、バグ修正、公開後の成長支援。',
    timeline_title: '私の歩み',
    t1_title: 'フリーランス開発者', t1_desc: '世界中のクライアント向けに25件以上のプロジェクトを完遂。',
    t2_title: 'ジュニアフロントエンド', t2_desc: 'スタジオ勤務：コーディング、アニメーション、大規模プロジェクトの保守。',
    t3_title: '独学', t3_desc: 'HTML、CSS、JavaScriptを学び最初のプロジェクトを制作。'
});

const langFlags = {
    ru: '🇷🇺', en: '🇬🇧', de: '🇩🇪', fr: '🇫🇷', es: '🇪🇸',
    uk: '🇺🇦', kk: '🇰🇿', zh: '🇨🇳', ja: '🇯🇵'
};

let currentLang = localStorage.getItem('lang') || 'ru';

// ========== ПРИМЕНЕНИЕ ПЕРЕВОДА ==========
function setLang(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    const dict = translations[lang];

    // Текстовые элементы
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (dict[key]) el.textContent = dict[key];
    });

    // Placeholder'ы формы
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.dataset.i18nPh;
        if (dict[key]) el.placeholder = dict[key];
    });

    // Флаг в кнопке
    document.getElementById('lang-current').textContent = langFlags[lang];

    // Подсветка активного языка в списке
    document.querySelectorAll('.lang__option').forEach(btn =>
        btn.classList.toggle('active', btn.dataset.lang === lang));

    // Перезапуск эффекта печати на новом языке
    wordIndex = 0; charIndex = 0; isDeleting = false;
    clearTimeout(typeTimeout);
    type();
}

// ========== ДРОПДАУН ЯЗЫКА ==========
const langSwitch = document.getElementById('lang-switch');
const langBtn = document.getElementById('lang-btn');

langBtn.addEventListener('click', e => {
    e.stopPropagation();
    langSwitch.classList.toggle('open');
});

document.querySelectorAll('.lang__option').forEach(btn => {
    btn.addEventListener('click', () => {
        setLang(btn.dataset.lang);
        langSwitch.classList.remove('open');
    });
});

// Закрытие дропдауна при клике вне его
document.addEventListener('click', e => {
    if (!langSwitch.contains(e.target)) langSwitch.classList.remove('open');
});

// ========== БУРГЕР-МЕНЮ ==========
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', () => navMenu.classList.toggle('open'));

document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('open'));
});

// ========== ТЕМА ==========
const themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    themeBtn.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
    themeBtn.textContent = '☀️';
}

// ========== ЭФФЕКТ ПЕЧАТАНИЯ ==========
const typingEl = document.getElementById('typing');
let wordIndex = 0, charIndex = 0, isDeleting = false, typeTimeout;

function type() {
    const words = translations[currentLang].typing;
    const word = words[wordIndex];
    typingEl.textContent = word.slice(0, charIndex);

    if (!isDeleting && charIndex < word.length) {
        charIndex++;
        typeTimeout = setTimeout(type, 120);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        typeTimeout = setTimeout(type, 60);
    } else {
        if (!isDeleting) {
            isDeleting = true;
            typeTimeout = setTimeout(type, 1800);
        } else {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeTimeout = setTimeout(type, 400);
        }
    }
}

// ========== АКТИВНАЯ ССЫЛКА ПРИ СКРОЛЛЕ ==========
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav__link');

window.addEventListener('scroll', () => {
    let current = 'home';
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 150) current = sec.id;
    });
    navLinks.forEach(link =>
        link.classList.toggle('active', link.getAttribute('href') === '#' + current));

    document.getElementById('header').style.boxShadow =
        window.scrollY > 50 ? '0 2px 20px rgba(0,0,0,.3)' : 'none';
});

// ========== ПЛАВНОЕ ПОЯВЛЕНИЕ БЛОКОВ ==========
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('section, .project__card, .skill').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// ========== ПРОГРЕСС-БАРЫ ==========
const skillsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.skill__progress').forEach(bar => {
                bar.style.width = bar.style.getPropertyValue('--w');
            });
            skillsObserver.disconnect();
        }
    });
}, { threshold: 0.3 });
skillsObserver.observe(document.getElementById('skills'));

// ========== СЧЁТЧИКИ ==========
const counters = document.querySelectorAll('.about__num');
let counted = false;

const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !counted) {
            counted = true;
            counters.forEach(counter => {
                const target = +counter.dataset.count;
                let current = 0;
                const step = Math.ceil(target / 50);
                const interval = setInterval(() => {
                    current += step;
                    if (current >= target) { current = target; clearInterval(interval); }
                    counter.textContent = current;
                }, 40);
            });
            counterObserver.disconnect();
        }
    });
});
counterObserver.observe(document.getElementById('about'));

// ========== ФОРМА ==========
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', e => {
    e.preventDefault();
    status.textContent = translations[currentLang].form_ok;
    form.reset();
    setTimeout(() => status.textContent = '', 4000);
});

// ========== СТАРТ ==========
setLang(currentLang);

// =====================================================
//  ПРЕЛОАДЕР
// =====================================================
window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('preloader').classList.add('hide'), 500);
});

// =====================================================
//  ПОЛОСА ПРОГРЕССА СКРОЛЛА
// =====================================================
const scrollProgress = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    scrollProgress.style.width = pct + '%';
});

// =====================================================
//  КАСТОМНЫЙ КУРСОР
// =====================================================
const cursorDot = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
});

(function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
})();

document.querySelectorAll('a, button, .tilt, .project__card').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

// =====================================================
//  ЧАСТИЦЫ НА ФОНЕ
// =====================================================
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}
resizeCanvas();
addEventListener('resize', resizeCanvas);

class Particle {
    constructor() { this.reset(); }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + .5;
        this.speedX = (Math.random() - .5) * .35;
        this.speedY = (Math.random() - .5) * .35;
        this.alpha = Math.random() * .5 + .15;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124, 92, 255, ${this.alpha})`;
        ctx.fill();
    }
}

for (let i = 0; i < 60; i++) particles.push(new Particle());

(function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateParticles);
})();

// =====================================================
//  ВИДЕО: СКРАББИНГ КОЛЕСОМ МЫШИ
//  Вращение вперёд = перемотка вперёд, назад = назад
// =====================================================
const video = document.getElementById('scroll-video');
const videoFrame = document.getElementById('video-frame');
const videoProgress = document.getElementById('video-progress');
const SCRUB_SPEED = 0.05; // секунд видео на один шаг колеса
let targetTime = 0, currentTime = 0, videoReady = false, userScrolled = false;

video.addEventListener('loadedmetadata', () => {
    videoReady = true;
    targetTime = currentTime = video.currentTime;
});
// Если видео не удалось загрузить — показываем заглушку
video.addEventListener('error', () => {
    videoFrame.classList.add('no-video');
});

videoFrame.addEventListener('wheel', e => {
    if (!videoReady) return;
    e.preventDefault(); // страница не скроллится, пока крутим видео
    userScrolled = true;
    videoFrame.classList.add('scrubbing');

    // deltaY > 0 — колесо от себя (вниз) → видео вперёд
    // deltaY < 0 — колесо к себе (вверх) → видео назад
    targetTime += e.deltaY * SCRUB_SPEED / 100;
    targetTime = Math.max(0, Math.min(video.duration, targetTime));

    // Обновление полосы прогресса
    videoProgress.style.width = (targetTime / video.duration * 100) + '%';
}, { passive: false });

// Плавная анимация перемотки (инерция)
(function scrubVideo() {
    if (videoReady) {
        currentTime += (targetTime - currentTime) * 0.12;
        if (Math.abs(targetTime - currentTime) < 0.01) currentTime = targetTime;
        video.currentTime = currentTime;
    }
    requestAnimationFrame(scrubVideo);
})();

// =====================================================
//  3D-НАКЛОН КАРТОЧЕК (TILT)
// =====================================================
document.querySelectorAll('.tilt').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - .5;
        const y = (e.clientY - rect.top) / rect.height - .5;
        card.style.transform = `perspective(800px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateY(-10px)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// =====================================================
//  МАГНИТНЫЕ КНОПКИ
// =====================================================
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * .2}px, ${y * .25}px)`;
    });
    btn.addEventListener('mouseleave', () => btn.style.transform = '');
});

// =====================================================
//  ПАРАЛЛАКС БЛОБА НА ГЛАВНОМ ЭКРАНЕ
// =====================================================
const blob = document.querySelector('.blob');
document.addEventListener('mousemove', e => {
    if (!blob) return;
    const x = (e.clientX / innerWidth - .5) * 30;
    const y = (e.clientY / innerHeight - .5) * 30;
    blob.style.translate = `${x}px ${y}px`;
});