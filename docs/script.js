const state = {
  name: "",
  suffix: "ちゃん",
  eventText: "",
  emotion: null,
  detail: null,
};

const APP_VERSION = "v0.6.6";
const APP_VERSION_DATE = "2026-07-12";

window.EmoCompassVersion = APP_VERSION;

const companions = {
  bird: "ぴー",
  seal: "ごまじろう",
};

const emotionGroups = [
  "つよい きもち",
  "しずかな きもち",
  "あたたかい きもち",
  "ひらいていく きもち",
];

const negativeDetails = [
  {
    id: "understood",
    label: "ほんとうは わかってほしかった",
    mark: "こえ",
    wish: "わかってほしかった きもち",
    storyType: "A",
    compass: "つよい きもちの おくに、みつけてほしい こえが かくれている日もあります。",
  },
  {
    id: "cherished",
    label: "たいせつにしてほしかった",
    mark: "て",
    wish: "たいせつにしてほしかった きもち",
    storyType: "F",
    compass: "たいせつにしてほしい きもちは、心の中の たからものを まもる 力です。",
  },
  {
    id: "not-alone",
    label: "ひとりにしないでほしかった",
    mark: "となり",
    wish: "ひとりにしないでほしかった きもち",
    storyType: "B",
    compass: "さみしい きもちは、つながりを たいせつにしている しるしです。",
  },
  {
    id: "cant-say",
    label: "うまく言えなかった",
    mark: "ことば",
    wish: "ことばに なりきらなかった きもち",
    storyType: "A",
    compass: "うまく言えない日も、心は ちゃんと なにかを 感じています。",
  },
  {
    id: "no-fail",
    label: "しっぱいしたくなかった",
    mark: "みち",
    wish: "だいじに すすみたかった きもち",
    storyType: "A",
    compass: "ふあんは、ちゃんと すすみたい きもちの そばに ともる 小さな あかりです。",
  },
  {
    id: "too-hard",
    label: "がんばりすぎていた",
    mark: "にもつ",
    wish: "たくさん がんばってきた きもち",
    storyType: "D",
    compass: "きょうは、少しだけ じぶんの みかたを してみよう。",
  },
  {
    id: "help",
    label: "ほんとうは たすけてほしかった",
    mark: "ひ",
    wish: "たすけてほしかった きもち",
    storyType: "A",
    compass: "たすけてほしいと 思えることも、じぶんを まもる たいせつな 力です。",
  },
  {
    id: "seen",
    label: "ちゃんと みてほしかった",
    mark: "め",
    wish: "ちゃんと みてほしかった きもち",
    storyType: "B",
    compass: "みてほしい きもちは、ここにいるよという 心の しるしです。",
  },
  {
    id: "compare",
    label: "くらべられたくなかった",
    mark: "は",
    wish: "じぶんのままで いたかった きもち",
    storyType: "G",
    compass: "じぶんの ほはばには、じぶんの 時間があります。",
  },
  {
    id: "rest",
    label: "やすみたかった",
    mark: "やすむ",
    wish: "やすみたかった きもち",
    storyType: "D",
    compass: "やすみたい きもちは、もう一度 いきをするための あいずです。",
  },
  {
    id: "no",
    label: "いやだと いいたかった",
    mark: "いや",
    wish: "じぶんを まもりたかった きもち",
    storyType: "G",
    compass: "いやだと 言いたい きもちも、ここにいていい。",
  },
  {
    id: "unknown",
    label: "じぶんでも どうしたらいいか わからなかった",
    mark: "くも",
    wish: "こたえが まだ みつからない きもち",
    storyType: "A",
    compass: "わからない きもちは、まだ かたちを さがしている とちゅうです。",
  },
];

const positiveDetails = [
  {
    id: "share",
    label: "だれかと わかちあいたかった",
    mark: "わける",
    wish: "わかちあいたかった きもち",
    storyType: "C",
    compass: "うれしい きもちは、だれかと わけても 小さくならない あかりです。",
  },
  {
    id: "remember",
    label: "できたことを おぼえておきたかった",
    mark: "たから",
    wish: "おぼえておきたかった きもち",
    storyType: "C",
    compass: "できたことを、きょうは ちゃんと おぼえておこう。",
  },
  {
    id: "more",
    label: "もっとやってみたかった",
    mark: "つぎ",
    wish: "つぎへ すすんでみたい きもち",
    storyType: "C",
    compass: "たのしい きもちは、つぎの 一歩を てらす 小さな 地図です。",
  },
  {
    id: "love",
    label: "たいせつな きもちを つたえたかった",
    mark: "すき",
    wish: "すきと たいせつを つたえたい きもち",
    storyType: "F",
    compass: "すきと 思えた きもちも、たいせつに しまっていい たからものです。",
  },
  {
    id: "safe-place",
    label: "あんしんできる 場所があった",
    mark: "いえ",
    wish: "あんしんできる 場所を 感じた きもち",
    storyType: "B",
    compass: "あんしんは、心が ここにいていいと 感じたときに ともります。",
  },
  {
    id: "thanks",
    label: "だれかに ありがとうと 言いたかった",
    mark: "れい",
    wish: "ありがとうを とどけたかった きもち",
    storyType: "C",
    compass: "ありがとうと 思えた きもちも、心の中の たいせつな たからものです。",
  },
  {
    id: "self-like",
    label: "じぶんを 少し すきになれた",
    mark: "わたし",
    wish: "じぶんを 少し すきになれた きもち",
    storyType: "C",
    compass: "じぶんを 少し すきになれた日は、心の まどが 少し ひらく日です。",
  },
  {
    id: "notice",
    label: "たいせつなものに きづいた",
    mark: "きづく",
    wish: "たいせつなものに きづいた きもち",
    storyType: "F",
    compass: "たいせつにしたい きもちは、心が えらんだ 小さな 星です。",
  },
  {
    id: "continue",
    label: "これからも つづけてみたいと 思った",
    mark: "つづく",
    wish: "つづけてみたい きもち",
    storyType: "C",
    compass: "つづけてみたい きもちは、あしたへ 向かう やさしい 風です。",
  },
  {
    id: "worked",
    label: "うまくいったことがうれしかった",
    mark: "まる",
    wish: "うまくいったことを よろこぶ きもち",
    storyType: "C",
    compass: "うまくいったことは、小さくても ちゃんと よろこんでいい。",
  },
  {
    id: "opened",
    label: "心が ひらいた 感じがした",
    mark: "ひらく",
    wish: "心が ひらいた きもち",
    storyType: "C",
    compass: "心が ひらいた 感じは、世界に てを のばした しるしです。",
  },
  {
    id: "not-forget",
    label: "いまの きもちを わすれたくなかった",
    mark: "おぼえる",
    wish: "わすれたくなかった きもち",
    storyType: "C",
    compass: "わすれたくない きもちは、心が たいせつにしたい おぼえです。",
  },
];

