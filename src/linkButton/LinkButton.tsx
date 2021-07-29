import * as React from "react";
import LinkBtnProps from "./LinkButtonProps.json";
import GitIcon from "../assets/github_link_icon.png";
import BLogIcon from '../assets/blog_link_icon.png';
import NotionIcon from '../assets/notion_link_icon.png';
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
        <React.Fragment>
          <a href={LinkBtnProps.Blog.href} className={LinkAtagStyle}> <img src={BLogIcon} alt='' className={LinkBtnImgStyle}/> {LinkBtnProps.Blog.title} </a>
          <a href={LinkBtnProps.Git.href} className={LinkAtagStyle}> <img src={GitIcon} alt='' className={LinkBtnImgStyle}/> {LinkBtnProps.Git.title} </a>
          <a href={LinkBtnProps.Notion.href} className={LinkAtagStyle}> <img src={NotionIcon} alt='' className={LinkBtnImgStyle}/> {LinkBtnProps.Notion.title} </a>
        </React.Fragment>
    );
  }
}
