import React from "react";

export enum ParagraphSize {
  LARGE = "large",
  MEDIUM = "medium",
  SMALL = "small",
}

export interface ParagraphProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: React.ReactNode;

  size: ParagraphSize;
}