const emotions = [
  {
    id: "angry",
    label: "おこっている",
    type: "negative",
    group: "つよい きもち",
    mark: "火",
    color: "#f3c7c6",
    storyType: "A",
  },
  {
    id: "irritated",
    label: "いらいらする",
    type: "negative",
    group: "つよい きもち",
    mark: "火",
    color: "#f3c7c6",
    storyType: "A",
  },
  {
    id: "frustrated",
    label: "くやしい",
    type: "negative",
    group: "つよい きもち",
    mark: "石",
    color: "#f3c7c6",
    storyType: "F",
  },
  {
    id: "scared",
    label: "こわい",
    type: "negative",
    group: "つよい きもち",
    mark: "影",
    color: "#c7bfdc",
    storyType: "B",
  },
  {
    id: "cant-anymore",
    label: "もうがんばれない",
    type: "negative",
    group: "つよい きもち",
    mark: "やすむ",
    color: "#f4c98f",
    storyType: "D",
  },
  {
    id: "sad",
    label: "かなしい",
    type: "negative",
    group: "しずかな きもち",
    mark: "雨",
    color: "#b7d6df",
    storyType: "B",
  },
  {
    id: "lonely",
    label: "さみしい",
    type: "negative",
    group: "しずかな きもち",
    mark: "月",
    color: "#b7d6df",
    storyType: "B",
  },
  {
    id: "anxious",
    label: "ふあん",
    type: "negative",
    group: "しずかな きもち",
    mark: "なみ",
    color: "#c7bfdc",
    storyType: "A",
  },
  {
    id: "tired",
    label: "つかれた",
    type: "negative",
    group: "しずかな きもち",
    mark: "ひ",
    color: "#f4c98f",
    storyType: "D",
  },
  {
    id: "moyamoya",
    label: "もやもやする",
    type: "negative",
    group: "しずかな きもち",
    mark: "くも",
    color: "#d7eadf",
    storyType: "G",
  },
  {
    id: "hidden-sad",
    label: "かなしいけれど言えない",
    type: "negative",
    group: "しずかな きもち",
    mark: "箱",
    color: "#b7d6df",
    storyType: "B",
  },
  {
    id: "alone",
    label: "ひとりぼっち",
    type: "negative",
    group: "しずかな きもち",
    mark: "星",
    color: "#b7d6df",
    storyType: "B",
  },
  {
    id: "happy",
    label: "うれしい",
    type: "positive",
    group: "あたたかい きもち",
    mark: "ひかり",
    color: "#f4c98f",
    storyType: "C",
  },
  {
    id: "relieved",
    label: "あんしんしている",
    type: "positive",
    group: "あたたかい きもち",
    mark: "いえ",
    color: "#d7eadf",
    storyType: "B",
  },
  {
    id: "hottoshiteiru",
    label: "ほっとしている",
    type: "positive",
    group: "あたたかい きもち",
    mark: "ゆ",
    color: "#d7eadf",
    storyType: "B",
  },
  {
    id: "like",
    label: "すき",
    type: "positive",
    group: "あたたかい きもち",
    mark: "すき",
    color: "#f3c7c6",
    storyType: "F",
  },
  {
    id: "thanks",
    label: "ありがとうと 思っている",
    type: "positive",
    group: "あたたかい きもち",
    mark: "れい",
    color: "#f4c98f",
    storyType: "C",
  },
  {
    id: "warm",
    label: "心が あたたかい",
    type: "positive",
    group: "あたたかい きもち",
    mark: "あたたか",
    color: "#f4c98f",
    storyType: "C",
  },
  {
    id: "fun",
    label: "たのしい",
    type: "positive",
    group: "ひらいていく きもち",
    mark: "おと",
    color: "#f4c98f",
    storyType: "C",
  },
  {
    id: "excited",
    label: "わくわくする",
    type: "positive",
    group: "ひらいていく きもち",
    mark: "ふね",
    color: "#c7bfdc",
    storyType: "C",
  },
  {
    id: "proud",
    label: "ほこらしい",
    type: "positive",
    group: "ひらいていく きもち",
    mark: "はた",
    color: "#d7eadf",
    storyType: "C",
  },
  {
    id: "try",
    label: "やってみたい",
    type: "positive",
    group: "ひらいていく きもち",
    mark: "め",
    color: "#d7eadf",
    storyType: "C",
  },
  {
    id: "done",
    label: "できた",
    type: "positive",
    group: "ひらいていく きもち",
    mark: "まる",
    color: "#f4c98f",
    storyType: "C",
  },
  {
    id: "cherish",
    label: "たいせつにしたい",
    type: "positive",
    group: "ひらいていく きもち",
    mark: "たから",
    color: "#f3c7c6",
    storyType: "F",
  },
];

const storyBackdrops = {
  home: {
    className: "room",
    background: "linear-gradient(#f5e4c9 0 68%, #d9b99d 68% 100%)",
    place: "おうちの 小さな へや",
    texture: "まどのそばに、夕方のひかりがしずかにのびていました。",
  },
  morning: {
    className: "cloud",
    background: "linear-gradient(#cbdff1 0 70%, #efe7f6 70% 100%)",
    place: "朝の げんかん",
    texture: "くつの そばに、朝の 光が うすく たまっていました。",
  },
  rain: {
    className: "sea",
    background: "linear-gradient(#34435f 0 58%, #557f96 58% 100%)",
    place: "雨あがりの 道",
    texture: "水たまりが、空の 色を 小さく うつしていました。",
  },
  table: {
    className: "room",
    background: "linear-gradient(#f5e4c9 0 68%, #d9b99d 68% 100%)",
    place: "おやつの テーブル",
    texture: "テーブルの上で、カップの かげが ゆっくり まるく なっていました。",
  },
  school: {
    className: "forest",
    background: "linear-gradient(#cfe6e2 0 52%, #8fae9a 52% 100%)",
    place: "学校の すみっこ",
    texture: "ろうかの 音が、遠くで とん、とん、と ひびいていました。",
  },
  work: {
    className: "forest",
    background: "linear-gradient(#cfe6e2 0 52%, #8fae9a 52% 100%)",
    place: "机の まえ",
    texture: "えんぴつの 先が、紙の上で 小さく こすれる 音を たてました。",
  },
};

const priorityBackdropMap = {
  "angry::understood": "home",
  "sad::not-alone": "morning",
  "tired::rest": "home",
  "happy::share": "rain",
  "proud::remember": "work",
  "like::love": "table",
  "moyamoya::no": "table",
  "lonely::seen": "school",
};

