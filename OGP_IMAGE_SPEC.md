# OGP画像仕様

## 基本情報
- **ファイル名**: `nostalight9-ogp.jpg`
- **保存先**: `/client/public/assets/images/ogp/nostalight9-ogp.jpg`
- **サイズ**: 1200×630px
- **フォーマット**: JPEG（最適化済み）

## デザイン仕様

### 背景
- In the Wake of Dreamsのアートワークを背景に使用
- 暗めのネイビーオーバーレイ（opacity: 85%）
- 微ズーム効果（scale: 1.05）

### テキスト
1. **メインタイトル**
   - テキスト: "Nostalight9"
   - フォント: Playfair Display
   - サイズ: 120px
   - カラー: #FFFFFF
   - 配置: 中央上部

2. **サブコピー**
   - テキスト: "ここは、現実と夢のあいだ。"
   - フォント: Noto Serif JP
   - サイズ: 48px
   - カラー: #D1D5DB（グレー）
   - 配置: 中央下部

### カラーパレット
- ベース: #0d1b2a（深い青）
- オーバーレイ: rgba(13, 27, 42, 0.85)
- テキスト: #FFFFFF / #D1D5DB

## 実装メモ
- 現在はプレースホルダーとして設定済み
- 実際の画像は後で `/client/public/assets/images/ogp/` に配置
- HTMLの `<head>` 内でOGタグとして自動設定される

