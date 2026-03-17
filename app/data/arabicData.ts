// ─── Arabic Alphabet ───────────────────────────────────────────────

export interface ArabicLetter {
  id: number;
  name: string;
  isolated: string;
  initial: string;
  medial: string;
  final: string;
  transliteration: string;
  pronunciation: string;
  exampleWord: string;
  exampleTranslation: string;
  exampleTransliteration: string;
}

export const arabicAlphabet: ArabicLetter[] = [
  { id: 1, name: "Alif", isolated: "ا", initial: "ا", medial: "ـا", final: "ـا", transliteration: "ā / a", pronunciation: "Like 'a' in 'father'", exampleWord: "أسد", exampleTranslation: "Lion", exampleTransliteration: "asad" },
  { id: 2, name: "Ba", isolated: "ب", initial: "بـ", medial: "ـبـ", final: "ـب", transliteration: "b", pronunciation: "Like 'b' in 'book'", exampleWord: "باب", exampleTranslation: "Door", exampleTransliteration: "bāb" },
  { id: 3, name: "Ta", isolated: "ت", initial: "تـ", medial: "ـتـ", final: "ـت", transliteration: "t", pronunciation: "Like 't' in 'table'", exampleWord: "تمر", exampleTranslation: "Dates (fruit)", exampleTransliteration: "tamr" },
  { id: 4, name: "Tha", isolated: "ث", initial: "ثـ", medial: "ـثـ", final: "ـث", transliteration: "th", pronunciation: "Like 'th' in 'think'", exampleWord: "ثلج", exampleTranslation: "Snow", exampleTransliteration: "thalj" },
  { id: 5, name: "Jim", isolated: "ج", initial: "جـ", medial: "ـجـ", final: "ـج", transliteration: "j", pronunciation: "Like 'j' in 'jump'", exampleWord: "جمل", exampleTranslation: "Camel", exampleTransliteration: "jamal" },
  { id: 6, name: "Ha", isolated: "ح", initial: "حـ", medial: "ـحـ", final: "ـح", transliteration: "ḥ", pronunciation: "A deep, breathy 'h' from the throat", exampleWord: "حب", exampleTranslation: "Love", exampleTransliteration: "ḥubb" },
  { id: 7, name: "Kha", isolated: "خ", initial: "خـ", medial: "ـخـ", final: "ـخ", transliteration: "kh", pronunciation: "Like 'ch' in Scottish 'loch'", exampleWord: "خبز", exampleTranslation: "Bread", exampleTransliteration: "khubz" },
  { id: 8, name: "Dal", isolated: "د", initial: "د", medial: "ـد", final: "ـد", transliteration: "d", pronunciation: "Like 'd' in 'dog'", exampleWord: "دار", exampleTranslation: "House", exampleTransliteration: "dār" },
  { id: 9, name: "Dhal", isolated: "ذ", initial: "ذ", medial: "ـذ", final: "ـذ", transliteration: "dh", pronunciation: "Like 'th' in 'this'", exampleWord: "ذهب", exampleTranslation: "Gold", exampleTransliteration: "dhahab" },
  { id: 10, name: "Ra", isolated: "ر", initial: "ر", medial: "ـر", final: "ـر", transliteration: "r", pronunciation: "Rolled 'r' like in Spanish", exampleWord: "رمل", exampleTranslation: "Sand", exampleTransliteration: "raml" },
  { id: 11, name: "Zay", isolated: "ز", initial: "ز", medial: "ـز", final: "ـز", transliteration: "z", pronunciation: "Like 'z' in 'zoo'", exampleWord: "زهر", exampleTranslation: "Flower", exampleTransliteration: "zahr" },
  { id: 12, name: "Sin", isolated: "س", initial: "سـ", medial: "ـسـ", final: "ـس", transliteration: "s", pronunciation: "Like 's' in 'sun'", exampleWord: "سمك", exampleTranslation: "Fish", exampleTransliteration: "samak" },
  { id: 13, name: "Shin", isolated: "ش", initial: "شـ", medial: "ـشـ", final: "ـش", transliteration: "sh", pronunciation: "Like 'sh' in 'shine'", exampleWord: "شمس", exampleTranslation: "Sun", exampleTransliteration: "shams" },
  { id: 14, name: "Sad", isolated: "ص", initial: "صـ", medial: "ـصـ", final: "ـص", transliteration: "ṣ", pronunciation: "Emphatic 's', tongue touches palate", exampleWord: "صبر", exampleTranslation: "Patience", exampleTransliteration: "ṣabr" },
  { id: 15, name: "Dad", isolated: "ض", initial: "ضـ", medial: "ـضـ", final: "ـض", transliteration: "ḍ", pronunciation: "Emphatic 'd', tongue touches palate", exampleWord: "ضوء", exampleTranslation: "Light", exampleTransliteration: "ḍawʾ" },
  { id: 16, name: "Tta", isolated: "ط", initial: "طـ", medial: "ـطـ", final: "ـط", transliteration: "ṭ", pronunciation: "Emphatic 't', heavier than regular 't'", exampleWord: "طير", exampleTranslation: "Bird", exampleTransliteration: "ṭayr" },
  { id: 17, name: "Thha", isolated: "ظ", initial: "ظـ", medial: "ـظـ", final: "ـظ", transliteration: "ẓ", pronunciation: "Emphatic 'th', like 'th' in 'the' but heavier", exampleWord: "ظل", exampleTranslation: "Shadow", exampleTransliteration: "ẓill" },
  { id: 18, name: "Ain", isolated: "ع", initial: "عـ", medial: "ـعـ", final: "ـع", transliteration: "ʿ", pronunciation: "A deep guttural sound from the throat", exampleWord: "عين", exampleTranslation: "Eye", exampleTransliteration: "ʿayn" },
  { id: 19, name: "Ghain", isolated: "غ", initial: "غـ", medial: "ـغـ", final: "ـغ", transliteration: "gh", pronunciation: "Like French 'r' in 'Paris'", exampleWord: "غابة", exampleTranslation: "Forest", exampleTransliteration: "ghāba" },
  { id: 20, name: "Fa", isolated: "ف", initial: "فـ", medial: "ـفـ", final: "ـف", transliteration: "f", pronunciation: "Like 'f' in 'fish'", exampleWord: "فيل", exampleTranslation: "Elephant", exampleTransliteration: "fīl" },
  { id: 21, name: "Qaf", isolated: "ق", initial: "قـ", medial: "ـقـ", final: "ـق", transliteration: "q", pronunciation: "Deep 'k' from the back of throat", exampleWord: "قمر", exampleTranslation: "Moon", exampleTransliteration: "qamar" },
  { id: 22, name: "Kaf", isolated: "ك", initial: "كـ", medial: "ـكـ", final: "ـك", transliteration: "k", pronunciation: "Like 'k' in 'kite'", exampleWord: "كتاب", exampleTranslation: "Book", exampleTransliteration: "kitāb" },
  { id: 23, name: "Lam", isolated: "ل", initial: "لـ", medial: "ـلـ", final: "ـل", transliteration: "l", pronunciation: "Like 'l' in 'light'", exampleWord: "ليل", exampleTranslation: "Night", exampleTransliteration: "layl" },
  { id: 24, name: "Mim", isolated: "م", initial: "مـ", medial: "ـمـ", final: "ـم", transliteration: "m", pronunciation: "Like 'm' in 'moon'", exampleWord: "ماء", exampleTranslation: "Water", exampleTransliteration: "māʾ" },
  { id: 25, name: "Nun", isolated: "ن", initial: "نـ", medial: "ـنـ", final: "ـن", transliteration: "n", pronunciation: "Like 'n' in 'noon'", exampleWord: "نجم", exampleTranslation: "Star", exampleTransliteration: "najm" },
  { id: 26, name: "Ha2", isolated: "ه", initial: "هـ", medial: "ـهـ", final: "ـه", transliteration: "h", pronunciation: "Like 'h' in 'hat'", exampleWord: "هواء", exampleTranslation: "Air", exampleTransliteration: "hawāʾ" },
  { id: 27, name: "Waw", isolated: "و", initial: "و", medial: "ـو", final: "ـو", transliteration: "w / ū", pronunciation: "Like 'w' in 'water' or 'oo' in 'moon'", exampleWord: "ورد", exampleTranslation: "Rose", exampleTransliteration: "ward" },
  { id: 28, name: "Ya", isolated: "ي", initial: "يـ", medial: "ـيـ", final: "ـي", transliteration: "y / ī", pronunciation: "Like 'y' in 'yes' or 'ee' in 'see'", exampleWord: "يد", exampleTranslation: "Hand", exampleTransliteration: "yad" },
];

