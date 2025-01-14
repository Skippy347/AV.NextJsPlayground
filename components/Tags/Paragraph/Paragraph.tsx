import styles from "./Paragraph.module.scss";
import clx from "classnames";

import { ParagraphProps, ParagraphSize } from "./Paragraph.props";

export const Paragraph: React.FC<ParagraphProps> = (props) => {
  const { children, size = ParagraphSize.SMALL, ...otherProps } = props;

  const paragraphClasses = clx(styles.Paragraph, {
    [styles[size]]: size,
  });

  return (
    <p className={paragraphClasses} {...otherProps}>
      {children}
    </p>
  );
};
