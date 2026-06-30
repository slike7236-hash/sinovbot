// Barcha kitoblar va darslar ma'lumotlar bazasi
const lessonsDatabase = {
    // 1-kitob, 1-dars
    "ess1_1": {
        uz: {
            title: "The Lion and the Mouse",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            gamesTitle: "GAMELAR RO'YXATI",
            textHtml: `<h3>The Lion and the Mouse</h3>
                       <p>A great <span class="keyword-tooltip" data-tooltip="Sher — Yirik yirtqich.">lion</span> was asleep The Lost Village in the Mountains Many years ago, there was a small village hidden deep in the mountains. The village was surrounded by tall trees, clear rivers, and beautiful green fields. Because it was located far from any city, very few people knew about its existence. The villagers lived simple lives. They grew vegetables, raised animals, and helped one another whenever someone was in need. One day, a young traveler named Adam arrived at the village. He had spent several weeks exploring different regions of the country. During his journey, he heard stories about a mysterious place hidden among the mountains. Curious to discover whether the stories were true, he followed an old map that had belonged to his grandfather. When Adam finally reached the village, he was surprised by its beauty. The houses were built from stone and wood, and colorful flowers grew in every garden. The people welcomed him warmly and offered him food and a place to stay. Adam noticed that the villagers seemed unusually happy despite having very few modern conveniences. As the days passed, Adam became friends with many local residents. He learned about their traditions and customs. Every evening, families gathered in the village square to share stories, sing songs, and discuss events of the day. Unlike people in large cities, the villagers spent little time worrying about money or material possessions. Instead, they focused on relationships, cooperation, and community spirit. One afternoon, Adam spoke with the oldest man in the village. The man explained that many years earlier, several visitors had tried to convince the villagers to leave their homes and move to the city. They promised better jobs, larger houses, and more opportunities. However, most villagers decided to remain where they were. They believed that happiness came not from wealth but from meaningful connections with other people and with nature. Adam found these ideas fascinating. Before arriving at the village, he had always believed that success was measured by money, status, and professional achievements. However, his experiences in the mountains began to change his perspective. He realized that many people spend their lives chasing things they do not truly need while ignoring what is most important. After several weeks, it was time for Adam to continue his journey. The villagers organized a small celebration in his honor. They gave him a handmade wooden box as a gift and wished him safe travels. Inside the box was a simple message: “The greatest treasures in life cannot be bought.” As Adam walked away from the village, he looked back one final time. He knew he would never forget the lessons he had learned there. Although he returned to the modern world, he carried the values of the mountain village with him for the rest of his life. Whenever he faced difficult decisions, he remembered the kindness, wisdom, and happiness of the people he had met among the mountains. The story of the lost village spread far and wide. Some people believed it was only a legend, while others searched for the village themselves. Yet whether the village truly existed or not, its message remained powerful: true happiness is often found not in what we own, but in how we live and how we treat those around us....</p>`,
            videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
            keywordsList: [
                { word: "Book", translation: "Kitob" },
                { word: "Pen", translation: "Ruchka" },
                { word: "Pencil", translation: "Qalam" },
                { word: "Cup", translation: "Chashka" },
                { word: "Pencil", translation: "Qalam" },
                { word: "copyBook", translation: "daftar" },
                { word: "[allPen", translation: "Ruchka" },
                { word: "Pencicasel", translation: "Qalam" },
                { word: "Cupboard", translation: "Chashka" },
                { word: "Penciline", translation: "Qalam" },
                { word: "Wind surfing", translation: "Shamol" }
            ],
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
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            gamesTitle: "СПИСОК ИГР",
            textHtml: `<h3>Лев и Мышь</h3>
                       <p>A great <span class="keyword-tooltip" data-tooltip="Лев — Крупный хищник.">lion</span> was asleep...</p>`,
            videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
            keywordsList: [
                { word: "Book", translation: "Книга" },
                { word: "Pen", translation: "Ручка" }
            ],
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

    // 1-kitob, 2-dars
    "ess1_2": {
        uz: {
            title: "The Boy Who Cried Wolf",
            gamesTitle: "GAMELAR RO'YXATI",
            textHtml: `<h3>The Boy Who Cried Wolf</h3><p>Matn shu yerda...</p>`,
            videoUrl: "https://www.youtube.com/embed/YEVO_Xw6wco",
            keywordsList: [
                { word: "Book", translation: "Kitob" },
                { word: "Pen", translation: "Ruchka" },
                { word: "Pencil", translation: "Qalam" },
                { word: "Cup", translation: "Chashka" },
                { word: "Wind", translation: "Shamol" }
            ],
            testUrl: "https://docs.google.com/forms/...",
            games: { matchup: "...", anagrama: "...", typeanswer: "...", wordsearch: "...", pair: "..." }
        },
        ru: {
            title: "Мальчик, который кричал: Волк!",
            gamesTitle: "СПИСОК ИГР",
            textHtml: `<h3>Мальчик, который...</h3><p>Текст здесь...</p>`,
            videoUrl: "https://www.youtube.com/embed/YEVO_Xw6wco",
            keywordsList: [
                { word: "Book", translation: "Книга" },
                { word: "Pen", translation: "Ручка" }
            ],
            testUrl: "https://docs.google.com/forms/...",
            games: { matchup: "...", anagrama: "...", typeanswer: "...", wordsearch: "...", pair: "..." }
        }
    }
};
