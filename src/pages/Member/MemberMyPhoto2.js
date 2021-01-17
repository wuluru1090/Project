import '../../index.scss'
import React from 'react'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import '../../style/member/member.scss'
import '../../style/member/member_photo2.scss'
import { devUrl } from '../../config'
import { Card, Button } from 'react-bootstrap'
import { MdDelete } from 'react-icons/md'
function MemberMyPhoto2(props) {
  return (
    <>
      <body>
        <div className="background_wave ">
          <div className="wrapper  ">
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
                        <h5>我的相簿/一日遊是我</h5>
                        <form>
                          <input
                            accept="image/*"
                            className=""
                            style={{ display: 'none' }}
                            id="iconephoto-button-file"
                            type="file"
                          />
                          <label htmlFor="iconephoto-button-file">
                            <img
                              className="addphoto2"
                              src={devUrl + '/pic/SVG/photoadd2.svg'}
                              alt="add2"
                              style={{ cursor: ' pointer ' }}
                            ></img>
                          </label>
                        </form>
                      </Card.Header>
                      <Card.Body style={{ padding: '14px  42px  14px 42px' }}>
                        <div className="photo_album3 d-flex ">
                          <div className="img_box3  d-flex justify-content-between">
                            <div className=" d-flex flex-wrap">
                              <div className="myphoto">
                                <div className=" d-flex justify-content-end">
                                  <input type="checkbox" />
                                </div>
                                <figure>
                                  <img
                                    src={devUrl + '/pic/pic/桌布-德國.jpg'}
                                    alt="photo1"
                                  ></img>
                                  <figcaption className="d-flex justify-content-center">
                                    絕美風景照片
                                  </figcaption>
                                </figure>
                              </div>
                              <div className="myphoto">
                                <div className=" d-flex justify-content-end">
                                  <input type="checkbox" />
                                </div>
                                <figure>
                                  <img
                                    src={devUrl + '/pic/pic/桌布-德國.jpg'}
                                    alt="photo1"
                                  ></img>
                                  <figcaption className="d-flex justify-content-center">
                                    絕美風景照片
                                  </figcaption>
                                </figure>
                              </div>
                              <div className="myphoto">
                                <div className=" d-flex justify-content-end">
                                  <input type="checkbox" />
                                </div>
                                <figure>
                                  <img
                                    src={devUrl + '/pic/pic/桌布-德國.jpg'}
                                    alt="photo1"
                                  ></img>
                                  <figcaption className="d-flex justify-content-center">
                                    絕美風景照片
                                  </figcaption>
                                </figure>
                              </div>
                              <div className="myphoto">
                                <div className=" d-flex justify-content-end">
                                  <input type="checkbox" />
                                </div>
                                <figure>
                                  <img
                                    src={devUrl + '/pic/pic/桌布-德國.jpg'}
                                    alt="photo1"
                                  ></img>
                                  <figcaption className="d-flex justify-content-center">
                                    絕美風景照片
                                  </figcaption>
                                </figure>
                              </div>
                              <div className="myphoto">
                                <div className=" d-flex justify-content-end">
                                  <input type="checkbox" />
                                </div>
                                <figure>
                                  <img
                                    src={devUrl + '/pic/pic/桌布-德國.jpg'}
                                    alt="photo1"
                                  ></img>
                                  <figcaption className="d-flex justify-content-center">
                                    絕美風景照片
                                  </figcaption>
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="d-flex justify-content-end">
                          <Button
                            onclick=""
                            className="btn-style $botton-font btn_icon mem_card_btn"
                          >
                            <MdDelete />
                            刪除照片
                          </Button>
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

export default MemberMyPhoto2
