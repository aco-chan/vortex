const state = {
  name: "",
  suffix: "ちゃん",
  emotion: null,
  detail: null,
  scene: null,
};

window.EmoCompassVersion = "v0.5.2";

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
    line: "ほんとうは、ちゃんとみつけてほしかった こえがありました。",
    phrase: "わかってほしかったんだ",
    compass: "いまのきもちは、あなたを こまらせるためではなく、みつけてほしい こえなのかもしれません。",
  },
  {
    id: "cherished",
    label: "たいせつにしてほしかった",
    mark: "て",
    wish: "たいせつにしてほしかったきづく持ち",
    line: "ほんとうは、じぶんの中の たいせつなところを、そっと扱ってほしかったのです。",
    phrase: "たいせつにしてほしかったんだ",
    compass: "たいせつにしてほしいと 思う きもちは、心の中の たからものを まもろうとする 力です。",
  },
  {
    id: "not-alone",
    label: "ひとりにしないでほしかった",
    mark: "となり",
    wish: "ひとりにしないでほしかった きもち",
    line: "ほんとうは、となりにいるよと言ってくれるけはいを探していました。",
    phrase: "ひとりにしないでほしかった",
    compass: "さみしいきづく持ちは、つながりをたいせつにしているしるしかもしれません。",
  },
  {
    id: "cant-say",
    label: "うまく言えなかった",
    mark: "言",
    wish: "ことばになりきらなかった きもち",
    line: "ほんとうは、ことばになる前の きもちが、むねの中で まっていました。",
    phrase: "うまく言えなかったんだ",
    compass: "うまく言えない日も、心はちゃんと なにかを 感じています。",
  },
  {
    id: "no-fail",
    label: "しっぱいしたくなかった",
    mark: "みち",
    wish: "だいじに すすみたかった きもち",
    line: "ほんとうは、だいじな 一歩をこぼさないように歩きたかったのです。",
    phrase: "しっぱいしたくなかったんだ",
    compass: "ふあんは、ちゃんと すすみたい きもちのそばに ともる 小さな あかりです。",
  },
  {
    id: "too-hard",
    label: "がんばりすぎていた",
    mark: "にもつ",
    wish: "たくさんがんばってきたきづく持ち",
    line: "ほんとうは、ずっと持っていたにもつを少し おろしたかったのかもしれません。",
    phrase: "がんばりすぎていたんだ",
    compass: "きょうは、少しだけ じぶんの みかたをしてみよう。",
  },
  {
    id: "help",
    label: "ほんとうは たすけてほしかった",
    mark: "ひ",
    wish: "たすけてほしかった きもち",
    line: "ほんとうは、ひとりで抱えなくてもいいよというてを待っていました。",
    phrase: "たすけてほしかったんだ",
    compass: "たすけてほしいと 思えることも、じぶんを まもる たいせつな 力です。",
  },
  {
    id: "seen",
    label: "ちゃんと みてほしかった",
    mark: "め",
    wish: "ちゃんと みてほしかったきづく持ち",
    line: "ほんとうは、ここにいるよと きづいてほしかったのです。",
    phrase: "ちゃんと みてほしかった",
    compass: "みてほしい きもちは、あなたが ここにいるという たいせつな しるしです。",
  },
  {
    id: "compare",
    label: "くらべられたくなかった",
    mark: "は",
    wish: "じぶんのままでいたかった きもち",
    line: "ほんとうは、だれかと 同じ かたちにならなくてもいい場所にいたかったのです。",
    phrase: "くらべられたくなかった",
    compass: "あなたのほはばには、あなたの時間があります。",
  },
  {
    id: "rest",
    label: "やすみたかった",
    mark: "やすむ",
    wish: "やすみたかったきづく持ち",
    line: "ほんとうは、しずかな 場所で からだと 心を やすませたかったのです。",
    phrase: "やすみたかったんだ",
    compass: "やすみたい きもちは、もう一度 いきをするための あいずです。",
  },
  {
    id: "no",
    label: "いやだと言いたかった",
    mark: "いや",
    wish: "じぶんを まもりたかった きもち",
    line: "ほんとうは、ここから先はいやだよとさかいめを置きたかったのです。",
    phrase: "いやだと言いたかった",
    compass: "いやだと 言いたい きもちも、ここにいていい。",
  },
  {
    id: "unknown",
    label: "じぶんでも どうしたらいいか わからなかった",
    mark: "くも",
    wish: "こたえが まだ みつからない きもち",
    line: "ほんとうは、こたえが 出るまで あせらず まってほしかったのかもしれません。",
    phrase: "どうしたらいいかわからなかった",
    compass: "わからない きもちは、まだ かたちを さがしている とちゅうです。",
  },
];

