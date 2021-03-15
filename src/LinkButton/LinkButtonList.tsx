import * as React from "react";
import {LinkButton} from "./LinkButton";
import * as PropJSON from "./LinkButtonProps.json";

export class LinkButtonList extends React.Component<any, any> {

  render() {
    return (
        <React.Fragment>
          <LinkButton title={PropJSON.Git.title} herfUrl={PropJSON.Git.href} iconUrl={PropJSON.Git.icon}/>
          <LinkButton title={PropJSON.Blog.title} herfUrl={PropJSON.Blog.href} iconUrl={PropJSON.Blog.icon}/>
        </React.Fragment>
    )
  }
}
