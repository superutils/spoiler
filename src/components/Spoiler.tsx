import spoilerURL from "../assets/gif/stars_spoiler.gif";
import * as React from "react";
import { isNullOrUndefined } from "../utils/types";

interface ISpoiler {
  children?: JSX.Element | JSX.Element[] | string | boolean;
  width?: string | number;
  height?: string | number;
  isActive?: boolean;
}

export default function Spoiler(props: ISpoiler) {
  const isNotActive = !props.isActive && !isNullOrUndefined(props.isActive);
  const NotActiveSpoiler = <>{props.children}</>;
  const ActiveSpoiler = (
    <div
      style={{
        position: "relative",
        width: props.width || "fit-content",
        height: props.height || "fit-content",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgb(0, 0, 0, 0.01)",
          backgroundSize: "1.5rem 1.5rem",
          backgroundImage: `url(${spoilerURL})`,
        }}
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          visibility: "hidden",
        }}
      >
        {props.children}
      </div>
    </div>
  );
  return (isNotActive && NotActiveSpoiler) || ActiveSpoiler;
}
