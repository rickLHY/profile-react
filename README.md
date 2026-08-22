# Hong-You Liao — Web Development Portfolio

正式接案作品集網站，聚焦 React / TypeScript 全端網站開發、會員系統、資料庫、API 串接、管理流程與 RWD。

## 網站定位

這個網站不是專案清單，而是給潛在合作對象的服務入口。內容依序說明可提供的服務、主打案例、技術能力、合作流程與聯絡方式，並支援繁中／英文與 Light／Dark／System 三種主題。

## 精選案例

- **Taiwan HSR Booking System**：React + FastAPI + PostgreSQL 的完整訂票平台
- **Margin Call Simulator**：圖、文、語音整合的互動式金融教育工具
- **Interleaving Pomodoro**：支援多語系與響應式介面的生產力工具

## 技術棧

React 19 · TypeScript · Vite · react-i18next · Radix Icons · 原生 CSS

## 部署

網站由 GitHub Actions 建置為純靜態 `dist`，再部署到 GitHub Pages：

- 現行網址：[https://ricklhy.github.io/profile-react/](https://ricklhy.github.io/profile-react/)
- 推送到 `main` 後自動執行 lint、靜態建置與部署
- 靜態資源使用相對路徑，因此同一份產物可同時支援 GitHub Pages 專案路徑與自訂網域根路徑

自訂網域應在 GitHub Pages 設定中指定，並在 DNS 供應商建立 GitHub Pages 要求的記錄；啟用後保留 HTTPS 強制轉址。

## 本地開發

```bash
npm install
npm run dev
```

正式建置與程式檢查：

```bash
npm run build
npm run lint
```

## 聯絡

- GitHub: [rickLHY](https://github.com/rickLHY)
- Email: [lhy.mg13@nycu.edu.tw](mailto:lhy.mg13@nycu.edu.tw)
