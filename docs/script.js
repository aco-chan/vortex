const state = {
  emotion: null,
  detail: null,
  scene: null,
};

const companions = {
  bird: "ことりのぴー",
  seal: "ごまじろう",
};

const emotions = [
  {
    id: "iraira",
    label: "いらいら",
    mark: "火",
    color: "#f3c7c6",
    character: "ぷんぷんを抱えた子",
    storyName: "ぷんぷんの中にあったもの",
    rawLine: "胸の中で、赤い実みたいな気持ちがぎゅっと熱くなっていました。",
    translation:
      "怒りは、悪い子のしるしではありませんでした。ほんとうは大事にしたいものが、ここにあるよと知らせる、願いのかたちでした。",
    refined:
      "ぷんぷんはまだ少し残っていたけれど、その子はもう、ぷんぷんだけでできているわけではありませんでした。",
    details: [
      {
        id: "understand",
        label: "わかってほしい",
        line: "ほんとうは、だれかに気づいてほしかったのかもしれません。",
        wish: "わかってほしいという願い",
        phrase: "「わかってほしかったんだ」",
      },
      {
        id: "boundary",
        label: "いやだと言いたい",
        line: "ほんとうは、ここから先はいやだよ、と言いたかったのかもしれません。",
        wish: "自分を守りたいという願い",
        phrase: "「いまはいやだって言いたい」",
      },
      {
        id: "love",
        label: "大切だからこわい",
        line: "ほんとうは、大切なものをこぼしたくなくて、力が入っていたのかもしれません。",
        wish: "大切にしたいという願い",
        phrase: "「大切だから、こんなに熱くなるんだ」",
      },
    ],
  },
  {
    id: "kanashii",
    label: "かなしい",
    mark: "雨",
    color: "#b7d6df",
    character: "涙をポケットに入れた子",
    storyName: "涙のあとに見えた光",
    rawLine: "目に見えない雨が、ほっぺの内側を静かにぬらしていました。",
    translation:
      "涙は、弱いから出てくるものではありませんでした。心がちゃんと感じているよ、と知らせる小さな水でした。",
    refined:
      "涙は消えきらなかったけれど、その子は涙のあとに、小さな光を見つけられる子でした。",
    details: [
      {
        id: "cry",
        label: "本当は泣きたい",
        line: "ほんとうは、がまんしていた涙に場所をあげたかったのかもしれません。",
        wish: "泣いてもいい場所がほしいという願い",
        phrase: "「泣きたいくらい、ちゃんと感じているんだ」",
      },
      {
        id: "lonely",
        label: "ひとりでさみしい",
        line: "ほんとうは、そばにいるよと言ってくれる声を探していたのかもしれません。",
        wish: "つながっていたいという願い",
        phrase: "「ひとりじゃないって知りたい」",
      },
      {
        id: "miss",
        label: "なくしたものがある",
        line: "ほんとうは、もう手にないものを、まだ大事に思っていたのかもしれません。",
        wish: "大切だったものを覚えていたいという願い",
        phrase: "「まだ大事なんだ」",
      },
    ],
  },
  {
    id: "tsukareta",
    label: "つかれた",
    mark: "灯",
    color: "#f4c98f",
    character: "小さな灯りを持った子",
    storyName: "休みたい灯り",
    rawLine: "からだの中のランプが、いつもより低い光でともっていました。",
    translation:
      "疲れは、がんばりが足りない合図ではありませんでした。たくさん運んできた心と体が、ここで休もうと教えてくれていました。",
    refined:
      "灯りは強くならなかったけれど、消えそうな灯りを両手で包むことはできました。",
    details: [
      {
        id: "rest",
        label: "何もしたくない",
        line: "ほんとうは、何もしない時間に体を置きたかったのかもしれません。",
        wish: "休んでもいいという許し",
        phrase: "「いまは休みたい」",
      },
      {
        id: "heavy",
        label: "からだが重い",
        line: "ほんとうは、ひとりで持っていた荷物を少し下ろしたかったのかもしれません。",
        wish: "荷物を下ろしたいという願い",
        phrase: "「少し軽くなりたい」",
      },
      {
        id: "quiet",
        label: "静かにしたい",
        line: "ほんとうは、音の少ない場所で息をしたかったのかもしれません。",
        wish: "静けさに守られたいという願い",
        phrase: "「今は静かなところにいたい」",
      },
    ],
  },
  {
    id: "fuan",
    label: "ふあん",
    mark: "月",
    color: "#c7bfdc",
    character: "月を待つ小舟",
    storyName: "ゆれる小舟の見つけたもの",
    rawLine: "まだ起きていないことの影が、足もとでゆらゆら揺れていました。",
    translation:
      "不安は、こわがりだから来るものではありませんでした。見えない先を一生懸命見ようとする、心の灯台でした。",
    refined:
      "小舟はまだ揺れていたけれど、揺れながら進む道もあるのだと、少しだけ知りました。",
    details: [
      {
        id: "future",
        label: "先のことがこわい",
        line: "ほんとうは、まだ白い未来に、そっと線を引いてみたかったのかもしれません。",
        wish: "見通しがほしいという願い",
        phrase: "「少しだけ先を照らしたい」",
      },
      {
        id: "fail",
        label: "失敗しそうでこわい",
        line: "ほんとうは、大事な一歩をちゃんと踏みたいと思っていたのかもしれません。",
        wish: "大事に進みたいという願い",
        phrase: "「ちゃんと進みたいんだ」",
      },
      {
        id: "near",
        label: "そばにいてほしい",
        line: "ほんとうは、同じ波を見てくれる誰かを探していたのかもしれません。",
        wish: "一緒にいてほしいという願い",
        phrase: "「となりにいてほしい」",
      },
    ],
  },
  {
    id: "moyamoya",
    label: "なんとなくもやもや",
    mark: "雲",
    color: "#d7eadf",
    character: "名前のない雲を持った子",
    storyName: "名前のない雲のまんなかで",
    rawLine: "名前のつかない雲が、胸のあたりにふんわり浮かんでいました。",
    translation:
      "もやもやは、はっきりしないからだめなものではありませんでした。まだ言葉になる前の気持ちが、形を探している途中でした。",
    refined:
      "雲はまだ雲のままでした。でもその子は、名前がつく前の気持ちにも居場所を作れました。",
    details: [
      {
        id: "unknown",
        label: "理由がわからない",
        line: "ほんとうは、理由が出てくるまで待ってほしかったのかもしれません。",
        wish: "急がず待ちたいという願い",
        phrase: "「まだ名前がなくてもいい」",
      },
      {
        id: "stuck",
        label: "気持ちが動かない",
        line: "ほんとうは、動けない自分を責めずに置いておきたかったのかもしれません。",
        wish: "そのまま置いておける場所",
        phrase: "「今はここで止まっている」",
      },
      {
        id: "wander",
        label: "どこにも着かない感じ",
        line: "ほんとうは、答えよりも、歩いている途中の景色を見たかったのかもしれません。",
        wish: "途中でいてもいいという許し",
        phrase: "「まだ途中なんだ」",
      },
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
    texture: "葉っぱは、急がない拍手みたいに、さわさわと揺れていました。",
    breath: "木々のあいだで息をすると、胸の中に小さな道が一本ひらきました。",
  },
  {
    id: "sea",
    label: "夜の海",
    mark: "波",
    color: "#b7d6df",
    className: "sea",
    background: "linear-gradient(#34435f 0 58%, #557f96 58% 100%)",
    place: "夜の海",
    texture: "波は、言葉にできない気持ちを、行ったり来たりさせていました。",
    breath: "月の細い光が、息をひとつぶんだけ軽くしてくれました。",
  },
  {
    id: "room",
    label: "小さな部屋",
    mark: "窓",
    color: "#f8edda",
    className: "room",
    background: "linear-gradient(#f5e4c9 0 68%, #d9b99d 68% 100%)",
    place: "小さな部屋",
    texture: "窓のそばの椅子は、何も言わずにとなりを空けてくれました。",
    breath: "部屋のすみの灯りが、今日の気持ちをそのまま照らしていました。",
  },
  {
    id: "cloud",
    label: "雲の上",
    mark: "空",
    color: "#c7bfdc",
    className: "cloud",
    background: "linear-gradient(#cbdff1 0 70%, #efe7f6 70% 100%)",
    place: "雲の上",
    texture: "雲はふかふかで、答えを急がず、ただ体を受けとめました。",
    breath: "遠くの空が少し明るくなり、肩の力がふっとほどけました。",
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
const perspectiveBox = document.querySelector("#perspective-box");

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
        state.scene = null;
        detailTitle.textContent = `「${emotion.label}」の奥にありそうなものは？`;
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
    `あんな気持ち、いるかな。${scene.place}に、${emotion.character}がいました。${emotion.rawLine}`,
    `そこへ、${companions.bird}と${companions.seal}がやってきました。${companions.bird}は言いました。「${emotion.label}って、ここにいるんだね」 ${companions.seal}はうなずいて、「すぐに追い出さなくてもいいよ」と言いました。`,
    `${detail.line} ${scene.texture} その子は小さな声で、${detail.phrase}と言ってみました。`,
    `${companions.seal}は言いました。「それは、${detail.wish}なのかもしれないね」 ${companions.bird}も言いました。「気持ちは、困らせるためじゃなくて、知らせるために来ることがあるんだよ」`,
    `${emotion.translation} ${scene.breath} ${emotion.refined}`,
  ];

  storyText.innerHTML = paragraphs.map((text) => `<p>${text}</p>`).join("");
  perspectiveBox.innerHTML = `<span>R' 新しい見方</span>${emotion.label}は、なくすものではなく、${detail.wish}を知らせる声かもしれません。`;
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
