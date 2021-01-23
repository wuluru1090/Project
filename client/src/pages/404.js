import logo from '../../logo.svg'
import '../../style/class/404.scss'

function ErrorPage() {
  return (
    <>
      <section class="page_404">
        <div class="c404">
          <div>
            <div>
              <div class=" text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>
                </div>

                <div class="contant_box_404">
                  <h3 class="h2">你是不是迷失方向了?</h3>

                  <p>你搜尋的頁面不存在了...</p>

                  <a href="/" class="link_404">
                    返回首頁
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ErrorPage