const storyTypeData = {
  A: {
    name: "おくの きもちに きづく",
    title: (name, emotion) => `${emotion.label}日の ${name}`,
    compass: "つよい きもちも、心の おくからの だいじな しらせかもしれません。",
  },
  B: {
    name: "小さな ひかりを みつける",
    title: (name, emotion) => `${name}と ${emotion.label}日の ひかり`,
    compass: "きもちが しずかに 重い日にも、小さな ひかりは どこかで まっています。",
  },
  C: {
    name: "よろこびが ひろがる",
    title: (name, emotion) => `${name}が 見つけた ${emotion.label}`,
    compass: "あたたかい きもちは、しまっても、わけても、心の中で ひかります。",
  },
  D: {
    name: "からだと 心の こえを えらぶ",
    title: (name) => `やすむ こえを 聞いた ${name}`,
    compass: "やすむことは、がんばった みちを なかったことに しません。",
  },
  E: {
    name: "行いの おくの 力を 見つける",
    title: (name) => `${name}の すきの たび`,
    compass: "すきの おくには、えらぶ 力や 見つける 力が 育っていることがあります。",
  },
  F: {
    name: "さかいめと 愛",
    title: (name) => `${name}の たいせつな きもち`,
    compass: "思いどおりに ならない日も、たいせつな 関係は すぐに こわれません。",
  },
  G: {
    name: "やさしさと じぶんの こえ",
    title: (name) => `${name}の 小さな これがいい`,
    compass: "やさしさの中に、じぶんの こえを ひとつ 足してもいいのです。",
  },
  H: {
    name: "願いを べつの 言葉にする",
    title: (name) => `${name}の 見てほしい こえ`,
    compass: "見てほしい きもちは、だれかと つながりたい こえでもあります。",
  },
  I: {
    name: "すきに ならなくても 伝えられる",
    title: (name) => `${name}の すきじゃない日`,
    compass: "すきじゃない きもちも、そのまま 聞いてもらっていい日があります。",
  },
};

const screens = [...document.querySelectorAll(".screen")];
const heroNameInput = document.querySelector("#hero-name");
const namePreview = document.querySelector("#name-preview");
const eventTextInput = document.querySelector("#event-text");
const versionBadge = document.querySelector("[data-version-badge]");
const emotionList = document.querySelector("#emotion-list");
const detailList = document.querySelector("#detail-list");
const createStoryButton = document.querySelector("[data-create-story]");
const detailTitle = document.querySelector("#detail-title");
const storyTitle = document.querySelector("#story-title");
const storyText = document.querySelector("#story-text");
const storyIllustration = document.querySelector("#story-illustration");
const perspectiveBox = document.querySelector("#perspective-box");
const compassBox = document.querySelector("#compass-box");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[char];
  });
}

function getSelectedSuffix() {
  return document.querySelector('input[name="suffix"]:checked')?.value ?? "";
}

function getDisplayName() {
  const baseName = state.name.trim() || "しゅじんこう";
  return state.name.trim() ? `${baseName}${state.suffix}` : baseName;
}

function updateNamePreview() {
  const enteredName = heroNameInput.value.trim();
  const suffix = getSelectedSuffix();
  const previewName = enteredName ? `${enteredName}${suffix}` : "しゅじんこう";
  namePreview.textContent = `${previewName}として ものがたりに 出てきます`;
}

function renderAppVersion() {
  if (!versionBadge) return;
  versionBadge.textContent = `version ${APP_VERSION} / ${APP_VERSION_DATE}`;
}

function normalizeEventText(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim();
}

function getEventText() {
  return normalizeEventText(eventTextInput?.value);
}

function detectEventActor(text) {
  const actorRules = [
    { label: "ママ", patterns: ["ママ", "お母さん", "母"] },
    { label: "パパ", patterns: ["パパ", "お父さん", "父"] },
    { label: "先生", patterns: ["先生", "せんせい"] },
    { label: "おともだち", patterns: ["おともだち", "お友だち", "友だち", "友達"] },
    { label: "おねえちゃん", patterns: ["おねえちゃん", "お姉ちゃん", "姉"] },
    { label: "おにいちゃん", patterns: ["おにいちゃん", "お兄ちゃん", "兄"] },
    { label: "いもうと", patterns: ["いもうと", "妹"] },
    { label: "おとうと", patterns: ["おとうと", "弟"] },
  ];

  return actorRules.find((rule) => rule.patterns.some((pattern) => text.includes(pattern)))?.label || "";
}

function makeEventScene(name, eventText) {
  const text = normalizeEventText(eventText);
  if (!text) return null;

  const actor = detectEventActor(text);

  if (text.includes("つみき") || text.includes("積み木")) {
    return {
      kind: "blocks",
      actor,
      wanted: "あとひとつでできるところを見てほしかった",
      opening: [
        `${name}は、夕方、つみきで小さなおうちを作っていました。`,
        `あとひとつ屋根をのせたら、できあがりです。`,
        actor
          ? `そのとき、${actor}が「そろそろかたづけようね」と言いました。`
          : `そのとき、「そろそろかたづけようね」と声がしました。`,
      ],
    };
  }

  if (text.includes("話") && (text.includes("聞") || text.includes("きい"))) {
    return {
      kind: "talk",
      actor,
      wanted: "話をさいごまで聞いてほしかった",
      opening: [
        actor
          ? `${name}は、${actor}に、きょうあったことを話していました。`
          : `${name}は、きょうあったことを話そうとしていました。`,
        actor
          ? `でも、${actor}は別の話をはじめてしまいました。`
          : `でも、話はさいごまで届かないままになりました。`,
      ],
    };
  }

  if ((text.includes("おもちゃ") || text.includes("玩具")) && (text.includes("とら") || text.includes("取ら"))) {
    return {
      kind: "toy",
      actor,
      wanted: "使っていたことを見てほしかった",
      opening: [
        `${name}は、おうちでおもちゃを使っていました。`,
        actor
          ? `すると、${actor}がそのおもちゃを持っていってしまいました。`
          : `すると、そのおもちゃが別のところへ行ってしまいました。`,
      ],
    };
  }

  if (text.includes("できな") || text.includes("くやし")) {
    return {
      kind: "could-not",
      actor,
      wanted: "がんばっていたところを見てほしかった",
      opening: [
        `${name}は、できるようになりたくて、もう一度やってみました。`,
        `でも、その日は思ったようにうまくいきませんでした。`,
      ],
    };
  }

  if (text.includes("うれし") || text.includes("楽しか") || text.includes("たのし")) {
    return {
      kind: "warm",
      actor,
      wanted: "この気もちをいっしょに見てほしかった",
      opening: [
        `${name}には、きょう、心に残ることがありました。`,
        actor
          ? `${actor}にも話したくなるような、あたたかいできごとでした。`
          : `あとで思い出しても、胸のあたりが少し明るくなるできごとでした。`,
      ],
    };
  }

  return {
    kind: "general",
    actor,
    wanted: actor ? `${actor}に見てほしかった` : "そのことをわかってほしかった",
    opening: [
      actor
        ? `${name}は、${actor}といるときに、心に残ることがありました。`
        : `${name}には、きょう、心に残ることがありました。`,
      `そのことは、すぐにはうまく言えないけれど、胸の中に残っていました。`,
    ],
  };
}

