import * as React from "react";
import LinkBtnProps from "./LinkButtonProps.json";
import {css} from "@emotion/css";

const LinkBtnImgStyle = css({
  width: '5%',
  height: '5%',
  minWidth: 100,
  minHeight: 100
});

const LinkAtagStyle = css ({
  textDecoration: 'none',
  display: 'block',
  color: 'black',
  fontSize: '3.1em'
});

export class LinkButton extends React.Component<any, any> {

  render() {
    return (
        <div>
          {LinkBtnProps.map((btnProp) => <a href={btnProp.href} className={LinkAtagStyle} key={btnProp.key}> <img src={btnProp.icon} alt={btnProp.key} className={LinkBtnImgStyle}/> {btnProp.title} </a>)}
        </div>
    );
  }
}
