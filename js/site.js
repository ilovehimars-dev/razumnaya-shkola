/* ==========================================================================
   «РаЗУМная школа» — единый конфиг и интерактивность всех страниц
   ========================================================================== */

(() => {
  "use strict";

  const SITE_CONFIG = {
    /* Ник Марины в Telegram без @, например: "marina_schultheiss" */
    telegramHandle: "",
    /* Прямая ссылка на Telegram-канал, например: "https://t.me/razumnaya_shkola" */
    telegramChannelUrl: "",
    /* Приветственное видео: YouTube ID или локальный MP4 */
    welcomeVideoYouTubeId: "y_lfsGmHdeQ",
    welcomeVideoMp4Path: ""
  };

  /* 7 принципов обучения (полные вычитанные тексты Марины + практический ориентир) */
  const PRINCIPLES = [
    {
      roman: "I",
      title: "Доступность",
      fr: "Liberté",
      paragraphs: [
        "Онлайн-обучение в Zoom сегодня возможно практически из любой точки мира — достаточно спокойного места, ноутбука или планшета и искреннего желания погрузиться в язык."
      ],
      practice: "Учёба подстраивается под вашу географию и жизнь: к занятиям в Zoom подключаются ученики из Франции, Европы и других стран — без дороги и привязки к одному городу."
    },
    {
      roman: "II",
      title: "Индивидуальность",
      fr: "Attention",
      paragraphs: [
        "Прежде чем записать вас в группу, я предложу небольшое тестирование-знакомство (30 минут, бесплатно): вместе мы определим ваши сильные и слабые стороны и подберём подходящую группу."
      ],
      practice: "В группах собираются люди близкого уровня и настроя — вы не чувствуете себя «отстающим» и не скучаете от слишком простого материала."
    },
    {
      roman: "III",
      title: "Открытость",
      fr: "Clarté",
      paragraphs: [
        "Сложные темы объясняются простыми словами — через образы, ассоциации и живые примеры. Всё должно быть понятно.",
        "Спрашивать — не стыдно! Не знать — нормально! Ошибки — это условие роста…"
      ],
      practice: "На уроке можно остановить объяснение и задать любой вопрос — здесь нет школьной строгости, а непонятное правило разбирается до полной ясности."
    },
    {
      roman: "IV",
      title: "Осознанность и лёгкость",
      fr: "Légèreté",
      paragraphs: [
        "<strong>Осознанность.</strong> Я обучаю не только языку, но и наблюдательности, самоконтролю. Уроки становятся путешествием внутрь себя: мы познаём язык через себя, а себя — через процесс освоения иностранного языка.",
        "<strong>Лёгкость.</strong> Мы занимаемся без перегрузок и без давления. Материал подаётся в логичной и простой форме. У каждого свой темп — сравниваем себя только с собой!"
      ],
      practice: "Мягкий ритм и регулярная повторяемость дают устойчивый результат без выгорания и ночной зубрёжки."
    },
    {
      roman: "V",
      title: "Совместность",
      fr: "Rencontre",
      paragraphs: [
        "Французский — это не только про знания, но и про радость общения, поддержку и вдохновение. Именно поэтому занятия в группе — настоящее приключение!",
        "На занятиях вы не просто слушаете преподавателя — вы разговариваете с другими участниками, с языком и с собой. В группе возникает особая энергия, которая вдохновляет и помогает расти…"
      ],
      practice: "Вы слышите живую речь разных людей, учитесь не бояться говорить вслух и обретаете тёплый круг единомышленников."
    },
    {
      roman: "VI",
      title: "Безграничность",
      fr: "Mémoire",
      paragraphs: [
        "Все учебные пособия и дидактические материалы высылаются ученику или ученице по электронной почте и/или на телефон. Во время каждого занятия ведётся видеозапись, которая размещается на YouTube в закрытом доступе для участников группы.",
        "Доступ к видеозаписям безлимитный. Повторение — ключ к знанию: все уроки остаются с вами навсегда. И если вы не можете присутствовать на уроке — это не проблема…"
      ],
      practice: "Командировка, отпуск или плотный рабочий день не ломают обучение — пропущенный урок спокойно смотрится в записи."
    },
    {
      roman: "VII",
      title: "Самобытность и эстетичность",
      fr: "Beauté",
      paragraphs: [
        "<strong>Самобытность.</strong> Мы все разные, и в этом наша сила. У каждого свой путь к знаниям. Я помогаю каждому, оставаясь собой, начать мыслить на французском — видеть суть, чувствовать слово, доверять себе.",
        "<strong>Эстетичность.</strong> Учиться должно быть приятно и интересно — это основа эффективности. Красота звучания и визуальное вдохновение помогают учиться с удовольствием. Учиться должно быть уютно…"
      ],
      practice: "Тексты, поэзия, живые примеры и интонация превращают занятие в час, которого действительно ждёшь."
    }
  ];

  /* Авторская книжная закладка «Слово и оттенок» */
  const NUANCES = [
    {
      phrase: "Avoir le déclic",
      lit: "дословно: «почувствовать щелчок»",
      note: "Тот самый момент в изучении языка, когда разрозненные правила вдруг складываются в ясную картину — и фраза рождается легко."
    },
    {
      phrase: "Tête-à-tête",
      lit: "дословно: «голова к голове», наедине",
      note: "Во французском это не про сухой деловой формат, а про доверительный разговор двух людей, где всё внимание — смыслу."
    },
    {
      phrase: "Prendre le temps",
      lit: "дословно: «взять себе время»",
      note: "Не «потратить время», а позволить себе не спешить. Именно в таком спокойном ритме французский усваивается глубже всего."
    },
    {
      phrase: "Un coup de cœur",
      lit: "дословно: «удар сердца»",
      note: "Искреннее увлечение с первого взгляда — книгой, мелодией, городом или тем, как звучит чужой, но уже родной язык."
    },
    {
      phrase: "L’esprit de l’escalier",
      lit: "дословно: «остроумие на лестнице»",
      note: "Точная фраза, которая приходит в голову, когда уже спускаешься по лестнице. Живые диалоги на уроках помогают находить её вовремя."
    }
  ];

  document.documentElement.classList.add("js-ready");

  /* ---------- Шапка и мобильное меню ---------- */
  const header = document.querySelector(".site-header");
  const menuBtn = document.getElementById("menu-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");

  const onScroll = () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 10);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (menuBtn && mobileDrawer) {
    menuBtn.addEventListener("click", () => {
      const open = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!open));
      mobileDrawer.hidden = open;
    });
    mobileDrawer.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        menuBtn.setAttribute("aria-expanded", "false");
        mobileDrawer.hidden = true;
      });
    });
  }

  /* ---------- Плавное появление секций ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.04 }
    );
    revealEls.forEach((el) => obs.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Авторская закладка «Слово и оттенок» ---------- */
  const nuanceBtn = document.getElementById("nuance-next-btn");
  const nuancePhrase = document.getElementById("nuance-phrase");
  const nuanceLit = document.getElementById("nuance-lit");
  const nuanceNote = document.getElementById("nuance-note");
  const nuanceCounter = document.getElementById("nuance-counter");
  let nuanceIdx = 0;

  const renderNuance = (i) => {
    nuanceIdx = (i + NUANCES.length) % NUANCES.length;
    const n = NUANCES[nuanceIdx];
    if (nuancePhrase) nuancePhrase.textContent = n.phrase;
    if (nuanceLit) nuanceLit.textContent = n.lit;
    if (nuanceNote) nuanceNote.textContent = n.note;
    if (nuanceCounter) nuanceCounter.textContent = `${nuanceIdx + 1} / ${NUANCES.length}`;
  };

  if (nuanceBtn) {
    nuanceBtn.addEventListener("click", () => renderNuance(nuanceIdx + 1));
    renderNuance(0);
  }

  /* ---------- Интерактивный каталог 7 принципов (Главная) ---------- */
  const folioTabs = Array.from(document.querySelectorAll(".folio-tab"));
  const folioRoman = document.getElementById("folio-big-roman");
  const folioEpigraph = document.getElementById("folio-epigraph");
  const folioTitle = document.getElementById("folio-stage-title");
  const folioBody = document.getElementById("folio-stage-body");
  const folioPractice = document.getElementById("folio-practice-text");
  const folioPrev = document.getElementById("folio-prev");
  const folioNext = document.getElementById("folio-next");
  let activePrinciple = 0;

  const renderPrinciple = (idx) => {
    const safeIdx = (idx + PRINCIPLES.length) % PRINCIPLES.length;
    activePrinciple = safeIdx;
    const item = PRINCIPLES[safeIdx];
    folioTabs.forEach((t, i) => t.setAttribute("aria-selected", String(i === safeIdx)));
    if (folioRoman) folioRoman.textContent = item.roman;
    if (folioEpigraph) folioEpigraph.textContent = item.fr;
    if (folioTitle) folioTitle.textContent = item.title;
    if (folioBody) {
      folioBody.innerHTML = item.paragraphs.map((p) => `<p>${p}</p>`).join("");
    }
    if (folioPractice) folioPractice.textContent = item.practice;
  };

  if (folioTabs.length) {
    folioTabs.forEach((tab, i) => tab.addEventListener("click", () => renderPrinciple(i)));
    if (folioPrev) folioPrev.addEventListener("click", () => renderPrinciple(activePrinciple - 1));
    if (folioNext) folioNext.addEventListener("click", () => renderPrinciple(activePrinciple + 1));
    renderPrinciple(0);
  }

  /* Мобильный аккордеон 7 принципов */
  const accRows = Array.from(document.querySelectorAll(".acc-row"));
  const accToggleAll = document.getElementById("acc-toggle-all");

  const syncAccLabel = () => {
    if (!accToggleAll) return;
    const allOpen = accRows.every((r) => r.getAttribute("data-open") === "true");
    accToggleAll.textContent = allOpen ? "Свернуть все" : "Развернуть все 7 принципов";
  };

  accRows.forEach((row) => {
    const btn = row.querySelector(".acc-btn");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const isOpen = row.getAttribute("data-open") === "true";
      row.setAttribute("data-open", String(!isOpen));
      btn.setAttribute("aria-expanded", String(!isOpen));
      syncAccLabel();
    });
  });

  if (accToggleAll) {
    accToggleAll.addEventListener("click", () => {
      const next = !accRows.every((r) => r.getAttribute("data-open") === "true");
      accRows.forEach((row) => {
        row.setAttribute("data-open", String(next));
        const btn = row.querySelector(".acc-btn");
        if (btn) btn.setAttribute("aria-expanded", String(next));
      });
      syncAccLabel();
    });
  }

  /* ---------- Модальные окна ---------- */
  const videoModal = document.getElementById("video-modal");
  const videoStage = document.getElementById("video-modal-stage");
  const readerModal = document.getElementById("reader-modal");
  const demoModal = document.getElementById("demo-contact-modal");
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
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  };

  [videoModal, readerModal, demoModal].forEach((m) => {
    if (!m) return;
    m.addEventListener("click", (e) => {
      if (e.target === m) closeModal(m);
    });
    m.querySelectorAll("[data-close-modal]").forEach((btn) => {
      btn.addEventListener("click", () => closeModal(m));
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    closeModal(videoModal);
    closeModal(readerModal);
    closeModal(demoModal);
  });

  /* ---------- Приветственное видео ---------- */
  document.querySelectorAll("[data-open-video]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (SITE_CONFIG.welcomeVideoYouTubeId && videoStage) {
        const id = encodeURIComponent(SITE_CONFIG.welcomeVideoYouTubeId);
        videoStage.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="О моей раЗУМной школе — Марина Шультайс" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      } else if (SITE_CONFIG.welcomeVideoMp4Path && videoStage) {
        videoStage.innerHTML = `<video src="${SITE_CONFIG.welcomeVideoMp4Path}" controls autoplay playsinline></video>`;
      }
      openModal(videoModal);
    });
  });

  /* ---------- «Копилка»: витрина, архив и книжный ридер ---------- */
  const kopilkaData = window.KOPILKA_DATA;
  const openReaderById = (id) => {
    if (!kopilkaData || !readerModal) return;
    const item = kopilkaData.items.find((x) => x.id === id);
    if (!item) return;

    const rKicker = document.getElementById("reader-kicker");
    const rTitle = document.getElementById("reader-title");
    const rContent = document.getElementById("reader-content");
    if (rKicker) rKicker.textContent = `${item.kind} · ${item.readTime}`;
    if (rTitle) rTitle.textContent = item.title;
    if (rContent) {
      const paras = item.body.map((p) => `<p>${p}</p>`).join("");
      const ex = item.exampleFr
        ? `<blockquote class="reader-example">${item.exampleFr}<small>${item.exampleRu || ""}</small></blockquote>`
        : "";
      const closeP = item.closing ? `<p>${item.closing}</p>` : "";
      rContent.innerHTML = paras + ex + closeP;
    }
    openModal(readerModal);
  };

  const renderReadingRow = (item) => `
    <article class="reading-item">
      <div class="reading-meta">
        <span>${item.kind}</span>
        <span class="reading-meta-sub">${item.readTime}</span>
      </div>
      <h3 class="reading-title">${item.title}</h3>
      <p class="reading-excerpt">${item.excerpt}</p>
      <button class="reading-open-btn" type="button" data-read-id="${item.id}">
        <span>Читать заметку</span>
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>
      </button>
    </article>
  `;

  const homePreviewList = document.getElementById("kopilka-home-list");
  if (homePreviewList && kopilkaData) {
    const featured = kopilkaData.items.filter((x) => x.featured).slice(0, 3);
    homePreviewList.innerHTML = featured.map(renderReadingRow).join("");
  }

  const archiveGrid = document.getElementById("kopilka-archive");
  const filterPills = Array.from(document.querySelectorAll(".filter-pill"));

  const renderArchive = (folderId) => {
    if (!archiveGrid || !kopilkaData) return;
    const list =
      folderId === "all"
        ? kopilkaData.items
        : kopilkaData.items.filter((x) => x.folder === folderId);
    archiveGrid.innerHTML = list.map(renderReadingRow).join("");
  };

  if (archiveGrid && kopilkaData) {
    const hashFolder = window.location.hash.replace("#", "");
    const validFolders = kopilkaData.folders.map((f) => f.id);
    const initial = validFolders.includes(hashFolder) ? hashFolder : "all";
    filterPills.forEach((p) => {
      p.setAttribute("aria-pressed", String(p.getAttribute("data-filter") === initial));
      p.addEventListener("click", () => {
        const f = p.getAttribute("data-filter");
        filterPills.forEach((b) => b.setAttribute("aria-pressed", String(b === p)));
        renderArchive(f);
      });
    });
    renderArchive(initial);
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-read-id]");
    if (!btn) return;
    openReaderById(btn.getAttribute("data-read-id"));
  });

  /* ---------- Мягкий «Компас формата» (с поддержкой ?format= между страницами) ---------- */
  const compassState = {
    level: "continue",
    goal: "system",
    pace: "group"
  };

  const levelLabels = {
    zero: "начинаю с нуля",
    continue: "учил(а) раньше и хочу заговорить увереннее",
    advanced: "читаю и говорю, хочу тонкости и глубину"
  };

  const computeRecommendation = () => {
    if (compassState.goal === "reading") {
      return {
        title: "Вам особенно откликнется «Вечерний чай с…»",
        note: "Камерный курс чтения (5 тёплых вечеров между циклами) — идеальный способ полюбить живой французский текст. На 30-минутном знакомстве Марина подскажет дату ближайшего вечера.",
        msg: `Здравствуйте, Марина! Я ${levelLabels[compassState.level]}. Особенно интересен курс чтения «Вечерний чай с…» — хотел(а) бы записаться на бесплатное 30-минутное знакомство в Zoom.`
      };
    }
    if (compassState.pace === "solo" || compassState.goal === "personal") {
      return {
        title: "Рекомендуем формат Tête-à-tête",
        note: "Индивидуальная «лаборатория языковой алхимии» в вашем темпе и под ваши личные задачи. Начнём с бесплатного 30-минутного знакомства в Zoom, чтобы наметить маршрут.",
        msg: `Здравствуйте, Марина! Я ${levelLabels[compassState.level]}. Мне ближе индивидуальный формат Tête-à-tête — хотел(а) бы договориться о бесплатном 30-минутном знакомстве в Zoom.`
      };
    }
    return {
      title: "Рекомендуем 10-недельный групповой цикл",
      note: "2 живых занятия в неделю по 60 минут в Zoom, тёплая энергия небольшой группы и безлимитные записи всех уроков на YouTube. Стартуем с бесплатного 30-минутного тестирования-знакомства.",
      msg: `Здравствуйте, Марина! Я ${levelLabels[compassState.level]}. Хотел(а) бы записаться на бесплатное 30-минутное тестирование-знакомство и подобрать ближайший 10-недельный групповой цикл.`
    };
  };

  const recTitleEl = document.getElementById("compass-rec-title");
  const recTextEl = document.getElementById("compass-rec-text");
  const telegramBtn = document.getElementById("telegram-direct-btn");
  let currentTelegramText = computeRecommendation().msg;

  const syncCompassUI = () => {
    ["level", "goal", "pace"].forEach((g) => {
      document.querySelectorAll(`.compass-btn[data-group="${g}"]`).forEach((b) => {
        b.setAttribute("aria-pressed", String(b.getAttribute("data-value") === compassState[g]));
      });
    });
    const rec = computeRecommendation();
    currentTelegramText = rec.msg;
    if (recTitleEl) recTitleEl.textContent = rec.title;
    if (recTextEl) recTextEl.textContent = rec.note;
    if (telegramBtn && SITE_CONFIG.telegramHandle) {
      telegramBtn.href = `https://t.me/${SITE_CONFIG.telegramHandle}?text=${encodeURIComponent(rec.msg)}`;
      telegramBtn.target = "_blank";
      telegramBtn.rel = "noopener noreferrer";
    }
  };

  const applyPreset = (preset) => {
    if (preset === "tete") {
      compassState.pace = "solo";
      compassState.goal = "personal";
    } else if (preset === "tea") {
      compassState.goal = "reading";
    } else if (preset === "group") {
      compassState.pace = "group";
      compassState.goal = "system";
    }
    syncCompassUI();
  };

  document.querySelectorAll(".compass-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      compassState[btn.getAttribute("data-group")] = btn.getAttribute("data-value");
      syncCompassUI();
    });
  });

  document.querySelectorAll("[data-preset]").forEach((link) => {
    link.addEventListener("click", () => applyPreset(link.getAttribute("data-preset")));
  });

  /* Подхват выбранного формата при переходе с внутренних страниц (?format=tete / tea / group) */
  const urlFormat = new URLSearchParams(window.location.search).get("format");
  if (urlFormat) {
    applyPreset(urlFormat);
  } else {
    syncCompassUI();
  }

  /* Контакты Telegram на всех страницах */
  const demoTitle = document.getElementById("demo-modal-title");
  const demoDesc = document.getElementById("demo-modal-desc");
  const demoMsg = document.getElementById("demo-modal-message");
  const demoCopy = document.getElementById("demo-copy-btn");
  const demoFeedback = document.getElementById("demo-copy-feedback");

  document.querySelectorAll("[data-telegram-direct]").forEach((btn) => {
    if (SITE_CONFIG.telegramHandle) {
      btn.href = `https://t.me/${SITE_CONFIG.telegramHandle}?text=${encodeURIComponent(currentTelegramText)}`;
      btn.target = "_blank";
      btn.rel = "noopener noreferrer";
      return;
    }
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (demoTitle) demoTitle.textContent = "Запись в Telegram";
      if (demoDesc) {
        demoDesc.textContent =
          "Сюда подключается прямая ссылка на ваш Telegram — после клика сразу откроется чат с уже подготовленным текстом обращения:";
      }
      if (demoMsg) {
        demoMsg.hidden = false;
        demoMsg.textContent = currentTelegramText;
      }
      if (demoCopy) demoCopy.hidden = false;
      if (demoFeedback) demoFeedback.textContent = "";
      openModal(demoModal);
    });
  });

  document.querySelectorAll("[data-channel-btn]").forEach((btn) => {
    if (SITE_CONFIG.telegramChannelUrl) {
      btn.href = SITE_CONFIG.telegramChannelUrl;
      btn.target = "_blank";
      btn.rel = "noopener noreferrer";
      return;
    }
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (demoTitle) demoTitle.textContent = "Telegram-канал «РаЗУМной школы»";
      if (demoDesc) {
        demoDesc.textContent =
          "Сюда подключается прямая ссылка на Telegram-канал Марины с заметками, видео и анонсами новых циклов.";
      }
      if (demoMsg) demoMsg.hidden = true;
      if (demoCopy) demoCopy.hidden = true;
      if (demoFeedback) demoFeedback.textContent = "";
      openModal(demoModal);
    });
  });

  if (demoCopy) {
    demoCopy.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(currentTelegramText);
        if (demoFeedback) demoFeedback.textContent = "Текст обращения скопирован";
      } catch {
        if (demoFeedback) demoFeedback.textContent = "Скопируйте текст вручную выше";
      }
    });
  }
})();
