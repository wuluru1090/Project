import '../../index.scss'
import React from 'react'
import MemberContent from '../../components/Member/MemberContent'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import '../../style/member/member.scss'

function MemberHome() {
  return (
    <>
      <body>
        <div className="background_wave2 ">
          <div className="wrapper  ">
            <main className="container">
              <aside className="d-flex justify-content-end">
                <br />
                <div>
                  <MemberCard key="" />
                  <br />
                  <MemberNavlist key="" />
                </div>

                <article>
                  <MemberContent key="" />
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

export default MemberHome
