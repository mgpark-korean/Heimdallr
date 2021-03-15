import * as React from "react";
import {LinkButtonProps} from "./LinkButtonProps";
import {LinkButtonState} from "./LinkButtonState";
import {DirectoryLocation} from "../lib/common/DirectoryLocation";

export class LinkButton extends React.Component<LinkButtonProps, LinkButtonState>{
  render() {
    return (
      <a href={this.props.herfUrl}>
        <img src={DirectoryLocation.assetsLocation + this.props.iconUrl} alt={this.props.title}/> {this.props.title}
      </a>
    );
  }
}
