import React from "react";

export enum LabelVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface LabelProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  children: React.ReactNode;

  variant: LabelVariant;
}
