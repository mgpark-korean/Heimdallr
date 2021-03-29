import React from "react";
import {LinkButton} from "../LinkButton/LinkButton";

export class SiteMapBoard extends React.Component<any, any> {

  render() {
    return (
        <div className="w-screen h-screen bg-gray-500 flex items-center justify-center">
          <div className="rounded-lg bg-indigo-400 flex flex-wrap content-start w-1/2 h-5/6 opacity-80 padding: 2rem shadow-2xl">
            <LinkButton/>
          </div>
        </div>
    );
  }
}
