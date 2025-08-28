document.addEventListener('DOMContentLoaded', () => {

    // ======== DATA: Expanded and Corrected Content ========
    const athkarData = {
        morning: [
            {
                id: 'm1',
                title: 'آية الكرسي',
                text: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ.',
                count: 1,
                audio: 'https://www.hisnmuslim.com/audio/ar/11.mp3',
                virtue: 'من قالها حين يصبح أُجير من الجن حتى يمسي.'
            },
            {
                id: 'm2',
                title: 'سيد الاستغفار',
                text: 'اللَّهُمَّ أَنْتَ رَبِّى لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِى وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَىَّ وَأَبُوءُ بِذَنْبِى، فَاغْفِرْ لِى، فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ.',
                count: 1,
                audio: 'https://www.hisnmuslim.com/audio/ar/133.mp3',
                virtue: 'من قالها موقناً بها حين يصبح، فمات من يومه دخل الجنة.'
            },
            {
                id: 'm3',
                title: 'المعوذات',
                text: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ﴿قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ﴾.\n\nبِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ﴿قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِنْ شَرِّ مَا خَلَقَ ۝ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ﴾.\n\nبِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ﴿قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَهِ النَّاسِ ۝ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ﴾.',
                count: 3,
                audio: 'https://www.hisnmuslim.com/audio/ar/16.mp3',
                virtue: 'من قالها ثلاث مرات حين يصبح وحين يمسي كفته من كل شيء.'
            },
            {
                id: 'm4',
                title: 'دعاء الصباح',
                text: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.',
                count: 1,
                audio: 'https://www.hisnmuslim.com/audio/ar/14.mp3',
                virtue: 'دعاء شامل لخير اليوم والليلة، واستعاذة من شرهما.'
            },
            {
                id: 'm5',
                title: 'دعاء العافية',
                text: 'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لاَ إِلَهَ إِلاَّ أَنْتَ. اللَّهُمَّ  إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لاَ إِلَهَ إِلاَّ أَنْتَ.',
                count: 3,
                audio: 'https://www.hisnmuslim.com/audio/ar/22.mp3',
                virtue: 'دعاء لطلب العافية في الجسد والحواس والاستعاذة من الكفر والفقر.'
            }
        ],
        evening: [
            {
                id: 'e1',
                title: 'آية الكرسي',
                text: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ.',
                count: 1,
                audio: 'https://www.hisnmuslim.com/audio/ar/11.mp3',
                virtue: 'من قالها حين يمسي أجير من الجن حتى يصبح.'
            },
            {
                id: 'e2',
                title: 'المعوذات',
                text: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ﴿قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ﴾.\n\nبِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ﴿قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِنْ شَرِّ مَا خَلَقَ ۝ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ﴾.\n\nبِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ﴿قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَهِ النَّاسِ ۝ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ﴾.',
                count: 3,
                audio: 'https://www.hisnmuslim.com/audio/ar/16.mp3',
                virtue: 'من قالها ثلاث مرات حين يصبح وحين يمسي كفته من كل شيء.'
            },
            {
                id: 'e3',
                title: 'دعاء المساء',
                text: 'أَمسينا و أمسى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.',
                count: 1,
                audio: 'https://www.hisnmuslim.com/audio/ar/135.mp3',
                virtue: 'من قاله حين يمسي كان حقاً على الله أن يرضيه يوم القيامة.'
            },
            {
                id: 'e4',
                title: 'الاستعاذة من الشرور',
                text: 'أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.',
                count: 3,
                audio: 'https://www.hisnmuslim.com/audio/ar/159.mp3',
                virtue: 'من قالها ثلاث مرات في المساء، لم يضره شيء في تلك الليلة.'
            },
            {
                id: 'e5',
                title: 'دعاء حفظ الدين والدنيا',
                text: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، ... (كامل)',
                count: 1,
                audio: 'https://www.hisnmuslim.com/audio/ar/24.mp3',
                virtue: 'دعاء شامل لحفظ النفس والأهل والمال في الدنيا والآخرة.'
            }
        ]
    };

    const duasData = [
        {
            title: 'دعاء جامع من القرآن',
            text: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ.',
            audio: 'https://www.hisnmuslim.com/audio/ar/225.mp3',
            virtue: 'كان أكثر دعاء النبي صلى الله عليه وسلم، وهو دعاء جامع لخيري الدنيا والآخرة.'
        },
        {
            title: 'دعاء الثبات',
            text: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ الْوَهَّابُ.',
            audio: 'https://www.hisnmuslim.com/audio/ar/227.mp3',
            virtue: 'دعاء قرآني لطلب الثبات على الحق والهداية.'
        },
        {
            title: 'دعاء طلب العفو',
            text: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ كَرِيمٌ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي.',
            audio: 'https://www.hisnmuslim.com/audio/ar/167.mp3',
            virtue: 'دعاء عظيم يُكثر منه في ليلة القدر والعشر الأواخر.'
        },
        {
            title: 'دعاء للمعونة على الذكر',
            text: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ، وَشُكْرِكَ، وَحُسْنِ عِبَادَتِكَ.',
            audio: 'https://www.hisnmuslim.com/audio/ar/92.mp3',
            virtue: 'دعاء أوصى به النبي معاذاً أن يقوله دبر كل صلاة.'
        }
    ];

    const asmaAlHusna = [ 'الله', 'الرحمن', 'الرحيم', 'الملك', 'القدوس', 'السلام', 'المؤمن', 'المهيمن', 'العزيز', 'الجبار', 'المتكبر', 'الخالق', 'البارئ', 'المصور', 'الغفار', 'القهار', 'الوهاب', 'الرزاق', 'الفتاح', 'العليم', 'القابض', 'الباسط', 'الخافض', 'الرافع', 'المعز', 'المذل', 'السميع', 'البصير', 'الحكم', 'العدل', 'اللطيف', 'الخبير', 'الحليم', 'العظيم', 'الغفور', 'الشكور', 'العلي', 'الكبير', 'الحفيظ', 'المقيت', 'الحسيب', 'الجليل', 'الكريم', 'الرقيب', 'المجيب', 'الواسع', 'الحكيم', 'الودود', 'المجيد', 'الباعث', 'الشهيد', 'الحق', 'الوكيل', 'القوي', 'المتين', 'الولي', 'الحميد', 'المحصي', 'المبدئ', 'المعيد', 'المحيي', 'المميت', 'الحي', 'القيوم', 'الواجد', 'الماجد', 'الواحد', 'الأحد', 'الصمد', 'القادر', 'المقتدر', 'المقدم', 'المؤخر', 'الأول', 'الآخر', 'الظاهر', 'الباطن', 'الوالي', 'المتعالي', 'البر', 'التواب', 'المنتقم', 'العفو', 'الرءوف', 'مالك الملك', 'ذو الجلال والإكرام', 'المقسط', 'الجامع', 'الغني', 'المغني', 'المانع', 'الضار', 'النافع', 'النور', 'الهادي', 'البديع', 'الباقي', 'الوارث', 'الرشيد', 'الصبور'];


    // ======== DOM ELEMENTS (النسخة النهائية) ========
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const athkarGrid = document.getElementById('athkar-grid');
    const duasGrid = document.getElementById('duas-grid');
    const asmaGrid = document.getElementById('asma-grid');
    const tabs = document.querySelectorAll('.tab-link');
    const audioPlayer = document.getElementById('audio-player');
    const nowPlaying = document.getElementById('now-playing');
    const totalReadCountEl = document.getElementById('total-read-count');
    const uniqueReadCountEl = document.getElementById('unique-read-count');
    const fetchPrayerBtn = document.getElementById('fetch-prayer-btn');
    const cityInput = document.getElementById('city-input');
    const countryInput = document.getElementById('country-input');
    const prayerTimingsGrid = document.getElementById('prayer-timings-grid');
    const nextPrayerContainer = document.getElementById('next-prayer-container');
    const nextPrayerNameEl = document.getElementById('next-prayer-name');
    const nextPrayerCountdownEl = document.getElementById('next-prayer-countdown');
    const prayerApiError = document.getElementById('prayer-api-error');
    // -- العناصر الجديدة --
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const shareBtnFooter = document.getElementById('share-btn-footer');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // ======== FUNCTIONS ========
    
    // (بقية الدوال تبقى كما هي بدون تغيير)
    const createCardHTML = (item) => {
        const hasCounter = item.count > 0;
        return `
            <div class="athkar-card">
                <h4 class="card-title">${item.title}</h4>
                <p class="card-text">${item.text}</p>
                <div class.card-virtue"><strong>الفضل:</strong> ${item.virtue}</div>
                <div class="card-footer">
                    ${hasCounter ? `<span class="card-count">التكرار: ${item.count}</span>` : '<span></span>'}
                    <div class="card-actions">
                        ${hasCounter ? `<button class="card-btn read-btn" data-id="${item.id}">قرأت</button>` : ''}
                        ${item.audio ? `<button class="card-btn play-btn" data-audio="${item.audio}" data-title="${item.title}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.804 8 5 4.633v6.734zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m15 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0"/></svg></button>` : ''}
                    </div>
                </div>
            </div>
        `;
    };
    const renderAthkar = (category) => { athkarGrid.innerHTML = ''; athkarData[category].forEach(thikr => { athkarGrid.innerHTML += createCardHTML(thikr); }); };
    const renderDuas = () => { duasGrid.innerHTML = ''; duasData.forEach(dua => { duasGrid.innerHTML += createCardHTML(dua); }); };
    const renderAsmaAlHusna = () => { asmaGrid.innerHTML = ''; asmaAlHusna.forEach(name => { asmaGrid.innerHTML += `<div class="asma-card">${name}</div>`; }); };
    let stats = JSON.parse(localStorage.getItem('athkarStats')) || { totalReads: 0, uniqueReads: [], lastVisitDate: new Date().toLocaleDateString() };
    if (stats.lastVisitDate !== new Date().toLocaleDateString()) { stats.totalReads = 0; stats.uniqueReads = []; stats.lastVisitDate = new Date().toLocaleDateString(); localStorage.setItem('athkarStats', JSON.stringify(stats)); }
    const applyTheme = (theme) => { if (theme === 'dark') { body.classList.add('dark-mode'); } else { body.classList.remove('dark-mode'); } };
    const toggleTheme = () => { const currentTheme = body.classList.contains('dark-mode') ? 'light' : 'dark'; localStorage.setItem('theme', currentTheme); applyTheme(currentTheme); };
    const updateStatsDisplay = () => { totalReadCountEl.textContent = stats.totalReads; uniqueReadCountEl.textContent = stats.uniqueReads.length; };
    const shareWebsite = async () => { const shareData = { title: 'موقع أذكار ودعاء | صدقة جارية', text: 'حصنك اليومي من الكتاب والسنة.', url: window.location.href }; try { if (navigator.share) { await navigator.share(shareData); } else { window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareData.text + ' ' + shareData.url)}`, '_blank'); } } catch (err) { console.error("Error sharing:", err); } };
    let prayerCountdownInterval;
    const getPrayerTimes = async () => { const city = cityInput.value.trim(); const country = countryInput.value.trim(); if (!city || !country) { prayerApiError.textContent = 'الرجاء إدخال المدينة والبلد.'; return; } prayerApiError.textContent = ''; prayerTimingsGrid.innerHTML = 'جاري التحميل...'; try { const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=8`); if (!response.ok) throw new Error('لم يتم العثور على المدينة أو البلد.'); const data = await response.json(); const timings = data.data.timings; const prayerOrder = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha']; const prayerNames = { Fajr: 'الفجر', Dhuhr: 'الظهر', Asr: 'العصر', Maghrib: 'المغرب', Isha: 'العشاء' }; prayerTimingsGrid.innerHTML = ''; prayerOrder.forEach(prayer => { prayerTimingsGrid.innerHTML += `<div class="prayer-time-card" id="prayer-${prayer}"><h5>${prayerNames[prayer]}</h5><p>${timings[prayer]}</p></div>`; }); startCountdown(timings, prayerOrder, prayerNames); } catch (error) { prayerTimingsGrid.innerHTML = ''; prayerApiError.textContent = `خطأ: ${error.message}`; nextPrayerContainer.style.display = 'none'; } };
    const startCountdown = (timings, prayerOrder, prayerNames) => { if (prayerCountdownInterval) clearInterval(prayerCountdownInterval); prayerCountdownInterval = setInterval(() => { const now = new Date(); let nextPrayerTime = null; let nextPrayerName = ''; for (const prayer of prayerOrder) { const [h, m] = timings[prayer].split(':'); const prayerTime = new Date(); prayerTime.setHours(h, m, 0, 0); if (prayerTime > now) { nextPrayerTime = prayerTime; nextPrayerName = prayer; break; } } if (!nextPrayerTime) { const [h, m] = timings['Fajr'].split(':'); nextPrayerTime = new Date(); nextPrayerTime.setDate(nextPrayerTime.getDate() + 1); nextPrayerTime.setHours(h, m, 0, 0); nextPrayerName = 'Fajr'; } const diff = nextPrayerTime - now; const hours = Math.floor(diff / 3600000); const minutes = Math.floor((diff % 3600000) / 60000); const seconds = Math.floor((diff % 60000) / 1000); nextPrayerNameEl.textContent = prayerNames[nextPrayerName]; nextPrayerCountdownEl.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`; nextPrayerContainer.style.display = 'block'; document.querySelectorAll('.prayer-time-card').forEach(c => c.classList.remove('next')); document.getElementById(`prayer-${nextPrayerName}`).classList.add('next'); }, 1000); };

    // ======== EVENT LISTENERS (النسخة النهائية) ========
    
    // تشغيل الوضع الليلي
    themeToggle.addEventListener('click', toggleTheme);
    
    // تشغيل زر جلب أوقات الصلاة
    fetchPrayerBtn.addEventListener('click', getPrayerTimes);
    
    // تفعيل التبويبات (أذكار الصباح والمساء)
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderAthkar(tab.dataset.tab);
        });
    });

    // التعامل مع ضغطات الأزرار داخل البطاقات (قراءة وتشغيل)
    document.querySelector('main').addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('read-btn')) {
            stats.totalReads++;
            const thikrId = target.dataset.id;
            if (!stats.uniqueReads.includes(thikrId)) {
                stats.uniqueReads.push(thikrId);
            }
            localStorage.setItem('athkarStats', JSON.stringify(stats));
            updateStatsDisplay();
            target.classList.add('completed');
            target.textContent = 'أتممت';
            target.disabled = true;
        } 
        else if (target.closest('.play-btn')) {
            const button = target.closest('.play-btn');
            audioPlayer.src = button.dataset.audio;
            nowPlaying.textContent = `جاري تشغيل: ${button.dataset.title}`;
            audioPlayer.play();
            document.getElementById('player').scrollIntoView({ behavior: 'smooth' });
        }
    });

    // -- الأوامر الجديدة --
    
    // تشغيل زر القائمة للموبايل
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // إغلاق القائمة عند الضغط على أي رابط فيها
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
        });
    });

    // تشغيل زر المشاركة الجديد في الفوتر
    shareBtnFooter.addEventListener('click', shareWebsite);


    // ======== INITIALIZATION ========
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
    renderAthkar('morning');
    renderDuas();
    renderAsmaAlHusna();
    updateStatsDisplay();

});