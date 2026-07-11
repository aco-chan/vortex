const state = {
  name: "",
  suffix: "ちゃん",
  emotion: null,
  detail: null,
  scene: null,
};

window.EmoCompassVersion = "v0.6.0";

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
    compass: "わすれたくない きもちは、心が たいせつにしたい けしきです。",
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

const scenes = [
  {
    id: "forest",
    label: "しずかな森",
    mark: "き",
    color: "#d7eadf",
    className: "forest",
    background: "linear-gradient(#cfe6e2 0 52%, #8fae9a 52% 100%)",
    place: "しずかな森",
    texture: "はっぱが、さわさわと 小さな音を たてていました。",
  },
  {
    id: "sea",
    label: "よるの海",
    mark: "なみ",
    color: "#b7d6df",
    className: "sea",
    background: "linear-gradient(#34435f 0 58%, #557f96 58% 100%)",
    place: "よるの海",
    texture: "なみが、よせては かえし、ことばにならない きもちを はこんでいました。",
  },
  {
    id: "room",
    label: "小さなへや",
    mark: "まど",
    color: "#f8edda",
    className: "room",
    background: "linear-gradient(#f5e4c9 0 68%, #d9b99d 68% 100%)",
    place: "小さなへや",
    texture: "まどのそばの いすが、なにも 言わずに となりを あけていました。",
  },
  {
    id: "cloud",
    label: "くもの上",
    mark: "そら",
    color: "#c7bfdc",
    className: "cloud",
    background: "linear-gradient(#cbdff1 0 70%, #efe7f6 70% 100%)",
    place: "くもの上",
    texture: "くもは ふかふかで、こたえを 急がず、からだを うけとめました。",
  },
];

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
const emotionList = document.querySelector("#emotion-list");
const detailList = document.querySelector("#detail-list");
const sceneList = document.querySelector("#scene-list");
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
    state.scene = null;
    detailTitle.textContent = `「${emotion.label}」の おくにありそうなものは？`;
    renderDetails();
    showScreen("detail-screen");
  });
}

function renderDetails() {
  detailList.innerHTML = "";
  const details = state.emotion.type === "positive" ? positiveDetails : negativeDetails;
  details.forEach((detail) => {
    detailList.append(
      makeChoice({ ...detail, color: state.emotion.color }, () => {
        state.detail = detail;
        renderScenes();
        showScreen("scene-screen");
      }),
    );
  });
}

function renderScenes() {
  sceneList.innerHTML = "";
  scenes.forEach((scene) => {
    sceneList.append(
      makeChoice(scene, () => {
        state.scene = scene;
        renderStory();
        showScreen("story-screen");
      }),
    );
  });
}

function storyKey(emotion, detail) {
  return `${emotion.id}::${detail.id}`;
}

function chooseStoryType(emotion, detail) {
  return detail.storyType || emotion.storyType || (emotion.type === "positive" ? "C" : "A");
}

function createStory({ title, paragraphs, strength, compass }) {
  return { title, paragraphs, strength, compass };
}

