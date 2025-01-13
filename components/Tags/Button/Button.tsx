import styles from "./Button.module.scss";
import clx from "classnames";

import { ButtonProps } from "./Button.props";
import { ButtonVariant } from "./Button.props";

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, variant = ButtonVariant.PRIMARY, type = "button", ...otherProps } = props;

  const buttonClasses = clx(styles.Button, {
    [styles[variant]]: variant,
  });

  return (
    <button className={buttonClasses} type={type} {...otherProps}>
      {children}
    </button>
  );
};