function makeEventResponseLines(name, eventScene) {
  if (!eventScene?.actor) {
    return [
      `その夜、ふとんの中で、${name}は小さく言いました。`,
      `「ほんとうは、${eventScene?.wanted || "わかってほしかった"}の」`,
    ];
  }

  const actor = eventScene.actor;
  const timing =
    actor === "先生"
      ? `あとで、${actor}が「さっき、どうしておこったの？」と聞きました。`
      : actor === "おともだち"
        ? `少しあとで、${actor}が「さっき、どうしたの？」と聞きました。`
        : `その夜、ふとんの中で、${actor}が「さっき、どうしてあんなにおこったの？」と聞きました。`;

  return [
    timing,
    `${name}は、しばらくだまってから、「${eventScene.wanted}の」と言いました。`,
    `それから、小さな声で「すぐには言えなかったけど、かなしくなった」とつけたしました。`,
    `${actor}は、${name}のそばで「そうだったんだね。教えてくれてありがとう」と言いました。`,
  ];
}

function makeAngerBodyLines(name, eventScene) {
  if (!eventScene || eventScene.kind === "blocks") {
    return [
      `${name}の手は、つみきをぎゅっとにぎったままとまりました。`,
      `「いまじゃない！」という声が、思ったより大きく出ました。`,
      `つみきのはこをばたんとしめると、むねの中でぷんぷんがぱちぱちしました。`,
    ];
  }

  if (eventScene.kind === "talk") {
    return [
      `${name}の口は、話の途中でとまりました。`,
      `「まだ聞いてほしかったのに」という声が、胸の中で大きくなりました。`,
      `むねの中で、ぷんぷんがぱちぱちしました。`,
    ];
  }

  if (eventScene.kind === "toy") {
    return [
      `${name}の手は、空っぽになった場所でぎゅっと止まりました。`,
      `「いま使ってたのに！」という声が、思ったより大きく出ました。`,
      `むねの中で、ぷんぷんがぱちぱちしました。`,
    ];
  }

  if (eventScene.kind === "could-not") {
    return [
      `${name}は、もう一度やりたいのに、手がぎゅっとかたまりました。`,
      `「できない！」という声が、思ったより大きく出ました。`,
      `むねの中で、ぷんぷんがぱちぱちしました。`,
    ];
  }

  return [
    `${name}は、うまく言えないまま、手をぎゅっとにぎりました。`,
    `「いやだ！」という声が、思ったより大きく出ました。`,
    `むねの中で、ぷんぷんがぱちぱちしました。`,
  ];
}

function showScreen(id) {
  screens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.id === id);
  });
  document.querySelector(".phone-shell").scrollTop = 0;
}

function makeChoice({ label, mark, color }, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "choice-button";
  button.dataset.mark = mark;
  button.setAttribute("aria-label", label);
  button.style.setProperty("--button-color", color);
  button.innerHTML = `<span>${escapeHtml(label)}</span>`;
  button.addEventListener("click", onClick);
  return button;
}

function updateCreateStoryButton() {
  if (!createStoryButton) return;
  createStoryButton.disabled = !state.detail;
  createStoryButton.textContent = state.detail
    ? "おはなしを よんでみる"
    : "おくの きもちを えらんでね";
}

function renderChoiceGroups(container, groups, items, onSelect) {
  container.innerHTML = "";
  groups.forEach((group) => {
    const groupItems = items.filter((item) => item.group === group);
    if (groupItems.length === 0) return;

    const wrapper = document.createElement("div");
    wrapper.className = "choice-group";

    const title = document.createElement("p");
    title.className = "choice-group-title";
    title.textContent = group;
    wrapper.append(title);

    groupItems.forEach((item) => {
      wrapper.append(makeChoice(item, () => onSelect(item)));
    });

    container.append(wrapper);
  });
}

function renderEmotions() {
  renderChoiceGroups(emotionList, emotionGroups, emotions, (emotion) => {
    state.emotion = emotion;
    state.detail = null;
    detailTitle.textContent = `「${emotion.label}」の おくにありそうなものは？`;
    renderDetails();
    updateCreateStoryButton();
    showScreen("detail-screen");
  });
}

function renderDetails() {
  detailList.innerHTML = "";
  const details = state.emotion.type === "positive" ? positiveDetails : negativeDetails;
  details.forEach((detail) => {
    const button = makeChoice({ ...detail, color: state.emotion.color }, () => {
      state.detail = detail;
      renderDetails();
      updateCreateStoryButton();
    });
    const isSelected = state.detail?.id === detail.id;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
    detailList.append(button);
  });
  updateCreateStoryButton();
}

function storyKey(emotion, detail) {
  return `${emotion.id}::${detail.id}`;
}

function chooseStoryType(emotion, detail) {
  return detail.storyType || emotion.storyType || (emotion.type === "positive" ? "C" : "A");
}

function getStoryFamily(emotion, detail) {
  const familyByEmotion = {
    angry: "anger",
    irritated: "anger",
    frustrated: "anger",
    moyamoya: "anger",
    sad: "sadness",
    lonely: "sadness",
    alone: "sadness",
    "hidden-sad": "sadness",
    anxious: "anxiety",
    scared: "anxiety",
    tired: "tired",
    "cant-anymore": "tired",
    happy: "joy",
    relieved: "joy",
    hottoshiteiru: "joy",
    warm: "joy",
    thanks: "joy",
    like: "joy",
    fun: "growth",
    excited: "growth",
    proud: "growth",
    done: "growth",
    try: "growth",
    cherish: "growth",
  };
  const familyByDetail = {
    "no-fail": "anxiety",
    rest: "tired",
    "too-hard": "tired",
  };

  return familyByDetail[detail.id] || familyByEmotion[emotion.id] || "anger";
}

function chooseBackdrop(emotion, detail) {
  const mappedKey = priorityBackdropMap[storyKey(emotion, detail)];
  if (mappedKey && storyBackdrops[mappedKey]) return storyBackdrops[mappedKey];

  const storyType = chooseStoryType(emotion, detail);
  if (storyType === "C") return storyBackdrops.rain;
  if (storyType === "D") return storyBackdrops.home;
  if (storyType === "G") return storyBackdrops.table;
  if (storyType === "F") return storyBackdrops.table;
  if (emotion.id === "lonely" || emotion.id === "alone") return storyBackdrops.school;
  return storyBackdrops.home;
}

function createStory({ title, paragraphs, strength, compass }) {
  return { title, paragraphs, strength, compass };
}