const priorityStoryBuilders = {
  "angry::understood": ({ name, scene }) =>
    createStory({
      title: `おこりんぼうの ${name}`,
      paragraphs: [
        `${name}は、朝から ぷんぷんしていました。`,
        `くつしたが うまく はけなくて、ぷん。`,
        `おもちゃの はこが あかなくて、また ぷん。`,
        `「もう、ぜんぶ いやだ」と ${name}は 小さな こえで 言いました。`,
        `そこへ、ことりの ぴーと、ごまあざらしの ごまじろうが やってきました。`,
        `ぴーは くびを かしげて、「${name}、きょうは 火みたいな きもちが あるの？」と 聞きました。`,
        `${name}は「うん。ぷんぷんが とまらない」と 言いました。`,
        `ごまじろうは、少し 考えてから、「とめなくても いいよ。まず、どんな ぷんぷんか 見てみよう」と 言いました。`,
        `${name}は、ふーっと いきを はいてみました。`,
        `でも、ぷんぷんは ぜんぶ 外へ 出ていきませんでした。`,
        `${name}は びっくりして、「まだ いる」と 言いました。`,
        `ぴーは「まだ いても いいんだね」と 小さく うなずきました。`,
        `その夜、${name}は だいじな人に 言いました。`,
        `「ほんとうは、わかってほしかったんだよ」`,
        `そのことばを 言ったら、ぷんぷんの おくから、かなしい しずくが ひとつ 出てきました。`,
        `${scene.texture}`,
        `ほんとうに ${name}って、おこっても、その おくの きもちを ことばに できる子なんですね。`,
      ],
      strength: `${name}は、おこりを なくすだけではなく、その おくにある「わかってほしい」を 見つけました。`,
      compass: "おこる きもちの下に、見てほしい こえが かくれている日もあります。",
    }),

  "sad::not-alone": ({ name, scene }) =>
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
        `${scene.texture}`,
        `ほんとうに ${name}って、なみだの あとにも、小さな ひかりを 見つけられる子なんですね。`,
      ],
      strength: `${name}は、さみしさを 消さないまま、となりに いてほしい こえを 少しだけ 出せました。`,
      compass: "なみだが 出る日も、心は ひかりを 見つける 力を なくしていません。",
    }),

  "tired::rest": ({ name, scene }) =>
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
        `${scene.texture}`,
        `ほんとうに ${name}って、まじめだけど、からだと 心の こえを 聞いて やすめる子なんですね。`,
      ],
      strength: `${name}は、がんばりを すてたのではなく、がんばってきた からだの こえを 聞きました。`,
      compass: "やすむことは、ここまでの がんばりを たいせつに することでもあります。",
    }),

  "happy::share": ({ name, scene }) =>
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
        `${scene.texture}`,
        `ほんとうに ${name}って、世界の中から よろこびを 見つけて、そっと わかちあえる子なんですね。`,
      ],
      strength: `${name}は、うれしいを 大きく さわぐだけではなく、だれかと そっと 見られる ひかりに できました。`,
      compass: "うれしい きもちは、だれかと わけても 小さくならない あかりです。",
    }),

  "proud::remember": ({ name, scene }) =>
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
        `${scene.texture}`,
        `ほんとうに ${name}って、小さな できたを、たからもののように おぼえておける子なんですね。`,
      ],
      strength: `${name}は、ほこらしさを ひけらかさず、じぶんの中の 小さな はたとして しまえました。`,
      compass: "できたことを、きょうは ちゃんと おぼえておこう。",
    }),

  "like::love": ({ name, scene }) =>
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
        `${scene.texture}`,
        `ほんとうに ${name}って、すきな きもちを、じぶんの 速さで たいせつに つたえられる子なんですね。`,
      ],
      strength: `${name}は、すきを 急がず、絵や しぐさの中にも たいせつな きもちを のせられました。`,
      compass: "すきと 思えた きもちは、心の中に 咲いた 小さな 花です。",
    }),

  "moyamoya::no": ({ name, scene }) =>
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
        `${scene.texture}`,
        `ほんとうに ${name}って、やさしさの中にも、じぶんの「いや」と「これがいい」を 見つけられる子なんですね。`,
      ],
      strength: `${name}は、人に 合わせる やさしさを 持ったまま、じぶんの こえも 少し 出せました。`,
      compass: "いやだと 言うことは、じぶんと だれかの 間に 小さな 線を 引くことです。",
    }),

  "lonely::seen": ({ name, scene }) =>
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
        `${scene.texture}`,
        `ほんとうに ${name}って、さみしい きもちの中でも、見てほしい こえを 大事に できる子なんですね。`,
      ],
      strength: `${name}は、すぐに 明るく ならなくても、「見てほしい」を 心の中で なくしませんでした。`,
      compass: "ちゃんと 見てほしい きもちは、ここにいるよという 小さな あかりです。",
    }),
};

