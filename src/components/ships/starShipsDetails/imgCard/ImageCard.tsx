import styles from "./ImageCard.module.scss"

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
}

export const ImageCard = ({ src, alt, title, subtitle }: ImageCardProps) => (
  <div className={styles.imageCard}>
    <img
      src={src}
      alt={alt}
      className={styles.image}
    />
    <div className={styles.label}>
      <div className="uppercase">{title}</div>
      {subtitle && <div className="italic font-normal">{subtitle}</div>}
    </div>
  </div>
);