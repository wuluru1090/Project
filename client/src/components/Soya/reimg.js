// 這不是component 我是把有用到的地方抓出來而已
// 我是參考你之前給我的那個預覽上傳 其實也只有改鉤子 其他都差不多
// 你可以在看一下之前給我的那個網站

//    鉤子
const [uploadimg, setUploadimg] = useState(devUrl + '/pic/soya/white.jpg')

// 圖片預覽
const changefile = (e) => {
  const file = e.target.files.item(0)
  const fileReader = new FileReader()
  fileReader.addEventListener('load', fileLoad)

  if (file) {
    fileReader.readAsDataURL(file)
  }
  // 這邊codepen有一個bug 就是按取消上船會報錯 所以我加了一個判斷式
  // 只是我不知道else要寫什麼就先放著 這樣還是有一點小bug可是不會報錯 比較好一點
}
const fileLoad = (e) => {
  setUploadimg(e.target.result)
  // console.log(e.target.result)
}

// 結構
;<>
  <div className="titlepagetitle d-flex">封面圖</div>
  <div className="titlepagebtnbox d-flex">
    <button
      className="btn titlepagebtn rounded-pill d-flex"
      style={{
        position: 'relative',
      }}
    >
      <input
        type="file"
        onChange={changefile}
        style={{
          position: 'absolute',
          left: '0',
          opacity: '0',
        }}
      />
      選擇圖片上傳
    </button>
  </div>

  <div className="titlepageimgbox d-flex">
    <img src={uploadimg} alt="aaa" className="cover-fit titlepageimg" />
  </div>
  <div className="titlepagebrow d-flex justify-content-center">圖片預覽</div>
</>

// 還有就是使用FileReader後圖片會自動轉成base64格式
// 我那時有問老師他說就直接存到資料庫就好不用轉格式 因為src屬性可以吃base64格式
// 只是資料庫跟後端要改一點東西才存得進去 如果你沒有要存就沒差
// 有問題在跟我說 我再跟你說要改啥
