// 診断ツール設定ファイル
// 新しい診断を追加する場合は、ここに設定を追加してください

export const diagnosisConfig = [
  {
    id: 'relationship',
    title: 'ふたりのモヤモヤ整理室',
    desc: '言えずにいる気持ちを可視化。関係改善のきっかけを診断から見つけよう。',
    emoji: '💌',
    genre: 'love',
    genreLabel: '💕 恋愛関係',
    path: './関係改善ジェネレータ/index.html',
    gradient: 'linear-gradient(135deg, #ffe4ef 0%, #fde8e8 100%)',
    addedDate: new Date('2025-01-15')
  },
  {
    id: 'thinktype',
    title: 'ThinkType｜思考タイプ診断',
    desc: '外向×内向・視覚×言語の2軸で、あなた固有の思考スタイルを明らかに。',
    emoji: '🧠',
    genre: 'work',
    genreLabel: '💼 仕事関係',
    path: './thinktype/index.html',
    gradient: 'linear-gradient(135deg, #dde9ff 0%, #ede9fe 100%)',
    addedDate: new Date('2025-01-10')
  },
  {
    id: 'uniquetype',
    title: 'わらいのツボ診断',
    desc: 'あなたの「笑いのクセ」を4タイプに分類。ほっこり・ひらめき・スパイス・カオス。',
    emoji: '😂',
    genre: 'other',
    genreLabel: '🌈 その他',
    path: './uniquetype/index.html',
    gradient: 'linear-gradient(135deg, #fef0d5 0%, #ffeef4 100%)',
    addedDate: new Date('2025-01-05')
  }
  // 新しい診断をここに追加例：
  // {
  //   id: 'new-diagnosis',
  //   title: '新しい診断ツール',
  //   desc: '新しい診断の説明文',
  //   emoji: '🆕',
  //   genre: 'friend', // love, friend, work, other
  //   genreLabel: '👫 友達関係',
  //   path: './new-diagnosis/index.html',
  //   gradient: 'linear-gradient(135deg, #color1 0%, #color2 100%)',
  //   addedDate: new Date() // 自動で設定されます
  // }
];

// ジャンルカラー設定
export const genreColors = {
  love: { light: 'var(--love-light)', dark: 'var(--love-dark)' },
  friend: { light: 'var(--friend-light)', dark: 'var(--friend-dark)' },
  work: { light: 'var(--work-light)', dark: 'var(--work-dark)' },
  other: { light: 'var(--other-light)', dark: 'var(--other-dark)' }
};