function withEventScene(story, eventScene, family = "anger") {
  if (!eventScene) return story;
  const bridgeLines = {
    anger: "そのあとも、そのことは胸の中で少し熱く残っていました。",
    sadness: "そのできごとは、帰り道になっても心のすみに残っていました。",
    anxiety: "そのことを思い出すと、手の中が少しひんやりしました。",
    tired: "その日のできごとは、からだの重さといっしょに残っていました。",
    joy: "そのできごとは、あとで思い出してもほほがゆるむ光でした。",
    growth: "そのできごとは、次の一歩の入口みたいに残っていました。",
  };

  return {
    ...story,
    paragraphs: [
      ...eventScene.opening,
      bridgeLines[family] || bridgeLines.anger,
      ...story.paragraphs,
    ],
  };
}

const priorityStoryBuilders = {
  "angry::understood": ({ name, backdrop, eventScene }) => {
    const opening = eventScene?.opening || [
      `${name}は、夕方、つみきで小さなおうちを作っていました。`,
      `さいごの屋根をのせたら、できあがりです。`,
      `そのとき、ママが「そろそろかたづけようね」と言いました。`,
    ];
    const angerBody = makeAngerBodyLines(name, eventScene);
    const responseLines = eventScene
      ? makeEventResponseLines(name, eventScene)
      : [
          `その夜、ふとんの中で、ママが「さっき、どうしてあんなにおこったの？」と聞きました。`,
          `${name}は、しばらくだまってから、「あとひとつでできたの。見てほしかったの」と言いました。`,
          `それから、小さな声で「すぐやめてって言われて、かなしくなった」とつけたしました。`,
          `ママは、${name}のそばにすわって、「そうだったんだね。教えてくれてありがとう。あとひとつだったんだね」と言いました。`,
        ];

    return createStory({
      title: `おこりんぼうの ${name}`,
      paragraphs: [
        ...opening,
        ...angerBody,
        `そこへ、ことりのぴーと、ごまあざらしのごまじろうがやってきました。`,
        `ぴーは「${name}、まだぷんぷんしてる？」と聞きました。`,
        `${name}は「してる」と言って、ほっぺをふくらませました。`,
        `ぴーが「ふーってしてみる？」と言いました。`,
        `${name}は、ふーっといきをはきました。`,
        `でも、ぷんぷんはまだからだの中に残っていました。`,
        `ごまじろうは「まだあるんだね」と言って、となりにすわりました。`,
        ...responseLines,
        `${name}の目に、なみだがひとつたまりました。ぷんぷんした気もちは、まだ少し残っていました。`,
        `でも、そのとなりには、かなしかった気もちもちゃんといました。`,
        `ぷんぷんの奥には、「見てほしかった」という気もちが、ちゃんと残っていました。`,
      ],
      strength: `ぷんぷんはまだ少し残っていたけれど、「見てほしかった」という気もちも、そこにいました。`,
      compass: "おこる きもちの下に、見てほしかった こえが かくれている日もあります。",
    });
  },

  "sad::not-alone": ({ name, backdrop }) =>
    createStory({
      title: `なみだの日の ${name}`,
      paragraphs: [
        `${name}は、朝の げんかんで 足が とまりました。`,
        `外は 明るいのに、むねの中だけ 雨が ふっているみたいでした。`,
        `「行きたくない」と 言った こえは、とても 小さく なりました。`,
        `目の はしに たまった なみだが、ほっぺを つーっと すべりました。`,
        `そこへ、ぴーと ごまじろうが そっと 来ました。`,
        `ぴーは「まぶしい こえが つらい日も あるよね」と 言いました。`,
        `ごまじろうは「ひとりに しないでほしかったのかな」と、きめつけずに 聞きました。`,
        `${name}は、うなずく かわりに、そでを ぎゅっと にぎりました。`,
        `その日は、なみだが すぐに 消えたわけでは ありません。`,
        `でも お昼に、スプーンの上で にんじんが ころんと 光りました。`,
        `${name}は それを 見て、ほんの 少しだけ 口もとを ゆるめました。`,
        `帰り道、手を つないだ とき、${name}は「きょう、ちょっと さみしかった」と 言えました。`,
        `ぴーは 羽を たたんで、うれしそうに うなずきました。`,
        `ごまじろうは「言えたね。となりに いてほしいって、だいじな こえだね」と 言いました。`,
        `${backdrop.texture}`,
        `なみだのあと、小さなひかりが、${name}の帰り道にそっと残りました。`,
      ],
      strength: `さみしさは消えなかったけれど、「となりにいてほしい」というこえが少しだけ外に出ました。`,
      compass: "なみだが 出る日も、心は ひかりを 見つける 力を なくしていません。",
    }),

  "tired::rest": ({ name, backdrop }) =>
    createStory({
      title: `やすみたい日の ${name}`,
      paragraphs: [
        `${name}は、いつも ちゃんと やろうとします。`,
        `朝の したくも、出かける じゅんびも、できるだけ がんばります。`,
        `でも その日は、くつを はく前に、からだが ぺたんと 重くなりました。`,
        `「きょうは、やすみたい」と ${name}は 言いました。`,
        `そのことばは、小さいけれど、まっすぐでした。`,
        `ぴーは「がんばってきた からだの こえかな」と 言いました。`,
        `ごまじろうは「やすむって、がんばってない こととは ちがうかもしれないね」と ゆっくり 言いました。`,
        `その日は、あたたかい のみものを 少しずつ 飲みました。`,
        `まどの外では、雲が ゆっくり うごいていました。`,
        `${name}の つかれは、すぐに ぜんぶ 消えたわけでは ありません。`,
        `でも、からだの中に「聞いてもらえた」という 小さな すきまが できました。`,
        `夕方、${name}は ぴーに「まだ ねむい」と 言いました。`,
        `ぴーは「まだ ねむいも、ほんとうだね」と 言いました。`,
        `ごまじろうは、ふかふかの タオルを そっと そばに 置きました。`,
        `${backdrop.texture}`,
        `その夜、${name}のからだは、やっと少しだけ力をぬきました。`,
      ],
      strength: `がんばってきたからだのこえが、しずかな部屋の中で聞こえていました。`,
      compass: "やすむことは、ここまでの がんばりを たいせつに することでもあります。",
    }),

  "happy::share": ({ name, backdrop }) =>
    createStory({
      title: `うれしいを 見つける ${name}`,
      paragraphs: [
        `${name}は、うれしいを 見つけるのが とても 上手です。`,
        `朝の パンの においから、「いい におい」を 見つけました。`,
        `水たまりの中から、空の 青い かけらを 見つけました。`,
        `カーテンの すきまから、ほそい ひかりの 道を 見つけました。`,
        `ぴーと ごまじろうが やってきて、「${name}、どうして そんなに 目が きらきらしているの？」と 聞きました。`,
        `${name}は「うれしいが、あちこちで かくれんぼしてるんだよ」と 言いました。`,
        `ぴーは「ぼくも 見つけたい」と、羽を ぱたぱた させました。`,
        `ごまじろうは 水たまりを のぞいて、「ほんとうだ。小さな 空が あるね」と 言いました。`,
        `${name}は その うれしいを、だれかに 見せたくなりました。`,
        `「ほら、ここ」と 指を さすと、近くにいた人も 少し しゃがんで 見ました。`,
        `うれしいは、大きな 音を 立てずに、みんなの 間へ ひろがりました。`,
        `ぴーは「わけても へらないんだね」と 言いました。`,
        `ごまじろうは「むしろ、見える人が ふえたみたい」と にっこり しました。`,
        `${backdrop.texture}`,
        `うれしいのかけらは、みんなで見たあとも、${name}の中で光っていました。`,
      ],
      strength: `うれしい気もちは、分けても小さくならず、そっと明るさを残しました。`,
      compass: "うれしい きもちは、だれかと わけても 小さくならない あかりです。",
    }),

  "proud::remember": ({ name, backdrop }) =>
    createStory({
      title: `小さな はたを 立てた ${name}`,
      paragraphs: [
        `${name}は、その日、小さな ことを ひとつ できました。`,
        `むずかしかった ところを、もう一度 やってみたのです。`,
        `できた とたん、むねの中に 小さな はたが ぴんと 立ちました。`,
        `でも ${name}は、すぐに 大きな こえで 言えませんでした。`,
        `「こんなの、たいしたことないかな」と 思ったからです。`,
        `そこへ ぴーが 来て、「いま、はたが 立った音が したよ」と 言いました。`,
        `ごまじろうは「たいしたことか どうかは、だれかが きめなくても いいのかも」と 言いました。`,
        `${name}は、できたところを もう一度 見ました。`,
        `ゆびの 先が、少し あたたかく なりました。`,
        `ぴーは 小さな 紙を 持ってきて、「ここに しまおう」と 言いました。`,
        `ごまじろうは「できたことを おぼえておく 箱だね」と 言いました。`,
        `${name}は、その箱に きょうの できたを そっと 入れました。`,
        `だれかに じまんするためでは ありません。`,
        `じぶんが 歩いた みちを、じぶんで 忘れないためです。`,
        `${backdrop.texture}`,
        `小さなできたは、今日のポケットの中で、しずかに光っていました。`,
      ],
      strength: `ほこらしい気もちは、大きな声にならず、小さなはたのように立っていました。`,
      compass: "できたことを、きょうは ちゃんと おぼえておこう。",
    }),

  "like::love": ({ name, backdrop }) =>
    createStory({
      title: `${name}の すきの 花`,
      paragraphs: [
        `${name}の むねの中には、すきの 花が ひらいていました。`,
        `それは、ふわっと あたたかくて、手で つつみたくなる 花でした。`,
        `朝、だいじな人の こえを 聞くと、その花は 少し ひらきました。`,
        `いっしょに 本を 見ると、また 少し ひらきました。`,
        `でも、すきは いつも すぐに 言葉に なるわけでは ありません。`,
        `${name}は「すきって 言いたいけど、なんだか はずかしい」と 言いました。`,
        `ぴーは「花が てれているのかな」と 小さく 笑いました。`,
        `ごまじろうは「言う日も、言わない日も、すきは なくならないね」と 言いました。`,
        `${name}は、ちいさな 絵を かきました。`,
        `そこには、まるい 花と、となりに すわる ぴーと ごまじろうが いました。`,
        `だいじな人に その絵を 見せると、「あたたかい 絵だね」と 言ってくれました。`,
        `${name}は、すきの ぜんぶを 言えたわけでは ありません。`,
        `でも、花びら 一まいぶんは、ちゃんと とどいた気がしました。`,
        `${backdrop.texture}`,
        `すきの花は、言葉になった分だけ、少しだけひらいていました。`,
      ],
      strength: `すきな気もちは、絵やしぐさの中にも、しずかに残っていました。`,
      compass: "すきと 思えた きもちは、心の中に 咲いた 小さな 花です。",
    }),

  "moyamoya::no": ({ name, backdrop }) =>
    createStory({
      title: `${name}の もやもやと 小さな いや`,
      paragraphs: [
        `${name}は、よく「いいよ」と 言います。`,
        `あそぶ 場所を きめるときも、おやつを えらぶときも、「いいよ」と 言います。`,
        `でも その日は、「いいよ」と 言った あとで、むねの中に もやもやが 残りました。`,
        `白い くもみたいな もやもやが、ふわふわと うごきません。`,
        `ぴーが「${name}、ほんとうに いいよだったの？」と 聞きました。`,
        `${name}は、少し だまってから、「ほんとうは、いやだったかも」と 言いました。`,
        `ごまじろうは「いやって 言いたい きもちが、もやもやに なっていたのかな」と 言いました。`,
        `ぴーは「いやは、だれかを きらいって ことじゃないんだね」と 言いました。`,
        `${name}は、次に えらぶとき、こえを 小さく 出しました。`,
        `「きょうは、こっちが いいな」`,
        `その こえは、とても 小さかったけれど、ちゃんと 空気の中に 立ちました。`,
        `まわりの人は すぐに ぜんぶ わかったわけでは ありません。`,
        `でも、「そっか」と 聞いてくれました。`,
        `${name}の もやもやは、すこしだけ 形を もらいました。`,
        `${backdrop.texture}`,
        `${name}の「いや」と「これがいい」は、小さい声のまま、そこに立っていました。`,
      ],
      strength: `やさしさのとなりに、じぶんの小さなこえも並びました。`,
      compass: "いやだと 言うことは、じぶんと だれかの 間に 小さな 線を 引くことです。",
    }),

  "lonely::seen": ({ name, backdrop }) =>
    createStory({
      title: `${name}の みてほしい日`,
      paragraphs: [
        `${name}は、へやの すみで ひざを かかえていました。`,
        `みんなの 声は 近くに あるのに、じぶんだけ 少し 遠くに いるみたいでした。`,
        `「見て」と 言いたいのに、口は きゅっと むすばれていました。`,
        `そこへ、ぴーと ごまじろうが しずかに 来ました。`,
        `ぴーは、すぐに はげましませんでした。`,
        `ただ、${name}の となりで 小さく 羽を たたみました。`,
        `ごまじろうは「だれかに ちゃんと 見てほしかったのかな」と、ゆっくり 聞きました。`,
        `${name}は「うん。でも、うまく 言えない」と 言いました。`,
        `そのとき、遠くにいた人が「${name}、そこに いたんだね」と 声を かけました。`,
        `${name}の さみしさは、それだけで ぜんぶ 消えたわけでは ありません。`,
        `でも、「見えていた」と 思えた ぶんだけ、むねの中に すきまが できました。`,
        `ぴーは「いま、少し 風が 入ったね」と 言いました。`,
        `ごまじろうは「好きに なるとか、ぜんぶ 仲よくなるとか、急がなくて いいね」と 言いました。`,
        `${name}は、まだ すみっこに いたけれど、さっきより 少し 顔を 上げました。`,
        `${backdrop.texture}`,
        `さみしい気もちの中に、「見てほしい」というこえが、まだ小さく灯っていました。`,
      ],
      strength: `すぐに明るくならなくても、「見てほしい」は心の中に残っていました。`,
      compass: "ちゃんと 見てほしい きもちは、ここにいるよという 小さな あかりです。",
    }),
};

