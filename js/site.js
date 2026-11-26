/* ==========================================================================
   «РаЗУМная школа» — конфигурация и спокойная интерактивность
   Чтобы подключить реальные контакты и видео Марины, достаточно заполнить SITE_CONFIG.
   ========================================================================== */

(() => {
  "use strict";

  const SITE_CONFIG = {
    /* Ник Марины в Telegram без @, например: "marina_schultheiss" */
    telegramHandle: "",
    /* Ссылка на Telegram-канал школы, например: "https://t.me/razumnaya_shkola" */
    telegramChannelUrl: "",
    /* Видео-приветствие: укажите YouTube ID (например "dQw4w9WgXcQ") ИЛИ путь к локальному MP4 */
    welcomeVideoYouTubeId: "",
    welcomeVideoMp4Path: ""
  };

  /* Содержимое папок «Копилки» — легко добавлять статьи, PDF и YouTube-разборы */
  const KOPILKA_FOLDERS = {
    grammar: [
      {
        type: "Заметка · Грамматика",
        title: "Passé Composé и Imparfait: логика вместо зубрёжки",
        desc: "Как почувствовать разницу между действием-событием и действием-атмосферой на живых примерах из французской прозы.",
        status: "Пример раздела · наполняется для учеников"
      },
      {
        type: "Шпаргалка · PDF",
        title: "Артикли как способ видеть мир по-французски",
        desc: "Почему определённый, неопределённый и частичный артикли — это не скучное правило, а точная оптика языка.",
        status: "Пример раздела · наполняется для учеников"
      },
      {
        type: "Разбор · Ассоциации",
        title: "Предлоги à и de: живые образы и устойчивые связки",
        desc: "Как перестать путать предлоги с глаголами с помощью простых смысловых опор и коротких историй.",
        status: "Пример раздела · наполняется для учеников"
      }
    ],
    lexis: [
      {
        type: "Словарь · Разговорный",
        title: "Оттенки повседневной речи: как говорят во Франции",
        desc: "Мягкие вводные слова, формулы вежливости и интонации, которые сразу делают французскую речь естественной.",
        status: "Пример раздела · наполняется для учеников"
      },
      {
        type: "Подборка · Перевод",
        title: "Ложные друзья переводчика: тонкие ловушки смысла",
        desc: "Слова, которые звучат знакомо по-русски, но несут во французском совсем иной оттенок — наблюдения синхрониста.",
        status: "Пример раздела · наполняется для учеников"
      },
      {
        type: "Зарисовки · Страсбург",
        title: "Язык города: вывески, булочные и маленькие диалоги",
        desc: "Живые выражения, которые слышишь на улицах Страсбурга и в небольших французских кафе.",
        status: "Пример раздела · наполняется для учеников"
      }
    ],
    reading: [
      {
        type: "Клуб чтения · Вечерний чай",
        title: "Тексты к встречам «Вечерний чай с…»",
        desc: "Небольшие рассказы, эссе и отрывки с аккуратными комментариями — чтобы читать в удовольствие и обсуждать вместе.",
        status: "Пример раздела · наполняется для учеников"
      },
      {
        type: "Поэзия · Вслух",
        title: "Французские стихи: мелодика, дыхание и ритм",
        desc: "Как чтение поэзии вслух снимает зажим в произношении и помогает услышать настоящую музыку языка.",
        status: "Пример раздела · наполняется для учеников"
      },
      {
        type: "Памятка · Самостоятельно",
        title: "Как читать книги на французском без словаря на каждом слове",
        desc: "Спокойный метод погружения в оригинальный текст, при котором сохраняется радость чтения.",
        status: "Пример раздела · наполняется для учеников"
      }
    ],
    media: [
      {
        type: "Видео · Короткий разбор",
        title: "Подборка заметок и видео из Telegram-канала",
        desc: "Короткие объяснения тонких языковых вопросов, к которым удобно возвращаться в любой момент.",
        status: "Пример раздела · наполняется для учеников"
      },
      {
        type: "Аудио · Фонетика",
        title: "Красота звучания: носовые гласные и связывание",
        desc: "Наблюдательность и слуховые упражнения, помогающие услышать нюансы французской фонетики без напряжения.",
        status: "Пример раздела · наполняется для учеников"
      },
      {
        type: "Кино и подкасты · Список",
        title: "Французские фильмы и подкасты по уровням",
        desc: "Проверенная подборка — что слушать и смотреть с удовольствием на A2, B1 и выше.",
        status: "Пример раздела · наполняется для учеников"
      }
    ]
  };

  const TOPIC_MESSAGES = {
    group: "Здравствуйте, Марина! Хочу записаться на бесплатное 30-минутное тестирование-знакомство для группового 10-недельного цикла.",
    tete: "Здравствуйте, Марина! Интересуют индивидуальные занятия Tête-à-tête. Хотел(а) бы договориться о 30-минутном знакомстве в Zoom.",
    tea: "Здравствуйте, Марина! Хочу узнать о ближайших вечерах курса чтения «Вечерний чай с…».",
    unsure: "Здравствуйте, Марина! Хочу записаться на бесплатное 30-минутное тестирование-знакомство и посоветоваться, какой формат мне подойдёт."
  };

  const root = document.documentElement;
  root.classList.add("js-ready");

  /* ---------- Шапка: тень/граница при прокрутке и мобильное меню ---------- */
  const header = document.querySelector(".site-header");
  const menuBtn = document.getElementById("menu-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (menuBtn && mobileDrawer) {
    menuBtn.addEventListener("click", () => {
      const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!isOpen));
      mobileDrawer.hidden = isOpen;
    });

    mobileDrawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuBtn.setAttribute("aria-expanded", "false");
        mobileDrawer.hidden = true;
      });
    });
  }

  /* ---------- Активная ссылка в навигации ---------- */
  const navLinks = Array.from(document.querySelectorAll(".nav a[href^='#']"));
  const trackedSections = navLinks
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && trackedSections.length) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = "#" + entry.target.id;
          navLinks.forEach((a) => {
            a.setAttribute("aria-current", a.getAttribute("href") === id ? "true" : "false");
          });
        });
      },
      { rootMargin: "-25% 0px -60% 0px" }
    );
    trackedSections.forEach((sec) => navObserver.observe(sec));
  }

  /* ---------- Плавное появление секций ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    const revealObs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 }
    );
    revealEls.forEach((el) => revealObs.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Биография Марины: аккуратное сворачивание на мобильном ---------- */
  const bioBtn = document.getElementById("bio-toggle");
  const bioExtended = document.getElementById("bio-extended");
  if (bioBtn && bioExtended) {
    bioBtn.addEventListener("click", () => {
      const collapsed = bioExtended.getAttribute("data-collapsed") === "true";
      bioExtended.setAttribute("data-collapsed", String(!collapsed));
      bioBtn.setAttribute("aria-expanded", String(collapsed));
      bioBtn.textContent = collapsed ? "Свернуть биографию" : "Читать биографию полностью";
    });
  }

  /* ---------- 7 принципов: компактный аккордеон на мобильном ---------- */
  const principleItems = Array.from(document.querySelectorAll(".principle-item"));
  const toggleAllBtn = document.getElementById("principles-toggle-all");
  const mobileMq = window.matchMedia("(max-width: 53.99rem)");

  const updateToggleAllLabel = () => {
    if (!toggleAllBtn) return;
    const allOpen = principleItems.every((item) => item.getAttribute("data-open") === "true");
    toggleAllBtn.textContent = allOpen ? "Свернуть все" : "Развернуть все 7 принципов";
  };

  principleItems.forEach((item) => {
    const btn = item.querySelector(".principle-trigger");
    if (!btn) return;
    btn.addEventListener("click", () => {
      if (!mobileMq.matches) return;
      const open = item.getAttribute("data-open") === "true";
      item.setAttribute("data-open", String(!open));
      btn.setAttribute("aria-expanded", String(!open));
      updateToggleAllLabel();
    });
  });

  if (toggleAllBtn) {
    toggleAllBtn.addEventListener("click", () => {
      const allOpen = principleItems.every((item) => item.getAttribute("data-open") === "true");
      const next = !allOpen;
      principleItems.forEach((item) => {
        item.setAttribute("data-open", String(next));
        const btn = item.querySelector(".principle-trigger");
        if (btn) btn.setAttribute("aria-expanded", String(next));
      });
      updateToggleAllLabel();
    });
  }

  /* ---------- Копилка: переключение папок ---------- */
  const folderTabs = Array.from(document.querySelectorAll(".folder-tab"));
  const kopilkaGrid = document.getElementById("kopilka-grid");

  const renderFolder = (folderKey) => {
    if (!kopilkaGrid) return;
    const items = KOPILKA_FOLDERS[folderKey] || [];
    kopilkaGrid.innerHTML = items
      .map(
        (item) => `
          <article class="kopilka-card">
            <div class="kopilka-card-top">
              <span>${item.type}</span>
            </div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <div class="kopilka-status">
              <span>${item.status}</span>
            </div>
          </article>
        `
      )
      .join("");
  };

  folderTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.getAttribute("data-folder");
      folderTabs.forEach((t) => t.setAttribute("aria-selected", String(t === tab)));
      renderFolder(key);
    });
  });

  /* ---------- Выбор темы записи и кнопки Telegram ---------- */
  const topicPills = Array.from(document.querySelectorAll(".topic-pill"));
  const previewText = document.getElementById("telegram-preview-text");
  const telegramBtn = document.getElementById("telegram-direct-btn");
  const channelBtns = Array.from(document.querySelectorAll("[data-channel-btn]"));
  let currentTopic = "group";

  const setTopic = (topicKey) => {
    if (!TOPIC_MESSAGES[topicKey]) return;
    currentTopic = topicKey;
    topicPills.forEach((p) => {
      p.setAttribute("aria-pressed", String(p.getAttribute("data-topic") === topicKey));
    });
    if (previewText) {
      previewText.textContent = TOPIC_MESSAGES[topicKey];
    }
    if (telegramBtn && SITE_CONFIG.telegramHandle) {
      const encoded = encodeURIComponent(TOPIC_MESSAGES[topicKey]);
      telegramBtn.href = `https://t.me/${SITE_CONFIG.telegramHandle}?text=${encoded}`;
      telegramBtn.target = "_blank";
      telegramBtn.rel = "noopener noreferrer";
    }
  };

  topicPills.forEach((pill) => {
    pill.addEventListener("click", () => setTopic(pill.getAttribute("data-topic")));
  });

  /* Кнопки на карточках форматов заранее подставляют тему и плавно ведут к записи */
  document.querySelectorAll("[data-select-topic]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-select-topic");
      setTopic(key);
    });
  });

  setTopic("group");

  /* ---------- Модальные окна (Видео-приветствие и Демо-Telegram) ---------- */
  const videoModal = document.getElementById("video-modal");
  const videoStage = document.getElementById("video-modal-stage");
  const demoModal = document.getElementById("demo-contact-modal");
  const demoModalTitle = document.getElementById("demo-modal-title");
  const demoModalDesc = document.getElementById("demo-modal-desc");
  const demoModalMessage = document.getElementById("demo-modal-message");
  const demoCopyBtn = document.getElementById("demo-copy-btn");
  const demoCopyFeedback = document.getElementById("demo-copy-feedback");

  let lastFocused = null;

  const openModal = (modalEl) => {
    if (!modalEl) return;
    lastFocused = document.activeElement;
    modalEl.hidden = false;
    document.body.style.overflow = "hidden";
    const closeBtn = modalEl.querySelector(".modal-close");
    if (closeBtn) closeBtn.focus();
  };

  const closeModal = (modalEl) => {
    if (!modalEl || modalEl.hidden) return;
    modalEl.hidden = true;
    document.body.style.overflow = "";
    if (modalEl === videoModal && videoStage && (SITE_CONFIG.welcomeVideoYouTubeId || SITE_CONFIG.welcomeVideoMp4Path)) {
      videoStage.innerHTML = "";
    }
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  };

  const videoTrigger = document.getElementById("open-video-modal");
  if (videoTrigger && videoModal) {
    videoTrigger.addEventListener("click", () => {
      if (SITE_CONFIG.welcomeVideoYouTubeId && videoStage) {
        const id = encodeURIComponent(SITE_CONFIG.welcomeVideoYouTubeId);
        videoStage.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="Видео-приветствие Марины Шультайс" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      } else if (SITE_CONFIG.welcomeVideoMp4Path && videoStage) {
        videoStage.innerHTML = `<video src="${SITE_CONFIG.welcomeVideoMp4Path}" controls autoplay playsinline></video>`;
      }
      openModal(videoModal);
    });
  }

  /* Обработка клика по Telegram в демо-режиме (пока не вставлен реальный ник Марины) */
  if (telegramBtn) {
    telegramBtn.addEventListener("click", (e) => {
      if (SITE_CONFIG.telegramHandle) return;
      e.preventDefault();
      if (demoModalTitle) demoModalTitle.textContent = "Прямая запись в Telegram";
      if (demoModalDesc) {
        demoModalDesc.textContent =
          "В готовой версии сайта эта кнопка сразу откроет диалог с Мариной в Telegram с уже подставленным текстом обращения — ученику останется только нажать «Отправить».";
      }
      if (demoModalMessage) {
        demoModalMessage.hidden = false;
        demoModalMessage.textContent = TOPIC_MESSAGES[currentTopic];
      }
      if (demoCopyBtn) demoCopyBtn.hidden = false;
      if (demoCopyFeedback) demoCopyFeedback.textContent = "";
      openModal(demoModal);
    });
  }

  channelBtns.forEach((btn) => {
    if (SITE_CONFIG.telegramChannelUrl) {
      btn.href = SITE_CONFIG.telegramChannelUrl;
      btn.target = "_blank";
      btn.rel = "noopener noreferrer";
      return;
    }
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (demoModalTitle) demoModalTitle.textContent = "Telegram-канал «РаЗУМной школы»";
      if (demoModalDesc) {
        demoModalDesc.textContent =
          "Сюда подключим прямую ссылку на ваш Telegram-канал, чтобы гости сайта могли сразу читать заметки, смотреть анонсы новых циклов и вечеров чтения.";
      }
      if (demoModalMessage) demoModalMessage.hidden = true;
      if (demoCopyBtn) demoCopyBtn.hidden = true;
      if (demoCopyFeedback) demoCopyFeedback.textContent = "";
      openModal(demoModal);
    });
  });

  if (demoCopyBtn) {
    demoCopyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(TOPIC_MESSAGES[currentTopic]);
        if (demoCopyFeedback) demoCopyFeedback.textContent = "Текст обращения скопирован";
      } catch {
        if (demoCopyFeedback) demoCopyFeedback.textContent = "Скопируйте текст вручную выше";
      }
    });
  }

  [videoModal, demoModal].forEach((modal) => {
    if (!modal) return;
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal(modal);
    });
    modal.querySelectorAll("[data-close-modal]").forEach((btn) => {
      btn.addEventListener("click", () => closeModal(modal));
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    closeModal(videoModal);
    closeModal(demoModal);
  });
})();
