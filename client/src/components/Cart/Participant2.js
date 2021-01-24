import React from 'react'
import '../../style/cart/paymentparticipantinf2.scss'

function Participant2(props) {
  return (
    <div className="paymentparticipantinftop2">
      <div className="paymentparticipantinfbox1">參加者資訊</div>
      <div className="paymentparticipantinfbox2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="paymentparticipantinput">
              <form>
                <div className="d-flex">
                  <div className="d-flex marginb">
                    <div className="redt">*</div>
                    <div className="participantaccount">姓名:</div>
                  </div>

                  <div className="paymentparticipantinputbox">
                    <input
                      type="text"
                      className="form-control form-control-md"
                    />
                  </div>
                </div>
              </form>
              <form>
                <div className="d-flex">
                  <div className="d-flex marginb">
                    <div className="redt">*</div>
                    <div className="participantaccount">手機:</div>
                  </div>

                  <div className="paymentparticipantinputbox">
                    <input
                      type="tel"
                      className="form-control form-control-md"
                    />
                  </div>
                </div>
              </form>
              <form>
                <div className="d-flex">
                  <div className="d-flex marginb">
                    <div className="redt">*</div>
                    <div className="participantaccount">生日:</div>
                  </div>

                  <div className="paymentparticipantinputbox">
                    <input
                      type="date"
                      className="form-control form-control-md"
                    />
                  </div>
                </div>
              </form>
              <form>
                <div className="d-flex">
                  <div className="d-flex marginb">
                    <div className="redt">*</div>
                    <div className="participantaccount">身分證字號:</div>
                  </div>

                  <div className="paymentparticipantinputbox">
                    <input
                      type="text"
                      className="form-control form-control-md"
                    />
                  </div>
                </div>
              </form>
              <form>
                <div className="d-flex"></div>
                <div className="d-flex">
                  <div className="sexmb d-flex">
                    <div className="redt">*</div>
                    <div className="participantaccount">性別:</div>
                  </div>

                  <div className="custom-control custom-radio custom-control-inline d-flex sex">
                    <input
                      type="radio"
                      id="customRadioInline1"
                      name="customRadioInline1"
                      className="custom-control-input sexra"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadioInline1"
                    >
                      男
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline sex">
                    <input
                      type="radio"
                      id="customRadioInline2"
                      name="customRadioInline1"
                      className="custom-control-input d-flex"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadioInline2"
                    >
                      女
                    </label>
                  </div>
                </div>
              </form>
              <form>
                <div className="d-flex">
                  <div className="d-flex marginb">
                    <div className="redt">*</div>
                    <div className="participantaccount">訂單備註:</div>
                  </div>
                  <div class="form-floating">
                    <textarea
                      class="form-control paymentparticipantinputbox"
                      placeholder="我想吃早餐"
                      id="floatingTextarea"
                    ></textarea>
                    <label for="floatingTextarea"></label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Participant2