function buildAngerGroupStory({ name, emotion, detail, eventScene }) {
  const opening = eventScene?.opening || [
    `${name}は、あそびの途中で、思ったようにいかないことがありました。`,
    `「もう」と言った声が、じぶんでもびっくりするくらい強く出ました。`,
  ];
  const actor = eventScene?.actor || "ママ";
  const wanted = detail.id === "no" ? "やめてほしかった" : detail.id === "cherished" ? "たいせつにしてほしかった" : "見てほしかった";

  return createStory({
    title: `${emotion.label}日の ${name}`,
    paragraphs: [
      ...opening,
      `${name}の手はぎゅっと丸くなり、足はその場で止まりました。`,
      `ほっぺが熱くなって、言いたいことが口の前でつかえました。`,
      `ぴーが「声、大きく出ちゃったね」と言いました。`,
      `ごまじろうは「いま、止められた感じがしたのかな」と、短く聞きました。`,
      `${name}は「いやだった」とだけ言いました。`,
      `ふーっと息をしても、からだの中のぷんぷんはまだ残っていました。`,
      `それでも、ぴーとごまじろうは急がず、${name}の顔を見ていました。`,
      `少しあとで、${actor}が「さっき、どうしたの？」と聞きました。`,
      `${name}は、手をひらいたり閉じたりしながら、「ほんとうは、${wanted}の」と言いました。`,
      `${actor}は「そうだったんだね。教えてくれてありがとう」と言いました。`,
      `ぷんぷんは少し残ったまま、声の形だけが変わりました。`,
      `強い気もちの奥には、まだ言葉になったばかりの願いがありました。`,
    ],
    strength: `強く出た気もちの奥で、「${wanted}」という願いが、少しだけ形になりました。`,
    compass: "強い声の下には、見てほしいことや、やめてほしいことがかくれている日があります。",
  });
}

