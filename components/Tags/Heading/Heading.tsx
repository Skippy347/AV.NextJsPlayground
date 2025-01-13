import React from "react";
import { HeadingProps } from "./Heading.props";

export const Heading: React.FC<HeadingProps> = (props) => {
  const { headingLevel, children } = props;

  const HeadingTag = headingLevel;

  return <HeadingTag>{children}</HeadingTag>;
};
