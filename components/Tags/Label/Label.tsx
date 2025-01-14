import React from "react";
import styles from "./Label.module.scss";
import clx from "classnames";

import { LabelProps, LabelVariant } from "./Label.props";

export const Label: React.FC<LabelProps> = (props) => {
  const { children, variant = LabelVariant.PRIMARY, ...otherProps } = props;

  const labelClasses = clx(styles.Label, {
    [styles[variant]]: variant,
  });

  return (
    <span className={labelClasses} {...otherProps}>
      {children}
    </span>
  );
};
