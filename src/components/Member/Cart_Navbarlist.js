import React from 'react'
import '../../style/member/mem_navbarlist_o.scss'
import TreeView from '@material-ui/lab/TreeView'
import TreeItem from '@material-ui/lab/TreeItem'

export default function FileSystemNavigator() {
  return (
    <TreeView className=" mem_navbarlist1 ">
      <TreeItem
        nodeId="1"
        label="購物車"
        className=" mem_navbarlist2 subtitle1"
      >
        <div className=" mem_navbarlist3">
          <TreeItem
            nodeId="3"
            label="活動"
            className=" mem_navbarlist4 subtitle1"
          />
          <TreeItem
            nodeId="4"
            label="課程"
            className=" mem_navbarlist4 subtitle1"
          />
        </div>
      </TreeItem>
      <TreeItem
        nodeId="2"
        label="未付款"
        className=" mem_navbarlist2 subtitle1"
      >
        <div className=" mem_navbarlist3">
          <TreeItem
            nodeId="5"
            label="活動"
            className=" mem_navbarlist4 subtitle1"
          />
          <TreeItem
            nodeId="6"
            label="課程"
            className=" mem_navbarlist4 subtitle1"
          />
        </div>
      </TreeItem>
    </TreeView>
  )
}
