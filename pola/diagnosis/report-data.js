// ══════════════════════════════════════
// POLA PERSONAL REPORT DATA — v2
// 全12タイプ × 7章 パーソナルレポート
// ══════════════════════════════════════
const REPORT_DATA = {

// ════════════════════════════════════════════════════════
// TYPE 1：ロマンハンター（狩人）Se × heart
// ════════════════════════════════════════════════════════
1: {
scenario: `
<p class="rpt-text">あなたの恋愛の根底には、<strong>「自分は本当に愛されているのか」</strong>という問いが常に流れています。この問いは幼い頃から続いているものであり、それ自体はあなたの弱さではありません。ただ、その問いに答えを出そうとして動き続けてきた——その方法が、恋愛のパターンを作っています。</p>

<div class="rpt-pullquote"><p class="rpt-pullquote-text">追いかけている間こそ、最もエネルギーに満ちている。<br>しかしそれは愛されているからではなく、<br>まだ確かめていないからかもしれない。</p></div>

<p class="rpt-text">あなたが「積極的」に動けるのは、自信があるからではありません。その積極性の裏には、<strong>「動かなければ愛を確かめられない」という衝動</strong>があります。行動することで不安を管理しているのです。これは非常に重要な認識です。多くのロマンハンタータイプの人が「自分は自信家だ」と思っていますが、実態はその逆——<u>アクションは自信ではなく、不安の表れなのです</u>。</p>

<span class="rpt-label">あなたの恋愛傾向プロファイル</span>
<div class="rpt-bars">
  <div class="rpt-bar-row"><span class="rpt-bar-label">行動の積極性</span><div class="rpt-bar-track"><div class="rpt-bar-fill" style="--bar-w:90%"></div></div><span class="rpt-bar-val">90</span></div>
  <div class="rpt-bar-row"><span class="rpt-bar-label">感情の表現度</span><div class="rpt-bar-track"><div class="rpt-bar-fill" style="--bar-w:80%"></div></div><span class="rpt-bar-val">80</span></div>
  <div class="rpt-bar-row"><span class="rpt-bar-label">確認・安心欲求</span><div class="rpt-bar-track"><div class="rpt-bar-fill" style="--bar-w:95%"></div></div><span class="rpt-bar-val">95</span></div>
  <div class="rpt-bar-row"><span class="rpt-bar-label">独立性・自由欲求</span><div class="rpt-bar-track"><div class="rpt-bar-fill" style="--bar-w:30%"></div></div><span class="rpt-bar-val">30</span></div>
  <div class="rpt-bar-row"><span class="rpt-bar-label">長期安定志向</span><div class="rpt-bar-track"><div class="rpt-bar-fill" style="--bar-w:50%"></div></div><span class="rpt-bar-val">50</span></div>
</div>

<p class="rpt-text">確認・安心欲求が<strong>非常に高い傾向</strong>にあることに注目してください。これはあなたが「重い」「依存的」であるということではなく、<u>愛を行動で確かめようとする傾向が極めて強い</u>ことを示しています。この傾向が強ければ強いほど、パートナーへの反応の解釈が精密で、微細な変化に敏感になります。その鋭さは才能でもあり、消耗の源でもあります。</p>

<div class="rpt-note"><span class="rpt-note-icon">◌</span><p class="rpt-note-text">このレポートはあなたの「傾向」を分析したものです。傾向は変えられます。ただし変えるためには、まず自分の傾向を精確に理解することが最初のステップです。</p></div>
`,

attraction: `
<p class="rpt-text">あなたが「この人だ」と感じる瞬間には、ある共通のパターンがあります。それは<strong>「手に入りそうで、まだ手に入っていない」</strong>という絶妙な距離感です。完全に興味を示してくれる相手より、少し距離を置く相手の方がずっと魅力的に感じる——この傾向に心当たりはありませんか。</p>

<div class="rpt-scenario">
  <span class="rpt-scenario-label">こんな場面、ありませんか</span>
  <p class="rpt-scenario-text">最初のデートでとても盛り上がった。帰り道に「また会いたい」と言ったら、相手は「うん、楽しかった」と短く返すだけだった。その夜から、あなたの頭の中は「どういう意味だろう？」「楽しかったとは言ったけど、また会いたいとは言わなかった……」という思考でいっぱいになっていた。</p>
</div>

<p class="rpt-text">この「少し分からない」という不確実性こそが、あなたの恋愛エンジンに火をつけます。確信が持てないから、より深く観察し、より強く動こうとする。<strong>追いかけること自体が、あなたにとっての「生きている感覚」</strong>になっているのです。その<u>追いかける衝動の正体</u>を知ることが、パターンを変える第一歩です。</p>

<p class="rpt-text">その結果、恋愛の初期段階でのあなたのパフォーマンスは非常に高くなります。相手のことをよく観察し、好みを把握し、気遣いを細やかに表現する。「こんなに自分のことを見てくれる人は初めて」と感じさせる力は、12タイプの中でも特別に強いものです。これは紛れもなくあなたの才能です。</p>

<div class="rpt-split">
  <div class="rpt-split-col">
    <span class="rpt-split-head">相手から見たあなた</span>
    <p class="rpt-split-text">情熱的で積極的。自分のことをよく見てくれている。一緒にいると「特別扱いされている」感覚がある。頼もしくて、少し圧倒されるほどの熱量がある。</p>
  </div>
  <div class="rpt-split-col">
    <span class="rpt-split-head">あなたの内側</span>
    <p class="rpt-split-text">「今日の反応はどうだった？」「昨日より短い返信だった気がする」「他に気になる人がいるのかな」という確認の思考が止まらない状態。</p>
  </div>
</div>

<p class="rpt-text">この「外からの印象」と「内側の状態」のギャップが、このタイプの恋愛の出発点です。相手はあなたに魅力と自信を感じていますが、あなた自身の内側は確認の渇望でいっぱいになっています。<u>このズレが後に大きな摩擦を生む種</u>になります。</p>
`,

deepening: `
<p class="rpt-text">関係が深まるにつれ、あなたの中で起きることを丁寧に見ていきましょう。多くのロマンハンタータイプの人が「関係が深まるほど不安が増える」という逆説を経験します。<u>愛されていると分かるほど、次の確認が必要になる</u>——この循環の構造を理解することが重要です。</p>

<span class="rpt-label">深化フェーズで何が起きているか</span>

<p class="rpt-text">関係の初期は「まだ確認できていない」という状態なので、動くことに迷いがありません。しかし関係が深まり、「この人は自分を好きだ」という確信が一度得られると、<strong>今度は「この確信を失いたくない」という恐怖</strong>が生まれます。<u>愛の確認から、愛の喪失への恐怖へと</u>——不安の形が変わるのです。</p>

<p class="rpt-text">この段階で確認行動は質的に変化します。「好きかどうか」を確かめる確認から、「今日も変わらず好きかどうか」を毎日確かめる確認へ。返信の速度、文章の長さ、絵文字の有無、会う頻度——これらすべてが愛情の指標として機能し始めます。</p>

<div class="rpt-scenario">
  <span class="rpt-scenario-label">関係が深まったときに起きること</span>
  <p class="rpt-scenario-text">付き合って3ヶ月。昨日まで返信が早かった相手が、今日は2時間返ってこない。仕事中だと分かっているのに「何かあったのかな」と考え始める。気づいたら相手のSNSを確認して、更新があったことに気づき「返信できる状況なのに連絡しないってどういうこと？」という気持ちになっている。</p>
</div>

<p class="rpt-text">ここで重要なのは、<strong>この反応はあなたの論理ではなく感情の自動反応</strong>だということです。「返信が遅い＝冷めた」という解釈は論理ではなく、不安から来る最悪のシナリオへの飛躍です。しかしその瞬間のあなたにとっては、それが現実に感じられます。</p>

<p class="rpt-text">もう一つ理解しておくべき重要な点があります。関係が深まったとき、あなたの確認行動に気づいた相手は「信頼されていない」と感じ始めます。あなたの動機は不信ではなく不安なのですが、相手側には「なぜこんなに確認されなければならないのか」という疲労感が蓄積していきます。これが関係の最初の亀裂の多くを生み出しています。</p>

<div class="rpt-highlight">深化フェーズで最も大切な認識：あなたが確認を求めるのは、相手を信頼していないからではありません。自分自身の「愛されている感覚」を信頼することが難しいからです。問題の所在は相手ではなく、あなた自身の内側にあります。</div>
`,

trigger: `
<p class="rpt-text">あなたの恋愛が崩れていくとき、そこには<strong>必ず同じメカニズムが働いています</strong>。このメカニズムを理解することは、同じパターンを繰り返さないための最も重要なステップです。</p>

<span class="rpt-label">崩壊メカニズムの5ステップ</span>
<ul class="rpt-step-list">
  <li class="rpt-step"><span class="rpt-step-num">01</span><div><div class="rpt-step-title">微細な変化の検知</div><div class="rpt-step-desc">「いつもより返信が短い」「最近ちょっと素っ気ない気がする」という小さな変化を、平均的な人よりはるかに鋭く感知します。この感度の高さ自体は問題ではありません。</div></div></li>
  <li class="rpt-step"><span class="rpt-step-num">02</span><div><div class="rpt-step-title">最悪シナリオへの飛躍</div><div class="rpt-step-desc">「疲れているだけかも」という中間の解釈を飛び越えて、「冷めたのかも」「他に好きな人ができたのかも」という最悪の解釈に一気に着地してしまいます。この飛躍が自動的・瞬間的に起きます。</div></div></li>
  <li class="rpt-step"><span class="rpt-step-num">03</span><div><div class="rpt-step-title">確認行動の開始</div><div class="rpt-step-desc">不安を解消するために確認しようとします。追加のメッセージ、「最近どう？」という探りを入れる質問、SNSのチェック——これらが始まります。</div></div></li>
  <li class="rpt-step"><span class="rpt-step-num">04</span><div><div class="rpt-step-title">相手の防衛反応</div><div class="rpt-step-desc">確認を受けた相手は、息苦しさや「信頼されていない感覚」を感じ始めます。意図的ではなく自然な反応として、少し距離を置こうとします。</div></div></li>
  <li class="rpt-step"><span class="rpt-step-num">05</span><div><div class="rpt-step-title">恐怖の現実化</div><div class="rpt-step-desc">相手が距離を置く＝最初の直感が正しかった、という証拠に見えてしまいます。確認行動がさらにエスカレートするか、突然の怒りや冷却が起きるかのどちらかに向かいます。</div></div></li>
</ul>

<div class="rpt-highlight">この悲劇の本質は、「相手の冷却→確認行動」という順序ではないことです。多くの場合、「確認行動→相手の冷却」という順序で起きています。<u>あなたが恐れていた結果を、あなた自身が引き寄せている</u>のです。</div>

<p class="rpt-text">これはあなたが悪いということではありません。このパターンは意識して変えない限り、続いていきます。しかし、<u>気づいた今この瞬間から変えられます</u>。</p>
`,

compatibility: `
<p class="rpt-text">あなたとの相性は、<strong>「あなたの強度と確認欲求をどう受け取れるか」</strong>で大きく変わります。以下の相性表は、各タイプとの関係性の傾向を示しています。ただし、すべての関係は個人によって異なります。これはあくまで傾向の参考です。</p>

<div class="rpt-compat-cards">
  <div class="rpt-compat-card"><div class="rpt-compat-card-head"><span class="rpt-compat-card-type">Type 4</span><span class="rpt-compat-card-name">エンパス</span><span class="rpt-compat-card-stars">★★★★★</span></div><p class="rpt-compat-card-desc">調和：「追う×受容」の極性が完璧に噛み合う。あなたの熱量を喜んで受け取るタイプ。</p></div>
  <div class="rpt-compat-card"><div class="rpt-compat-card-head"><span class="rpt-compat-card-type">Type 5</span><span class="rpt-compat-card-name">オブザーバー</span><span class="rpt-compat-card-stars">★★★★☆</span></div><p class="rpt-compat-card-desc">刺激：信頼に時間をかける慎重さが引力を持続させる。深まった後の安定感は最高クラス。</p></div>
  <div class="rpt-compat-card"><div class="rpt-compat-card-head"><span class="rpt-compat-card-type">Type 6</span><span class="rpt-compat-card-name">フェイタリスト</span><span class="rpt-compat-card-stars">★★★☆☆</span></div><p class="rpt-compat-card-desc">刺激：芯のある穏やかさがあなたを落ち着かせる。束縛しすぎると静かに引いていく点に注意。</p></div>
  <div class="rpt-compat-card"><div class="rpt-compat-card-head"><span class="rpt-compat-card-type">Type 7</span><span class="rpt-compat-card-name">ガーディアン</span><span class="rpt-compat-card-stars">★★☆☆☆</span></div><p class="rpt-compat-card-desc">摩擦：行動で愛を示すType 7と言葉で確認したいあなたの間に愛情言語のズレが生じやすい。</p></div>
  <div class="rpt-compat-card"><div class="rpt-compat-card-head"><span class="rpt-compat-card-type">Type 2</span><span class="rpt-compat-card-name">ストラテジスト</span><span class="rpt-compat-card-stars">★★☆☆☆</span></div><p class="rpt-compat-card-desc">摩擦：同じ積極性スタイル同士の主導権争いで消耗しやすい。</p></div>
  <div class="rpt-compat-card"><div class="rpt-compat-card-head"><span class="rpt-compat-card-type">Type 10-12</span><span class="rpt-compat-card-name">冒険型</span><span class="rpt-compat-card-stars">★☆☆☆☆</span></div><p class="rpt-compat-card-desc">困難：あなたの確認行動が「束縛」として感じられ、冒険型が離れていくパターンになりやすい。</p></div>
</div>

<p class="rpt-text">あなたにとって理想的なパートナーの条件は、<strong>「受け取り上手で、あなたの強度を圧力でなく愛情として感じられる人」</strong>です。あなたの確認を「重い」と感じずに「この人は私のことが本当に好きなんだ」と感じられる人——そのような人との関係では、<u>あなたは本来の魅力を最大限に発揮できます</u>。</p>
`,

deeper_need: `
<p class="rpt-text">ここからは、あなたの恋愛の核心にある、本当の欲求について話します。これはこのレポートの中で最も重要なパートかもしれません。</p>

<div class="rpt-pullquote"><p class="rpt-pullquote-text">あなたが本当に求めているのは、<br>「確認できた安心」ではなく、<br>「確認しなくても大丈夫な信頼」です。</p></div>

<p class="rpt-text">多くのロマンハンタータイプの人が、恋愛で追い求めているのは「愛の証明」です。相手の言葉、行動、反応——これらを通じて「自分は愛されている」という確信を得ようとします。しかしここに深刻な逆説があります。<strong>確認によって得られる安心は、一時的なものです。</strong><u>確認できた瞬間に安心するのではなく、次の確認が必要になるサイクル</u>に入ってしまいます。</p>

<p class="rpt-text">これは意志の問題ではなく、<u>構造の問題</u>です。外からの確認で内側の不安を埋めようとしている限り、確認は永遠に必要であり続けます。なぜなら外からの確認は、内側の「愛されていないかもしれない」という問いに根本的には答えられないからです。</p>

<span class="rpt-label">あなたの恋愛に本当に必要なもの</span>
<p class="rpt-text">理想の状態とは、相手が3時間返信しなくても「忙しいんだろう」と思えること。相手が今日少し素っ気なくても「なんか嫌なことがあったのかも」と思えること。この「信頼のバッファ」を持てるかどうかが、あなたの恋愛の質を根本的に変えます。</p>

<p class="rpt-text">そのバッファは、相手への信頼だけから来るのではありません。<strong>「自分は愛されるに値する存在だ」という、自分自身への信頼</strong>から来ます。確認しなくても大丈夫——という感覚は、相手が絶えず確認を与え続けることでは得られません。あなた自身が「自分は十分だ」と感じられるようになることで、初めて生まれます。</p>

<div class="rpt-highlight">あなたが恋愛で求めているのは、最終的には「確認のいらない安心」です。その安心に最も近づく方法は、相手を変えることではなく、あなた自身の「愛されている感覚への信頼」を育てることです。</div>
`,

strategy: `
<p class="rpt-text">ここでは、今日から具体的に使える行動戦略をお伝えします。理論を知るだけでは変わりません。行動を変えることが、パターンを変える唯一の道です。</p>

<span class="rpt-label">戦略1：1時間ルール</span>
<p class="rpt-text">不安を感じてすぐ行動するのではなく、<strong>「1時間後にまだ不安なら動く」</strong>というルールを設けてください。多くの場合、1時間後には感情の波が落ち着いています。これは感情を無視するのではなく、衝動的な確認行動から自分を守るためのバッファです。最初は非常に難しく感じますが、繰り返すうちに「感情の波は必ず落ち着く」という体験が積み重なります。</p>

<span class="rpt-label">戦略2：解釈の幅を広げる練習</span>
<p class="rpt-text">返信が遅い、素っ気ない、などの変化があったとき、最悪の解釈の前に<strong>「他の5つの解釈」</strong>を意識的に考える習慣をつけてください。「疲れている」「急な仕事が入った」「眠い」「スマホが近くにない」「返信する内容を考えている」——どれも十分あり得ます。最悪の解釈は5番目以降に置いてください。</p>

<span class="rpt-label">戦略3：不安を「行動」でなく「言葉」にする</span>
<p class="rpt-text">確認行動の代わりに、気持ちを言語化する練習をしてください。</p>

<div class="rpt-script">
  <span class="rpt-script-label">これまで：確認行動</span>
  <p class="rpt-script-text">「ねえ、最近私のこと好き？」「なんか冷たくない？」「昨日なんかあった？」と畳み掛ける</p>
</div>
<div class="rpt-script">
  <span class="rpt-script-label">変えた後：感情の言語化</span>
  <p class="rpt-script-text">「最近少し不安になってて、それを伝えたかった。理由は分からないんだけど、なんか距離を感じた気がして」</p>
</div>

<p class="rpt-text">この違いは大きいです。前者は相手を試すような圧力になりますが、後者はあなたの内側を見せることで、相手との信頼を深めます。<u>脆弱さを見せることが、実は最も強力な絆の作り方</u>です。</p>

<span class="rpt-label">戦略4：自分の時間を意図的に豊かにする</span>
<p class="rpt-text">恋愛以外に夢中になれるものを持つこと。これはパートナーへの依存度を下げるだけでなく、あなた自身が「自分の人生を生きている」という感覚を与えます。その感覚こそが「確認しなくても大丈夫」という<u>内側の安定を少しずつ育てていきます</u>。</p>

<div class="rpt-note"><span class="rpt-note-icon">✦</span><p class="rpt-note-text">あなたの情熱と行動力は、本物の才能です。方向を少し変えるだけで、それが相手を追い詰める力ではなく、相手を幸せにする力に変わります。変化は一日では起きませんが、今日から始められます。</p></div>
`,
},

// ════════════════════════════════════════════════════════
// TYPE 2：ストラテジスト（戦略家）Se × head
// ════════════════════════════════════════════════════════
2: {
scenario: `
<p class="rpt-text">あなたの恋愛には<strong>「安心は設計するもの」</strong>という深い信念があります。感情に流されず、関係を分析し、主導権を持って設計することで初めて安心できる——このスタイルは多くの場面であなたを守ってきましたが、同時に深い関係への扉を閉ざしてきた部分もあります。</p>

<div class="rpt-pullquote"><p class="rpt-pullquote-text">コントロールしていれば安全だ。<br>しかしコントロールは、相手との距離でもある。</p></div>

<p class="rpt-text">ストラテジストタイプの人にとって、恋愛における「不確実性」は単なる不便ではなく、<strong>脅威として感じられます</strong>。予測できない相手、一貫性のない言動、関係の方向性が曖昧な状態——これらは、<u>あなたの安心システムに直接ダメージを与えます</u>。だからこそ、関係を「設計」し「管理」することで安心を確保しようとするのです。</p>

<span class="rpt-label">あなたの恋愛傾向プロファイル</span>
<div class="rpt-bars">
  <div class="rpt-bar-row"><span class="rpt-bar-label">行動の積極性</span><div class="rpt-bar-track"><div class="rpt-bar-fill" style="--bar-w:75%"></div></div><span class="rpt-bar-val">75</span></div>
  <div class="rpt-bar-row"><span class="rpt-bar-label">感情の表現度</span><div class="rpt-bar-track"><div class="rpt-bar-fill" style="--bar-w:40%"></div></div><span class="rpt-bar-val">40</span></div>
  <div class="rpt-bar-row"><span class="rpt-bar-label">確認・安心欲求</span><div class="rpt-bar-track"><div class="rpt-bar-fill" style="--bar-w:70%"></div></div><span class="rpt-bar-val">70</span></div>
  <div class="rpt-bar-row"><span class="rpt-bar-label">独立性・自由欲求</span><div class="rpt-bar-track"><div class="rpt-bar-fill" style="--bar-w:55%"></div></div><span class="rpt-bar-val">55</span></div>
  <div class="rpt-bar-row"><span class="rpt-bar-label">長期安定志向</span><div class="rpt-bar-track"><div class="rpt-bar-fill" style="--bar-w:85%"></div></div><span class="rpt-bar-val">85</span></div>
</div>

<p class="rpt-text"><strong>感情の表現度が低め</strong>であることに注目してください。これはあなたが感情を持っていないのではありません。感情を「表現すること」に慎重であるということです。なぜなら感情を見せることは、あなたにとって<u>コントロールを手放すこと</u>と直結しているからです。感情的になることで判断が歪むことへの、本能的な恐怖があります。</p>
`,

attraction: `
<p class="rpt-text">あなたが「この人に惹かれる」と感じる瞬間は、多くのタイプと違います。見た目や感情的な引力より先に、<strong>「この人は信頼できそうか」という評価が先に動く</strong>のです。会話の一貫性、約束を守るかどうか、言動に誠実さがあるか——これらを自然と観察し、採点しています。</p>

<div class="rpt-scenario">
  <span class="rpt-scenario-label">ストラテジストが惹かれる瞬間</span>
  <p class="rpt-scenario-text">3回目のデートで「先日言ってたあの話、どうなったの？」と聞かれた。前のデートで話した小さなことを覚えていてくれた。その瞬間、何かが動いた感覚があった。「この人は話をちゃんと聞いている」という確信が生まれた。</p>
</div>

<p class="rpt-text">この評価プロセスは意識的なものでなく、自動的に動いています。一貫性・誠実さ・予測可能性の3つが揃ったと感じたとき、あなたの中で「信頼の扉」が開き始めます。そしてその扉が開くと、今まで慎重だったのが嘘のように、急速に関係が深まっていきます。</p>

<div class="rpt-split">
  <div class="rpt-split-col">
    <span class="rpt-split-head">あなたが引き寄せられる相手</span>
    <p class="rpt-split-text">言ったことを必ずやる人。感情より行動で誠実さを示す人。将来について具体的に話せる人。あなたのリードを受け入れながらも、自分の軸を持っている人。</p>
  </div>
  <div class="rpt-split-col">
    <span class="rpt-split-head">警戒信号を感じる相手</span>
    <p class="rpt-split-text">行動が読めない人。感情的すぎて一貫性がない人。何も計画せず「なんとかなる」という人。あなたのリードを受け入れず、場当たり的に動く人。</p>
  </div>
</div>

<p class="rpt-text">一つ注意しておきたいことがあります。あなたの「信頼の評価プロセス」は精度が高いですが、<strong>「評価している間」は相手に冷たく見えることがあります</strong>。内側では深く関心を持っているのに、表面は慎重で距離があるように映る——このギャップが、せっかく良い相手との関係を進展させる前に終わらせてしまうことがあります。<u>評価中の沈黙が、相手に「興味がない」と誤解される</u>のです。</p>
`,

deepening: `
<p class="rpt-text">あなたの関係が深まる段階は、他のタイプとは明確に違います。長い観察期間の後、<strong>「信頼できる」という判定が出た瞬間に一気に深まる</strong>——この急速な深化が特徴です。相手にとっては「突然距離が縮まった」ように感じられるほどです。</p>

<p class="rpt-text">この段階でのあなたは、非常に誠実で頼もしいパートナーです。計画性があり、約束を守り、相手のことを長期的な視点で考える。この安定感は多くの人にとって非常に魅力的です。しかし同時に、深化とともに<strong>コントロールの傾向も強まっていきます</strong>。</p>

<div class="rpt-scenario">
  <span class="rpt-scenario-label">深化フェーズで起きること</span>
  <p class="rpt-scenario-text">「次の旅行、どこ行きたい？」と聞いたら「どこでもいいよ」と言われた。あなたはすでに3つの候補とコスト比較を調べていた。ここで「どこでもいいって、ちゃんと考えてくれてないの？」という言葉が出そうになった。</p>
</div>

<p class="rpt-text">このシーンで起きていることは、<u>あなたの「設計」と相手の「自由」の衝突</u>です。あなたにとって計画することは愛情の表現ですが、相手にとってそれが「全部決められてしまう」という感覚になり得ます。この摩擦は、多くのストラテジスト関係で繰り返し起きます。</p>

<p class="rpt-text">もう一つの深化フェーズの特徴は、<strong>「想定外の出来事への強い反応」</strong>です。相手が事前に相談せず重要な決断をした、計画を急に変えた、あなたの予測外の行動をとった——こういった場面で、あなたは強い不安か怒りを感じます。それは相手への批判ではなく、<u>設計が崩れたことへの本能的なアラーム</u>です。</p>

<div class="rpt-highlight">深化フェーズで最も重要な認識：あなたが「設計し管理したい」理由は、相手を支配したいのではありません。不確実性の中に安心を見つけることがまだ難しいからです。コントロールは不安への対処法であり、愛情の欠如ではありません。</div>
`,

trigger: `
<p class="rpt-text">あなたの関係が危うくなるとき、必ず<strong>「想定外＋信頼への疑問」</strong>の組み合わせが先に来ています。どちらか一方なら持ちこたえられますが、<u>両方が重なった瞬間に、あなたの内側で関係の再評価が始まります</u>。</p>

<span class="rpt-label">崩壊へのトリガーパターン</span>
<ul class="rpt-step-list">
  <li class="rpt-step"><span class="rpt-step-num">01</span><div><div class="rpt-step-title">想定外の出来事</div><div class="rpt-step-desc">相談なしの決断、約束の変更、一貫性のない言動——これらが「このプロセスは機能しているのか」という疑問を生みます。</div></div></li>
  <li class="rpt-step"><span class="rpt-step-num">02</span><div><div class="rpt-step-title">信頼スコアの再評価</div><div class="rpt-step-desc">頭の中で「これまでの一貫性」の棚卸しが始まります。過去の言動と照らし合わせ、「信頼できる」という判定を維持できるかを計算し直します。</div></div></li>
  <li class="rpt-step"><span class="rpt-step-num">03</span><div><div class="rpt-step-title">感情温度の急低下</div><div class="rpt-step-desc">信頼スコアが一定を下回ると、<u>感情が急速に冷えます</u>。外から見ると「突然冷たくなった」ように見えますが、あなたの内側では長い評価プロセスの結果です。</div></div></li>
  <li class="rpt-step"><span class="rpt-step-num">04</span><div><div class="rpt-step-title">相手の混乱</div><div class="rpt-step-desc">何が起きたか分からない相手は「なぜ急に冷たくなったの？」と聞きますが、あなたはすでに「論理的な理由」でこの結論に達しているため、感情的な訴えが届きにくくなっています。</div></div></li>
</ul>

<div class="rpt-note"><span class="rpt-note-icon">◌</span><p class="rpt-note-text">重要な問い：その「信頼を裏切った」出来事は、本当に意図的な裏切りでしたか？それとも単純なミス、コミュニケーション不足、あるいはあなたの基準と相手の基準のズレでしたか？判断する前に、一度聞いてみましたか？</p></div>
`,

compatibility: `
<p class="rpt-text">あなたとの相性は<strong>「どれだけ一貫性と予測可能性を持った人か」</strong>で大きく変わります。あなたのコントロール傾向を「設計への参加」として楽しめる人が、最もうまくいきます。</p>

<div class="rpt-compat-cards">
  <div class="rpt-compat-card"><div class="rpt-compat-card-head"><span class="rpt-compat-card-type">Type 5</span><span class="rpt-compat-card-name">オブザーバー</span><span class="rpt-compat-card-stars">★★★★★</span></div><p class="rpt-compat-card-desc">調和：同じ「信頼の言語」を持つ者同士。深まった後の安定感は12タイプ最高クラス。</p></div>
  <div class="rpt-compat-card"><div class="rpt-compat-card-head"><span class="rpt-compat-card-type">Type 8</span><span class="rpt-compat-card-name">アーキテクト</span><span class="rpt-compat-card-stars">★★★★☆</span></div><p class="rpt-compat-card-desc">補完：安定構造への価値観が共鳴。Type 8の行動的愛情をあなたが受け取る形に。</p></div>
  <div class="rpt-compat-card"><div class="rpt-compat-card-head"><span class="rpt-compat-card-type">Type 4</span><span class="rpt-compat-card-name">エンパス</span><span class="rpt-compat-card-stars">★★★☆☆</span></div><p class="rpt-compat-card-desc">刺激：Type 4の委ねるスタイルがあなたの主導権欲求に応える。感情を受け取る練習の場にもなる。</p></div>
  <div class="rpt-compat-card"><div class="rpt-compat-card-head"><span class="rpt-compat-card-type">Type 3</span><span class="rpt-compat-card-name">チャレンジャー</span><span class="rpt-compat-card-stars">★★☆☆☆</span></div><p class="rpt-compat-card-desc">摩擦：衝動性があなたの設計を常に崩す。しかし引力は強い。高摩擦・高報酬型。</p></div>
  <div class="rpt-compat-card"><div class="rpt-compat-card-head"><span class="rpt-compat-card-type">Type 10-12</span><span class="rpt-compat-card-name">冒険型</span><span class="rpt-compat-card-stars">★☆☆☆☆</span></div><p class="rpt-compat-card-desc">困難：予測不能さがあなたの安心システムを常に刺激し続ける。長期では消耗が積み重なる。</p></div>
</div>

<p class="rpt-text">あなたに最も必要なパートナーの条件は、<strong>「一貫性があり、あなたの設計に全参加はしないが頭ごなしに否定もしない人」</strong>です。あなたの構造を理解しつつ、それに縛られない余地を保てる人との関係は、あなたに安心と自由の両方をもたらします。</p>
`,

deeper_need: `
<div class="rpt-pullquote"><p class="rpt-pullquote-text">本当の安心は、コントロールの外にあります。<br>手放したときに残るもの——<br>それがあなたに必要な信頼の形です。</p></div>

<p class="rpt-text">あなたが恋愛で求めているものを根本的に見ると、それは「安全な関係」です。裏切られない、傷つかない、想定外のことが起きない——そういう安全な場所としての恋愛。この欲求は非常に自然なものです。</p>

<p class="rpt-text">しかし、安全をコントロールによって得ようとしたとき、そこには決して埋まらない穴があります。<u>コントロールが完璧でない限り安心できない</u>とすれば、それは<strong>「完璧なコントロール」という実現不可能な目標</strong>を追い続けることになります。<u>相手は生身の人間であり、あなたの設計通りには動きません</u>。</p>

<p class="rpt-text">あなたが本当に求めているのは、実は「完璧に設計された関係」ではないかもしれません。想定外のことが起きても、<u>それでもここにいたいと思える関係</u>——その深さと信頼です。それはコントロールの先ではなく、コントロールを手放したときに生まれます。</p>

<div class="rpt-highlight">理想の状態：相手が予定を変えても「そういうこともある」と思えること。信頼を一度確立した後は、毎回の行動で再評価しなくていいと感じられること。これがあなたにとっての「安心」の成熟した形です。</div>
`,

strategy: `
<p class="rpt-text">あなたの分析力と設計力は本物の才能です。それを「関係の管理」から「関係の育成」に転換することが、このフェーズでの課題です。</p>

<span class="rpt-label">戦略1：週一回「委ねる体験」を作る</span>
<p class="rpt-text">意識的に「今日は相手に全部決めてもらう」という体験を作ってください。デートの場所でも、夕食のメニューでも構いません。コントロールを手放すことへの耐性は、<strong>小さな練習の積み重ねでしか育ちません</strong>。最初は強い不安を感じますが、<u>その不安は手放した先にしか越えられない</u>ことを知っておいてください。</p>

<span class="rpt-label">戦略2：「単純なミス」と「信頼の裏切り」を区別する</span>
<p class="rpt-text">相手が約束を守らなかったとき、評価を下げる前に一度聞いてみてください。</p>

<div class="rpt-script">
  <span class="rpt-script-label">これまでの反応</span>
  <p class="rpt-script-text">内心で「また一貫性のない行動だ。信頼できないタイプかもしれない」と評価を下げる。表面上は何も言わず距離を置く。</p>
</div>
<div class="rpt-script">
  <span class="rpt-script-label">変えた後の反応</span>
  <p class="rpt-script-text">「この間のこと、気になってて。どういう状況だったか聞かせてもらえる？」と直接聞く。答えを聞いてから判断する。</p>
</div>

<span class="rpt-label">戦略3：感情を「表現する」練習を週1回</span>
<p class="rpt-text">感情表現が少ないあなたにとって、感情を言葉にすることは最も難しいことのひとつです。しかし<strong>相手はあなたの内側を知りたがっています</strong>。「今日、正直不安だった」「これ、少し寂しかった」——完璧な言葉でなくていい。不完全でも「感じていること」を週に一度言葉にする練習をしてください。</p>

<div class="rpt-note"><span class="rpt-note-icon">✦</span><p class="rpt-note-text">あなたの信頼性と一貫性は、相手にとって何にも代えがたい安心感を提供します。それはあなたがすでに持っている最大の魅力です。<u>コントロールを少し緩めたとき</u>、その魅力はさらに深く相手に届きます。</p></div>
`,
},

// ════════════════════════════════════════════════════════
// TYPE 3：チャレンジャー（挑戦者）Se × guts
// ════════════════════════════════════════════════════════
3: {
scenario: `
<p class="rpt-text">あなたの恋愛の核心には<strong>「自分でいながら、深く愛したい」</strong>という、一見矛盾する欲求があります。自由を守りたい、でも孤独は嫌だ。深く関わりたい、でも縛られたくない——この矛盾を抱えたまま進んでいくのがチャレンジャータイプの恋愛の本質です。</p>

<div class="rpt-pullquote"><p class="rpt-pullquote-text">欲しいと感じた瞬間に、もう動いている。<br>でも、手に入れた瞬間に怖くなる。<br>これがチャレンジャーの恋愛の地図です。</p></div>

<p class="rpt-text">このタイプの積極性は、Type 1と似ているように見えますが、動機が全く異なります。Type 1は愛を確かめるために動きます。Type 3（あなた）は<strong>「衝動に正直に生きること」が自分自身であるから動く</strong>のです。<u>好意を持った瞬間に考える前に動いている</u>——この即時性こそが、あなたの本質的なスタイルです。</p>

<span class="rpt-label">あなたの恋愛傾向プロファイル</span>
<div class="rpt-bars">
  <div class="rpt-bar-row"><span class="rpt-bar-label">行動の積極性</span><div class="rpt-bar-track"><div class="rpt-bar-fill" style="--bar-w:95%"></div></div><span class="rpt-bar-val">95</span></div>
  <div class="rpt-bar-row"><span class="rpt-bar-label">感情の表現度</span><div class="rpt-bar-track"><div class="rpt-bar-fill" style="--bar-w:75%"></div></div><span class="rpt-bar-val">75</span></div>
  <div class="rpt-bar-row"><span class="rpt-bar-label">確認・安心欲求</span><div class="rpt-bar-track"><div class="rpt-bar-fill" style="--bar-w:20%"></div></div><span class="rpt-bar-val">20</span></div>
  <div class="rpt-bar-row"><span class="rpt-bar-label">独立性・自由欲求</span><div class="rpt-bar-track"><div class="rpt-bar-fill" style="--bar-w:90%"></div></div><span class="rpt-bar-val">90</span></div>
  <div class="rpt-bar-row"><span class="rpt-bar-label">長期安定志向</span><div class="rpt-bar-track"><div class="rpt-bar-fill" style="--bar-w:35%"></div></div><span class="rpt-bar-val">35</span></div>
</div>

<p class="rpt-text"><strong>確認・安心欲求が非常に低い</strong>のは、あなたがそもそも「誰かから確認をもらうことで安心する」タイプではないことを示しています。あなたの安心は外からではなく、<u>「自分でいられているかどうか」</u>というただ一点から来ます。自分を曲げていない、本音で生きている——この感覚こそが、あなたにとっての最大の安心なのです。</p>
`,

attraction: `
<p class="rpt-text">あなたが惹かれる相手には、一つの共通点があります。それは<strong>「あなたを変えようとしない人」</strong>です。型にはめようとしない、「もっとこうしてほしい」と圧をかけない、ありのままのあなたを受け入れる——この姿勢を持つ人に、あなたは本能的に惹かれます。</p>

<div class="rpt-scenario">
  <span class="rpt-scenario-label">チャレンジャーが強く惹かれる瞬間</span>
  <p class="rpt-scenario-text">「今日急に空いたんだけど、会える？」と連絡したら「いいよ」と一言返ってきた。「急すぎ」とも「予定くらい事前に教えて」とも言わなかった。その一言の気持ちよさが、次の連絡への原動力になった。</p>
</div>

<p class="rpt-text">裏を返すと、最初から管理しようとする人、予定や行動に口を出す人、あなたの自由なリズムを「おかしい」と感じさせる人には、本能的に警戒心が働きます。これは意識的な判断ではなく、<strong>自己防衛の本能</strong>です。<u>過去に「自分らしくいられなかった」経験が、このセンサーを磨き上げてきました</u>。</p>

<div class="rpt-split">
  <div class="rpt-split-col">
    <span class="rpt-split-head">初期の強み</span>
    <p class="rpt-split-text">裏表のなさ、即断即決、感情の正直さ。「この人はありのままを見せてくれている」という安心感を相手に与えます。計算のないアプローチが、多くの人に爽快感として届きます。</p>
  </div>
  <div class="rpt-split-col">
    <span class="rpt-split-head">初期の落とし穴</span>
    <p class="rpt-split-text">熱が高いほど反動も大きい。入りが強すぎて相手がついていけず引いてしまうことがある。また「熱が冷めた」ように見える時期が来ると、相手が「どうしたの？」と困惑します。</p>
  </div>
</div>

<p class="rpt-text">あなたの感情の動きには「熱い時期」と「落ち着いた時期」の波があります。これを相手が「気まぐれ」「冷めた」と解釈してしまうことが、関係の初期に最もよく起きるすれ違いです。実際にはあなたの感情が薄れたのではなく、<strong>単純に感情の波が一段落しただけ</strong>です。しかし相手にとってその波の意味は伝わりにくい。</p>
`,

deepening: `
<p class="rpt-text">チャレンジャータイプにとって、関係の深化フェーズは最も複雑なフェーズです。<u>深まりたいという欲求と、縛られることへの恐怖が同時に大きくなる</u>からです。</p>

<p class="rpt-text">一度信頼を決めた相手への保護本能は非常に強く、深まった関係ではあなたは<strong>誰よりも強く相手を守ろうとします</strong>。普段の自由奔放さとは全く異なる、力強い安定感を発揮します。これがこのタイプの最も見えにくい、しかし最も深い魅力です。</p>

<div class="rpt-scenario">
  <span class="rpt-scenario-label">深化フェーズの内側</span>
  <p class="rpt-scenario-text">付き合って4ヶ月。相手がしんどそうにしているとき、何も言わなくても横にいた。「大丈夫？」も聞かなかった。でもコーヒーを置いて、ただそこにいた。そのとき「この人のことは絶対に守る」という感覚がはっきりあった。</p>
</div>

<p class="rpt-text">しかし同じフェーズで、別のことも起きています。関係が深まるにつれ、相手からの「期待」や「要求」が少しずつ増えてきます。もっと頻繁に連絡してほしい、予定を事前に共有してほしい、記念日を大切にしてほしい——これらの要求は相手にとって「ふつうのこと」ですが、<strong>あなたにとっては「自由の侵食」のシグナル</strong>として受け取られます。</p>

<p class="rpt-text">ここで起きる心理的変化が重要です。相手への感情は本物で変わっていないのに、「この関係では自分でいられない」という感覚が少しずつ生まれます。この感覚は論理的な判断ではなく、<u>本能的な防衛反応</u>です。<u>感情のスイッチが切れる感覚</u>——これを多くのチャレンジャータイプが経験します。</p>

<div class="rpt-highlight">深化フェーズの核心的な問い：「この人への感情が冷めたのか」と「この状況に息苦しさを感じているのか」は、全く別のことです。この区別をつけられるかどうかが、関係を守るための鍵です。</div>
`,

trigger: `
<p class="rpt-text">あなたの関係が壊れる前に、<strong>「自由の侵食」という一貫したシグナル</strong>が必ずあります。それは大きな束縛である必要はありません。小さな「要求」が積み重なり、「この関係では自分でいられない」という閾値を超えたとき、感情の温度が急速に下がります。</p>

<span class="rpt-label">典型的な崩壊の流れ</span>
<ul class="rpt-step-list">
  <li class="rpt-step"><span class="rpt-step-num">01</span><div><div class="rpt-step-title">小さな要求の積み重なり</div><div class="rpt-step-desc">「もっと連絡して」「予定教えて」「なんで急に変えるの」——それぞれは小さな要求ですが、積み重なると「自由を侵食されている」という感覚になります。</div></div></li>
  <li class="rpt-step"><span class="rpt-step-num">02</span><div><div class="rpt-step-title">本能的な防衛反応</div><div class="rpt-step-desc">感情が「切れる」感覚が起きます。相手への感情そのものは残っていますが、この関係を続ける意欲が急速に落ちます。</div></div></li>
  <li class="rpt-step"><span class="rpt-step-num">03</span><div><div class="rpt-step-title">説明のない距離</div><div class="rpt-step-desc">「なんか違う」という感覚はあるのに、何が違うのかを言語化できず、説明のまま距離を置き始めます。相手は「なぜ突然？」と混乱します。</div></div></li>
  <li class="rpt-step"><span class="rpt-step-num">04</span><div><div class="rpt-step-title">関係の消耗</div><div class="rpt-step-desc">説明を求める相手と、説明できないあなたのすれ違いが続き、互いに疲弊して関係が終わります。</div></div></li>
</ul>

<div class="rpt-note"><span class="rpt-note-icon">◌</span><p class="rpt-note-text">相手の「要求」の多くは「束縛したい」のではなく「不安だから確認したい」という気持ちから来ています。その不安の正体を一度聞いてみることで、「自由の侵食」ではなく「ケアへの要求」として受け取り直せることがあります。</p></div>
`,

compatibility: `
<p class="rpt-text">あなたとの相性は<strong>「あなたの自由を侵食せずに、深い関係を築けるか」</strong>という一点で大きく変わります。あなたの自由と自律性を尊重しながら、それでも確かな絆を育てられる相手が理想です。</p>

<div class="rpt-compat-cards">
  <div class="rpt-compat-card"><div class="rpt-compat-card-head"><span class="rpt-compat-card-type">Type 6</span><span class="rpt-compat-card-name">フェイタリスト</span><span class="rpt-compat-card-stars">★★★★★</span></div><p class="rpt-compat-card-desc">調和：芯を持ちながら縛り合わないスタイルが完璧に共鳴。「深まっても自由でいられる」体験がしやすい。</p></div>
  <div class="rpt-compat-card"><div class="rpt-compat-card-head"><span class="rpt-compat-card-type">Type 9</span><span class="rpt-compat-card-name">ケアテイカー</span><span class="rpt-compat-card-stars">★★★★☆</span></div><p class="rpt-compat-card-desc">刺激：「求めずそこにいる」存在感があなたに安心と余白を与える。言葉で縛らない関係が自然に成立。</p></div>
  <div class="rpt-compat-card"><div class="rpt-compat-card-head"><span class="rpt-compat-card-type">Type 12</span><span class="rpt-compat-card-name">フリースピリット</span><span class="rpt-compat-card-stars">★★★☆☆</span></div><p class="rpt-compat-card-desc">補完：自由の価値観が共鳴。ただしどちらも「深まる怖さ」を持つため、踏み出す勇気が必要。</p></div>
  <div class="rpt-compat-card"><div class="rpt-compat-card-head"><span class="rpt-compat-card-type">Type 4</span><span class="rpt-compat-card-name">エンパス</span><span class="rpt-compat-card-stars">★★☆☆☆</span></div><p class="rpt-compat-card-desc">摩擦：深い共感力に引き寄せられるが、確認欲求と「察して」傾向があなたの自由感覚と衝突しやすい。</p></div>
  <div class="rpt-compat-card"><div class="rpt-compat-card-head"><span class="rpt-compat-card-type">Type 1</span><span class="rpt-compat-card-name">ロマンハンター</span><span class="rpt-compat-card-stars">★☆☆☆☆</span></div><p class="rpt-compat-card-desc">困難：確認行動が最も強烈なトリガー。最初の引力は強いが、確認の積み重ねで急速に息苦しくなる。</p></div>
  <div class="rpt-compat-card"><div class="rpt-compat-card-head"><span class="rpt-compat-card-type">Type 2</span><span class="rpt-compat-card-name">ストラテジスト</span><span class="rpt-compat-card-stars">★☆☆☆☆</span></div><p class="rpt-compat-card-desc">困難：管理・設計の傾向があなたの自由欲求と根本的に衝突。長期維持は大きな努力を要する。</p></div>
</div>
`,

deeper_need: `
<div class="rpt-pullquote"><p class="rpt-pullquote-text">あなたが本当に求めているのは、<br>「深まっても、自分のままでいられること」。<br>それは矛盾ではなく、最高の関係の形です。</p></div>

<p class="rpt-text">チャレンジャータイプの多くが「深い関係は自由を奪う」という信念を持っています。この信念は過去の経験から学習されたものですが、<strong>必ずしも真実ではありません</strong>。深まることで自由を奪われた経験があるとすれば、それは「深さ」の問題ではなく、「その相手との相性」あるいは「その関係でのコミュニケーション」の問題だった可能性があります。</p>

<p class="rpt-text">あなたが本当に求めているのは何でしょうか。孤独は望んでいない。でも縛られたくない。深く愛したい、でも自分を失いたくない——この全てが本音です。これらは矛盾していません。<u>本当に信頼できる相手との関係では、深まっても自由でいられます</u>。その体験を積み重ねることが、このタイプの最大の成長です。</p>

<p class="rpt-text">もう一つ、このタイプが見落としがちなことがあります。<strong>あなたの感情が「深まりたい」と「逃げたい」を同時に感じているとき</strong>、その感情はあなたに何かを伝えようとしています。<u>その二つの感情が同時に起きること自体が、深さへの準備が整っているサイン</u>かもしれません。それは「この人と深まるのが怖い」というシグナルかもしれませんが、「深まる方向へ一歩踏み出せる力がある」という証拠でもあります。</p>
`,

strategy: `
<p class="rpt-text">あなたの直感と行動力は、最も強力な資産です。それに「言語化」と「余白」を加えることで、恋愛の質が根本的に変わります。</p>

<span class="rpt-label">戦略1：「息苦しい」を言語化する</span>
<p class="rpt-text">感情のスイッチが切れる前に、「少し息苦しい」という感覚を言葉にしてみてください。</p>

<div class="rpt-script">
  <span class="rpt-script-label">これまで</span>
  <p class="rpt-script-text">「なんか違う気がして……」と言いながら距離を置き始める。相手は理由が分からず混乱する。</p>
</div>
<div class="rpt-script">
  <span class="rpt-script-label">変えた後</span>
  <p class="rpt-script-text">「最近、少し自分のペースを保てていない気がしてる。あなたのことは好きだけど、少し自分の時間が必要で。それを伝えたかった。」</p>
</div>

<span class="rpt-label">戦略2：衝動に2時間の猶予を与える</span>
<p class="rpt-text">感情的な決断——「もう終わりにしよう」「距離を置きたい」——を感じたとき、2時間待ってください。衝動は波のように来ます。その波のピーク時に決断せず、少し落ち着いた後で判断することで、後悔する決断を大幅に減らせます。</p>

<span class="rpt-label">戦略3：「大切にしている」を月1回言葉にする</span>
<p class="rpt-text">行動で示すのが得意なあなたですが、相手には言葉も必要です。月に一度、「一緒にいてよかった」「あなたのことが好きだ」という言葉を意識的に伝える機会を作ってください。</p>

<div class="rpt-script">
  <span class="rpt-script-label">あなたに向いた表現方法</span>
  <p class="rpt-script-text">「なんか急に言うのも恥ずかしいけど、一緒にいると自分でいられる感じがして、それがすごく大事だと思ってる。」</p>
</div>

<div class="rpt-note"><span class="rpt-note-icon">✦</span><p class="rpt-note-text">あなたの衝動性と正直さは、他の誰も持っていない特別な魅力です。「深まっても自分でいられる」という体験を一度すると、それがあなたの恋愛観を根本から変えます。その体験は、<u>踏み出してみることでしか得られません</u>。</p></div>
`,
},

// ════════════════════════════════════════════════════════
// TYPE 4：エンパス（共感者）Ni × heart
// ════════════════════════════════════════════════════════
4: {
scenario: `
<p class="rpt-text">あなたの恋愛の根底には<strong>「愛することで、自分の価値を証明する」</strong>という深い信念が流れています。尽くすことが喜びであり、相手のために動くことが自己表現であり、愛されるための方法でもある——この三つが一体になっているのが、エンパスタイプの恋愛の特徴です。</p>

<div class="rpt-pullquote"><p class="rpt-pullquote-text">与えることは美しい。<br>でも、与えるだけの恋愛は、<br>いつか静かに自分を空にします。</p></div>

<p class="rpt-text">このタイプが「尽くす」のは計算でも戦略でもありません。<strong>本当に相手のために動きたいという純粋な欲求</strong>から来ています。しかしその欲求の背景には、「<u>尽くすことをやめたら、自分は愛される理由を失う</u>」という深い恐怖が潜んでいることがあります。この恐怖は意識に上りにくいため、気づかないまま「尽くすこと」が止まらなくなっていきます。</p>

<span class="rpt-label">あなたの恋愛傾向プロファイル</span>
<div class="rpt-bars">
  <div class="rpt-bar-row"><span class="rpt-bar-label">行動の積極性</span><div class="rpt-bar-track"><div class="rpt-bar-fill" style="--bar-w:30%"></div></div><span class="rpt-bar-val">30</span></div>
  <div class="rpt-bar-row"><span class="rpt-bar-label">感情の表現度</span><div class="rpt-bar-track"><div class="rpt-bar-fill" style="--bar-w:70%"></div></div><span class="rpt-bar-val">70</span></div>
  <div class="rpt-bar-row"><span class="rpt-bar-label">確認・安心欲求</span><div class="rpt-bar-track"><div class="rpt-bar-fill" style="--bar-w:75%"></div></div><span class="rpt-bar-val">75</span></div>
  <div class="rpt-bar-row"><span class="rpt-bar-label">独立性・自由欲求</span><div class="rpt-bar-track"><div class="rpt-bar-fill" style="--bar-w:20%"></div></div><span class="rpt-bar-val">20</span></div>
  <div class="rpt-bar-row"><span class="rpt-bar-label">長期安定志向</span><div class="rpt-bar-track"><div class="rpt-bar-fill" style="--bar-w:65%"></div></div><span class="rpt-bar-val">65</span></div>
</div>

<p class="rpt-text"><strong>独立性・自由欲求が非常に低い</strong>のは、あなたが他者との関係を通じて自分の位置を確認する傾向が強いことを示しています。誰かのために動いているとき、誰かに必要とされているとき、関係の中にいるとき——この状態があなたに「ここにいていい」という感覚をもたらします。逆に、誰かを必要としていない状態では、どこか手持ち無沙汰な、居場所のない感覚になりやすい。</p>
`,

attraction: `
<p class="rpt-text">あなたが誰かに惹かれるとき、そこには特定のパターンがあります。一つは<strong>「この人は傷ついている、または助けを必要としている」</strong>という感知です。相手の言葉の裏にある痛みを察知し、その痛みを癒したいという衝動を感じます。</p>

<div class="rpt-scenario">
  <span class="rpt-scenario-label">エンパスが強く惹かれる瞬間</span>
  <p class="rpt-scenario-text">グループで話していたとき、その人だけが少し表情が暗かった。帰り道、「今日なんか元気なかったね、大丈夫？」と声をかけたら「よく気づいたね」と驚かれた。その後、その人が話してくれた悩みを一緒に考えていたとき、「あ、この人のことが好きかもしれない」と気づいた。</p>
</div>

<p class="rpt-text">もう一つのパターンは、<strong>「自分を認めてくれる人への強い引力」</strong>です。「あなたは特別だ」「あなたがいてくれてよかった」という言葉に、他のタイプより強く反応します。これは自己評価が低いからではなく、<u>「必要とされること」があなたの愛情タンクを満たす燃料になっている</u>からです。</p>

<div class="rpt-split">
  <div class="rpt-split-col">
    <span class="rpt-split-head">相手から見たあなた</span>
    <p class="rpt-split-text">「この人といると話しやすい」「なんでも分かってくれる」「一緒にいると安心する」——共感力の高さが相手に深い安心感を与えます。話を聞く力は12タイプで最高レベル。</p>
  </div>
  <div class="rpt-split-col">
    <span class="rpt-split-head">あなたの内側</span>
    <p class="rpt-split-text">「この人のために何かしてあげたい」「もっと深く分かりたい」「傷ついたことがあるのかな」という受信アンテナが常に動いている。自分の話よりも相手の話を優先していることが多い。</p>
  </div>
</div>

<p class="rpt-text">一つ気づいてほしいことがあります。あなたは相手の話を聞くことが得意ですが、<strong>自分の話をすることへの苦手意識</strong>があります。「自分の話をするのは相手に迷惑ではないか」「私の話は面白くないかもしれない」という抵抗感——これが、関係が一方向になりやすい原因のひとつです。</p>
`,

deepening: `
<p class="rpt-text">エンパスタイプの関係の深化フェーズには、独特の構造があります。関係が深まるほど尽くす量が増え、その尽くしに対して「気づいてほしい」という欲求も比例して大きくなっていく——しかしその欲求は言語化されないまま、内側に蓄積していきます。</p>

<p class="rpt-text">この段階のあなたは外からは「素晴らしいパートナー」に見えます。相手のために動く、気遣いが細やかである、感謝を求めないように見える——これらはすべて事実です。しかし内側では、<strong>「見えていない」という痛みが静かに積み重なっています</strong>。</p>

<div class="rpt-scenario">
  <span class="rpt-scenario-label">深化フェーズで起きること</span>
  <p class="rpt-scenario-text">誕生日に何週間も前から準備した。当日、相手は「ありがとう」と言った。でもその一言が、あなたが準備にかけた思いに見合わない気がした。言えなかった。「感謝されなくてもいい」と思っているはずなのに、なぜかとても疲れた。</p>
</div>

<p class="rpt-text">このシーンで起きていることを正確に分析すると、<u>「感謝を求めていないつもりだが、認識を求めている」</u>というパラドックスです。あなたが本当に欲しいのは「ありがとう」という言葉だけではありません。「あなたのことが見えている」「あなたの存在が大切だ」という確認です。この違いを理解することが非常に重要です。</p>

<p class="rpt-text">もう一つ重要なことがあります。尽くしすぎは、時に相手に<strong>「罪悪感」をもたらします</strong>。「こんなにしてもらっているのに、自分は十分に返せていない」という感覚が相手に積み重なると、関係への重さを感じ始めます。<u>あなたの愛情が深いほど、相手に「返せない負債」を感じさせてしまう</u>ことがあるのです。</p>

<div class="rpt-highlight">深化フェーズで最も重要なシフト：「尽くす量を増やすこと」ではなく「あなた自身の欲求を言語化すること」が、関係を深める最速の方法です。</div>
`,

trigger: `
<p class="rpt-text">エンパスタイプの関係が崩れる前には、<strong>「見えない積み重ね」というプロセス</strong>が必ずあります。<u>小さな「気づいてもらえなかった」が積み重なり</u>、ある日突然の感情爆発か、静かな撤退として現れます。</p>

<span class="rpt-label">崩壊の典型的なプロセス</span>
<ul class="rpt-step-list">
  <li class="rpt-step"><span class="rpt-step-num">01</span><div><div class="rpt-step-title">初期の消耗サイン</div><div class="rpt-step-desc">いつものように尽くしているのに、「なんかむなしい」という感覚が生まれ始めます。この段階で言語化できれば、その後の崩壊を防げます。</div></div></li>
  <li class="rpt-step"><span class="rpt-step-num">02</span><div><div class="rpt-step-title">「察してほしい」モードの強化</div><div class="rpt-step-desc">自分から伝えることなく「分かってくれるはず」という期待が高まります。しかし相手は、あなたが何を感じているかを知りません。</div></div></li>
  <li class="rpt-step"><span class="rpt-step-num">03</span><div><div class="rpt-step-title">裏切りの感覚</div><div class="rpt-step-desc">「こんなに尽くしているのに」という感情が爆発します。相手には突然のことに見えますが、あなたの中では長い蓄積の末の限界点です。</div></div></li>
  <li class="rpt-step"><span class="rpt-step-num">04</span><div><div class="rpt-step-title">相手の混乱と防衛</div><div class="rpt-step-desc">「なぜ急に？」と感じた相手が防衛反応を起こします。互いに「分かってもらえない」という感覚が重なり、関係が急速に終わります。</div></div></li>
</ul>

<div class="rpt-note"><span class="rpt-note-icon">◌</span><p class="rpt-note-text">このプロセスを断ち切る唯一の方法は「段階01で言語化すること」です。むなしさを感じた時点で「最近少し疲れてて」と一言言える関係を目指してください。それがこのタイプにとっての最大の防衛策です。</p></div>
`,

compatibility: `
<p class="rpt-text">あなたとの相性は<strong>「あなたが尽くすだけの関係にならず、対等に受け取り合えるか」</strong>という点で大きく変わります。あなたの共感力を「圧」として感じない人、あなたが尽くすことに罪悪感を感じない人が最も合います。</p>

<div class="rpt-compat-cards">
  <div class="rpt-compat-card"><div class="rpt-compat-card-head"><span class="rpt-compat-card-type">Type 1</span><span class="rpt-compat-card-name">ロマンハンター</span><span class="rpt-compat-card-stars">★★★★★</span></div><p class="rpt-compat-card-desc">調和：「追う×受容」の極性が完璧に噛み合う。Type 1の熱量をあなたが喜んで受け取れる。</p></div>
  <div class="rpt-compat-card"><div class="rpt-compat-card-head"><span class="rpt-compat-card-type">Type 10</span><span class="rpt-compat-card-name">トラベラー</span><span class="rpt-compat-card-stars">★★★★☆</span></div><p class="rpt-compat-card-desc">補完：感情の豊かさ同士が共鳴。ただしType 10の特別感要求があなたに「もっと尽くさねば」の圧をかけることも。</p></div>
  <div class="rpt-compat-card"><div class="rpt-compat-card-head"><span class="rpt-compat-card-type">Type 11</span><span class="rpt-compat-card-name">エクスプローラー</span><span class="rpt-compat-card-stars">★★★☆☆</span></div><p class="rpt-compat-card-desc">成長型：楽観性があなたの深い感情を「重い」と感じる場合も。相互理解が深まると豊かな関係に。</p></div>
  <div class="rpt-compat-card"><div class="rpt-compat-card-head"><span class="rpt-compat-card-type">Type 7-9</span><span class="rpt-compat-card-name">守護型</span><span class="rpt-compat-card-stars">★★☆☆☆</span></div><p class="rpt-compat-card-desc">摩擦：互いに相手のために動く者同士で空転しやすい。「受け取られていない」と感じやすいので言語化が必須。</p></div>
</div>

<p class="rpt-text">あなたにとって理想的なパートナーの条件は、<strong>「あなたが尽くしてくれることを当然と思わず、きちんと受け取って表現できる人」</strong>です。感謝を言葉にできる人、あなたの努力を見える形で認めてくれる人——それだけで、あなたの恋愛の質は劇的に変わります。</p>
`,

deeper_need: `
<div class="rpt-pullquote"><p class="rpt-pullquote-text">あなたが本当に欲しいのは、<br>「尽くす場所」ではなく<br>「ありのままで大切にされる場所」です。</p></div>

<p class="rpt-text">これはこのレポートで最も重要なメッセージかもしれません。エンパスタイプの多くが、尽くすことをやめると「自分が愛される理由がなくなる」という感覚を恐れています。だから尽くし続ける。しかしその尽くしは、実は<strong>「愛されるための条件を作り続ける作業」</strong>になっています。</p>

<p class="rpt-text">真の意味で愛されるとは、尽くさなくても愛されることです。何もできない日でも、弱さを見せた日でも、ただそこにいるだけで愛される——その体験があなたには必要です。しかしそれを体験するためには、<u>「受け取ることへの許可を自分に出す」ことが先に必要</u>です。</p>

<p class="rpt-text">あなたが誰かに甘えること、弱さを見せること、「私はこうしてほしい」と伝えること——これらはあなたが思っているほど相手に迷惑ではありません。むしろ多くの場合、相手はあなたの本当の姿を見たいと思っています。「しっかりした人」「気遣いできる人」という像の後ろにある、本当のあなたに会いたいと思っています。</p>

<div class="rpt-highlight">あなたが恋愛で本当に求めているのは「活躍できる場所」ではなく「安心して素でいられる場所」です。その場所は、尽くし続けることでは作れません。自分を少し開くことで作られます。</div>
`,

strategy: `
<p class="rpt-text">あなたの共感力と深い愛情は、恋愛における最高の資産です。その資産を「与えるだけ」から「交換できる」形に変えることが、このフェーズのテーマです。</p>

<span class="rpt-label">戦略1：「I want」を週3回言う練習</span>
<p class="rpt-text">「何でもいいよ」が口癖なら、今日から一つ変えてください。何かを聞かれたとき、最初の反応で「私は〇〇がいい」と言う練習をしてください。<u>些細なことから始めていいです</u>。</p>

<div class="rpt-script">
  <span class="rpt-script-label">これまで</span>
  <p class="rpt-script-text">「ご飯どこがいい？」→「どこでもいいよ、あなたに合わせる」</p>
</div>
<div class="rpt-script">
  <span class="rpt-script-label">変えた後</span>
  <p class="rpt-script-text">「ご飯どこがいい？」→「最近パスタが食べたかったんだけど、どう？」</p>
</div>

<span class="rpt-label">戦略2：むなしさを感じた日に一言伝える</span>
<p class="rpt-text">尽くした後にむなしさを感じたとき、その日のうちに「今日ちょっと疲れてて」と言葉にする練習をしてください。理由を全部説明しなくていい。「少し疲れた」という事実を言語化するだけで、蓄積を大幅に防げます。</p>

<span class="rpt-label">戦略3：尽くす量を意識的に7割にする</span>
<p class="rpt-text">全力で尽くすのが自然なあなたですが、7割で留めてみてください。残りの3割をどうするかを相手が考える余地が生まれます。<u>自発的に動いてくれる相手との関係は対等に近づき</u>、動かない相手なら、それもあなたへの大切な情報です。</p>

<div class="rpt-script">
  <span class="rpt-script-label">自分に許可するフレーズ</span>
  <p class="rpt-script-text">「今日は私が甘えていい日。」「弱さを見せることも、愛情の一形態です。」</p>
</div>

<div class="rpt-note"><span class="rpt-note-icon">✦</span><p class="rpt-note-text">あなたの共感力と愛情の深さは、本物です。それを「条件なしで大切にしてくれる相手」と出会えたとき、あなたの恋愛は全く別のものになります。その相手に出会うためにも、まずあなた自身が「受け取ること」を練習してください。</p></div>
`,
},

}; // Types 1-4 (続きは report-data-2.js で Object.assign)
