import * as React from "react";
import * as LinkBtnProps from "./LinkButtonProps.json";
import GitIcon from "../assets/github_link_icon.png";
import BLogIcon from '../assets/blog_link_icon.png';

export class LinkButton extends React.Component<any, any>{
  render() {
    return (
        <React.Fragment>
          <a href={LinkBtnProps.Blog.href}> <img src={BLogIcon} alt=''/> {LinkBtnProps.Blog.title} </a>
          <a href={LinkBtnProps.Git.href}> <img src={GitIcon} alt=''/> {LinkBtnProps.Git.title} </a>
        </React.Fragment>
    );
  }
}
