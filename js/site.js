/* ==========================================================================
   «РаЗУМная школа» — интерактивность современной версии (все страницы)
   ========================================================================== */

(() => {
  "use strict";

  const SITE_CONFIG = {
    telegramHandle: "",
    telegramChannelUrl: "",
    welcomeVideoYouTubeId: "y_lfsGmHdeQ",
    welcomeVideoMp4Path: ""
  };

  const PRINCIPLES = [
    {
      num: "01",
      title: "Доступность",
      fr: "Liberté",
      paragraphs: [
        "Онлайн-обучение в Zoom сегодня возможно практически из любой точки мира — достаточно спокойного места, ноутбука или планшета и искреннего желания погрузиться в язык."
      ],
      practice: "Учёба подстраивается под вашу географию и жизнь: к занятиям в Zoom подключаются ученики из Франции, Европы и других стран — без дороги и привязки к одному городу."
    },
    {
      num: "02",
      title: "Индивидуальность",
      fr: "Attention",
      paragraphs: [
        "Прежде чем записать вас в группу, я предложу небольшое тестирование-знакомство (30 минут, бесплатно): вместе мы определим ваши сильные и слабые стороны и подберём подходящую группу."
      ],
      practice: "В группах собираются люди близкого уровня и настроя — вы не чувствуете себя «отстающим» и не скучаете от слишком простого материала."
    },
    {
      num: "03",
      title: "Открытость",
      fr: "Clarté",
      paragraphs: [
        "Сложные темы объясняются простыми словами — через образы, ассоциации и живые примеры. Всё должно быть понятно.",
        "Спрашивать — не стыдно! Не знать — нормально! Ошибки — это условие роста…"
      ],
      practice: "На уроке можно остановить объяснение и задать любой вопрос — здесь нет школьной строгости, а непонятное правило разбирается до полной ясности."
    },
    {
      num: "04",
      title: "Осознанность и лёгкость",
      fr: "Légèreté",
      paragraphs: [
        "<strong>Осознанность.</strong> Я обучаю не только языку, но и наблюдательности, самоконтролю. Уроки становятся путешествием внутрь себя: мы познаём язык через себя, а себя — через процесс освоения иностранного языка.",
        "<strong>Лёгкость.</strong> Мы занимаемся без перегрузок и без давления. Материал подаётся в логичной и простой форме. У каждого свой темп — сравниваем себя только с собой!"
      ],
      practice: "Мягкий ритм и регулярная повторяемость дают устойчивый результат без выгорания и ночной зубрёжки."
    },
    {
      num: "05",
      title: "Совместность",
      fr: "Rencontre",
      paragraphs: [
        "Французский — это не только про знания, но и про радость общения, поддержку и вдохновение. Именно поэтому занятия в группе — настоящее приключение!",
        "На занятиях вы не просто слушаете преподавателя — вы разговариваете с другими участниками, с языком и с собой. В группе возникает особая энергия, которая вдохновляет и помогает расти…"
      ],
      practice: "Вы слышите живую речь разных людей, учитесь не бояться говорить вслух и обретаете тёплый круг единомышленников."
    },
    {
      num: "06",
      title: "Безграничность",
      fr: "Mémoire",
      paragraphs: [
        "Все учебные пособия и дидактические материалы высылаются ученику или ученице по электронной почте и/или на телефон. Во время каждого занятия ведётся видеозапись, которая размещается на YouTube в закрытом доступе для участников группы.",
        "Доступ к видеозаписям безлимитный. Повторение — ключ к знанию: все уроки остаются с вами навсегда. И если вы не можете присутствовать на уроке — это не проблема…"
      ],
      practice: "Командировка, отпуск или плотный рабочий день не ломают обучение — пропущенный урок спокойно смотрится в записи."
    },
    {
      num: "07",
      title: "Самобытность и эстетичность",
      fr: "Beauté",
      paragraphs: [
        "<strong>Самобытность.</strong> Мы все разные, и в этом наша сила. У каждого свой путь к знаниям. Я помогаю каждому, оставаясь собой, начать мыслить на французском — видеть суть, чувствовать слово, доверять себе.",
        "<strong>Эстетичность.</strong> Учиться должно быть приятно и интересно — это основа эффективности. Красота звучания и визуальное вдохновение помогают учиться с удовольствием. Учиться должно быть уютно…"
      ],
      practice: "Тексты, поэзия, живые примеры и интонация превращают занятие в час, которого действительно ждёшь."
    }
  ];

  const NUANCES = [
    {
      phrase: "Avoir le déclic",
      lit: "дословно: «почувствовать щелчок»",
      note: "Тот самый момент в изучении языка, когда разрозненные правила вдруг складываются в ясную картину — и фраза рождается легко."
    },
    {
      phrase: "Tête-à-tête",
      lit: "дословно: «голова к голове», наедине",
      note: "Во французском это не про сухой формат, а про доверительный разговор двух людей, где всё внимание — смыслу."
    },
    {
      phrase: "Prendre le temps",
      lit: "дословно: «взять себе время»",
      note: "Не «потратить время», а позволить себе не спешить. Именно в таком спокойном ритме французский усваивается глубже всего."
    },
    {
      phrase: "Un coup de cœur",
      lit: "дословно: «удар сердца»",
      note: "Искреннее увлечение с первого взгляда — книгой, мелодией, городом или тем, как звучит новый, но уже родной язык."
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

  /* ---------- Плавное появление ---------- */
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

  /* ---------- Французский нюанс ---------- */
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

  /* ---------- 7 принципов (Десктоп-табы + мобильный аккордеон) ---------- */
  const pTabs = Array.from(document.querySelectorAll(".p-tab"));
  const pBadge = document.getElementById("p-stage-badge");
  const pFr = document.getElementById("p-stage-fr");
  const pTitle = document.getElementById("p-stage-title");
  const pBody = document.getElementById("p-stage-body");
  const pPractice = document.getElementById("p-practice-text");
  const pPrev = document.getElementById("p-prev");
  const pNext = document.getElementById("p-next");
  let activePrinciple = 0;

  const renderPrinciple = (idx) => {
    const safe = (idx + PRINCIPLES.length) % PRINCIPLES.length;
    activePrinciple = safe;
    const item = PRINCIPLES[safe];
    pTabs.forEach((t, i) => t.setAttribute("aria-selected", String(i === safe)));
    if (pBadge) pBadge.textContent = `Принцип ${item.num} из 07`;
    if (pFr) pFr.textContent = item.fr;
    if (pTitle) pTitle.textContent = item.title;
    if (pBody) pBody.innerHTML = item.paragraphs.map((p) => `<p>${p}</p>`).join("");
    if (pPractice) pPractice.textContent = item.practice;
  };

  if (pTabs.length) {
    pTabs.forEach((tab, i) => tab.addEventListener("click", () => renderPrinciple(i)));
    if (pPrev) pPrev.addEventListener("click", () => renderPrinciple(activePrinciple - 1));
    if (pNext) pNext.addEventListener("click", () => renderPrinciple(activePrinciple + 1));
    renderPrinciple(0);
  }

  /* Мобильный аккордеон 7 принципов: полные тексты Марины + «На практике» из единого источника */
  const mobilePrinciplesWrap = document.getElementById("principles-mobile-list");
  if (mobilePrinciplesWrap) {
    mobilePrinciplesWrap.innerHTML = PRINCIPLES.map(
      (item, idx) => `
        <article class="m-acc-card" data-open="${idx === 0 ? "true" : "false"}">
          <button class="m-acc-btn" type="button" aria-expanded="${idx === 0 ? "true" : "false"}">
            <span class="p-tab-num">${item.num}</span>
            <span class="m-acc-title">${item.title}</span>
            <svg class="icon m-acc-chev" viewBox="0 0 24 24" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="m-acc-body">
            ${item.paragraphs.map((p) => `<p>${p}</p>`).join("")}
            <div class="p-practice-box" style="margin-top: 0.35rem;">
              <span>На практике</span>
              <p>${item.practice}</p>
            </div>
          </div>
        </article>
      `
    ).join("");
  }

  document.querySelectorAll(".m-acc-card").forEach((card) => {
    const btn = card.querySelector(".m-acc-btn");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const open = card.getAttribute("data-open") === "true";
      card.setAttribute("data-open", String(!open));
      btn.setAttribute("aria-expanded", String(!open));
    });
  });

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

  /* ---------- Видео Марины ---------- */
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

  /* ---------- «Копилка»: карточки, фильтрация, живой поиск и ридер ---------- */
  const kopilkaData = window.KOPILKA_DATA;
  const catClass = (folder) => `cat-${folder}`;

  const renderNoteCard = (item) => `
    <article class="note-card">
      <div class="note-card-top">
        <span class="cat-chip ${catClass(item.folder)}">${item.kind}</span>
        <span class="note-time">${item.readTime}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.excerpt}</p>
      <button class="note-card-btn" type="button" data-read-id="${item.id}">
        <span>Читать заметку</span>
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>
      </button>
    </article>
  `;

  const openReaderById = (id) => {
    if (!kopilkaData || !readerModal) return;
    const item = kopilkaData.items.find((x) => x.id === id);
    if (!item) return;

    const rBadge = document.getElementById("reader-badge");
    const rTitle = document.getElementById("reader-title");
    const rContent = document.getElementById("reader-content");
    if (rBadge) {
      rBadge.textContent = `${item.kind} · ${item.readTime}`;
      rBadge.className = `cat-chip ${catClass(item.folder)}`;
    }
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

  /* Витрина на главной (3 карточки) */
  const homeKopilka = document.getElementById("kopilka-home-grid");
  if (homeKopilka && kopilkaData) {
    homeKopilka.innerHTML = kopilkaData.items
      .filter((x) => x.featured)
      .slice(0, 3)
      .map(renderNoteCard)
      .join("");
  }

  /* Архив + живой поиск на kopilka.html */
  const archiveGrid = document.getElementById("kopilka-archive");
  const filterPills = Array.from(document.querySelectorAll(".filter-pill"));
  const searchInput = document.getElementById("kopilka-search");
  const emptyMsg = document.getElementById("kopilka-empty");
  let activeFolder = "all";
  let searchQuery = "";

  const renderArchive = () => {
    if (!archiveGrid || !kopilkaData) return;
    const q = searchQuery.trim().toLowerCase();
    const list = kopilkaData.items.filter((item) => {
      /* При показе всех папок без поиска не дублируем выделенную статью из верхнего блока */
      if (activeFolder === "all" && !q && item.id === "evening-tea-reading") return false;
      const matchFolder = activeFolder === "all" || item.folder === activeFolder;
      const matchQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q) ||
        item.kind.toLowerCase().includes(q);
      return matchFolder && matchQuery;
    });
    archiveGrid.innerHTML = list.map(renderNoteCard).join("");
    if (emptyMsg) emptyMsg.hidden = list.length > 0;
  };

  if (archiveGrid && kopilkaData) {
    const hash = window.location.hash.replace("#", "");
    const valid = kopilkaData.folders.map((f) => f.id);
    if (valid.includes(hash)) activeFolder = hash;

    filterPills.forEach((pill) => {
      pill.setAttribute("aria-pressed", String(pill.getAttribute("data-filter") === activeFolder));
      pill.addEventListener("click", () => {
        activeFolder = pill.getAttribute("data-filter");
        filterPills.forEach((b) => b.setAttribute("aria-pressed", String(b === pill)));
        renderArchive();
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", () => {
        searchQuery = searchInput.value;
        renderArchive();
      });
    }
    renderArchive();
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-read-id]");
    if (btn) openReaderById(btn.getAttribute("data-read-id"));
  });

  /* ---------- Компас формата + Telegram ---------- */
  const compassState = { level: "continue", goal: "system", pace: "group" };
  const levelLabels = {
    zero: "начинаю с нуля",
    continue: "учил(а) раньше и хочу заговорить увереннее",
    advanced: "читаю и говорю, хочу тонкости и глубину"
  };

  const computeRec = () => {
    if (compassState.goal === "reading") {
      return {
        title: "Вам особенно подойдёт «Вечерний чай с…»",
        note: "5 уютных вечеров чтения и живого обсуждения французских текстов между циклами. На 30-минутном знакомстве Марина подскажет ближайшие даты.",
        msg: `Здравствуйте, Марина! Я ${levelLabels[compassState.level]}. Интересует курс чтения «Вечерний чай с…» — хотел(а) бы записаться на бесплатное 30-минутное знакомство в Zoom.`
      };
    }
    if (compassState.pace === "solo" || compassState.goal === "personal") {
      return {
        title: "Рекомендуем индивидуальный формат Tête-à-tête",
        note: "«Лаборатория языковой алхимии» в личном темпе и под ваши задачи. Начнём с бесплатной 30-минутной беседы в Zoom.",
        msg: `Здравствуйте, Марина! Я ${levelLabels[compassState.level]}. Мне ближе индивидуальный формат Tête-à-tête — хотел(а) бы договориться о бесплатном 30-минутном знакомстве в Zoom.`
      };
    }
    return {
      title: "Рекомендуем 10-недельный групповой цикл",
      note: "2 живых занятия в неделю по 60 минут в Zoom, тёплая группа близкого уровня и безлимитные видеозаписи всех уроков на YouTube.",
      msg: `Здравствуйте, Марина! Я ${levelLabels[compassState.level]}. Хотел(а) бы записаться на бесплатное 30-минутное тестирование-знакомство и подобрать 10-недельный групповой цикл.`
    };
  };

  const recTitle = document.getElementById("compass-rec-title");
  const recText = document.getElementById("compass-rec-text");
  const telegramBtn = document.getElementById("telegram-direct-btn");
  let currentMsg = computeRec().msg;

  const syncCompass = () => {
    ["level", "goal", "pace"].forEach((g) => {
      document.querySelectorAll(`.compass-btn[data-group="${g}"]`).forEach((b) => {
        b.setAttribute("aria-pressed", String(b.getAttribute("data-value") === compassState[g]));
      });
    });
    const r = computeRec();
    currentMsg = r.msg;
    if (recTitle) recTitle.textContent = r.title;
    if (recText) recText.textContent = r.note;
    if (telegramBtn && SITE_CONFIG.telegramHandle) {
      telegramBtn.href = `https://t.me/${SITE_CONFIG.telegramHandle}?text=${encodeURIComponent(r.msg)}`;
      telegramBtn.target = "_blank";
      telegramBtn.rel = "noopener noreferrer";
    }
  };

  const applyPreset = (p) => {
    if (p === "tete") { compassState.pace = "solo"; compassState.goal = "personal"; }
    else if (p === "tea") { compassState.goal = "reading"; }
    else if (p === "group") { compassState.pace = "group"; compassState.goal = "system"; }
    syncCompass();
  };

  document.querySelectorAll(".compass-btn").forEach((b) => {
    b.addEventListener("click", () => {
      compassState[b.getAttribute("data-group")] = b.getAttribute("data-value");
      syncCompass();
    });
  });

  document.querySelectorAll("[data-preset]").forEach((l) => {
    l.addEventListener("click", () => applyPreset(l.getAttribute("data-preset")));
  });

  const urlFmt = new URLSearchParams(window.location.search).get("format");
  if (urlFmt) applyPreset(urlFmt); else syncCompass();

  /* Telegram модалка */
  const demoTitle = document.getElementById("demo-modal-title");
  const demoDesc = document.getElementById("demo-modal-desc");
  const demoMsg = document.getElementById("demo-modal-message");
  const demoCopy = document.getElementById("demo-copy-btn");
  const demoFeedback = document.getElementById("demo-copy-feedback");

  document.querySelectorAll("[data-telegram-direct]").forEach((btn) => {
    if (SITE_CONFIG.telegramHandle) {
      btn.href = `https://t.me/${SITE_CONFIG.telegramHandle}?text=${encodeURIComponent(currentMsg)}`;
      btn.target = "_blank";
      btn.rel = "noopener noreferrer";
      return;
    }
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (demoTitle) demoTitle.textContent = "Запись в Telegram";
      if (demoDesc) demoDesc.textContent = "После подключения ника Марины эта кнопка сразу откроет чат в Telegram с готовым текстом обращения:";
      if (demoMsg) { demoMsg.hidden = false; demoMsg.textContent = currentMsg; }
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
      if (demoDesc) demoDesc.textContent = "Сюда подключится прямая ссылка на Telegram-канал Марины с заметками, видео и анонсами новых наборов.";
      if (demoMsg) demoMsg.hidden = true;
      if (demoCopy) demoCopy.hidden = true;
      if (demoFeedback) demoFeedback.textContent = "";
      openModal(demoModal);
    });
  });

  if (demoCopy) {
    demoCopy.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(currentMsg);
        if (demoFeedback) demoFeedback.textContent = "Текст обращения скопирован";
      } catch {
        if (demoFeedback) demoFeedback.textContent = "Скопируйте текст выше";
      }
    });
  }
})();
