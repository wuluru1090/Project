import React from 'react'
import '../style/default.scss'
import '../style/class_card.scss'
import { Card } from 'react-bootstrap'

function ClassCard() {
  return (
    <>
      <Card>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
    </>
  )
}

export default ClassCard
