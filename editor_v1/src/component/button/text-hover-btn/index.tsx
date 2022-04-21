import React from "react";
import {
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
 
} from "@ant-design/icons";
import cn from 'classnames'

import styles from "./index.module.less";

const typeMap = {
  bold: {
    icon: <BoldOutlined />,
    tip: "一级标题",
  },
 
  italic: {
    icon: <ItalicOutlined />,
    tip: "左对齐",
  },
  underline: {
    icon: <UnderlineOutlined />,
  }, 
};

type IBtnProps = {
  type: string;
  onClick: (e) => any;
  active:boolean
};

export default (props: IBtnProps) => {
  const { type, onClick } = props;
  const styleInfo = typeMap[type];

  if (!styleInfo) return <></>;

  const classNs = cn({
    [styles.btn]:true,
    [styles.active]:props?.active,
  })

  return (
    <div className={classNs} onClick={onClick}>
      {styleInfo?.icon}
    </div>
  );
};