function buildGenericStory({ name, emotion, detail, scene }) {
  const storyType = chooseStoryType(emotion, detail);
  const type = storyTypeData[storyType] || storyTypeData.A;
  const isPositive = emotion.type === "positive";

  const opening = isPositive
    ? `${name}は、その日、「${emotion.label}」という きもちを 小さな たからものみたいに 持っていました。`
    : `${name}は、その日、「${emotion.label}」という きもちを からだの どこかで 感じていました。`;

  const sceneLine =
    storyType === "C"
      ? `朝の 光や、足もとの 音や、手の中の ぬくもりが、いつもより 少し はっきり 見えました。`
      : `いつもの 場所にいるのに、まわりの 音が 少し 遠くなったり、近くなったりしました。`;

  const dialogue =
    storyType === "D"
      ? `ごまじろうは「${detail.wish}って、からだが だしている こえかもしれないね」と 言いました。`
      : storyType === "G"
        ? `ごまじろうは「${detail.wish}は、じぶんを まもる 線かもしれないね」と 言いました。`
        : storyType === "F"
          ? `ごまじろうは「${detail.wish}は、だいじな ものに ふれた しるしなのかも」と 言いました。`
          : storyType === "C"
            ? `ごまじろうは「${detail.wish}を そっと しまっておくのも、だれかに 見せるのも、どちらも いいね」と 言いました。`
            : `ごまじろうは「${detail.wish}が、おくのほうで 待っていたのかもしれないね」と 言いました。`;

  const turn =
    storyType === "C"
      ? `${name}は、その きもちを 手のひらに のせるみたいに、近くの人へ 少しだけ 見せました。`
      : storyType === "D"
        ? `${name}は、すぐに 元気に なることより、今の からだの こえを 聞いてみることに しました。`
        : storyType === "G"
          ? `${name}は、小さな こえで「きょうは こうしたい」と 言ってみました。`
          : storyType === "F"
            ? `${name}は、思いどおりに ならない きもちも 抱えたまま、そばに いる人の 顔を 見ました。`
            : `${name}は、その きもちを 追い出さず、ことばに なるところまで 待ってみました。`;

  const ending =
    storyType === "C"
      ? `ほんとうに ${name}って、心に ともった きもちを、じぶんの 速さで たいせつに できる子なんですね。`
      : storyType === "D"
        ? `ほんとうに ${name}って、がんばる 力も、やすむ こえを 聞く 力も 持っている子なんですね。`
        : storyType === "G"
          ? `ほんとうに ${name}って、やさしさの中に、じぶんの こえを 見つけられる子なんですね。`
          : storyType === "F"
            ? `ほんとうに ${name}って、かなわない きもちが あっても、たいせつを 失わずに いられる子なんですね。`
            : `ほんとうに ${name}って、きもちの おくにある ほんとうの こえを 見つけられる子なんですね。`;

  return createStory({
    title: type.title(name, emotion),
    paragraphs: [
      opening,
      sceneLine,
      `そこへ、ことりの ぴーと ごまあざらしの ごまじろうが やってきました。`,
      `ぴーは「その きもち、ここに いても いい気がする」と 言いました。`,
      dialogue,
      `${name}は、すぐに こたえを 出しませんでした。`,
      `でも、むねの中で 何かが 少しだけ うごきました。`,
      turn,
      `${scene.place}の けしきが、心の中に ひろがりました。`,
      `${scene.texture}`,
      `${companions.bird}と ${companions.seal}は、答えを きめずに、となりで その けしきを 見ていました。`,
      ending,
    ],
    strength: `${name}は、「${emotion.label}」の中にある「${detail.label}」を、少しずつ 見つめました。`,
    compass: detail.compass || type.compass,
  });
}

function buildStory() {
  const emotion = state.emotion;
  const detail = state.detail;
  const scene = state.scene;
  const name = getDisplayName();
  const builder = priorityStoryBuilders[storyKey(emotion, detail)];

  if (builder) {
    return builder({ name, emotion, detail, scene });
  }

  return buildGenericStory({ name, emotion, detail, scene });
}

function renderStory() {
  const story = buildStory();
  const scene = state.scene;

  storyTitle.textContent = story.title;
  storyIllustration.className = `story-illustration ${scene.className}`;
  storyIllustration.style.setProperty("--scene-bg", scene.background);
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
  showScreen("emotion-screen");
});

document.querySelector("[data-reset]").addEventListener("click", () => {
  state.name = "";
  state.suffix = "ちゃん";
  state.emotion = null;
  state.detail = null;
  state.scene = null;
  heroNameInput.value = "";
  document.querySelector('input[name="suffix"][value="ちゃん"]').checked = true;
  updateNamePreview();
  showScreen("title-screen");
});

document.querySelectorAll("[data-back]").forEach((button) => {
  button.addEventListener("click", () => {
    showScreen(button.dataset.back);
  });
});

heroNameInput.addEventListener("input", updateNamePreview);
document.querySelectorAll('input[name="suffix"]').forEach((input) => {
  input.addEventListener("change", updateNamePreview);
});

updateNamePreview();
renderEmotions();

window.EmoCompassTest = {
  state,
  emotions,
  negativeDetails,
  positiveDetails,
  scenes,
  getDisplayName,
  renderStory,
  showScreen,
};
