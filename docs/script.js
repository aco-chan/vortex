const state = {
  name: "",
  suffix: "ちゃん",
  emotion: null,
  detail: null,
  scene: null,
};

window.EmoCompassVersion = "v0.5.1";

const companions = {
  bird: "ぴー",
  seal: "ごまじろう",
};

const emotionGroups = [
  "つよい気持ち",
  "しずかな気持ち",
  "あたたかい気持ち",
  "ひらいていく気持ち",
];

const negativeDetails = [
  {
    id: "understood",
    label: "本当はわかってほしかった",
    mark: "声",
    wish: "わかってほしかった気持ち",
    line: "ほんとうは、ちゃんと見つけてほしかった声がありました。",
    phrase: "わかってほしかったんだ",
    compass: "いまの気持ちは、あなたを困らせるためではなく、見つけてほしい声なのかもしれません。",
  },
  {
    id: "cherished",
    label: "大切にしてほしかった",
    mark: "手",
    wish: "大切にしてほしかった気持ち",
    line: "ほんとうは、自分の中の大切なところを、そっと扱ってほしかったのです。",
    phrase: "大切にしてほしかったんだ",
    compass: "大切にしてほしいと思う気持ちは、心の中の宝物を守ろうとする力です。",
  },
  {
    id: "not-alone",
    label: "ひとりにしないでほしかった",
    mark: "隣",
    wish: "ひとりにしないでほしかった気持ち",
    line: "ほんとうは、となりにいるよと言ってくれる気配を探していました。",
    phrase: "ひとりにしないでほしかった",
    compass: "さみしい気持ちは、つながりを大切にしているしるしかもしれません。",
  },
  {
    id: "cant-say",
    label: "うまく言えなかった",
    mark: "言",
    wish: "言葉になりきらなかった気持ち",
    line: "ほんとうは、言葉になる前の気持ちが、胸の中で待っていました。",
    phrase: "うまく言えなかったんだ",
    compass: "うまく言えない日も、心はちゃんと何かを感じています。",
  },
  {
    id: "no-fail",
    label: "失敗したくなかった",
    mark: "道",
    wish: "大事に進みたかった気持ち",
    line: "ほんとうは、大事な一歩をこぼさないように歩きたかったのです。",
    phrase: "失敗したくなかったんだ",
    compass: "不安は、ちゃんと進みたい気持ちのそばに灯る小さな明かりです。",
  },
  {
    id: "too-hard",
    label: "がんばりすぎていた",
    mark: "荷",
    wish: "たくさんがんばってきた気持ち",
    line: "ほんとうは、ずっと持っていた荷物を少し下ろしたかったのかもしれません。",
    phrase: "がんばりすぎていたんだ",
    compass: "今日は、少しだけ自分の味方をしてみよう。",
  },
  {
    id: "help",
    label: "本当は助けてほしかった",
    mark: "灯",
    wish: "助けてほしかった気持ち",
    line: "ほんとうは、ひとりで抱えなくてもいいよという手を待っていました。",
    phrase: "助けてほしかったんだ",
    compass: "助けてほしいと思えることも、自分を守る大切な力です。",
  },
  {
    id: "seen",
    label: "ちゃんと見てほしかった",
    mark: "目",
    wish: "ちゃんと見てほしかった気持ち",
    line: "ほんとうは、ここにいるよと気づいてほしかったのです。",
    phrase: "ちゃんと見てほしかった",
    compass: "見てほしい気持ちは、あなたがここにいるという大切なしるしです。",
  },
  {
    id: "compare",
    label: "比べられたくなかった",
    mark: "葉",
    wish: "自分のままでいたかった気持ち",
    line: "ほんとうは、誰かと同じ形にならなくてもいい場所にいたかったのです。",
    phrase: "比べられたくなかった",
    compass: "あなたの歩幅には、あなたの時間があります。",
  },
  {
    id: "rest",
    label: "休みたかった",
    mark: "休",
    wish: "休みたかった気持ち",
    line: "ほんとうは、静かな場所で体と心を休ませたかったのです。",
    phrase: "休みたかったんだ",
    compass: "休みたい気持ちは、もう一度息をするための合図です。",
  },
  {
    id: "no",
    label: "いやだと言いたかった",
    mark: "境",
    wish: "自分を守りたかった気持ち",
    line: "ほんとうは、ここから先はいやだよと境目を置きたかったのです。",
    phrase: "いやだと言いたかった",
    compass: "いやだと言いたい気持ちも、ここにいていい。",
  },
  {
    id: "unknown",
    label: "自分でもどうしたらいいかわからなかった",
    mark: "雲",
    wish: "答えがまだ見つからない気持ち",
    line: "ほんとうは、答えが出るまで急がず待ってほしかったのかもしれません。",
    phrase: "どうしたらいいかわからなかった",
    compass: "わからない気持ちは、まだ形を探している途中です。",
  },
];

