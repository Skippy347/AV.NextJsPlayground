import React from "react";
import { HeadingProps } from "./Heading.props";

export const Heading: React.FC<HeadingProps> = (props) => {
  const { children, headingLevel = "h1" } = props;

  const HeadingTag = headingLevel;

  return <HeadingTag>{children}</HeadingTag>;
};
