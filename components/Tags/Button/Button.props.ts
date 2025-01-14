import React from "react";

export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode;

  variant: ButtonVariant;
}