// ─── Vocabulary ────────────────────────────────────────────────────

export interface VocabWord {
  arabic: string;
  english: string;
  transliteration: string;
  category: string;
}

export const vocabularyCategories = [
  "Greetings",
  "Numbers",
  "Colors",
  "Family",
  "Food",
  "Body",
  "Animals",
  "Common Phrases",
] as const;

export type VocabCategory = (typeof vocabularyCategories)[number];

export const vocabulary: VocabWord[] = [
  // Greetings
  { arabic: "السلام عليكم", english: "Peace be upon you", transliteration: "as-salāmu ʿalaykum", category: "Greetings" },
  { arabic: "مرحبا", english: "Hello", transliteration: "marḥabā", category: "Greetings" },
  { arabic: "صباح الخير", english: "Good morning", transliteration: "ṣabāḥ al-khayr", category: "Greetings" },
  { arabic: "مساء الخير", english: "Good evening", transliteration: "masāʾ al-khayr", category: "Greetings" },
  { arabic: "شكراً", english: "Thank you", transliteration: "shukran", category: "Greetings" },
  { arabic: "عفواً", english: "You're welcome", transliteration: "ʿafwan", category: "Greetings" },
  { arabic: "مع السلامة", english: "Goodbye", transliteration: "maʿa as-salāma", category: "Greetings" },
  { arabic: "أهلاً وسهلاً", english: "Welcome", transliteration: "ahlan wa sahlan", category: "Greetings" },

  // Numbers
  { arabic: "واحد", english: "One", transliteration: "wāḥid", category: "Numbers" },
  { arabic: "اثنان", english: "Two", transliteration: "ithnān", category: "Numbers" },
  { arabic: "ثلاثة", english: "Three", transliteration: "thalātha", category: "Numbers" },
  { arabic: "أربعة", english: "Four", transliteration: "arbaʿa", category: "Numbers" },
  { arabic: "خمسة", english: "Five", transliteration: "khamsa", category: "Numbers" },
  { arabic: "ستة", english: "Six", transliteration: "sitta", category: "Numbers" },
  { arabic: "سبعة", english: "Seven", transliteration: "sabʿa", category: "Numbers" },
  { arabic: "ثمانية", english: "Eight", transliteration: "thamāniya", category: "Numbers" },
  { arabic: "تسعة", english: "Nine", transliteration: "tisʿa", category: "Numbers" },
  { arabic: "عشرة", english: "Ten", transliteration: "ʿashara", category: "Numbers" },

  // Colors
  { arabic: "أحمر", english: "Red", transliteration: "aḥmar", category: "Colors" },
  { arabic: "أزرق", english: "Blue", transliteration: "azraq", category: "Colors" },
  { arabic: "أخضر", english: "Green", transliteration: "akhḍar", category: "Colors" },
  { arabic: "أصفر", english: "Yellow", transliteration: "aṣfar", category: "Colors" },
  { arabic: "أبيض", english: "White", transliteration: "abyaḍ", category: "Colors" },
  { arabic: "أسود", english: "Black", transliteration: "aswad", category: "Colors" },
  { arabic: "بنفسجي", english: "Purple", transliteration: "banafsajī", category: "Colors" },
  { arabic: "برتقالي", english: "Orange", transliteration: "burtuqālī", category: "Colors" },

  // Family
  { arabic: "أب", english: "Father", transliteration: "ab", category: "Family" },
  { arabic: "أم", english: "Mother", transliteration: "umm", category: "Family" },
  { arabic: "أخ", english: "Brother", transliteration: "akh", category: "Family" },
  { arabic: "أخت", english: "Sister", transliteration: "ukht", category: "Family" },
  { arabic: "ابن", english: "Son", transliteration: "ibn", category: "Family" },
  { arabic: "بنت", english: "Daughter", transliteration: "bint", category: "Family" },
  { arabic: "جد", english: "Grandfather", transliteration: "jadd", category: "Family" },
  { arabic: "جدة", english: "Grandmother", transliteration: "jadda", category: "Family" },

  // Food
  { arabic: "خبز", english: "Bread", transliteration: "khubz", category: "Food" },
  { arabic: "ماء", english: "Water", transliteration: "māʾ", category: "Food" },
  { arabic: "حليب", english: "Milk", transliteration: "ḥalīb", category: "Food" },
  { arabic: "أرز", english: "Rice", transliteration: "aruzz", category: "Food" },
  { arabic: "سمك", english: "Fish", transliteration: "samak", category: "Food" },
  { arabic: "دجاج", english: "Chicken", transliteration: "dajāj", category: "Food" },
  { arabic: "فاكهة", english: "Fruit", transliteration: "fākiha", category: "Food" },
  { arabic: "شاي", english: "Tea", transliteration: "shāy", category: "Food" },

  // Body
  { arabic: "رأس", english: "Head", transliteration: "raʾs", category: "Body" },
  { arabic: "عين", english: "Eye", transliteration: "ʿayn", category: "Body" },
  { arabic: "أنف", english: "Nose", transliteration: "anf", category: "Body" },
  { arabic: "فم", english: "Mouth", transliteration: "fam", category: "Body" },
  { arabic: "يد", english: "Hand", transliteration: "yad", category: "Body" },
  { arabic: "قدم", english: "Foot", transliteration: "qadam", category: "Body" },
  { arabic: "قلب", english: "Heart", transliteration: "qalb", category: "Body" },

  // Animals
  { arabic: "قط", english: "Cat", transliteration: "qiṭṭ", category: "Animals" },
  { arabic: "كلب", english: "Dog", transliteration: "kalb", category: "Animals" },
  { arabic: "حصان", english: "Horse", transliteration: "ḥiṣān", category: "Animals" },
  { arabic: "جمل", english: "Camel", transliteration: "jamal", category: "Animals" },
  { arabic: "طير", english: "Bird", transliteration: "ṭayr", category: "Animals" },
  { arabic: "أسد", english: "Lion", transliteration: "asad", category: "Animals" },
  { arabic: "فيل", english: "Elephant", transliteration: "fīl", category: "Animals" },

  // Common Phrases
  { arabic: "كيف حالك؟", english: "How are you?", transliteration: "kayfa ḥāluka?", category: "Common Phrases" },
  { arabic: "أنا بخير", english: "I am fine", transliteration: "anā bikhayr", category: "Common Phrases" },
  { arabic: "ما اسمك؟", english: "What is your name?", transliteration: "mā ismuka?", category: "Common Phrases" },
  { arabic: "اسمي...", english: "My name is...", transliteration: "ismī...", category: "Common Phrases" },
  { arabic: "من فضلك", english: "Please", transliteration: "min faḍlak", category: "Common Phrases" },
  { arabic: "نعم", english: "Yes", transliteration: "naʿam", category: "Common Phrases" },
  { arabic: "لا", english: "No", transliteration: "lā", category: "Common Phrases" },
  { arabic: "إن شاء الله", english: "God willing", transliteration: "in shāʾ allāh", category: "Common Phrases" },
];

