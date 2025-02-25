import { forwardRef, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onIconClick?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ onIconClick, ...props }, ref) => {
    return (
      <div className={styles.inputWrapper}>
        <input {...props} ref={ref} className={styles.input} />

        <button
          type="button"
          onClick={onIconClick}
          className={styles.iconButton}>
          +
        </button>
      </div>
    );
  }
);

export default Input;
