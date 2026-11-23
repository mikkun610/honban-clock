# 本番時計

共テ・名大の本番の時刻で、大問の区切りを練習する時計。GitHub Pages でそのまま公開できる。スマホでホーム画面に追加すると全画面で開ける。

- `index.html` — アプリ本体（時計・配分・記録・設定）
- `service-worker.js` — オフライン用。`index.html` を変えたら `CACHE` の番号を上げる
- `manifest.webmanifest` / `icons/` — ホーム画面に追加したときの名前とアイコン

記録と設定は端末内（localStorage）に保存する。
