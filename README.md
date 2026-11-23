# 本番時計

共テ・名大の本番の時刻で、大問の区切りを練習する時計。GitHub Pages でそのまま公開できる。スマホでホーム画面に追加すると全画面で開ける。

- `index.html` — アプリ本体（時計・配分・記録・設定）
- `service-worker.js` — オフライン用。`index.html` を変えたら `CACHE` の番号を上げる
- `manifest.webmanifest` / `icons/` — ホーム画面に追加したときの名前とアイコン

記録と設定は端末内（localStorage の `kyote-clock-r9-v2`）に保存する。

## 更新するときの決まり（データを消さないため）

- 保存キー `kyote-clock-r9-v2` の名前は変えない
- 保存データの形を変えるときは、古い形を読み込んで新しい形に直す処理を必ず入れる（項目を消したり意味を変えたりしない）
- 科目や記録のIDは変えない
- 公開URL（mikkun610.github.io/honban-clock/）は変えない。URLが変わると保存場所も別になる
