import styles from "./Loader.module.scss";

interface ILoader {
  className?: string;
}

export const Loader = ({ className }: ILoader) => (
  <div className={`${styles.spinner} ${className}`}>
    <svg className={styles.circle} viewBox="25 25 50 50" width="48" height="48">
      <circle
        className={styles.path}
        cx="50"
        cy="50"
        r="20"
        fill="none"
        strokeWidth="4"
      />
    </svg>
  </div>
);
