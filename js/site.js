/* ==========================================================================
   «РаЗУМная школа» — интерактивность (журнальная редакционная система)
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
      fr: "Accessibilité",
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
      fr: "Ouverture",
      paragraphs: [
        "Сложные темы я объясняю простыми словами — через образы, ассоциации и живые примеры. Всё должно быть понятно.",
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
      fr: "Sans limites",
      paragraphs: [
        "Все учебные пособия и дидактические материалы высылаются каждому участнику на электронную почту или в мессенджер. Во время каждого занятия ведётся видеозапись, которая размещается на YouTube в закрытом доступе для участников группы.",
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
      phrase: "Prendre le temps",
      lit: "дословно: «взять себе время»",
      note: "Не «потратить время», а позволить себе не спешить. Именно в таком спокойном ритме французский усваивается глубже всего."
    },
    {
      phrase: "Tête-à-tête",
      lit: "дословно: «голова к голове», наедине",
      note: "Во французском это не про сухой учебный формат, а про доверительный разговор двух людей, где всё внимание — смыслу."
    },
    {
      phrase: "Flâner",
      lit: "дословно: «неспешно бродить, созерцая»",
      note: "Особое французское искусство гулять без маршрута и спешки — так же, как мы знакомимся с языком на вечерах чтения."
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

  /* ---------- Тень липкой шапки при прокрутке ---------- */
  const siteHeader = document.querySelector(".site-header");
  if (siteHeader) {
    const syncHeaderShadow = () => {
      siteHeader.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    syncHeaderShadow();
    window.addEventListener("scroll", syncHeaderShadow, { passive: true });
  }

  /* ---------- Мобильное меню с мягким затемнением фона ---------- */
  const menuBtn = document.getElementById("menu-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");
  let drawerScrim = null;

  const ensureScrim = () => {
    if (drawerScrim) return drawerScrim;
    drawerScrim = document.createElement("div");
    drawerScrim.className = "drawer-scrim";
    drawerScrim.hidden = true;
    drawerScrim.addEventListener("click", closeMobileMenu);
    document.body.appendChild(drawerScrim);
    return drawerScrim;
  };

  const closeMobileMenu = () => {
    if (!menuBtn || !mobileDrawer) return;
    menuBtn.setAttribute("aria-expanded", "false");
    mobileDrawer.hidden = true;
    if (drawerScrim) drawerScrim.hidden = true;
  };

  if (menuBtn && mobileDrawer) {
    menuBtn.addEventListener("click", () => {
      const open = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!open));
      mobileDrawer.hidden = open;
      ensureScrim().hidden = open;
    });
    mobileDrawer.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", closeMobileMenu);
    });
    const desktopMq = window.matchMedia("(min-width: 60.01rem)");
    if (desktopMq.addEventListener) {
      desktopMq.addEventListener("change", (e) => { if (e.matches) closeMobileMenu(); });
    } else {
      window.addEventListener("resize", () => { if (window.innerWidth >= 961) closeMobileMenu(); }, { passive: true });
    }
  }

  /* ---------- Плавное появление секций ниже сгиба ---------- */
  const revealEls = Array.from(document.querySelectorAll("[data-reveal]"));
  const revealAboveOrInView = () => {
    const limit = window.innerHeight * 1.15;
    revealEls.forEach((el) => {
      if (el.classList.contains("is-visible")) return;
      if (el.getBoundingClientRect().top <= limit) el.classList.add("is-visible");
    });
  };

  if ("IntersectionObserver" in window && revealEls.length) {
    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -4% 0px", threshold: 0.02 }
    );
    revealEls.forEach((el) => obs.observe(el));
    revealAboveOrInView();
    window.addEventListener("hashchange", () => setTimeout(revealAboveOrInView, 120));
    window.addEventListener("scroll", revealAboveOrInView, { passive: true });
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", () => {
        setTimeout(revealAboveOrInView, 80);
        setTimeout(revealAboveOrInView, 450);
      });
    });
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Французский нюанс (работает и на главной, и на marina.html) ---------- */
  const nuanceBtn = document.getElementById("nuance-next-btn");
  const nuancePanel = nuanceBtn ? nuanceBtn.closest(".nuance-panel") : null;
  const nuancePhrase = document.getElementById("nuance-phrase");
  const nuanceLit = document.getElementById("nuance-lit");
  const nuanceNote = document.getElementById("nuance-note");
  const nuanceCounter = document.getElementById("nuance-counter");
  let nuanceIdx = 0;
  let nuanceTimer = null;

  const applyNuance = (i) => {
    nuanceIdx = (i + NUANCES.length) % NUANCES.length;
    const n = NUANCES[nuanceIdx];
    if (nuancePhrase) nuancePhrase.textContent = n.phrase;
    if (nuanceLit) nuanceLit.textContent = n.lit;
    if (nuanceNote) nuanceNote.textContent = n.note;
    if (nuanceCounter) nuanceCounter.textContent = `${nuanceIdx + 1} / ${NUANCES.length}`;
  };

  const renderNuance = (i, animate = false) => {
    if (nuanceTimer) {
      clearTimeout(nuanceTimer);
      nuanceTimer = null;
    }
    if (animate && nuancePanel) {
      nuancePanel.classList.add("is-swapping");
      nuanceTimer = setTimeout(() => {
        applyNuance(i);
        nuancePanel.classList.remove("is-swapping");
        nuanceTimer = null;
      }, 140);
    } else {
      applyNuance(i);
    }
  };

  if (nuanceBtn) {
    nuanceBtn.addEventListener("click", () => renderNuance(nuanceIdx + 1, true));
    renderNuance(0, false);
  }

  /* ---------- 7 принципов (ПК табы + мобильный аккордеон) ---------- */
  const pTabs = Array.from(document.querySelectorAll(".p-tab"));
  const pNum = document.getElementById("p-stage-num");
  const pFr = document.getElementById("p-stage-fr");
  const pTitle = document.getElementById("p-stage-title");
  const pBody = document.getElementById("p-stage-body");
  const pPractice = document.getElementById("p-practice-text");
  const pProgress = document.getElementById("p-progress-bar");
  const pCount = document.getElementById("p-progress-count");
  const pStage = document.querySelector(".p-stage");
  const pFadeWrap = document.getElementById("p-stage-fade");
  const pPrev = document.getElementById("p-prev");
  const pNext = document.getElementById("p-next");
  let activePrinciple = 0;
  let swapTimer = null;

  const applyPrinciple = (safe) => {
    const item = PRINCIPLES[safe];
    pTabs.forEach((t, i) => t.setAttribute("aria-selected", String(i === safe)));
    if (pNum) pNum.textContent = item.num;
    if (pFr) pFr.textContent = item.fr;
    if (pTitle) pTitle.textContent = item.title;
    if (pBody) pBody.innerHTML = item.paragraphs.map((p) => `<p>${p}</p>`).join("");
    if (pPractice) pPractice.textContent = item.practice;
    if (pProgress) pProgress.style.width = `${((safe + 1) / PRINCIPLES.length) * 100}%`;
    if (pCount) pCount.textContent = `Принцип ${safe + 1} из ${PRINCIPLES.length}`;
  };

  const lockPrinciplesHeight = () => {
    if (!pStage || !pFadeWrap || window.innerWidth < 896) {
      if (pStage) pStage.style.minHeight = "";
      return;
    }
    const savedIdx = activePrinciple;
    pStage.style.minHeight = "";
    let maxH = 0;
    for (let i = 0; i < PRINCIPLES.length; i += 1) {
      applyPrinciple(i);
      const h = Math.ceil(pStage.getBoundingClientRect().height);
      if (h > maxH) maxH = h;
    }
    applyPrinciple(savedIdx);
    if (maxH > 0) pStage.style.minHeight = `${maxH}px`;
  };

  const renderPrinciple = (idx, animate = false) => {
    const safe = (idx + PRINCIPLES.length) % PRINCIPLES.length;
    if (animate && safe === activePrinciple) return;
    activePrinciple = safe;
    if (swapTimer) {
      clearTimeout(swapTimer);
      swapTimer = null;
    }
    if (animate && pFadeWrap) {
      pFadeWrap.classList.add("is-swapping");
      swapTimer = setTimeout(() => {
        applyPrinciple(safe);
        pFadeWrap.classList.remove("is-swapping");
        swapTimer = null;
      }, 140);
    } else {
      applyPrinciple(safe);
    }
  };

  if (pTabs.length) {
    pTabs.forEach((tab, i) => tab.addEventListener("click", () => renderPrinciple(i, true)));
    if (pPrev) pPrev.addEventListener("click", () => renderPrinciple(activePrinciple - 1, true));
    if (pNext) pNext.addEventListener("click", () => renderPrinciple(activePrinciple + 1, true));
    renderPrinciple(0, false);
    lockPrinciplesHeight();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(lockPrinciplesHeight);
    }
    let resizeTimer = null;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(lockPrinciplesHeight, 120);
    }, { passive: true });
  }

  const mobilePrinciplesWrap = document.getElementById("principles-mobile-list");
  if (mobilePrinciplesWrap) {
    mobilePrinciplesWrap.innerHTML = PRINCIPLES.map(
      (item, idx) => `
        <article class="m-acc-card" data-open="${idx === 0 ? "true" : "false"}">
          <button class="m-acc-btn" type="button" aria-expanded="${idx === 0 ? "true" : "false"}">
            <span class="m-acc-num">${item.num}</span>
            <span class="m-acc-title">${item.title}</span>
            <svg class="icon m-acc-chev" viewBox="0 0 24 24" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="m-acc-body">
            ${item.paragraphs.map((p) => `<p>${p}</p>`).join("")}
            <div class="p-practice" style="margin-top: 0.25rem;">
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
    closeMobileMenu();
    closeModal(videoModal);
    closeModal(readerModal);
    closeModal(demoModal);
  });

  /* ---------- Видео Марины (ленивая загрузка YouTube по клику + fallback) ---------- */
  document.querySelectorAll("[data-open-video]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (SITE_CONFIG.welcomeVideoYouTubeId && videoStage) {
        const id = encodeURIComponent(SITE_CONFIG.welcomeVideoYouTubeId);
        const ytLink = `https://youtu.be/${id}`;
        const canEmbed = window.location.protocol === "http:" || window.location.protocol === "https:";
        const initialStatus = canEmbed
          ? "Загружаем плеер YouTube… Если YouTube недоступен в вашей сети, откройте видео напрямую:"
          : "Приветственное видео Марины Шультайс размещено на YouTube:";

        videoStage.innerHTML = `
          <div class="video-stage-fallback">
            <img src="img/marina-editorial.jpg?v=41" alt="О моей РаЗУМной школе — Марина Шультайс">
            <div class="video-stage-fallback-overlay">
              <p id="video-fallback-note">${initialStatus}</p>
              <a class="btn btn-sun" href="${ytLink}" target="_blank" rel="noopener noreferrer">Смотреть видео на YouTube →</a>
            </div>
          </div>
        `;
        openModal(videoModal);

        if (canEmbed) {
          let settled = false;
          const noteEl = document.getElementById("video-fallback-note");
          const probe = new Image();
          const timer = setTimeout(() => {
            if (settled) return;
            settled = true;
            if (noteEl) noteEl.textContent = "Встроенный плеер YouTube сейчас недоступен или работает слишком медленно — откройте видео напрямую:";
          }, 2400);

          probe.onload = () => {
            if (settled || !videoModal || videoModal.hidden) return;
            settled = true;
            clearTimeout(timer);
            const iframe = document.createElement("iframe");
            iframe.src = `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
            iframe.title = "О моей РаЗУМной школе — Марина Шультайс";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
            iframe.referrerPolicy = "strict-origin-when-cross-origin";
            iframe.allowFullscreen = true;
            iframe.addEventListener("load", () => iframe.classList.add("is-loaded"));
            videoStage.appendChild(iframe);
          };

          probe.onerror = () => {
            if (settled) return;
            settled = true;
            clearTimeout(timer);
            if (noteEl) noteEl.textContent = "Встроенный плеер YouTube сейчас недоступен в вашей сети — видео можно открыть напрямую на YouTube:";
          };

          probe.src = `https://i.ytimg.com/vi/${id}/default.jpg?t=${Date.now()}`;
        }
        return;
      } else if (SITE_CONFIG.welcomeVideoMp4Path && videoStage) {
        videoStage.innerHTML = `<video src="${SITE_CONFIG.welcomeVideoMp4Path}" controls autoplay playsinline></video>`;
      }
      openModal(videoModal);
    });
  });

  /* ---------- «Копилка»: журнальный разворот на главной + симметричный архив 3×3 ---------- */
  const kopilkaData = window.KOPILKA_DATA;

  const renderNoteCard = (item) => `
    <article class="note-card">
      <div class="note-card-top">
        <span class="note-cat">${item.kind}</span>
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

  const renderHomeEditorial = (items) => {
    if (!items.length) return "";
    const [lead, ...rest] = items;
    const leadHtml = `
      <article class="kopilka-lead-card">
        <div class="note-card-top">
          <span class="note-cat">${lead.kind}</span>
          <span class="note-time">${lead.readTime}</span>
        </div>
        <h3>${lead.title}</h3>
        <p>${lead.excerpt}</p>
        ${lead.exampleFr ? `
          <div class="kopilka-lead-sample">
            ${lead.exampleFr}
            <small>${lead.exampleRu || ""}</small>
          </div>
        ` : ""}
        <button class="note-card-btn" type="button" data-read-id="${lead.id}">
          <span>Читать полностью</span>
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>
        </button>
      </article>
    `;
    const sideHtml = `
      <div class="kopilka-side-list">
        ${rest.map((item) => `
          <article class="kopilka-side-item">
            <div class="note-card-top">
              <span class="note-cat">${item.kind}</span>
              <span class="note-time">${item.readTime}</span>
            </div>
            <h3>${item.title}</h3>
            <p>${item.excerpt}</p>
            <button class="note-card-btn" type="button" data-read-id="${item.id}">
              <span>Открыть заметку</span>
              <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>
            </button>
          </article>
        `).join("")}
      </div>
    `;
    return leadHtml + sideHtml;
  };

  const openReaderById = (id) => {
    if (!kopilkaData || !readerModal) return;
    const item = kopilkaData.items.find((x) => x.id === id);
    if (!item) return;

    const rCat = document.getElementById("reader-cat");
    const rTitle = document.getElementById("reader-title");
    const rContent = document.getElementById("reader-content");
    if (rCat) rCat.textContent = `${item.kind} · ${item.readTime}`;
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

  const homeKopilka = document.getElementById("kopilka-home-grid");
  if (homeKopilka && kopilkaData) {
    const featured = kopilkaData.items.filter((x) => x.featured).slice(0, 3);
    homeKopilka.innerHTML = renderHomeEditorial(featured);
  }

  const archiveGrid = document.getElementById("kopilka-archive");
  const filterPills = Array.from(document.querySelectorAll(".filter-pill"));
  const searchInput = document.getElementById("kopilka-search");
  const emptyMsg = document.getElementById("kopilka-empty");
  let activeFolder = "all";
  let searchQuery = "";

  const normalizeRu = (str) => str.toLowerCase().replace(/ё/g, "е");

  const tokenMatches = (haystack, token) => {
    if (haystack.includes(token)) return true;
    if (token.length >= 5) {
      const stripped = token.replace(/[аяоеуюиыьй]+$/, "");
      if (stripped.length >= 4 && haystack.includes(stripped)) return true;
    }
    return false;
  };

  const renderArchive = () => {
    if (!archiveGrid || !kopilkaData) return;
    const tokens = normalizeRu(searchQuery.trim()).split(/\s+/).filter(Boolean);
    const hasQuery = tokens.length > 0;
    const list = kopilkaData.items.filter((item) => {
      if (activeFolder === "all" && !hasQuery && item.spotlight) return false;
      const matchFolder = activeFolder === "all" || item.folder === activeFolder;
      if (!matchFolder) return false;
      if (!hasQuery) return true;
      const hay = normalizeRu([
        item.title,
        item.excerpt,
        item.kind,
        ...(item.body || []),
        item.exampleFr || "",
        item.exampleRu || ""
      ].join(" "));
      return tokens.every((t) => tokenMatches(hay, t));
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

  /* ---------- Компас формата + живой предпросмотр письма + Telegram ---------- */
  const compassState = { level: "continue", goal: "system", pace: "group" };
  const levelLabels = {
    zero: "начинаю с нуля",
    continue: "у меня уже есть база, хочется заговорить увереннее",
    advanced: "читаю и говорю по-французски, хочется тонкости и глубину"
  };

  const computeRec = () => {
    if (compassState.pace === "solo") {
      const readingFocus = compassState.goal === "reading";
      return {
        title: "Вам подойдёт индивидуальный формат Tête-à-tête",
        note: readingFocus
          ? "Личные занятия один на один с акцентом на чтение, культуру и живое обсуждение текстов. Начнём с бесплатной 30-минутной беседы в Zoom."
          : "«Лаборатория языковой алхимии» в личном темпе и под ваши задачи. Начнём с бесплатной 30-минутной беседы в Zoom.",
        msg: readingFocus
          ? `Здравствуйте, Марина! ${levelLabels[compassState.level][0].toUpperCase() + levelLabels[compassState.level].slice(1)}. Ближе индивидуальный формат Tête-à-tête с акцентом на чтение и культуру — можно записаться на 30-минутное знакомство в Zoom?`
          : `Здравствуйте, Марина! ${levelLabels[compassState.level][0].toUpperCase() + levelLabels[compassState.level].slice(1)}. Ближе индивидуальный формат Tête-à-tête — можно договориться о 30-минутном знакомстве в Zoom?`
      };
    }
    if (compassState.goal === "reading") {
      return {
        title: "Вам подойдёт клуб чтения «Вечерний чай с…»",
        note: "Пять неформальных вечеров чтения и обсуждения французских текстов между циклами. На знакомстве Марина подскажет ближайшие даты.",
        msg: `Здравствуйте, Марина! ${levelLabels[compassState.level][0].toUpperCase() + levelLabels[compassState.level].slice(1)}. Интересует курс чтения «Вечерний чай с…» — можно записаться на 30-минутное знакомство в Zoom?`
      };
    }
    if (compassState.goal === "personal") {
      return {
        title: "Вам подойдёт индивидуальный формат Tête-à-tête",
        note: "Личный график и программа под конкретную рабочую, учебную или культурную задачу. Начнём с 30-минутной беседы в Zoom.",
        msg: `Здравствуйте, Марина! ${levelLabels[compassState.level][0].toUpperCase() + levelLabels[compassState.level].slice(1)}. Интересует индивидуальный формат Tête-à-tête под личную задачу — можно договориться о 30-минутном знакомстве в Zoom?`
      };
    }
    return {
      title: "Вам подойдёт 10-недельный групповой цикл",
      note: "Два живых урока в неделю по 60 минут в Zoom, небольшая группа близкого уровня и бессрочный архив всех записей на YouTube.",
      msg: `Здравствуйте, Марина! ${levelLabels[compassState.level][0].toUpperCase() + levelLabels[compassState.level].slice(1)}. Интересует 10-недельный групповой цикл — можно записаться на бесплатное 30-минутное знакомство в Zoom?`
    };
  };

  const recTitle = document.getElementById("compass-rec-title");
  const recText = document.getElementById("compass-rec-text");
  const draftPreview = document.getElementById("compass-msg-preview");
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
    if (draftPreview) draftPreview.textContent = `«${r.msg}»`;
    if (telegramBtn && SITE_CONFIG.telegramHandle) {
      telegramBtn.href = `https://t.me/${SITE_CONFIG.telegramHandle}?text=${encodeURIComponent(r.msg)}`;
      telegramBtn.target = "_blank";
      telegramBtn.rel = "noopener noreferrer";
    }
  };

  const applyPreset = (p) => {
    if (p === "tete") { compassState.pace = "solo"; compassState.goal = "personal"; }
    else if (p === "tea") { compassState.pace = "group"; compassState.goal = "reading"; }
    else if (p === "group") { compassState.pace = "group"; compassState.goal = "system"; }
    syncCompass();
  };

  const compassOutput = document.querySelector(".compass-output");
  document.querySelectorAll(".compass-btn").forEach((b) => {
    b.addEventListener("click", () => {
      compassState[b.getAttribute("data-group")] = b.getAttribute("data-value");
      syncCompass();
      if (compassOutput) {
        compassOutput.classList.remove("is-updated");
        void compassOutput.offsetWidth;
        compassOutput.classList.add("is-updated");
      }
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
    btn.addEventListener("click", (e) => {
      if (SITE_CONFIG.telegramHandle) {
        const url = `https://t.me/${SITE_CONFIG.telegramHandle}?text=${encodeURIComponent(currentMsg)}`;
        if (btn.tagName === "A") {
          btn.href = url;
          btn.target = "_blank";
          btn.rel = "noopener noreferrer";
          return;
        }
        e.preventDefault();
        window.open(url, "_blank", "noopener,noreferrer");
        return;
      }
      e.preventDefault();
      if (demoTitle) demoTitle.textContent = "Запись в Telegram";
      if (demoDesc) demoDesc.textContent = "После привязки аккаунта кнопка сразу откроет чат с Мариной в Telegram с готовым текстом:";
      if (demoMsg) { demoMsg.hidden = false; demoMsg.textContent = currentMsg; }
      if (demoCopy) demoCopy.hidden = false;
      if (demoFeedback) demoFeedback.textContent = "";
      openModal(demoModal);
    });
  });

  document.querySelectorAll("[data-channel-btn]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (SITE_CONFIG.telegramChannelUrl) {
        if (btn.tagName === "A") {
          btn.href = SITE_CONFIG.telegramChannelUrl;
          btn.target = "_blank";
          btn.rel = "noopener noreferrer";
          return;
        }
        e.preventDefault();
        window.open(SITE_CONFIG.telegramChannelUrl, "_blank", "noopener,noreferrer");
        return;
      }
      e.preventDefault();
      if (demoTitle) demoTitle.textContent = "Telegram-канал";
      if (demoDesc) demoDesc.textContent = "Сюда подключается прямая ссылка на Telegram-канал школы.";
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
        if (demoFeedback) demoFeedback.textContent = "Скопировано";
      } catch {
        if (demoFeedback) demoFeedback.textContent = "Скопируйте текст выше";
      }
    });
  }
})();
