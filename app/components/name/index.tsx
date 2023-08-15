import styles from "./styles.module.css";
type Props = {
  name: string;
};

export default function showName(props: Props) {
  return <p className={styles.container}>{props.name}</p>;
}
