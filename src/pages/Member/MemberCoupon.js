import '../../index.scss'
import React, { useState, useEffect } from 'react'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import '../../style/member/member_coupon.scss'
import '../../style/member/member_navbar.scss'
import { Card } from 'react-bootstrap'
import { MdArchive } from 'react-icons/md'
import { withRouter } from 'react-router-dom'
import Axios from 'axios'

function MemberCoupon(props) {
  const [couponnew, setCouponNew] = useState([])
  const [coupon, setCoupon] = useState([])
  // const[ ]

  useEffect(() => {
    Axios.get(
      `http://localhost:3001/member/get/coupon/new/${props.match.params.id}`
    )
      .then((res) => {
        setCouponNew(res.data)
        console.log(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  useEffect(() => {
    Axios.get(
      `http://localhost:3001/member/get/coupon/${props.match.params.id}`
    )
      .then((res) => {
        setCoupon(res.data)
        console.log(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const UpdateCoupon = (coupon_id) => {
    console.log(coupon_id)

    Axios.put('http://localhost:3001/member/update/coupon', {
      coupon_id: coupon_id,
      member_id: `${props.match.params.id}`,
    }).then((res) => {
      setCouponNew(
        couponnew.map((get) => {
          return get.coupon_id === coupon_id
            ? {
                coupon_id: get.coupon_id,
                member_id: `${props.match.params.id}`,
              }
            : get
        })
      )
    })
  }

  return (
    <>
      <body>
        <div className="background_wave ">
          <div className="wrapper ">
            <main className="container">
              <aside className="d-flex justify-content-end">
                <br />
                <div>
                  <MemberCard />
                  <br />
                  <MemberNavlist />
                </div>

                <article>
                  <div className="container ">
                    <Card className="mem_box">
                      <Card.Header className="mem_title d-flex justify-content-between">
                        <h5>折價券</h5>
                      </Card.Header>
                      <Card.Body
                        style={{ padding: '0  38px  43px 42px' }}
                        className="navbarbox "
                      >
                        <br />
                        <h6>我的折價券</h6>
                        <hr className="hrline" />
                        {coupon.length > 0 ? (
                          <div className=" d-flex justify-content-between">
                            <div className=" d-flex justify-content-start get_coupon ">
                              {coupon.map((val) => {
                                return (
                                  <div className=" coupon position-relative">
                                    <h6 className="d-flex justify-content-center">
                                      {val.coupon_name}
                                    </h6>
                                    <p className="d-flex justify-content-center">
                                      {val.coupon_content}
                                    </p>
                                    <div
                                      className="d-flex position-absolute"
                                      style={{ right: '5px', bottom: '5px' }}
                                    ></div>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        ) : (
                          <p>尚未領取</p>
                        )}

                        <h6>領取折價券</h6>
                        <hr className="hrline" />
                        <div className=" d-flex justify-content-between">
                          <div className=" d-flex justify-content-start get_coupon ">
                            {couponnew.map((get) => {
                              return (
                                <div className=" coupon position-relative">
                                  <h6 className="d-flex justify-content-center">
                                    {get.coupon_name}
                                  </h6>
                                  <p className="d-flex justify-content-center">
                                    {get.coupon_content}
                                  </p>
                                  <div
                                    className="d-flex position-absolute"
                                    style={{ right: '5px', bottom: '5px' }}
                                  >
                                    <button
                                      className=" btn_sm join"
                                      onClick={() => {
                                        UpdateCoupon(get.coupon_id)
                                      }}
                                    >
                                      領取
                                    </button>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </div>

                        <br />
                        <br />
                        <div className=" d-flex justify-content-end ">
                          <button className=" btn_style subtitle2 botton-font btn_icon mem_card_btn">
                            <MdArchive />
                            一鍵領取
                          </button>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </article>
              </aside>
            </main>
          </div>
          <br />
        </div>
      </body>
    </>
  )
}

export default withRouter(MemberCoupon)
