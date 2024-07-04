import styles from './SchematicCard.module.scss';

const SchematicCard = () => {
  return (
    <>
      <div className={styles.cardFrame}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentSchematicAttributes}>
            <div className={styles.sunburst}>
              <div className={styles.wedge}></div>
              <div className={styles.wedge}></div>
              <div className={styles.wedge}></div>
              <div className={styles.wedge}></div>
              <div className={styles.wedge}></div>
              <div className={styles.wedge}></div>
              <div className={styles.wedge}></div>
              <div className={styles.wedge}></div>
              <div className={styles.wedge}></div>
              <div className={styles.wedge}></div>
              <div className={styles.wedge}></div>
              <div className={styles.wedge}></div>

              <div className={styles.triangle1}></div>
              <div className={styles.triangle2}></div>
              <div className={styles.triangle3}></div>
              <div className={styles.triangle4}></div>
              <div className={styles.triangle5}></div>
              <div className={styles.triangle6}></div>
            </div>
          </div>
          <div className={styles.cardContentLevels}></div>
        </div>
      </div>
    </>
  );
};

export default SchematicCard;