function buildSadnessGroupStory({ name, emotion, detail, eventScene }) {
  const opening = eventScene?.opening || [
    `${name}は、朝の道をゆっくり歩いていました。`,
    `いつもの音が、今日は少し遠くから聞こえるようでした。`,
  ];

  return createStory({
    title: `${name}としずかな ${emotion.label}`,
    paragraphs: [
      ...opening,
      `${name}の目は下を向いて、くつの先ばかり見ていました。`,
      `声を出そうとしても、のどのところで小さく止まりました。`,
      `ぴーは「今日は、声が小さい日なんだね」と言いました。`,
      `ごまじろうは「ひとりで持つには、少し重かったのかな」と言いました。`,
      `${name}は、うなずくかわりに、そでをぎゅっとにぎりました。`,
      `昼すぎ、あたたかいスープのにおいがしました。`,
      `ひとくち飲むと、おなかの中に小さな明かりがともりました。`,
      `かなしい気もちは、まだなくなりませんでした。`,
      `帰り道、先生が「今日は少ししずかだったね」と声をかけました。`,
      `${name}は「ひとりにしないでほしかった」と、小さく言いました。`,
      `先生は「言ってくれてありがとう。ここで少し休もうか」と言いました。`,
      `かなしい日は続いていたけれど、小さなあたたかさも同じ日にありました。`,
    ],
    strength: `しずかな気もちのそばで、小さな安心が湯気のように残りました。`,
    compass: "かなしい日にも、味や音や手のぬくもりが、そっと帰り道を照らすことがあります。",
  });
}

function buildAnxietyGroupStory({ name, emotion, detail, eventScene }) {
  const opening = eventScene?.opening || [
    `${name}は、明日のことを考えて、ランドセルの中を何度も見ました。`,
    `えんぴつも、ノートも、ちゃんと入っているのに、まだ心配でした。`,
  ];

  return createStory({
    title: `${name}の ふあんな朝`,
    paragraphs: [
      ...opening,
      `${name}の手は少し冷たくて、くつをはく足もゆっくりでした。`,
      `「もしできなかったら」と思うと、おなかがきゅっとしました。`,
      `ぴーは「何回もたしかめたくなるんだね」と言いました。`,
      `ごまじろうは「こわいまま、少しだけ持っていけるかな」と聞きました。`,
      `${name}は、首を少しだけ横にふりました。`,
      `それで、今日は玄関でひと呼吸してから決めることにしました。`,
      `ママは「行くかどうか、ここで一緒に考えよう」と言いました。`,
      `${name}は「しっぱいしたくなかった」と、くつの先を見ながら言いました。`,
      `ママは「それくらい大事だったんだね」と答えました。`,
      `行く道はまだ少しこわかったけれど、手の中には一緒に持ってくれる感じが残りました。`,
      `ふあんは消えなかったけれど、小さな一歩ぶんの場所が見えていました。`,
    ],
    strength: `こわさは、ひとりで持つものから、少しだけ一緒に持つものになりました。`,
    compass: "ふあんは、うまくやりたい気もちのそばで、小さくふるえることがあります。",
  });
}

function buildTiredGroupStory({ name, emotion, detail, eventScene }) {
  const opening = eventScene?.opening || [
    `${name}は、朝からいろいろなことをがんばっていました。`,
    `用意をして、歩いて、返事をして、また次のことをしました。`,
  ];

  return createStory({
    title: `やすみたい日の ${name}`,
    paragraphs: [
      ...opening,
      `夕方になると、足が床にくっついたみたいに重くなりました。`,
      `まぶたも少し重くて、声を出すのもゆっくりになりました。`,
      `ぴーは「今日は羽を休めたい日みたい」と言いました。`,
      `ごまじろうは「たくさん使ったからだは、しずかにしたい時があるね」と言いました。`,
      `${name}は「もう動きたくない」と言いました。`,
      `ママは、コップに水を入れて、そばに置きました。`,
      `${name}は「やすみたかった」と、やっと言いました。`,
      `ママは「うん。今日は少し休もう」と言いました。`,
      `元気になったわけではないけれど、からだの声は聞いてもらえました。`,
      `ぴーは小さく羽をたたみ、ごまじろうはタオルをそばに置きました。`,
      `がんばった一日の終わりに、休みたい声が、ようやく聞こえてきました。`,
    ],
    strength: `元気になる前に、からだの声がしずかにそこにありました。`,
    compass: "休みたい気もちは、弱さではなく、ここまで使ってきた力からの知らせです。",
  });
}

