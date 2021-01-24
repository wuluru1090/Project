import React from 'react'
import '../../style/cart/creditcardconfirmframe.scss'

function CreditcardConfirmFrame(props) {
  return (
    <>
      <div className="creditcardconfirmframetop">
        <div>
          <div className="creditcardconfirmframe1">購買完成</div>
          <div className="creditcardconfirmframe2">
            <div>
              <div className="mt">
                <div className="tcen">恭喜您完成訂單 請至會員中心確認訂單</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreditcardConfirmFrame
