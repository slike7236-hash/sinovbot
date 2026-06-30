// Barcha kitoblar va darslar ma'lumotlar bazasi
const lessonsDatabase = {
   // 1-kitob, 2-dars
    "ess1_2": {
        uz: {
            title: "The Boy Who Cried Wolf",
            gamesTitle: "GAMELAR RO'YXATI",
            // ✅ TO'G'RILANDI: HTML matni baxtiyor tirnoq ichiga olindi
            textHtml: <h3>The Boy Who Cried Wolf</h3><p>Matn shu yerda...</p>,
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
            textHtml: <h3>Мальчик, который...</h3><p>Текст здесь...</p>,
            videoUrl: "https://www.youtube.com/embed/YEVO_Xw6wco",
            keywordsList: [
                { word: "Book", translation: "Книга" },
                { word: "Pen", translation: "Ручка" }
            ],
            testUrl: "https://docs.google.com/forms/...",
            games: { matchup: "...", anagrama: "...", typeanswer: "...", wordsearch: "...", pair: "..." }
        }
    }, // ✅ TO'G'RILANDI: Keyingi darsdan oldin VERGUL qo'yildi

    // 1-kitob, 3-dars
    "ess1_3": {
        uz: {
            title: "Muhsina qizim haqida",
            gamesTitle: "GAMELAR RO'YXATI",
            // ✅ TO'G'RILANDI: HTML matni baxtiyor tirnoq ichiga olindi
            textHtml: <h3>Qizim 2023-yil tugilgan</h3><p>Otasi haqida...</p>,
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
            textHtml: <h3>Мальчик, который...</h3><p>Текст здесь...</p>,
            videoUrl: "https://www.youtube.com/embed/YEVO_Xw6wco",
            keywordsList: [
                { word: "Book", translation: "Книга" },
                { word: "Pen", translation: "Ручка" }
            ],
            testUrl: "https://docs.google.com/forms/...",
            games: { matchup: "...", anagrama: "...", typeanswer: "...", wordsearch: "...", pair: "..." }
        } 
    } // ⚠️ Agar darslar davom etsa, bu yerga ham VERGUL ( , ) qo'yib ketasiz.