function buildJoyGroupStory({ name, emotion, detail, eventScene }) {
  const opening = eventScene?.opening || [
    `${name}は、朝の光の中で、うれしいものを見つけました。`,
    `それは、パンのにおいや、手の中のあたたかさみたいに小さなものでした。`,
  ];

  return createStory({
    title: `${name}の うれしいかけら`,
    paragraphs: [
      ...opening,
      `${name}の目はきらっとして、足どりも少し軽くなりました。`,
      `ぴーは「なになに、見せて！」と羽をぱたぱたしました。`,
      `ごまじろうは「ぼくにも少し見えるかな」と、となりに来ました。`,
      `${name}は「これ、うれしい」と言って、手のひらを開きました。`,
      `光やにおいや小さな音が、みんなの顔を少し明るくしました。`,
      `おともだちも「ほんとだ」と笑いました。`,
      `${name}は、うれしい気もちをひとりじめしなくても、へらないことを知りました。`,
      `ぴーは「わけたら、きらきらが増えたね」と言いました。`,
      `ごまじろうは「今日のぶん、ちゃんと覚えておきたいね」と言いました。`,
      `うれしい気もちは、手のひらからこぼれず、みんなの顔に少しずつ映りました。`,
    ],
    strength: `あたたかい気もちは、見せたぶんだけ、今日の中に残りました。`,
    compass: "うれしい気もちは、誰かと分けても、小さくならない灯りです。",
  });
}

function buildGrowthGroupStory({ name, emotion, detail, eventScene }) {
  const opening = eventScene?.opening || [
    `${name}は、小さなことにもう一度挑戦していました。`,
    `少しむずかしくて、でも、もう少しやってみたい気もちがありました。`,
  ];

  return createStory({
    title: `${name}の 小さなはた`,
    paragraphs: [
      ...opening,
      `${name}の指先はまっすぐで、目はじっと前を見ていました。`,
      `できたところまで来ると、胸の中に小さなはたが立ったみたいでした。`,
      `ぴーは「いまの、見たよ！」と声をはずませました。`,
      `ごまじろうは「大きな音じゃないけど、ちゃんと進んだね」と言いました。`,
      `${name}は「できた」と、少し照れて言いました。`,
      `それから「またやってみたい」と、もう一度手を伸ばしました。`,
      `おともだちが「どうやったの？」と聞きました。`,
      `${name}は、ゆっくりやり方を見せました。`,
      `じまんではなく、忘れたくない小さなできたでした。`,
      `ぴーとごまじろうは、そのできたを宝物みたいに見ていました。`,
      `小さな一歩は、次の「またやってみたい」のそばに置かれました。`,
    ],
    strength: `できたことは、大きな声にならず、次の一歩の近くで光っていました。`,
    compass: "できたことは、小さくても、明日の自分を支えるしるしになります。",
  });
}

function buildGenericStory({ name, emotion, detail, backdrop, eventScene }) {
  const family = getStoryFamily(emotion, detail);
  const builders = {
    anger: buildAngerGroupStory,
    sadness: buildSadnessGroupStory,
    anxiety: buildAnxietyGroupStory,
    tired: buildTiredGroupStory,
    joy: buildJoyGroupStory,
    growth: buildGrowthGroupStory,
  };

  return builders[family]({ name, emotion, detail, backdrop, eventScene });
}

function buildStory() {
  const emotion = state.emotion;
  const detail = state.detail;
  const backdrop = chooseBackdrop(emotion, detail);
  const name = getDisplayName();
  const eventScene = makeEventScene(name, state.eventText);
  const family = getStoryFamily(emotion, detail);
  const builder = priorityStoryBuilders[storyKey(emotion, detail)];

  if (builder) {
    const story = builder({ name, emotion, detail, backdrop, eventScene });
    return storyKey(emotion, detail) === "angry::understood"
      ? story
      : withEventScene(story, eventScene, family);
  }

  return buildGenericStory({ name, emotion, detail, backdrop, eventScene });
}

function renderStory() {
  const story = buildStory();
  const backdrop = chooseBackdrop(state.emotion, state.detail);

  storyTitle.textContent = story.title;
  storyIllustration.className = `story-illustration ${backdrop.className}`;
  storyIllustration.style.setProperty("--scene-bg", backdrop.background);
  storyText.innerHTML = story.paragraphs.map((text) => `<p>${escapeHtml(text)}</p>`).join("");
  perspectiveBox.innerHTML = `<span>見つけた ちから</span>${escapeHtml(story.strength)}`;
  compassBox.innerHTML = `<span>きょうのコンパス</span>${escapeHtml(story.compass)}`;
}

document.querySelector("[data-start]").addEventListener("click", () => {
  showScreen("name-screen");
  heroNameInput.focus();
});

document.querySelector("[data-name-next]").addEventListener("click", () => {
  state.name = heroNameInput.value.trim();
  state.suffix = getSelectedSuffix();
  state.eventText = getEventText();
  state.emotion = null;
  state.detail = null;
  updateCreateStoryButton();
  showScreen("event-screen");
  eventTextInput?.focus();
});

document.querySelector("[data-event-next]").addEventListener("click", () => {
  state.eventText = getEventText();
  state.emotion = null;
  state.detail = null;
  updateCreateStoryButton();
  showScreen("emotion-screen");
});

createStoryButton.addEventListener("click", () => {
  if (!state.emotion || !state.detail) return;
  state.eventText = getEventText();
  renderStory();
  showScreen("story-screen");
});

document.querySelector("[data-reset]").addEventListener("click", () => {
  state.name = "";
  state.suffix = "ちゃん";
  state.eventText = "";
  state.emotion = null;
  state.detail = null;
  heroNameInput.value = "";
  if (eventTextInput) eventTextInput.value = "";
  document.querySelector('input[name="suffix"][value="ちゃん"]').checked = true;
  updateNamePreview();
  updateCreateStoryButton();
  showScreen("title-screen");
});

document.querySelectorAll("[data-back]").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.back === "emotion-screen") {
      state.detail = null;
      updateCreateStoryButton();
    }
    showScreen(button.dataset.back);
  });
});

heroNameInput.addEventListener("input", updateNamePreview);
eventTextInput?.addEventListener("input", () => {
  state.eventText = getEventText();
});
document.querySelectorAll('input[name="suffix"]').forEach((input) => {
  input.addEventListener("change", updateNamePreview);
});

renderAppVersion();
updateNamePreview();
renderEmotions();

window.EmoCompassTest = {
  APP_VERSION,
  state,
  emotions,
  negativeDetails,
  positiveDetails,
  storyBackdrops,
  getDisplayName,
  renderStory,
  showScreen,
};
