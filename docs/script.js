const state = {
  emotion: null,
  detail: null,
  scene: null,
};

const emotions = [
  {
    id: "iraira",
    label: "いらいら",
    mark: "火",
    color: "#f3c7c6",
    title: "赤い実をにぎった子",
    storyName: "胸の中の小さな火",
    phrase: "胸の奥で小さな火がぱちぱち鳴っていました",
    accept: "その火は、こわいものではありませんでした。大切にしたかったものが、ここにあるよと知らせていたのです。",
    details: [
      { id: "understand", label: "誰かにわかってほしい", line: "ほんとうは、わかってほしかっただけなのかもしれません。" },
      { id: "alone", label: "ひとりになりたい", line: "少しだけ、だれの声も届かない場所にいたかったのです。" },
      { id: "cant-say", label: "うまく言えない", line: "言葉になる前の気持ちが、胸の中で肩を寄せあっていました。" },
    ],
  },
  {
    id: "kanashii",
    label: "かなしい",
    mark: "雨",
    color: "#b7d6df",
    title: "雨つぶのポケット",
    storyName: "青い雨の帰り道",
    phrase: "目に見えない雨が、こころのポケットにたまっていました",
    accept: "雨は弱さではありませんでした。大切だったものの形を、そっと映しているだけでした。",
    details: [
      { id: "cry", label: "本当は泣きたい", line: "泣きたい気持ちは、しまいこまれた小さな泉のようでした。" },
      { id: "miss", label: "なくしたものがある", line: "もう手の中にないものを、心はまだやさしく覚えていました。" },
      { id: "quiet", label: "静かにしていたい", line: "今はただ、静けさにとなりに座っていてほしかったのです。" },
    ],
  },
  {
    id: "tsukareta",
    label: "つかれた",
    mark: "灯",
    color: "#f4c98f",
    title: "眠たいランプ",
    storyName: "小さな灯りの休み時間",
    phrase: "からだの中のランプが、少し低い光でともっていました",
    accept: "その光は消えそうなのではなく、休みたいと教えてくれていました。",
    details: [
      { id: "rest", label: "何もしたくない", line: "何もしない時間にも、ちゃんと意味がありました。" },
      { id: "heavy", label: "からだが重い", line: "足も肩も、長い旅をしてきた石のように重く感じました。" },
      { id: "sleep", label: "眠りたい", line: "まぶたの裏に、やわらかな毛布の国が見えていました。" },
    ],
  },
  {
    id: "fuan",
    label: "ふあん",
    mark: "月",
    color: "#c7bfdc",
    title: "月を待つ小舟",
    storyName: "ゆれる小舟と月の道",
    phrase: "まだ起きていないことの影が、足もとでゆれていました",
    accept: "ゆれることは、だめなことではありませんでした。見えない道を見ようとして、心が一生懸命だったのです。",
    details: [
      { id: "future", label: "先のことがこわい", line: "未来はまだ白い紙で、だからこそ大きく見えていました。" },
      { id: "fail", label: "失敗しそうでこわい", line: "転ぶかもしれない場所を、心は先に照らそうとしていました。" },
      { id: "near", label: "そばにいてほしい", line: "ひとりで持つには、少し大きな荷物に感じていました。" },
    ],
  },
  {
    id: "moyamoya",
    label: "なんとなくもやもや",
    mark: "雲",
    color: "#d7eadf",
    title: "名前のない雲",
    storyName: "白い雲のまんなかで",
    phrase: "名前のつかない雲が、胸のあたりにふんわり浮かんでいました",
    accept: "名前がなくても、その雲はたしかにここにありました。急いで形を決めなくてもよかったのです。",
    details: [
      { id: "unknown", label: "理由がわからない", line: "理由はまだ、土の中の種みたいに眠っていました。" },
      { id: "stuck", label: "気持ちが動かない", line: "心の時計が、ゆっくり休んでいるようでした。" },
      { id: "wander", label: "どこにも着かない感じ", line: "どこにも着かない道にも、空を見上げる時間がありました。" },
    ],
  },
];

