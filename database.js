// Barcha kitoblar va darslar ma'lumotlar bazasi
const lessonsDatabase = {
    // 1-kitob, 1-dars
    "ess1_1": {
        uz: {
            title: "The Lion and the Mouse",
            gamesTitle: "GAMELAR RO'YXATI",
            textHtml: `<h3>The Lion and the Mouse</h3>
                       <p>A great <span class="keyword-tooltip" data-tooltip="Sher — Yirik yirtqich.">lion</span> was asleep...</p>`,
            videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
            keywordsUrl: "https://wordwall.net/embed/play/73822/190/815",
            testUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf.../viewform?embedded=true",
            games: {
                matchup: "https://wordwall.net/embed/play/73822/190/815",
                anagrama: "https://wordwall.net/embed/play/73822/190/220",
                typeanswer: "https://wordwall.net/embed/play/73822/190/340",
                wordsearch: "https://wordwall.net/embed/play/73822/190/450",
                pair: "https://wordwall.net/embed/play/73822/190/560"
            }
        },
        ru: {
            title: "Лев и Мышь",
            gamesTitle: "СПИСОК ИГР",
            textHtml: `<h3>Лев и Мышь</h3>
                       <p>A great <span class="keyword-tooltip" data-tooltip="Лев — Крупный хищник.">lion</span> was asleep...</p>`,
            videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
            keywordsUrl: "https://wordwall.net/embed/play/73822/190/815",
            testUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf.../viewform?embedded=true",
            games: {
                matchup: "https://wordwall.net/embed/play/55555/111/111",
                anagrama: "https://wordwall.net/embed/play/55555/111/222",
                typeanswer: "https://wordwall.net/embed/play/55555/111/333",
                wordsearch: "https://wordwall.net/embed/play/55555/111/444",
                pair: "https://wordwall.net/embed/play/55555/111/555"
            }
        }
    },

    // 1-kitob, 2-dars (Yangi darslarni shu tariqa vergul qo'shib kiritasiz)
    "ess1_2": {
        uz: {
            title: "The Boy Who Cried Wolf",
            gamesTitle: "GAMELAR RO'YXATI",
            textHtml: `<h3>The Boy Who Cried Wolf</h3><p>Matn shu yerda...</p>`,
            videoUrl: "https://www.youtube.com/embed/YEVO_Xw6wco",
            keywordsUrl: "https://wordwall.net/embed/play/00000",
            testUrl: "https://docs.google.com/forms/...",
            games: { matchup: "...", anagrama: "...", typeanswer: "...", wordsearch: "...", pair: "..." }
        },
        ru: {
            title: "Мальчик, который кричал: Волк!",
            gamesTitle: "СПИСОК ИГР",
            textHtml: `<h3>Мальчик, который...</h3><p>Текст здесь...</p>`,
            videoUrl: "https://www.youtube.com/embed/YEVO_Xw6wco",
            keywordsUrl: "https://wordwall.net/embed/play/00000",
            testUrl: "https://docs.google.com/forms/...",
            games: { matchup: "...", anagrama: "...", typeanswer: "...", wordsearch: "...", pair: "..." }
        }
    }
};
