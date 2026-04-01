# UTAGE LAB — 総合心理診断ポータル

心理診断・タイプ診断・相性診断・占いを集めた総合心理診断ポータルのソースコードです。

---

## フォルダ構成

```
UTAGE_LAB/
├── index.html              ← メインポータル（トップページ）
├── README.md               ← このファイル
│
├── pages/                  ← 各診断ページ
│   ├── 16type.html         　16タイプ（MBTI）診断
│   ├── attachment.html     　愛着スタイル診断
│   ├── career.html         　職業適性タイプ診断
│   ├── deep.html           　深層心理テスト
│   ├── diagnosis.html      　汎用診断ページ（JSONデータ使用）
│   ├── love-type.html      　恋愛タイプ診断
│   ├── movedtype.html      　感動タイプ診断
│   ├── stress.html         　ストレス耐性診断
│   ├── suuhijutu.html      　数秘術診断
│   ├── thinktype.html      　思考タイプ診断
│   └── uniquetype.html     　わらいのツボ診断
│
├── data/                   ← JSONデータファイル
│   ├── 16type.json         　16タイプ診断の質問・タイプ定義
│   └── top-content.json    　トップページ表示データ（将来的な動的生成用）
│
├── assets/                 ← 画像・静的ファイル
│   └── fortune-logo.jpg    　16type fortune ロゴ
│
├── pola/                   ← POLA診断 専用コンテンツ（別デプロイ用）
│   ├── diagnosis/          　POLA診断ページ
│   ├── portal/             　POLAポータルサイト
│   └── specs/              　POLA理論仕様書
│
└── docs/                   ← 設計・仕様ドキュメント
    └── UTAGELAB_DESIGN.md  　サイト全体の設計書
```

---

## 新しい診断ページを追加するとき

1. `pages/` フォルダに `your-diag.html` を作成する
2. `index.html` 内のリンクを `href="pages/your-diag.html"` の形式で追加する
3. ページ内でトップに戻るリンクは `href="../index.html"` にする

---

## JSONデータを使う診断（diagnosis.html）

`pages/diagnosis.html` は `data/16type.json` を fetch して動作します。

```javascript
const res = await fetch('../data/16type.json');
```

JSONの最小構成（新しい診断データを追加するときのテンプレート）:

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

## ローカル開発について

`fetch()` はローカルの `file://` では動作しません。
VS Code の **Live Server** 拡張機能を使うとローカルでも正常に動作します。

GitHub Pages にデプロイすれば、そのまま動作します。

---

## 外部連携サイト（別リポジトリ）

以下は別の GitHub リポジトリとして独立してデプロイされています。

| サイト | URL |
|--------|-----|
| POLA診断 | https://utage-jpg.github.io/pola_diagnosis/ |
| POLAポータル | https://utage-jpg.github.io/pola_portal/ |
| 類型ポータル | https://utage-jpg.github.io/ruikei_portal/ |
| 16タイプ占い | https://utage-jpg.github.io/16type_fortune/ |
| Socionics Lab | https://utage-jpg.github.io/socio_lens/ |
