# hy-Liao Profile Page

個人作品集網站，使用 React + Vite + TypeScript 建置。

## 啟動方式

### 環境需求
- Node.js 18+
- npm

### 安裝依賴

```bash
npm install --legacy-peer-deps
```

### 環境變數設定

在專案根目錄建立 `.env` 檔案：

```env
VITE_PROJECT_TETRIS_URL=http://your-tetris-url
```

> 若無此設定，Tetris 專案連結將不會作用。

### 啟動開發伺服器

```bash
npm run dev
```

開啟瀏覽器前往 `http://localhost:5173`

### 建置正式版

```bash
npm run build
npm run preview
```

---

## 功能介紹

### Navbar
- **自動隱藏**：向下捲動時 Navbar 隱藏，向上捲動時重新出現
- **專案下拉選單**：點擊「My Project」展開下拉，可直接連結至各專案網站
- **語言切換**：點擊 `中文 / EN` 按鈕切換繁體中文與英文
- **主題切換**：點擊主題按鈕循環切換 Light / Dark / System 三種模式
- **RWD 漢堡選單**：螢幕寬度 ≤ 768px 時，導覽列收合為漢堡選單

### About Me
- 顯示自我介紹與技能列表
- **點擊大頭照**可開啟全螢幕預覽，背景模糊，右上角 ✕ 或點擊空白處關閉

### My Projects
- 列出個人專案卡片，包含名稱、描述與連結

### Contact
- 顯示聯絡資訊與 Email 連結

### Scroll To Top
- 頁面捲動超過 300px 後，右下角出現返回頂部按鈕，點擊平滑捲回頂部

---

## 技術棧

| 項目 | 版本 |
|------|------|
| React | 19 |
| TypeScript | 6 |
| Vite | 8 |
| react-i18next | 16 |
| i18next | 25 |