const positiveDetails = [
  {
    id: "share",
    label: "誰かと分かち合いたかった",
    mark: "分",
    wish: "分かち合いたかった気持ち",
    line: "ほんとうは、この明るさを誰かにそっと見せたかったのです。",
    phrase: "誰かと分かち合いたかった",
    compass: "うれしい気持ちは、誰かと分けても小さくならない灯りです。",
  },
  {
    id: "remember",
    label: "できたことを覚えておきたかった",
    mark: "宝",
    wish: "覚えておきたかった気持ち",
    line: "ほんとうは、このできたという小さな光をしまっておきたかったのです。",
    phrase: "できたことを覚えておきたかった",
    compass: "できたことを、今日はちゃんと覚えておこう。",
  },
  {
    id: "more",
    label: "もっとやってみたかった",
    mark: "次",
    wish: "次へ進んでみたい気持ち",
    line: "ほんとうは、もう一歩だけ先をのぞいてみたかったのです。",
    phrase: "もっとやってみたかった",
    compass: "楽しい気持ちは、次の一歩を照らす小さな地図です。",
  },
  {
    id: "love",
    label: "大好きな気持ちを伝えたかった",
    mark: "好",
    wish: "大好きと伝えたかった気持ち",
    line: "ほんとうは、胸の中のあたたかさを誰かに届けたかったのです。",
    phrase: "大好きな気持ちを伝えたかった",
    compass: "好きと思えた気持ちも、あなたの大切な宝物です。",
  },
  {
    id: "safe-place",
    label: "安心できる場所があった",
    mark: "家",
    wish: "安心できる場所を感じた気持ち",
    line: "ほんとうは、ここなら息をしていいと思える場所に気づいていました。",
    phrase: "安心できる場所があった",
    compass: "安心は、心がここにいていいと感じたときに灯ります。",
  },
  {
    id: "thanks",
    label: "誰かにありがとうと言いたかった",
    mark: "礼",
    wish: "ありがとうを届けたかった気持ち",
    line: "ほんとうは、もらったやさしさに小さく手をふりたかったのです。",
    phrase: "ありがとうと言いたかった",
    compass: "ありがとうと思えた気持ちも、あなたの大切な宝物です。",
  },
  {
    id: "self-like",
    label: "自分を少し好きになれた",
    mark: "私",
    wish: "自分を少し好きになれた気持ち",
    line: "ほんとうは、自分の中にあるよいところを少し見つけられたのです。",
    phrase: "自分を少し好きになれた",
    compass: "自分を少し好きになれた日は、心の窓が少し開いた日です。",
  },
  {
    id: "notice",
    label: "大切なものに気づいた",
    mark: "気",
    wish: "大切なものに気づいた気持ち",
    line: "ほんとうは、いつもそばにあった宝物に気づいていました。",
    phrase: "大切なものに気づいた",
    compass: "大切にしたい気持ちは、心が選んだ小さな星です。",
  },
  {
    id: "continue",
    label: "これからも続けてみたいと思った",
    mark: "続",
    wish: "続けてみたい気持ち",
    line: "ほんとうは、この道をもう少し歩いてみたいと思っていました。",
    phrase: "これからも続けてみたい",
    compass: "続けてみたい気持ちは、明日へ向かうやさしい風です。",
  },
  {
    id: "worked",
    label: "うまくいったことがうれしかった",
    mark: "丸",
    wish: "うまくいったことを喜ぶ気持ち",
    line: "ほんとうは、うまくいった丸い気持ちを胸に置いておきたかったのです。",
    phrase: "うまくいったことがうれしかった",
    compass: "うまくいったことは、小さくてもちゃんと祝っていい。",
  },
  {
    id: "opened",
    label: "心がひらいた感じがした",
    mark: "開",
    wish: "心がひらいた気持ち",
    line: "ほんとうは、心の扉が少し開いて、風が入ってきたのを感じていました。",
    phrase: "心がひらいた感じがした",
    compass: "心がひらいた感じは、あなたが世界に手を伸ばしたしるしです。",
  },
  {
    id: "not-forget",
    label: "今の気持ちを忘れたくなかった",
    mark: "記",
    wish: "忘れたくなかった気持ち",
    line: "ほんとうは、この気持ちを小さな本にはさんでおきたかったのです。",
    phrase: "今の気持ちを忘れたくなかった",
    compass: "忘れたくない気持ちは、心が大切にしたい景色です。",
  },
];