// ─── Lessons ───────────────────────────────────────────────────────

export interface LessonSection {
  title: string;
  content: string;
  arabicExamples?: { arabic: string; english: string; transliteration: string }[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // index into options
}

export interface Lesson {
  id: number;
  title: string;
  description: string;
  icon: string;
  sections: LessonSection[];
  quiz: QuizQuestion[];
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Introduction to Arabic",
    description: "Learn about the Arabic language, its script, and why it's one of the most spoken languages in the world.",
    icon: "🌍",
    sections: [
      {
        title: "Why Learn Arabic?",
        content: "Arabic is spoken by over 400 million people worldwide. It is the official language of 25 countries and one of the six official languages of the United Nations. Arabic is also the liturgical language of Islam, making it significant to over 1.8 billion Muslims worldwide.",
      },
      {
        title: "How Arabic Works",
        content: "Arabic is written from right to left. The script is cursive — letters connect to each other within a word. There are 28 letters in the Arabic alphabet, and most letters have four forms depending on their position in a word: isolated, initial, medial, and final.",
      },
      {
        title: "Key Features",
        content: "Arabic has a root-based system where most words are derived from three-letter roots. For example, the root ك-ت-ب (k-t-b) relates to writing: كتاب (kitāb — book), كاتب (kātib — writer), مكتبة (maktaba — library).",
        arabicExamples: [
          { arabic: "كتاب", english: "Book", transliteration: "kitāb" },
          { arabic: "كاتب", english: "Writer", transliteration: "kātib" },
          { arabic: "مكتبة", english: "Library", transliteration: "maktaba" },
        ],
      },
    ],
    quiz: [
      { question: "How many letters are in the Arabic alphabet?", options: ["22", "26", "28", "30"], correctAnswer: 2 },
      { question: "In which direction is Arabic written?", options: ["Left to right", "Right to left", "Top to bottom", "Bottom to top"], correctAnswer: 1 },
      { question: "How many countries have Arabic as an official language?", options: ["10", "18", "25", "30"], correctAnswer: 2 },
    ],
  },
  {
    id: 2,
    title: "Letters Group 1: Alif to Kha",
    description: "Master the first seven letters of the Arabic alphabet — their shapes, sounds, and how they connect.",
    icon: "✏️",
    sections: [
      {
        title: "Alif (ا)",
        content: "Alif is the first letter and represents a glottal stop or a long 'a' vowel. It does not connect to the letter after it. Think of it as a vertical line.",
        arabicExamples: [{ arabic: "أسد", english: "Lion", transliteration: "asad" }],
      },
      {
        title: "Ba, Ta, Tha (ب ت ث)",
        content: "These three letters share the same basic shape — a horizontal boat-like curve. They differ only in the number and position of dots: Ba has one dot below, Ta has two dots above, and Tha has three dots above.",
        arabicExamples: [
          { arabic: "باب", english: "Door", transliteration: "bāb" },
          { arabic: "تمر", english: "Dates", transliteration: "tamr" },
          { arabic: "ثلج", english: "Snow", transliteration: "thalj" },
        ],
      },
      {
        title: "Jim, Ha, Kha (ج ح خ)",
        content: "These three letters also share a similar shape — a curved body with a tail. Jim has one dot inside, Ha has no dots, and Kha has one dot above.",
        arabicExamples: [
          { arabic: "جمل", english: "Camel", transliteration: "jamal" },
          { arabic: "حب", english: "Love", transliteration: "ḥubb" },
          { arabic: "خبز", english: "Bread", transliteration: "khubz" },
        ],
      },
    ],
    quiz: [
      { question: "Which letter has one dot below?", options: ["ت", "ب", "ث", "ج"], correctAnswer: 1 },
      { question: "How many dots does Tha (ث) have?", options: ["1", "2", "3", "0"], correctAnswer: 2 },
      { question: "Which letter does NOT connect to the next letter?", options: ["ب", "ج", "ا", "ت"], correctAnswer: 2 },
    ],
  },
  {
    id: 3,
    title: "Letters Group 2: Dal to Fa",
    description: "Continue your alphabet journey with letters Dal through Fa, covering 13 more letters.",
    icon: "📝",
    sections: [
      {
        title: "Dal and Dhal (د ذ)",
        content: "Dal and Dhal share the same shape. Dal has no dot, Dhal has one dot above. These are non-connecting letters — they don't connect to the letter that follows them.",
        arabicExamples: [
          { arabic: "دار", english: "House", transliteration: "dār" },
          { arabic: "ذهب", english: "Gold", transliteration: "dhahab" },
        ],
      },
      {
        title: "Ra and Zay (ر ز)",
        content: "Ra and Zay look like small hooks below the line. Ra has no dot, Zay has one dot above. Both are non-connecting letters.",
        arabicExamples: [
          { arabic: "رمل", english: "Sand", transliteration: "raml" },
          { arabic: "زهر", english: "Flower", transliteration: "zahr" },
        ],
      },
      {
        title: "Sin, Shin, Sad, Dad (س ش ص ض)",
        content: "Sin and Shin have teeth-like zigzags. Sin has no dots; Shin has three dots above. Sad and Dad are emphatic versions — broader and rounder. Sad has no dots; Dad has one dot above.",
        arabicExamples: [
          { arabic: "شمس", english: "Sun", transliteration: "shams" },
          { arabic: "صبر", english: "Patience", transliteration: "ṣabr" },
        ],
      },
      {
        title: "Tta, Thha, Ain, Ghain, Fa (ط ظ ع غ ف)",
        content: "Tta and Thha are emphatic letters with a loop. Ain and Ghain have a distinctive eye-like shape. Fa looks like a small loop with a dot above.",
        arabicExamples: [
          { arabic: "عين", english: "Eye", transliteration: "ʿayn" },
          { arabic: "فيل", english: "Elephant", transliteration: "fīl" },
        ],
      },
    ],
    quiz: [
      { question: "Which of these letters does NOT connect to the next letter?", options: ["س", "ف", "ر", "ع"], correctAnswer: 2 },
      { question: "What is the emphatic version of 'Sin'?", options: ["ش", "ص", "ض", "ث"], correctAnswer: 1 },
      { question: "What does شمس mean?", options: ["Moon", "Star", "Sun", "Sky"], correctAnswer: 2 },
    ],
  },
  {
    id: 4,
    title: "Letters Group 3: Qaf to Ya",
    description: "Complete the Arabic alphabet with the final seven letters.",
    icon: "🎓",
    sections: [
      {
        title: "Qaf and Kaf (ق ك)",
        content: "Qaf is a deep guttural 'k' sound. Kaf is a regular 'k'. Their shapes are distinct but both connect to adjacent letters.",
        arabicExamples: [
          { arabic: "قمر", english: "Moon", transliteration: "qamar" },
          { arabic: "كتاب", english: "Book", transliteration: "kitāb" },
        ],
      },
      {
        title: "Lam, Mim, Nun (ل م ن)",
        content: "Lam is a tall stroke that curves. Mim has a round loop. Nun looks like a bowl with a dot above. All three connect to adjacent letters.",
        arabicExamples: [
          { arabic: "ليل", english: "Night", transliteration: "layl" },
          { arabic: "ماء", english: "Water", transliteration: "māʾ" },
          { arabic: "نجم", english: "Star", transliteration: "najm" },
        ],
      },
      {
        title: "Ha, Waw, Ya (ه و ي)",
        content: "Ha has a complex shape that changes significantly in different positions. Waw is a non-connecting letter shaped like a hook. Ya has dots below and connects to adjacent letters.",
        arabicExamples: [
          { arabic: "هواء", english: "Air", transliteration: "hawāʾ" },
          { arabic: "ورد", english: "Rose", transliteration: "ward" },
          { arabic: "يد", english: "Hand", transliteration: "yad" },
        ],
      },
    ],
    quiz: [
      { question: "What does قمر mean?", options: ["Sun", "Star", "Moon", "Sky"], correctAnswer: 2 },
      { question: "Which letter looks like a bowl with a dot?", options: ["م", "ن", "ل", "و"], correctAnswer: 1 },
      { question: "Which of these is a non-connecting letter?", options: ["ي", "ن", "و", "ك"], correctAnswer: 2 },
    ],
  },
  {
    id: 5,
    title: "Essential Vocabulary",
    description: "Learn your first set of Arabic words — greetings, numbers, colors, and common phrases you'll use every day.",
    icon: "💬",
    sections: [
      {
        title: "Greetings & Courtesies",
        content: "Knowing how to greet people is the foundation of any language. Arabic greetings often carry deep cultural and religious significance.",
        arabicExamples: [
          { arabic: "السلام عليكم", english: "Peace be upon you", transliteration: "as-salāmu ʿalaykum" },
          { arabic: "مرحبا", english: "Hello", transliteration: "marḥabā" },
          { arabic: "شكراً", english: "Thank you", transliteration: "shukran" },
          { arabic: "من فضلك", english: "Please", transliteration: "min faḍlak" },
        ],
      },
      {
        title: "Numbers 1–10",
        content: "Arabic numerals (١ ٢ ٣) are actually used alongside Western numerals in the Arab world. Let's learn to count in Arabic.",
        arabicExamples: [
          { arabic: "واحد", english: "One", transliteration: "wāḥid" },
          { arabic: "اثنان", english: "Two", transliteration: "ithnān" },
          { arabic: "ثلاثة", english: "Three", transliteration: "thalātha" },
          { arabic: "عشرة", english: "Ten", transliteration: "ʿashara" },
        ],
      },
      {
        title: "Colors",
        content: "Colors in Arabic follow a special pattern. Most masculine color adjectives follow the pattern أفعل (afʿal).",
        arabicExamples: [
          { arabic: "أحمر", english: "Red", transliteration: "aḥmar" },
          { arabic: "أزرق", english: "Blue", transliteration: "azraq" },
          { arabic: "أخضر", english: "Green", transliteration: "akhḍar" },
          { arabic: "أصفر", english: "Yellow", transliteration: "aṣfar" },
        ],
      },
    ],
    quiz: [
      { question: "What does 'شكراً' mean?", options: ["Hello", "Goodbye", "Thank you", "Please"], correctAnswer: 2 },
      { question: "How do you say 'Five' in Arabic?", options: ["ثلاثة", "خمسة", "سبعة", "عشرة"], correctAnswer: 1 },
      { question: "What color is 'أخضر'?", options: ["Red", "Blue", "Yellow", "Green"], correctAnswer: 3 },
    ],
  },
  {
    id: 6,
    title: "Basic Conversations",
    description: "Put it all together! Learn to introduce yourself, ask questions, and have simple conversations in Arabic.",
    icon: "🗣️",
    sections: [
      {
        title: "Introducing Yourself",
        content: "Being able to introduce yourself is essential. Here's how to share your name and ask someone else's.",
        arabicExamples: [
          { arabic: "ما اسمك؟", english: "What is your name?", transliteration: "mā ismuka?" },
          { arabic: "اسمي...", english: "My name is...", transliteration: "ismī..." },
          { arabic: "أنا من...", english: "I am from...", transliteration: "anā min..." },
          { arabic: "تشرفنا", english: "Nice to meet you", transliteration: "tasharrafnā" },
        ],
      },
      {
        title: "Asking How Someone Is",
        content: "This is one of the most common exchanges in Arabic. The response differs slightly for males and females.",
        arabicExamples: [
          { arabic: "كيف حالك؟", english: "How are you?", transliteration: "kayfa ḥāluka?" },
          { arabic: "أنا بخير", english: "I am fine", transliteration: "anā bikhayr" },
          { arabic: "الحمد لله", english: "Praise be to God (I'm fine)", transliteration: "al-ḥamdu lillāh" },
        ],
      },
      {
        title: "Useful Daily Phrases",
        content: "These phrases will help you navigate daily interactions with Arabic speakers.",
        arabicExamples: [
          { arabic: "أين...؟", english: "Where is...?", transliteration: "ayna...?" },
          { arabic: "كم الثمن؟", english: "How much is it?", transliteration: "kam ath-thaman?" },
          { arabic: "لا أفهم", english: "I don't understand", transliteration: "lā afham" },
          { arabic: "أتكلم قليلاً", english: "I speak a little", transliteration: "atakallamu qalīlan" },
        ],
      },
    ],
    quiz: [
      { question: "How do you ask 'What is your name?' in Arabic?", options: ["كيف حالك؟", "ما اسمك؟", "أين أنت؟", "كم الثمن؟"], correctAnswer: 1 },
      { question: "What does 'الحمد لله' literally mean?", options: ["I am fine", "Praise be to God", "God willing", "Thank you"], correctAnswer: 1 },
      { question: "How do you say 'I don't understand' in Arabic?", options: ["أنا بخير", "من فضلك", "لا أفهم", "شكراً"], correctAnswer: 2 },
    ],
  },
];
