import * as React from "react";

export default function Component() {
  if (typeof window !== "undefined") {
    window.location.pathname = "/storybook/core/index.html";
  }

  return;
}
