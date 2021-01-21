import React, { Component, useState, useEffect } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import '../../style/cart/paymentparticipantinf.scss'

export default class AccordionExampleStandard extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <div className="paymentparticipantinftop">
        <div className="paymentparticipantinfbox1">訂購人資訊</div>
        <div className="paymentparticipantinfbox2">
          <div className="container">
            <Accordion>
              <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={this.handleClick}
              >
                <div className="participantitem1" name="dropdown">
                  落羽松巡禮第1站{' '}
                  <img className="particon1" src="/pic/pic/arrow.png" alt="" />{' '}
                </div>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
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
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex === 1}
                index={1}
                onClick={this.handleClick}
              >
                <div className="participantitem2" name="dropdown">
                  落羽松巡禮第1站{' '}
                  <img className="particon1" src="/pic/pic/arrow.png" alt="" />
                </div>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
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
              </Accordion.Content>
            </Accordion>
          </div>
        </div>
      </div>
    )
  }
}
