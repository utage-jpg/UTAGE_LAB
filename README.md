# UTAGE LAB — 診断データJSON 使い方ガイド

## ファイル構成

```
typelab/
├── index.html          ← トップページ（このまま）
├── diagnosis.html      ← 診断ページ（このまま）
└── data/
    ├── 16type.json     ← 16タイプ診断データ（質問・タイプ説明）
    └── top-content.json ← トップページ表示データ（人気診断・カテゴリ等）
```

---

## diagnosis.html での読み込み方

diagnosis.html の `<script>` 冒頭の `const questions = [...]` と `const typeMap = {...}` を
以下のコードに置き換えるだけです。

```html
<script>
// ---- JSONから読み込む ----
let questions = [];
let typeMap = {};
let diagData = {};

async function loadDiagData() {
  const res = await fetch('./data/16type.json');
  diagData = await res.json();

  // questionsを既存コードと同じ形式に変換
  questions = diagData.questions.map(q => ({
    dim: q.axis + " 軸",
    text: q.text,
    opts: q.options.map(o => o.text)
  }));

  // typeMapをそのまま使える
  typeMap = diagData.types;
}

// ページ読み込み時にデータを取得してから診断を開始できるようにする
document.addEventListener('DOMContentLoaded', async () => {
  await loadDiagData();
  // 既存の startDiag() などはそのまま使える
});
</script>
```

---

## 新しい診断を追加するとき

1. `data/` フォルダに新しいJSONファイルを置く（例: `data/love-type.json`）
2. `top-content.json` の `popular` か `categories` にエントリを追加する
3. HTMLは触らなくてOK

### JSONの最小構成（コピーして使う）

```json
{
  "id": "your-diag-id",
  "title": "診断タイトル",
  "icon": "🧠",
  "category": "mbti",
  "questionCount": 20,
  "estimatedMinutes": 5,
  "totalTakers": 0,
  "questions": [
    {
      "id": 1,
      "axis": "EI",
      "text": "質問文をここに書く",
      "options": [
        { "text": "選択肢A", "scores": { "EI": -1 } },
        { "text": "選択肢B", "scores": { "EI": 1 } }
      ]
    }
  ],
  "types": {
    "RESULT_KEY": {
      "name": "タイプ名",
      "tagline": "キャッチコピー",
      "traits": ["特徴1", "特徴2"],
      "color": "#7b5ea7",
      "desc1": "説明文1",
      "desc2": "説明文2"
    }
  }
}
```

---

## GitHub Pages での注意点

`fetch('./data/16type.json')` はローカルファイル（`file://`）では動きません。
GitHub Pagesにアップすれば普通に動きます。

ローカルでテストしたい場合は VS Code の「Live Server」拡張機能を使うと簡単です。

---

## top-content.json の使い方（将来的に）

現在のトップページはHTMLにカードが直書きされていますが、
将来的に以下のように動的生成に切り替えると管理が楽になります。

```javascript
const res = await fetch('./data/top-content.json');
const data = await res.json();

// 人気診断カードを動的に生成
data.popular.forEach(diag => {
  // カードHTMLを生成してDOMに追加
});
```

今は急ぐ必要はなく、カードの内容を変えたいときだけJSONを編集すればOKです。
