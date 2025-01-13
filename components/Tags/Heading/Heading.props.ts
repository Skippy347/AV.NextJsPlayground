import React from "react";

export type HeadingLevel = "h1" | "h2" | "h3" | "h4";

export interface HeadingProps {
  headingLevel: HeadingLevel;
  children: React.ReactNode;
}