const emotions = [
  {
    id: "angry",
    label: "怒っている",
    type: "negative",
    group: "つよい気持ち",
    mark: "火",
    color: "#f3c7c6",
    image: "胸の奥で赤い火がぱちぱち鳴っていました",
    meaning: "怒りは、悪いものではありませんでした。大切にしたいものがあるとき、心が強い声を出すことがあるのです",
    closing: "火は少し小さくなり、手のひらで見つめられる明かりになりました",
  },
  {
    id: "irritated",
    label: "イライラする",
    type: "negative",
    group: "つよい気持ち",
    mark: "火",
    color: "#f3c7c6",
    image: "小さな針のような気持ちが、胸の中でちくちくしていました",
    meaning: "イライラは、心が散らかっているしるしではなく、何かを大事にしたかった声かもしれません",
    closing: "ちくちくはまだ少し残っていたけれど、名前を呼ばれて静かになりました",
  },
  {
    id: "frustrated",
    label: "くやしい",
    type: "negative",
    group: "つよい気持ち",
    mark: "石",
    color: "#f3c7c6",
    image: "胸の中に、ぎゅっとにぎった小石みたいな気持ちがありました",
    meaning: "くやしさは、あきらめきれないほど大切だったことを知らせていました",
    closing: "小石は宝物みたいに、ポケットの奥へしまわれました",
  },
  {
    id: "scared",
    label: "こわい",
    type: "negative",
    group: "つよい気持ち",
    mark: "影",
    color: "#c7bfdc",
    image: "まだよく見えない影が、足もとでゆれていました",
    meaning: "こわさは、弱いから来るのではなく、自分を守ろうとする心の番人でした",
    closing: "影は消えなかったけれど、となりに小さな灯りがともりました",
  },
  {
    id: "cant-anymore",
    label: "もうがんばれない",
    type: "negative",
    group: "つよい気持ち",
    mark: "休",
    color: "#f4c98f",
    image: "からだの中のランプが、今にも眠りそうにゆれていました",
    meaning: "もうがんばれない気持ちは、ここまでたくさん進んできたしるしでした",
    closing: "ランプは強くならなかったけれど、そっと休む場所を見つけました",
  },
  {
    id: "sad",
    label: "悲しい",
    type: "negative",
    group: "しずかな気持ち",
    mark: "雨",
    color: "#b7d6df",
    image: "目に見えない雨が、心のポケットにたまっていました",
    meaning: "悲しみは、弱さではありませんでした。大切だったものを、心がまだ覚えている水でした",
    closing: "雨のあと、遠くに小さな光が見えました",
  },
  {
    id: "lonely",
    label: "さみしい",
    type: "negative",
    group: "しずかな気持ち",
    mark: "月",
    color: "#b7d6df",
    image: "広い部屋のまんなかに、ぽつんと座っているような気持ちがありました",
    meaning: "さみしさは、だれかを大切に思える心があるからやってくるのかもしれません",
    closing: "ぽつんのとなりに、そっと座る場所ができました",
  },
  {
    id: "anxious",
    label: "不安",
    type: "negative",
    group: "しずかな気持ち",
    mark: "波",
    color: "#c7bfdc",
    image: "まだ起きていないことの波が、胸の中で行ったり来たりしていました",
    meaning: "不安は、見えない先を一生懸命見ようとする心の灯台でした",
    closing: "波はまだ揺れていたけれど、揺れながら進む道もあるのだと知りました",
  },
  {
    id: "tired",
    label: "つかれた",
    type: "negative",
    group: "しずかな気持ち",
    mark: "灯",
    color: "#f4c98f",
    image: "からだの中のランプが、いつもより低い光でともっていました",
    meaning: "疲れは、がんばりが足りない合図ではなく、休みたいと教えてくれる声でした",
    closing: "低い灯りは、両手で包むと少しあたたかくなりました",
  },
  {
    id: "moyamoya",
    label: "もやもやする",
    type: "negative",
    group: "しずかな気持ち",
    mark: "雲",
    color: "#d7eadf",
    image: "名前のない雲が、胸のあたりにふんわり浮かんでいました",
    meaning: "もやもやは、まだ言葉になる前の気持ちが形を探している途中でした",
    closing: "雲はまだ雲のまま、空にいていいことになりました",
  },
  {
    id: "hidden-sad",
    label: "かなしいけれど言えない",
    type: "negative",
    group: "しずかな気持ち",
    mark: "箱",
    color: "#b7d6df",
    image: "涙になる前の気持ちが、小さな箱の中で息をしていました",
    meaning: "言えない悲しみも、なかったことにはならない大切な気持ちでした",
    closing: "箱のふたは、ほんの少しだけ開きました",
  },
  {
    id: "alone",
    label: "ひとりぼっち",
    type: "negative",
    group: "しずかな気持ち",
    mark: "星",
    color: "#b7d6df",
    image: "広い空に、星がひとつだけ光っているようでした",
    meaning: "ひとりぼっちの気持ちは、つながりを忘れたくない心から生まれていました",
    closing: "ひとつの星のそばに、もうひとつ小さな星が見えました",
  },
  {
    id: "happy",
    label: "うれしい",
    type: "positive",
    group: "あたたかい気持ち",
    mark: "光",
    color: "#f4c98f",
    image: "胸の中に、小さな光がぽっとともっていました",
    meaning: "うれしさは、心が大切なものに出会ったときに生まれる明かりでした",
    closing: "その光は、しまっても消えない小さな灯りになりました",
  },
  {
    id: "relieved",
    label: "安心している",
    type: "positive",
    group: "あたたかい気持ち",
    mark: "家",
    color: "#d7eadf",
    image: "心の中に、風の入る小さな家がありました",
    meaning: "安心は、ここにいていいと心が感じたときにやってくる静かな毛布でした",
    closing: "その家の窓には、やわらかな明かりが残りました",
  },
  {
    id: "hottoshiteiru",
    label: "ほっとしている",
    type: "positive",
    group: "あたたかい気持ち",
    mark: "湯",
    color: "#d7eadf",
    image: "胸の中に、あたたかい湯気がふわりとのぼりました",
    meaning: "ほっとする気持ちは、心が少し力を抜けたというやさしい知らせでした",
    closing: "湯気はゆっくり空へほどけていきました",
  },
  {
    id: "like",
    label: "好き",
    type: "positive",
    group: "あたたかい気持ち",
    mark: "好",
    color: "#f3c7c6",
    image: "胸の奥で、やわらかな花がひらいていました",
    meaning: "好きという気持ちは、心が大切なものの方へそっと向いているしるしでした",
    closing: "花はだれにも急かされず、そこに咲いていました",
  },
  {
    id: "thanks",
    label: "ありがとうと思っている",
    type: "positive",
    group: "あたたかい気持ち",
    mark: "礼",
    color: "#f4c98f",
    image: "胸の中に、小さな手紙が一通ありました",
    meaning: "ありがとうは、もらったやさしさを心が覚えているしるしでした",
    closing: "手紙は、風に乗る前のようにあたたかく光りました",
  },
  {
    id: "warm",
    label: "心があたたかい",
    type: "positive",
    group: "あたたかい気持ち",
    mark: "温",
    color: "#f4c98f",
    image: "胸のまんなかに、毛布みたいなぬくもりがありました",
    meaning: "あたたかさは、心がやさしさにふれた記憶でした",
    closing: "そのぬくもりは、今日の中に静かに残りました",
  },
  {
    id: "fun",
    label: "楽しい",
    type: "positive",
    group: "ひらいていく気持ち",
    mark: "音",
    color: "#f4c98f",
    image: "胸の中で、小さな音楽がはずんでいました",
    meaning: "楽しさは、心がもっと世界にふれてみたいと思った音でした",
    closing: "音楽は、次の一歩のところで小さく鳴っていました",
  },
  {
    id: "excited",
    label: "わくわくする",
    type: "positive",
    group: "ひらいていく気持ち",
    mark: "船",
    color: "#c7bfdc",
    image: "胸の中で、小さな船が出発の風を待っていました",
    meaning: "わくわくは、まだ知らない景色に心が手を伸ばしているしるしでした",
    closing: "船はまだ港にいても、帆はもう少しふくらんでいました",
  },
  {
    id: "proud",
    label: "誇らしい",
    type: "positive",
    group: "ひらいていく気持ち",
    mark: "旗",
    color: "#d7eadf",
    image: "胸の中に、小さな旗がまっすぐ立っていました",
    meaning: "誇らしさは、自分の歩いてきた道を心が認めたしるしでした",
    closing: "旗は大きく振らなくても、ちゃんとそこに立っていました",
  },
  {
    id: "try",
    label: "やってみたい",
    type: "positive",
    group: "ひらいていく気持ち",
    mark: "芽",
    color: "#d7eadf",
    image: "胸の土の中から、小さな芽が顔を出していました",
    meaning: "やってみたい気持ちは、まだ小さくても未来へ伸びる芽でした",
    closing: "芽は急がず、でも確かに空の方を向いていました",
  },
  {
    id: "done",
    label: "できた",
    type: "positive",
    group: "ひらいていく気持ち",
    mark: "丸",
    color: "#f4c98f",
    image: "胸の中に、まあるい実がひとつできていました",
    meaning: "できたという気持ちは、小さな達成を心が宝物に変えたものでした",
    closing: "まあるい実は、今日のポケットにそっと入りました",
  },
  {
    id: "cherish",
    label: "大切にしたい",
    type: "positive",
    group: "ひらいていく気持ち",
    mark: "宝",
    color: "#f3c7c6",
    image: "胸の中に、そっと包みたい小さな宝物がありました",
    meaning: "大切にしたい気持ちは、心が選んだものを守ろうとするやさしい力でした",
    closing: "宝物は、両手の中で静かに光っていました",
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

function getHeroName() {
  const baseName = state.name.trim() || "あなた";
  return state.name.trim() ? `${baseName}${state.suffix}` : baseName;
}

function updateNamePreview() {
  const enteredName = heroNameInput.value.trim();
  const suffix = getSelectedSuffix();
  const previewName = enteredName ? `${enteredName}${suffix}` : "主人公";
  namePreview.textContent = `${previewName}として物語に出てきます`;
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
    detailTitle.textContent = `「${emotion.label}」の奥にありそうなものは？`;
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

function getStoryTone(emotion) {
  if (emotion.type === "positive") {
    return {
      holding:
        "ぴーとごまじろうは、その明るい気持ちを大きく騒がせず、こぼれないように両手でそっと受けとめました。",
      perspective:
        "この気持ちは、急いで使いきるものではなく、あとで思い出せる小さな宝物なのかもしれません。",
    };
  }

  return {
    holding:
      "ぴーとごまじろうは、その気持ちを追い出そうとせず、ただとなりに座って一緒に見つめました。",
    perspective:
      "この気持ちは、なくすものではなく、心の奥にある声を知らせにきたのかもしれません。",
  };
}

function renderStory() {
  const { emotion, detail, scene } = state;
  const heroName = getHeroName();
  const safeHeroName = escapeHtml(heroName);
  const tone = getStoryTone(emotion);

  storyTitle.textContent = `${heroName}と${emotion.label}の小さな地図`;
  storyIllustration.className = `story-illustration ${scene.className}`;
  storyIllustration.style.setProperty("--scene-bg", scene.background);

  const paragraphs = [
    `${safeHeroName}は、${scene.place}で「${escapeHtml(emotion.label)}」という気持ちを見つけました。`,
    `${safeHeroName}の胸の中では、${escapeHtml(emotion.image)}。`,
    `そこへ${companions.bird}と${companions.seal}がやってきて、${safeHeroName}のそばにそっと座りました。`,
    `${escapeHtml(tone.holding)}`,
    `${escapeHtml(detail.line)} ${companions.bird}は「${escapeHtml(detail.phrase)}って言ってもいいよ」と小さく言いました。`,
    `${companions.seal}は「それは、${escapeHtml(detail.wish)}なのかもしれないね」と言いました。`,
    `${escapeHtml(emotion.meaning)}。${escapeHtml(scene.texture)}`,
    `${escapeHtml(scene.breath)} ${escapeHtml(emotion.closing)}。`,
  ];

  storyText.innerHTML = paragraphs.map((text) => `<p>${text}</p>`).join("");
  perspectiveBox.innerHTML = `<span>R' 新しい見方</span>${escapeHtml(tone.perspective)}`;
  compassBox.innerHTML = `<span>今日のコンパス</span>${escapeHtml(detail.compass)}`;
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
