import React from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

export interface HeadingProps extends React.HTMLProps<HTMLElement> {
  children: React.ReactNode;

  headingLevel: HeadingLevel;
}
