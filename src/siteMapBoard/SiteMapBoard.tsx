import React from "react";
import {LinkButton} from "../linkButton/LinkButton";
import {css} from "@emotion/css";

export class SiteMapBoard extends React.Component<any, any> {

  render() {
    return (
        <div className={css({
          width : '100%',
          height: '100%',
          textAlign: 'center'
        })}>
          <h1>Heimdallr SiteMaaㅁp</h1>
          <div className={css({
            display: "inline-block",
            width: "70%",
            paddingTop: "2%",
            paddingBottom: "2%",
            paddingLeft: "1%",
            paddingRight: "1%",
            backgroundColor: "whitesmoke",
            // textAlign: "left",
          })}>
            <LinkButton/>
          </div>
        </div>
    );
  }
}
