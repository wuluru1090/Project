我已經上傳新專案! package.json 所安裝的套件比照最新版老師的 src 資料夾有空的 components,data,pages 資料夾，其中 ruby 所上傳的新版 style(含更新 font-family 和 font-size 和 font-size)也在裏頭。

app.js 尚未更動，維持最初版本。

ruby 2021.01.03:
我對字型的設定進行了更新，變更為
  body {
    font-family: 'Roboto', 'TaipeiSansTCBeta-Regular', 'Noto Sans TC' sans-serif !important;
   }

Roboto 被設為只有英語語系字元可以使用，因此要將 Roboto 擺在第一個順位，中文字會吃到 Taipei Sans。Noto Sans 是我設定的備用字體。如果要使用中英文的粗體或細體，可以將以下設定在 font family:
'TaipeiSansTCBeta-Bold','TaipeiSansTCBeta-Light','Roboto-light','Roboto-regular'