const scenes = [
  {
    id: "forest",
    label: "静かな森",
    mark: "木",
    color: "#d7eadf",
    className: "forest",
    background: "linear-gradient(#cfe6e2 0 52%, #8fae9a 52% 100%)",
    place: "静かな森",
    imageLine: "葉っぱは、急がない拍手みたいに、さわさわと揺れていました。",
    lastLine: "木々のあいだで息をすると、胸の中に小さな道が一本ひらきました。",
  },
  {
    id: "sea",
    label: "夜の海",
    mark: "波",
    color: "#b7d6df",
    className: "sea",
    background: "linear-gradient(#34435f 0 58%, #557f96 58% 100%)",
    place: "夜の海",
    imageLine: "波は、言葉にできない気持ちを、行ったり来たりさせていました。",
    lastLine: "月の細い光が、息をひとつぶんだけ軽くしてくれました。",
  },
  {
    id: "room",
    label: "小さな部屋",
    mark: "窓",
    color: "#f8edda",
    className: "room",
    background: "linear-gradient(#f5e4c9 0 68%, #d9b99d 68% 100%)",
    place: "小さな部屋",
    imageLine: "窓のそばの椅子は、何も言わずにとなりを空けてくれました。",
    lastLine: "部屋のすみの灯りが、今日のあなたをそのまま照らしていました。",
  },
  {
    id: "cloud",
    label: "雲の上",
    mark: "空",
    color: "#c7bfdc",
    className: "cloud",
    background: "linear-gradient(#cbdff1 0 70%, #efe7f6 70% 100%)",
    place: "雲の上",
    imageLine: "雲はふかふかで、答えを急がず、ただ体を受けとめました。",
    lastLine: "遠くの空が少し明るくなり、肩の力がふっとほどけました。",
  },
];

const screens = [...document.querySelectorAll(".screen")];
const emotionList = document.querySelector("#emotion-list");
const detailList = document.querySelector("#detail-list");
const sceneList = document.querySelector("#scene-list");
const detailTitle = document.querySelector("#detail-title");
const storyTitle = document.querySelector("#story-title");
const storyText = document.querySelector("#story-text");
const storyIllustration = document.querySelector("#story-illustration");

function showScreen(id) {
  screens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.id === id);
  });
}

function makeChoice({ label, mark, color }, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "choice-button";
  button.dataset.mark = mark;
  button.setAttribute("aria-label", label);
  button.style.setProperty("--button-color", color);
  button.innerHTML = `<span>${label}</span>`;
  button.addEventListener("click", onClick);
  return button;
}

function renderEmotions() {
  emotionList.innerHTML = "";
  emotions.forEach((emotion) => {
    emotionList.append(
      makeChoice(emotion, () => {
        state.emotion = emotion;
        state.detail = null;
        detailTitle.textContent = `「${emotion.label}」のそばにあるものは？`;
        renderDetails();
        showScreen("detail-screen");
      }),
    );
  });
}

function renderDetails() {
  detailList.innerHTML = "";
  state.emotion.details.forEach((detail) => {
    detailList.append(
      makeChoice(
        { ...detail, mark: "声", color: state.emotion.color },
        () => {
          state.detail = detail;
          renderScenes();
          showScreen("scene-screen");
        },
      ),
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

function renderStory() {
  const { emotion, detail, scene } = state;
  storyTitle.textContent = emotion.storyName;
  storyIllustration.className = `story-illustration ${scene.className}`;
  storyIllustration.style.setProperty("--scene-bg", scene.background);

  const paragraphs = [
    `${scene.place}に、${emotion.title}がいました。${emotion.phrase}。${detail.line}`,
    `だれもその気持ちを追い出そうとはしませんでした。${emotion.accept} ${scene.imageLine}`,
    `しばらくすると、${scene.lastLine} その気持ちはまだそこにあったけれど、ひとりぼっちではありませんでした。`,
  ];

  storyText.innerHTML = paragraphs.map((text) => `<p>${text}</p>`).join("");
}

document.querySelector("[data-start]").addEventListener("click", () => {
  showScreen("emotion-screen");
});

document.querySelector("[data-reset]").addEventListener("click", () => {
  state.emotion = null;
  state.detail = null;
  state.scene = null;
  showScreen("title-screen");
});

document.querySelectorAll("[data-back]").forEach((button) => {
  button.addEventListener("click", () => {
    showScreen(button.dataset.back);
  });
});

renderEmotions();
