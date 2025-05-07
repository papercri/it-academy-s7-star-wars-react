import styles from "./Card.module.scss";

export default function StarshipsCard({ name, model }: { name: string; model: string }) {
    return (
      <div className={styles.card}>
        <h2>{name}</h2>
        <p>{model}</p>
      </div>
    );
  }
  