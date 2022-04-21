import React from "react";
import {
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined,
  BorderLeftOutlined,
  OrderedListOutlined,
  UnorderedListOutlined
} from "@ant-design/icons";
import { Tooltip } from "antd";

import styles from './index.module.less'
 
const typeMap = {
  h1: {
    icon: 'H1',
    tip:'一级标题'
  },
  h2: {
    icon: 'H2',
    tip:'二级标题'
  },
  ['block-quote']: {
    icon: <BorderLeftOutlined />,
    tip:'引文'
  },
  left: {
    icon: <AlignLeftOutlined />,
    tip: "左对齐",
  },
  center: {
    icon: <AlignCenterOutlined />,
    tip: "居中",
  },
  right: {
    icon: <AlignRightOutlined />,
    tip: "右对齐",
  },
  ['numbered-list']: {
    icon: <OrderedListOutlined />,
    tip: "有序列表",
  },
  ['bulleted-list']: {
    icon: <UnorderedListOutlined />,
    tip: "无序列表",
  }
};

type IBtnProps = {
  type: string;
  onClick: (e) => any;
};

export default (props: IBtnProps) => {
  const { type, onClick } = props;
  const styleInfo = typeMap[type]
  
  if(!styleInfo) return (<></>)

  
  return (
    <Tooltip title={ styleInfo?.tip} >
      <div className={styles.miniBtn} onClick={onClick}>{ styleInfo?.icon}</div>
    </Tooltip>
  );
};
