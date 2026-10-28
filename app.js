document.addEventListener('DOMContentLoaded', () => {
    const totalSlides = 115;
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const counterEl = document.getElementById('slideCounter');
    const progressEl = document.getElementById('progressBar');
    const sectionTitleEl = document.getElementById('currentSectionTitle');
    const slideDrawer = document.getElementById('slideDrawer');
    const drawerBackdrop = document.getElementById('drawerBackdrop');
    const drawerList = document.getElementById('drawerList');
    const drawerSearch = document.getElementById('drawerSearch');

    const tocData = [
    {
        "index": 0,
        "title": "抗微生物與抗黴菌藥物臨床實務",
        "category": "課程總覽",
        "tag_color": "cyan"
    },
    {
        "index": 1,
        "title": "課程架構與學習重點",
        "category": "課程大綱",
        "tag_color": "cyan"
    },
    {
        "index": 2,
        "title": "學習重點 1｜導讀思維：病原 × 部位 × 宿主",
        "category": "重點 1",
        "tag_color": "cyan"
    },
    {
        "index": 3,
        "title": "護理師抗微生物藥物實務",
        "category": "重點 1",
        "tag_color": "cyan"
    },
    {
        "index": 4,
        "title": "課程目標與使用方式",
        "category": "重點 1",
        "tag_color": "cyan"
    },
    {
        "index": 5,
        "title": "學習重點 2｜檢驗判讀與 PK/PD 核心原理",
        "category": "重點 2",
        "tag_color": "cyan"
    },
    {
        "index": 6,
        "title": "革蘭氏陽性球菌 (Gram-Positive Cocci, GPC)",
        "category": "重點 2",
        "tag_color": "cyan"
    },
    {
        "index": 7,
        "title": "革蘭氏陽性桿菌 (Gram-Positive Bacilli, GPB)",
        "category": "重點 2",
        "tag_color": "cyan"
    },
    {
        "index": 8,
        "title": "革蘭氏陰性球菌 (Gram-Negative Cocci, GNC)",
        "category": "重點 2",
        "tag_color": "cyan"
    },
    {
        "index": 9,
        "title": "革蘭氏陰性桿菌 (Gram-Negative Bacilli, GNB)",
        "category": "重點 2",
        "tag_color": "cyan"
    },
    {
        "index": 10,
        "title": "其他臨床重要病原體",
        "category": "重點 2",
        "tag_color": "cyan"
    },
    {
        "index": 11,
        "title": "細菌感染、定植與培養報告",
        "category": "重點 2",
        "tag_color": "cyan"
    },
    {
        "index": 12,
        "title": "抗藥性報告的判讀",
        "category": "重點 2",
        "tag_color": "cyan"
    },
    {
        "index": 13,
        "title": "抗菌藥物的主要作用標的",
        "category": "重點 2",
        "tag_color": "cyan"
    },
    {
        "index": 14,
        "title": "殺菌與抑菌的臨床意義",
        "category": "重點 2",
        "tag_color": "cyan"
    },
    {
        "index": 15,
        "title": "PK/PD 與給藥時程",
        "category": "重點 2",
        "tag_color": "cyan"
    },
    {
        "index": 16,
        "title": "學習重點 3｜細菌各論：院內抗菌藥規格與安全監測",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 17,
        "title": "常用抗菌藥物與護理重點",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 18,
        "title": "β-Lactam 抗菌藥：共同結構與四大分類",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 19,
        "title": "Penicillin G (長效懸浮針, IM)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 20,
        "title": "Oxacillin (IV / IM)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 21,
        "title": "Dicloxacillin (PO)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 22,
        "title": "Ampicillin (IV)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 23,
        "title": "Amoxicillin (PO)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 24,
        "title": "Amoxicillin / Clavulanate (PO / IV)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 25,
        "title": "Ampicillin / Sulbactam (IV)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 26,
        "title": "Piperacillin / Tazobactam (IV)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 27,
        "title": "Cephalosporins：分代原則與全世代代表藥物對照",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 28,
        "title": "Cephalosporins 的用途與監測",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 29,
        "title": "Cefazolin (IV / IM)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 30,
        "title": "Cephalexin (PO)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 31,
        "title": "Cefoxitin (IV)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 32,
        "title": "Cefmetazole (IV / IM)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 33,
        "title": "Flomoxef (IV)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 34,
        "title": "Ceftriaxone (IV / IM)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 35,
        "title": "Cefoperazone / Sulbactam (IV)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 36,
        "title": "Cefepime (IV / IM)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 37,
        "title": "Ceftaroline (IV)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 38,
        "title": "Cefiderocol (IV)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 39,
        "title": "Carbapenems：類別通性、臨床定位與安全指引",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 40,
        "title": "Ertapenem (IV / IM)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 41,
        "title": "Imipenem / Cilastatin (IV)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 42,
        "title": "Meropenem (IV)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 43,
        "title": "Aztreonam / Avibactam (IV)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 44,
        "title": "Ceftazidime / Avibactam (IV)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 45,
        "title": "Ceftolozane / Tazobactam (IV)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 46,
        "title": "β-Lactam 過敏與側鏈",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 47,
        "title": "Vancomycin (IV / PO)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 48,
        "title": "Teicoplanin (IV / IM)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 49,
        "title": "Daptomycin (IV)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 50,
        "title": "Linezolid (IV / PO)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 51,
        "title": "Clindamycin (IV / PO)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 52,
        "title": "Metronidazole (IV / PO)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 53,
        "title": "Colistin (CMS, IV / 吸入)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 54,
        "title": "Polymyxin B (IV)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 55,
        "title": "Gentamicin (IV / IM)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 56,
        "title": "Amikacin (IV / IM)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 57,
        "title": "Ciprofloxacin (IV / PO)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 58,
        "title": "Levofloxacin (IV / PO / 外用)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 59,
        "title": "Moxifloxacin (PO / 外用)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 60,
        "title": "Nemonoxacin (IV / PO)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 61,
        "title": "Ofloxacin (外用)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 62,
        "title": "Doxycycline (PO)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 63,
        "title": "Minocycline (PO / IV)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 64,
        "title": "Tetracycline (PO)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 65,
        "title": "Tigecycline (IV)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 66,
        "title": "Erythromycin (IV / PO / 眼膏)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 67,
        "title": "Azithromycin (PO)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 68,
        "title": "Clarithromycin (IV / PO)",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 69,
        "title": "Trimethoprim / Sulfamethoxazole",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 70,
        "title": "IV Fosfomycin 與鈉負荷",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 71,
        "title": "每日鈉與輸液總量",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 72,
        "title": "TDM 採血與紀錄",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 73,
        "title": "從商品仿單核對抗菌藥配製",
        "category": "重點 3",
        "tag_color": "blue"
    },
    {
        "index": 74,
        "title": "學習重點 4｜臨床實務：經驗治療與重症應變",
        "category": "重點 4",
        "tag_color": "red"
    },
    {
        "index": 75,
        "title": "抗菌譜與臨床選藥",
        "category": "重點 4",
        "tag_color": "red"
    },
    {
        "index": 76,
        "title": "經驗性治療與治療重評",
        "category": "重點 4",
        "tag_color": "red"
    },
    {
        "index": 77,
        "title": "敗血症的抗菌治療時效",
        "category": "重點 4",
        "tag_color": "red"
    },
    {
        "index": 78,
        "title": "肺炎的經驗性治療",
        "category": "重點 4",
        "tag_color": "red"
    },
    {
        "index": 79,
        "title": "尿路與腹內感染的判讀",
        "category": "重點 4",
        "tag_color": "red"
    },
    {
        "index": 80,
        "title": "特殊細菌感染：壞死性筋膜炎與腦膜炎",
        "category": "重點 4",
        "tag_color": "red"
    },
    {
        "index": 81,
        "title": "學習重點 5｜抗藥菌打擊：超級細菌與抗生素降階",
        "category": "重點 5",
        "tag_color": "amber"
    },
    {
        "index": 82,
        "title": "MRSA 與 VRE 的治療判讀",
        "category": "重點 5",
        "tag_color": "amber"
    },
    {
        "index": 83,
        "title": "ESBL 與 AmpC",
        "category": "重點 5",
        "tag_color": "amber"
    },
    {
        "index": 84,
        "title": "CRE 與抗藥酶型別",
        "category": "重點 5",
        "tag_color": "amber"
    },
    {
        "index": 85,
        "title": "抗藥性 Pseudomonas aeruginosa",
        "category": "重點 5",
        "tag_color": "amber"
    },
    {
        "index": 86,
        "title": "CRAB 與含 Sulbactam 方案",
        "category": "重點 5",
        "tag_color": "amber"
    },
    {
        "index": 87,
        "title": "細菌病原導向治療摘要",
        "category": "重點 5",
        "tag_color": "amber"
    },
    {
        "index": 88,
        "title": "抗菌藥物降階",
        "category": "重點 5",
        "tag_color": "amber"
    },
    {
        "index": 89,
        "title": "院內抗生素管理與交班",
        "category": "重點 5",
        "tag_color": "amber"
    },
    {
        "index": 90,
        "title": "細菌感染的臨床查詢工具",
        "category": "重點 5",
        "tag_color": "amber"
    },
    {
        "index": 91,
        "title": "護理執行重點",
        "category": "重點 5",
        "tag_color": "amber"
    },
    {
        "index": 92,
        "title": "學習重點 6｜抗黴菌各論：真菌分類與特殊操作",
        "category": "重點 6",
        "tag_color": "purple"
    },
    {
        "index": 93,
        "title": "黴菌分類與感染情境",
        "category": "重點 6",
        "tag_color": "purple"
    },
    {
        "index": 94,
        "title": "常用抗黴菌藥物",
        "category": "重點 6",
        "tag_color": "purple"
    },
    {
        "index": 95,
        "title": "抗黴菌藥物的作用標的",
        "category": "重點 6",
        "tag_color": "purple"
    },
    {
        "index": 96,
        "title": "傳統去氧膽酸鹽 Amphotericin B deoxycholate (IV)",
        "category": "重點 6",
        "tag_color": "purple"
    },
    {
        "index": 97,
        "title": "微脂體劑型 Liposomal Amphotericin B (IV)",
        "category": "重點 6",
        "tag_color": "purple"
    },
    {
        "index": 98,
        "title": "Triazoles 的交互作用",
        "category": "重點 6",
        "tag_color": "purple"
    },
    {
        "index": 99,
        "title": "Itraconazole 膠囊與給藥衛教",
        "category": "重點 6",
        "tag_color": "purple"
    },
    {
        "index": 100,
        "title": "Voriconazole 的監測",
        "category": "重點 6",
        "tag_color": "purple"
    },
    {
        "index": 101,
        "title": "Posaconazole (PO)",
        "category": "重點 6",
        "tag_color": "purple"
    },
    {
        "index": 102,
        "title": "Isavuconazonium sulfate (IV / PO)",
        "category": "重點 6",
        "tag_color": "purple"
    },
    {
        "index": 103,
        "title": "Anidulafungin (IV)",
        "category": "重點 6",
        "tag_color": "purple"
    },
    {
        "index": 104,
        "title": "Micafungin (IV)",
        "category": "重點 6",
        "tag_color": "purple"
    },
    {
        "index": 105,
        "title": "Flucytosine / 5-FC (PO)",
        "category": "重點 6",
        "tag_color": "purple"
    },
    {
        "index": 106,
        "title": "Terbinafine (PO / 外用)",
        "category": "重點 6",
        "tag_color": "purple"
    },
    {
        "index": 107,
        "title": "抗黴菌輸注過濾器",
        "category": "重點 6",
        "tag_color": "purple"
    },
    {
        "index": 108,
        "title": "學習重點 7｜侵襲性真菌感染處置與照護總結",
        "category": "重點 7",
        "tag_color": "purple"
    },
    {
        "index": 109,
        "title": "Candidemia 的治療與追蹤",
        "category": "重點 7",
        "tag_color": "purple"
    },
    {
        "index": 110,
        "title": "侵襲性黴菌感染與隱球菌腦膜炎",
        "category": "重點 7",
        "tag_color": "purple"
    },
    {
        "index": 111,
        "title": "黴菌單元回顧與照護整合",
        "category": "重點 7",
        "tag_color": "purple"
    },
    {
        "index": 112,
        "title": "臨床重點回顧｜抗微生物與抗黴菌用藥核心守則",
        "category": "總結回顧",
        "tag_color": "blue"
    },
    {
        "index": 113,
        "title": "課堂實戰互動驗收 (5 道臨床精選題)",
        "category": "實戰驗收",
        "tag_color": "amber"
    },
    {
        "index": 114,
        "title": "感謝聆聽・敬請指教 (守護用藥安全)",
        "category": "課程結語",
        "tag_color": "green"
    }
];

    function updateSlideScale() {
        const stage = document.querySelector('.presentation-stage');
        const frame = document.querySelector('.slide-frame');
        if (!stage || !frame) return;

        const stageW = stage.clientWidth;
        const stageH = stage.clientHeight;

        const padX = stageW > 1024 ? 6 : 0;
        const padY = stageH > 800 ? 6 : 0;

        const availW = Math.max(100, stageW - padX);
        const availH = Math.max(100, stageH - padY);

        const scale = Math.min(availW / 1600, availH / 900);
        frame.style.transform = `translate(-50%, -50%) scale(${scale})`;
    }

    function updatePresentation() {
        slides.forEach((s, idx) => {
            s.classList.toggle('active', idx === currentIndex);
        });

        const currentSlide = slides[currentIndex];
        if (currentSlide) {
            const scrollers = currentSlide.querySelectorAll('.drug-linear-container, .slide-body, .info-card-body, .caution-box');
            scrollers.forEach(el => el.scrollTop = 0);

            const section = currentSlide.getAttribute('data-section') || '課程內容';
            const shortSection = section.split('｜')[0].trim();
            if (sectionTitleEl) {
                sectionTitleEl.textContent = shortSection || section;
            }
        }

        const numStr = String(currentIndex + 1).padStart(2, '0');
        const totalStr = String(totalSlides).padStart(2, '0');
        if (counterEl) {
            counterEl.textContent = `${numStr} / ${totalStr}`;
        }

        if (progressEl) {
            const progressPct = ((currentIndex + 1) / totalSlides) * 100;
            progressEl.style.width = `${progressPct}%`;
        }

        updateDrawerActiveItem();
        
        // Update URL hash without jumping page
        if (window.location.hash !== `#${currentIndex + 1}`) {
            history.replaceState(null, '', `#${currentIndex + 1}`);
        }

        // Re-initialize Lucide icons for active slide if available
        if (window.lucide && typeof lucide.createIcons === 'function') {
            lucide.createIcons();
        }
    }

    function goToSlide(index) {
        if (index < 0) index = 0;
        if (index >= totalSlides) index = totalSlides - 1;
        currentIndex = index;
        updatePresentation();
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log(`Fullscreen error: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    }

    function renderDrawer(filter = '') {
        if (!drawerList) return;
        drawerList.innerHTML = '';
        const f = filter.toLowerCase().trim();

        tocData.forEach(item => {
            if (f && !item.title.toLowerCase().includes(f) && !item.category.toLowerCase().includes(f)) {
                return;
            }

            const div = document.createElement('div');
            div.className = `drawer-item ${item.index === currentIndex ? 'active' : ''}`;
            div.innerHTML = `
                <span class="slide-tag ${item.tag_color}" style="font-size: 13px; padding: 2px 8px; flex-shrink: 0;">${item.category.split('｜')[0]}</span>
                <span style="font-family: var(--font-mono); font-weight: 800; color: #0284c7; flex-shrink: 0; min-width: 24px;">${String(item.index + 1).padStart(2, '0')}</span>
                <span style="flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${item.title}</span>
            `;
            div.onclick = () => {
                goToSlide(item.index);
                closeDrawer();
            };
            drawerList.appendChild(div);
        });
    }

    function updateDrawerActiveItem() {
        if (!drawerList) return;
        const items = drawerList.querySelectorAll('.drawer-item');
        items.forEach((it, idx) => {
            it.classList.toggle('active', idx === currentIndex);
        });
    }

    function openDrawer() {
        if (!slideDrawer || !drawerBackdrop) return;
        renderDrawer(drawerSearch ? drawerSearch.value : '');
        slideDrawer.classList.add('open');
        drawerBackdrop.classList.add('active');
        if (drawerSearch) drawerSearch.focus();
    }

    function closeDrawer() {
        if (!slideDrawer || !drawerBackdrop) return;
        slideDrawer.classList.remove('open');
        drawerBackdrop.classList.remove('active');
    }

    // Event Listeners for Bottom Controls
    const btnNext = document.getElementById('btnNext');
    const btnPrev = document.getElementById('btnPrev');
    const btnDrawer = document.getElementById('btnDrawer');
    const btnCloseDrawer = document.getElementById('btnCloseDrawer');
    const btnToggleNav = document.getElementById('btnToggleNav');
    const btnFullscreen = document.getElementById('btnFullscreen');
    const btnPrint = document.getElementById('btnPrint');

    function toggleNav() {
        document.body.classList.toggle('nav-hidden');
        updateSlideScale();
        setTimeout(updateSlideScale, 50);
    }

    if (btnNext) btnNext.addEventListener('click', nextSlide);
    if (btnPrev) btnPrev.addEventListener('click', prevSlide);
    if (btnDrawer) btnDrawer.addEventListener('click', openDrawer);
    if (btnCloseDrawer) btnCloseDrawer.addEventListener('click', closeDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);
    if (btnToggleNav) btnToggleNav.addEventListener('click', toggleNav);
    if (btnFullscreen) btnFullscreen.addEventListener('click', toggleFullscreen);
    if (btnPrint) btnPrint.addEventListener('click', () => window.print());

    if (drawerSearch) {
        drawerSearch.addEventListener('input', (e) => renderDrawer(e.target.value));
    }

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
        if (slideDrawer && slideDrawer.classList.contains('open')) {
            if (e.key === 'Escape') closeDrawer();
            return;
        }

        switch (e.key) {
            case 'ArrowRight':
            case 'PageDown':
            case ' ':
                e.preventDefault();
                nextSlide();
                break;
            case 'ArrowLeft':
            case 'PageUp':
                e.preventDefault();
                prevSlide();
                break;
            case 'Home':
                e.preventDefault();
                goToSlide(0);
                break;
            case 'End':
                e.preventDefault();
                goToSlide(totalSlides - 1);
                break;
            case 'f':
            case 'F':
                e.preventDefault();
                toggleFullscreen();
                break;
            case 'h':
            case 'H':
                e.preventDefault();
                toggleNav();
                break;
            case 'm':
            case 'M':
                e.preventDefault();
                if (slideDrawer && slideDrawer.classList.contains('open')) {
                    closeDrawer();
                } else {
                    openDrawer();
                }
                break;
            case 'p':
            case 'P':
                if (e.ctrlKey || e.metaKey) return;
                e.preventDefault();
                window.print();
                break;
            case 'Escape':
                closeDrawer();
                break;
        }
    });

    // Touch Swipe Navigation
    let touchStartX = 0;
    let touchStartY = 0;

    window.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;

        if (Math.abs(diffX) > 60 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
            if (diffX < 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }, { passive: true });

    // Window Resize Handling
    window.addEventListener('resize', updateSlideScale);
    document.addEventListener('fullscreenchange', () => {
        updateSlideScale();
        setTimeout(updateSlideScale, 50);
        setTimeout(updateSlideScale, 150);
    });
    document.addEventListener('webkitfullscreenchange', () => {
        updateSlideScale();
        setTimeout(updateSlideScale, 50);
        setTimeout(updateSlideScale, 150);
    });

    // Initial Hash / Deep Linking Handling
    function handleHashChange() {
        const hash = window.location.hash.replace('#', '');
        if (hash && !isNaN(parseInt(hash))) {
            const targetIdx = parseInt(hash) - 1;
            if (targetIdx >= 0 && targetIdx < totalSlides && targetIdx !== currentIndex) {
                goToSlide(targetIdx);
            }
        }
    }

    window.addEventListener('hashchange', handleHashChange);

    // Initialize Interactive Clinical Case Quiz (Slide 114)
    function initializeQuiz() {
        const quizTabs = document.querySelectorAll('.quiz-tab');
        const quizPanels = document.querySelectorAll('.quiz-panel');
        
        quizTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetId = tab.getAttribute('data-quiz');
                quizTabs.forEach(t => t.classList.remove('active'));
                quizPanels.forEach(p => p.classList.remove('active'));
                tab.classList.add('active');
                const targetPanel = document.getElementById(targetId);
                if (targetPanel) targetPanel.classList.add('active');
            });
        });

        document.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', function() {
                const parentPanel = this.closest('.quiz-panel');
                if (!parentPanel) return;
                const allOptions = parentPanel.querySelectorAll('.quiz-option');
                const feedback = parentPanel.querySelector('.quiz-feedback');
                const hintBox = parentPanel.querySelector('.quiz-hint-box');
                const isCorrect = this.getAttribute('data-correct') === 'true';

                allOptions.forEach(opt => {
                    opt.classList.remove('correct', 'incorrect');
                    if (opt.getAttribute('data-correct') === 'true') {
                        opt.classList.add('correct');
                    }
                });

                if (!isCorrect) {
                    this.classList.add('incorrect');
                }

                if (hintBox) {
                    hintBox.classList.add('hide');
                }

                if (feedback) {
                    feedback.classList.add('show');
                }
            });
        });
    }

    // Startup Execution
    updateSlideScale();
    initializeQuiz();

    const initialHash = window.location.hash.replace('#', '');
    if (initialHash && !isNaN(parseInt(initialHash))) {
        const startIdx = parseInt(initialHash) - 1;
        if (startIdx >= 0 && startIdx < totalSlides) {
            goToSlide(startIdx);
        } else {
            goToSlide(0);
        }
    } else {
        goToSlide(0);
    }
});
