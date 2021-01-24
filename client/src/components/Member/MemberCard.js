import React, { useState, useEffect } from 'react'
import '../../style/default.scss'
import Axios from 'axios'
import { Card } from 'react-bootstrap'
import '../../style/member/member_card.scss'
import { withRouter } from 'react-router-dom'
import MemberPhotoImg from './MemberPhotoImg'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'

function MemberCard(props) {
  const [member, setMember] = useState([])

  useEffect(() => {
    Axios.get(`http://localhost:3001/member/get/${props.match.params.id}`)
      .then((res) => {
        setMember(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <>
      {member.map((val) => {
        return (
          <div className="container ">
            <Card className="mem_card d-flex justify-content-start ">
              <MemberPhotoImg key="" />

              <Card.Body>
                <Card.Text className="d-flex justify-content-center  align-items-center">
                  <div className="d-flex justify-content-center  ">
                    <div className=" d-flex justify-content-center">
                      <p className=" d-flex align-items-center star_Points">
                        <Box sml={2}>{val.member_Average_rating} </Box>
                      </p>
                      <Rating
                        name="read-only"
                        value={val.member_Average_rating}
                        precision={0.5}
                        readOnly
                      />
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        )
      })}
    </>
  )
}

export default withRouter(MemberCard)
