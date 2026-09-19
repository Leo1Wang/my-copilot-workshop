[![工作坊完成徽章](https://img.shields.io/badge/GitHub_Copilot_%E5%AF%A6%E6%88%B0%E5%B7%A5%E4%BD%9C%E5%9D%8A-%E5%B7%B2%E5%AE%8C%E6%88%90-1F883D?style=for-the-badge&logo=githubcopilot&logoColor=white)]

# 待辦清單 Web App

這是在 GitHub Copilot 實戰工作坊完成的待辦清單 Web App。作品以純前端技術實作，提供日常待辦事項的新增、完成、篩選與整理功能，並將資料保存在瀏覽器中。

## 線上展示

GitHub Pages：<https://Leo1Wang.github.io/my-copilot-workshop/>

## 功能

- 新增待辦事項，並限制輸入長度以維持內容可讀性。
- 將待辦事項標記為已完成或取消完成。
- 顯示未完成事項數量。
- 依「全部」、「未完成」與「已完成」篩選清單。
- 篩選結果為空時，顯示清楚的提示文字。
- 刪除單筆待辦事項。
- 一次清除所有已完成事項，操作前使用瀏覽器確認對話框確認。
- 沒有已完成事項時，停用「清除已完成」按鈕。
- 使用 `localStorage` 保存待辦資料，重新整理頁面後仍可保留內容。
- 支援鍵盤操作與適當的 ARIA 標籤。
- 具備響應式版面配置，可在不同螢幕寬度下使用。

## 技術

- 使用 HTML 建立頁面結構。
- 使用 CSS 變數、Grid、Flexbox 與媒體查詢處理樣式與響應式版面。
- 使用原生 JavaScript 處理事件、清單渲染、篩選與資料更新。
- 不使用任何框架或套件。
- 資料使用瀏覽器的 `localStorage` 保存。
- 不依賴外部 CDN，專案可離線運作。

## 開發方式

這個專案在 GitHub Copilot 實戰工作坊中，透過以下方式完成：

- **GitHub Copilot Agent Mode**：協助從需求建立待辦清單 App，並逐步完成介面與互動功能。
- **MCP**：連接 Microsoft Learn 與 GitHub 工具，查詢官方文件、確認無障礙與 CSS 主題建議，以及讀取 repository 的 issue。
- **`.github/prompts` 的 agentic workflow**：將處理 GitHub issue 的流程寫成可重複使用的 prompt，依序讀取 issue、提出計畫、修改程式、驗證並建立 Pull Request。
- **Git 與 GitHub Pull Request**：以分支與 Pull Request 管理功能變更，並處理分支之間的整合衝突。

## 我學到什麼

- 如何使用 Agent Mode 將需求拆解為可執行的開發步驟。
- 如何透過 MCP 查詢官方文件與 repository 資訊，讓實作決策有可靠依據。
- 如何使用 `localStorage` 保存前端應用程式的狀態。
- 如何在篩選、刪除與確認操作中補足使用者回饋與無障礙標示。
- 如何用 prompt 將 issue 修復流程整理成可重複執行的 agentic workflow。