const positiveDetails = [
  {
    id: "share",
    label: "だれかと わかちあいたかった",
    mark: "わける",
    wish: "わかちあいたかった きもち",
    line: "ほんとうは、このあかるさをだれかに そっと 見せたかったのです。",
    phrase: "だれかと わかちあいたかった",
    compass: "うれしい きもちは、だれかと わけても 小さくならない あかりです。",
  },
  {
    id: "remember",
    label: "できたことを おぼえておきたかった",
    mark: "たから",
    wish: "おぼえておきたかった きもち",
    line: "ほんとうは、このできたという小さな ひかりをしまっておきたかったのです。",
    phrase: "できたことを おぼえておきたかった",
    compass: "できたことを、きょうは ちゃんと おぼえておこう。",
  },
  {
    id: "more",
    label: "もっとやってみたかった",
    mark: "つぎ",
    wish: "つぎへ すすんでみたい きもち",
    line: "ほんとうは、もう一歩だけ 先をのぞいてみたかったのです。",
    phrase: "もっとやってみたかった",
    compass: "たのしい きもちは、つぎの 一歩を てらす 小さな 地図です。",
  },
  {
    id: "love",
    label: "だいすきな きもちを つたえたかった",
    mark: "すき",
    wish: "だいすきと つたえたかった きもち",
    line: "ほんとうは、むねの中のあたたかさをだれかに届けたかったのです。",
    phrase: "だいすきな きもちを つたえたかった",
    compass: "すきと 思えた きもちも、あなたの たいせつな たからものです。",
  },
  {
    id: "safe-place",
    label: "あんしんできる 場所があった",
    mark: "いえ",
    wish: "あんしんできる 場所を 感じた きもち",
    line: "ほんとうは、ここなら息をしていいと思える場所にきづくづいていました。",
    phrase: "あんしんできる 場所があった",
    compass: "あんしんは、心が ここにいていいと 感じたときに ともります。",
  },
  {
    id: "thanks",
    label: "だれかに ありがとうと 言いたかった",
    mark: "れい",
    wish: "ありがとうを とどけたかった きもち",
    line: "ほんとうは、もらったやさしさに小さくてをふりたかったのです。",
    phrase: "ありがとうと言いたかった",
    compass: "ありがとうと 思えた きもちも、あなたの たいせつな たからものです。",
  },
  {
    id: "self-like",
    label: "じぶんを 少し すきになれた",
    mark: "わたし",
    wish: "じぶんを 少し すきになれたきづく持ち",
    line: "ほんとうは、じぶんの中にある よいところを少し見つけられたのです。",
    phrase: "じぶんを 少し すきになれた",
    compass: "じぶんを 少し すきになれた日は、心のまどが少しひらくいた日です。",
  },
  {
    id: "notice",
    label: "たいせつなものに きづいた",
    mark: "きづく",
    wish: "たいせつなものに きづいたきづく持ち",
    line: "ほんとうは、いつもそばにあったたから物にきづくづいていました。",
    phrase: "たいせつなものに きづいた",
    compass: "たいせつにしたい きもちは、心が えらんだ 小さな 星です。",
  },
  {
    id: "continue",
    label: "これからも つづけてみたいと 思った",
    mark: "つづく",
    wish: "つづけてみたい きもち",
    line: "ほんとうは、このみちをもう少し歩いてみたいと思っていました。",
    phrase: "これからもつづくけてみたい",
    compass: "つづけてみたい きもちは、明日へ向かうやさしい風です。",
  },
  {
    id: "worked",
    label: "うまくいったことがうれしかった",
    mark: "まる",
    wish: "うまくいったことを よろこぶ きもち",
    line: "ほんとうは、うまくいったまるいきづく持ちを胸に置いておきたかったのです。",
    phrase: "うまくいったことがうれしかった",
    compass: "うまくいったことは、小さくても ちゃんと よろこんでいい。",
  },
  {
    id: "opened",
    label: "心が ひらいた感じがした",
    mark: "ひらく",
    wish: "心が ひらいた きもち",
    line: "ほんとうは、心のとびらが少しひらくいて、風が入ってきたのを感じていました。",
    phrase: "心が ひらいた感じがした",
    compass: "心がひらいた感じは、あなたが世界に てを のばしたしるしです。",
  },
  {
    id: "not-forget",
    label: "いまの きもちを わすれたくなかった",
    mark: "おぼえる",
    wish: "わすれたくなかった きもち",
    line: "ほんとうは、このきづく持ちを小さな 本にはさんでおきたかったのです。",
    phrase: "いまの きもちを わすれたくなかった",
    compass: "忘れたくないきづく持ちは、心が たいせつにしたい けしきです。",
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
    image: "むねの おくで 赤い火が ぱちぱち なっていました",
    meaning: "怒りは、悪いものではありませんでした。たいせつにしたいものがあるとき、心が強いこえを出すことがあるのです",
    closing: "火は少し小さくなり、てのひらで見つめられる明かりになりました",
  },
  {
    id: "irritated",
    label: "いらいらする",
    type: "negative",
    group: "つよい きもち",
    mark: "火",
    color: "#f3c7c6",
    image: "小さな針のようなきづく持ちが、むねの中でちくちくしていました",
    meaning: "イライラは、心が ちらかっている しるしではなく、何かを大事にしたかったこえかもしれません",
    closing: "ちくちくはまだ少し のこっていたけれど、なまえを よばれて しずかになりました",
  },
  {
    id: "frustrated",
    label: "くやしい",
    type: "negative",
    group: "つよい きもち",
    mark: "石",
    color: "#f3c7c6",
    image: "むねの中に、ぎゅっとにぎった小石みたいなきづく持ちがありました",
    meaning: "くやしさは、あきらめきれないほど たいせつだったことを知らせていました",
    closing: "小石はたから物みたいに、ポケットの奥へしまわれました",
  },
  {
    id: "scared",
    label: "こわい",
    type: "negative",
    group: "つよい きもち",
    mark: "影",
    color: "#c7bfdc",
    image: "まだよく 見えない かげが、足もとでゆれていました",
    meaning: "こわさは、弱いから来るのではなく、自わけるをまもろうとする心の番人でした",
    closing: "かげは 消えなかったけれど、となりに小さなひりがともりました",
  },
  {
    id: "cant-anymore",
    label: "もうがんばれない",
    type: "negative",
    group: "つよい きもち",
    mark: "やすむ",
    color: "#f4c98f",
    image: "からだの中のランプが、いまにも ねむりそうにゆれていました",
    meaning: "もうがんばれないきづく持ちは、ここまでたくさん進んできたしるしでした",
    closing: "ランプはつよくならなかったけれど、そっとやすむむ場所を見つけました",
  },
  {
    id: "sad",
    label: "かなしい",
    type: "negative",
    group: "しずかな きもち",
    mark: "雨",
    color: "#b7d6df",
    image: "めに見えない雨が、心のポケットにたまっていました",
    meaning: "かなしい きもちは、よわさではありません。たいせつだったものを、心がまだ おぼえている 水でした",
    closing: "雨のあと、とおくに 小さな ひかりが 見えました",
  },
  {
    id: "lonely",
    label: "さみしい",
    type: "negative",
    group: "しずかな きもち",
    mark: "月",
    color: "#b7d6df",
    image: "ひろい へやのまんなかに、ぽつんとすわっているようなきづく持ちがありました",
    meaning: "さみしさは、だれかを たいせつに 思える 心があるからやってくるのかもしれません",
    closing: "ぽつんのとなりに、そっと座る場所ができました",
  },
  {
    id: "anxious",
    label: "ふあん",
    type: "negative",
    group: "しずかな きもち",
    mark: "なみ",
    color: "#c7bfdc",
    image: "まだ 起きていないことのなみが、むねの中で行ったり 来たりしていました",
    meaning: "ふあんは、見えない先を一生懸命見ようとする心のひ台でした",
    closing: "なみはまだ揺れていたけれど、揺れながら進むみちもあるのだと知りました",
  },
  {
    id: "tired",
    label: "つかれた",
    type: "negative",
    group: "しずかな きもち",
    mark: "ひ",
    color: "#f4c98f",
    image: "からだの中のランプが、いつもより低いひかりでともっていました",
    meaning: "疲れは、がんばりが足りない合図ではなく、やすむみたいと教えてくれるこえでした",
    closing: "低いひりは、りょうてで包むと少しあたたかくなりました",
  },
  {
    id: "moyamoya",
    label: "もやもやする",
    type: "negative",
    group: "しずかな きもち",
    mark: "くも",
    color: "#d7eadf",
    image: "なまえのないくもが、胸のあたりにふんわり浮かんでいました",
    meaning: "もやもやは、まだことばになる前の きもちがかたちを さがしている とちゅうでした",
    closing: "くもはまだくものまま、そらにいていいことになりました",
  },
  {
    id: "hidden-sad",
    label: "かなしいけれど言えない",
    type: "negative",
    group: "しずかな きもち",
    mark: "箱",
    color: "#b7d6df",
    image: "涙になる前のきづく持ちが、小さな箱の中で息をしていました",
    meaning: "言えない悲しみも、なかったことにはならないたいせつなきづく持ちでした",
    closing: "箱のふたは、ほんの少しだけひらくきました",
  },
  {
    id: "alone",
    label: "ひとりぼっち",
    type: "negative",
    group: "しずかな きもち",
    mark: "星",
    color: "#b7d6df",
    image: "広いそらに、星がひとつだけひかりっているようでした",
    meaning: "ひとりぼっちのきづく持ちは、つながりを忘れたくない心から生まれていました",
    closing: "ひとつの星のそばに、もうひとつ小さな星が見えました",
  },
  {
    id: "happy",
    label: "うれしい",
    type: "positive",
    group: "あたたかい きもち",
    mark: "ひかり",
    color: "#f4c98f",
    image: "むねの中に、小さな ひかりがぽっとともっていました",
    meaning: "うれしさは、心が たいせつなものに 出会ったときに 生まれる あかりでした",
    closing: "そのひかりは、しまっても消えない小さなひりになりました",
  },
  {
    id: "relieved",
    label: "あんしんしている",
    type: "positive",
    group: "あたたかい きもち",
    mark: "いえ",
    color: "#d7eadf",
    image: "心の中に、風の入る小さないえがありました",
    meaning: "あんしんは、ここにいていいと心が感じたときにやってくるしずかな もうふでした",
    closing: "そのいえのまどには、やわらかな あかりが残りました",
  },
  {
    id: "hottoshiteiru",
    label: "ほっとしている",
    type: "positive",
    group: "あたたかい きもち",
    mark: "ゆ",
    color: "#d7eadf",
    image: "むねの中に、あたたかいゆきづくがふわりとのぼりました",
    meaning: "ほっとするきづく持ちは、心が少し 力を ぬけたというやさしい知らせでした",
    closing: "ゆきづくはゆっくりそらへほどけていきました",
  },
  {
    id: "like",
    label: "すき",
    type: "positive",
    group: "あたたかい きもち",
    mark: "すき",
    color: "#f3c7c6",
    image: "むねの おくで、やわらかな花がひらいていました",
    meaning: "すきというきづく持ちは、心が たいせつなものの 方へ そっと 向いている しるしでした",
    closing: "花はだれにもせかされず、そこに咲いていました",
  },
  {
    id: "thanks",
    label: "ありがとうと 思っている",
    type: "positive",
    group: "あたたかい きもち",
    mark: "れい",
    color: "#f4c98f",
    image: "むねの中に、小さなて紙が一通ありました",
    meaning: "ありがとうは、もらったやさしさを心が おぼえている しるしでした",
    closing: "て紙は、風に のる前のようにあたたかくひかりりました",
  },
  {
    id: "warm",
    label: "心が あたたかい",
    type: "positive",
    group: "あたたかい きもち",
    mark: "あたたか",
    color: "#f4c98f",
    image: "むねのまんなかに、毛布みたいなぬくもりがありました",
    meaning: "あたたかさは、心がやさしさにふれたおぼえる憶でした",
    closing: "そのぬくもりは、きょうの中に しずかに のこりました",
  },
  {
    id: "fun",
    label: "たのしい",
    type: "positive",
    group: "ひらいていく きもち",
    mark: "おと",
    color: "#f4c98f",
    image: "むねの中で、小さなおと楽がはずんでいました",
    meaning: "楽しさは、心がもっと世界にふれてみたいと思ったおとでした",
    closing: "おと楽は、つぎの一歩のところで小さく鳴っていました",
  },
  {
    id: "excited",
    label: "わくわくする",
    type: "positive",
    group: "ひらいていく きもち",
    mark: "ふね",
    color: "#c7bfdc",
    image: "むねの中で、小さなふねがしゅっぱつの風を待っていました",
    meaning: "わくわくは、まだ知らない けしきに心がてを伸ばしているしるしでした",
    closing: "ふねはまだみなとにいても、ほはもう少しふくらんでいました",
  },
  {
    id: "proud",
    label: "ほこらしい",
    type: "positive",
    group: "ひらいていく きもち",
    mark: "はた",
    color: "#d7eadf",
    image: "むねの中に、小さなはたがまっすぐ立っていました",
    meaning: "誇らしさは、自わけるの歩いてきたみちを心が認めたしるしでした",
    closing: "はたは大きく ふらなくても、ちゃんとそこに立っていました",
  },
  {
    id: "try",
    label: "やってみたい",
    type: "positive",
    group: "ひらいていく きもち",
    mark: "め",
    color: "#d7eadf",
    image: "むねの 土の中から、小さなめが顔を出していました",
    meaning: "やってみたいきづく持ちは、まだ小さくても未来へ伸びるめでした",
    closing: "めは急がず、でも確かにそらの方を向いていました",
  },
  {
    id: "done",
    label: "できた",
    type: "positive",
    group: "ひらいていく きもち",
    mark: "まる",
    color: "#f4c98f",
    image: "むねの中に、まあるい みがひとつできていました",
    meaning: "できたというきづく持ちは、小さなできたことを心がたから物に変えたものでした",
    closing: "まあるい みは、きょうのポケットにそっと入りました",
  },
  {
    id: "cherish",
    label: "たいせつにしたい",
    type: "positive",
    group: "ひらいていく きもち",
    mark: "たから",
    color: "#f3c7c6",
    image: "むねの中に、そっとつつみたい小さなたから物がありました",
    meaning: "たいせつにしたいきづく持ちは、心が選んだものをまもろうとするやさしい力でした",
    closing: "たから物は、りょうての中でしずかにひかりっていました",
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
    texture: "はっぱは、急がない拍てみたいに、さわさわと揺れていました。",
    breath: "き々のあいだで息をすると、むねの中に小さなみちが一本ひらきました。",
  },
  {
    id: "sea",
    label: "よるの海",
    mark: "なみ",
    color: "#b7d6df",
    className: "sea",
    background: "linear-gradient(#34435f 0 58%, #557f96 58% 100%)",
    place: "よるの海",
    texture: "なみは、言はにできないきづく持ちを、行ったり 来たりさせていました。",
    breath: "月の細いひかりが、いきを ひとつぶんだけ かるくしてくれました。",
  },
  {
    id: "room",
    label: "小さなへや",
    mark: "まど",
    color: "#f8edda",
    className: "room",
    background: "linear-gradient(#f5e4c9 0 68%, #d9b99d 68% 100%)",
    place: "小さなへや",
    texture: "まどのそばのいすは、何も 言わずにとなりをそらけてくれました。",
    breath: "部屋のすみのひりが、きょうのきづく持ちをそのまま照らしていました。",
  },
  {
    id: "cloud",
    label: "くもの上",
    mark: "そら",
    color: "#c7bfdc",
    className: "cloud",
    background: "linear-gradient(#cbdff1 0 70%, #efe7f6 70% 100%)",
    place: "くもの上",
    texture: "くもはふかふかで、こたえを急がず、ただ体をうけとめました。",
    breath: "遠くのそらが少し明るくなり、かたの 力がふっとほどけました。",
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
  const previewName = enteredName ? `${enteredName}${suffix}` : "しゅじんこう";
  namePreview.textContent = `${previewName}としてものがたりに 出てきます`;
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

function getStoryTone(emotion) {
  if (emotion.type === "positive") {
    return {
      holding:
        "ぴーとごまじろうは、そのあかるい きもちを大きく さわがせず、こぼれないようにりょうてでそっとうけとめました。",
      perspective:
        "このきづく持ちは、いそいで つかいきるものではなく、あとで思い出せる 小さな たからものなのかもしれません。",
    };
  }

  return {
    holding:
      "ぴーとごまじろうは、そのきもちを おいだそうとせず、ただとなりにすわっていっしょに 見つめました。",
    perspective:
      "このきづく持ちは、なくすものではなく、心の おくにある こえをしらせにきたのかもしれません。",
  };
}

function renderStory() {
  const { emotion, detail, scene } = state;
  const heroName = getHeroName();
  const safeHeroName = escapeHtml(heroName);
  const tone = getStoryTone(emotion);

  storyTitle.textContent = `${heroName}と${emotion.label}の 小さな ちず`;
  storyIllustration.className = `story-illustration ${scene.className}`;
  storyIllustration.style.setProperty("--scene-bg", scene.background);

  const paragraphs = [
    `${safeHeroName}は、${scene.place}で「${escapeHtml(emotion.label)}」という きもちを みつけました。`,
    `${safeHeroName}のむねの中では、${escapeHtml(emotion.image)}。`,
    `そこへ${companions.bird}と${companions.seal}がやってきて、${safeHeroName}のそばにそっと座りました。`,
    `${escapeHtml(tone.holding)}`,
    `${escapeHtml(detail.line)} ${companions.bird}は「${escapeHtml(detail.phrase)}って 言ってもいいよ」と小さく いいました。`,
    `${companions.seal}は「それは、${escapeHtml(detail.wish)}なのかもしれないね」と いいました。`,
    `${escapeHtml(emotion.meaning)}。${escapeHtml(scene.texture)}`,
    `${escapeHtml(scene.breath)} ${escapeHtml(emotion.closing)}。`,
  ];

  storyText.innerHTML = paragraphs.map((text) => `<p>${text}</p>`).join("");
  perspectiveBox.innerHTML = `<span>R' あたらしい見かた</span>${escapeHtml(tone.perspective)}`;
  compassBox.innerHTML = `<span>きょうのコンパス</span>${escapeHtml(detail.compass)}`;
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
