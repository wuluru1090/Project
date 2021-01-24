import React, { Component } from 'react'
import { Accordion } from 'semantic-ui-react'
import { devUrl } from '../../config'
import '../../style/cart/buydetails.scss'

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
      <div className="buydetailsobb">
        <Accordion>
          <div className="buydetailso">
            <table className="columnoh">
              <thead className="centertrtd">
                <tr className="trc">
                  <th className="imgw">活動名稱</th>
                  <th>數量</th>
                  <th>價錢</th>
                  <th>小記</th>
                </tr>
              </thead>
              <div className="lineup"></div>

              <tbody className="centertrtd">
                <tr>
                  <td className="tdcolumn d-flex">
                    <div>
                      <img
                        className="titlephoto"
                        src={devUrl + '/pic/pic/鳳山溪橋東側1.jpg'}
                        alt="titlephoto"
                      />
                    </div>{' '}
                    <div className="tdtext">
                      日出撈魚苗│日出霞光、火燒雲絕美景色
                    </div>
                  </td>
                  <td className="">1</td>
                  <td>2000</td>
                  <td className="">2000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <div className="joininft">
              <div className="jcsb d-flex">
                <div className="ttext">參加者資訊</div>
                <div>
                  <img
                    className="timg"
                    src={
                      devUrl + '/pic/SVG/icon-navigation-chevron_right_-3.SVG'
                    }
                    alt="titlephoto"
                  />
                </div>
              </div>
            </div>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <div className="joininfb">
              <div className="inf  d-flex">
                <div>
                  <div className="infd">姓名:</div>
                  <div className="infd">手機:</div>
                  <div className="infd">生日:</div>
                  <div className="infd">身分證字號:</div>
                  <div className="infd">性別:</div>
                  <div className="infd">訂單備註:</div>
                </div>
                <div>
                  <div className="infd">胡子</div>
                  <div className="infd">0911111111</div>
                  <div className="infd">1999/12/31</div>
                  <div className="infd">A111111111</div>
                  <div className="infd">男</div>
                  <div className="infd">無</div>
                </div>
              </div>
            </div>
          </Accordion.Content>
          <div className="buydetailso">
            <table responsive className="columnoh">
              <thead className="centertrtd">
                <tr className="trc">
                  <th className="imgw">活動名稱</th>
                  <th>數量</th>
                  <th>價錢</th>
                  <th>小記</th>
                </tr>
              </thead>
              <div className="lineup"></div>

              <tbody className="centertrtd">
                <tr className="">
                  <td className="tdcolumn d-flex ">
                    <div>
                      <img
                        className="titlephoto"
                        src={devUrl + '/pic/pic/鳳山溪橋東側1.jpg'}
                        alt="titlephoto"
                      />
                    </div>{' '}
                    <div className="tdtext">
                      日出撈魚苗│日出霞光、火燒雲絕美景色
                    </div>
                  </td>
                  <td className="">1</td>
                  <td>2000</td>
                  <td className="">2000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <div className="joininft">
              <div className="jcsb d-flex">
                <div className="ttext">參加者資訊</div>
                <div>
                  <img
                    className="timg"
                    src={
                      devUrl + '/pic/SVG/icon-navigation-chevron_right_-3.SVG'
                    }
                    alt="titlephoto"
                  />
                </div>
              </div>
            </div>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <div className="joininfb">
              <div className="inf  d-flex">
                <div>
                  <div className="infd">姓名:</div>
                  <div className="infd">手機:</div>
                  <div className="infd">生日:</div>
                  <div className="infd">身分證字號:</div>
                  <div className="infd">性別:</div>
                  <div className="infd">訂單備註:</div>
                </div>
                <div>
                  <div className="infd">胡子</div>
                  <div className="infd">0911111111</div>
                  <div className="infd">1999/12/31</div>
                  <div className="infd">A111111111</div>
                  <div className="infd">男</div>
                  <div className="infd">無</div>
                </div>
              </div>
            </div>
          </Accordion.Content>
        </Accordion>
      </div>
    )
  }
}
