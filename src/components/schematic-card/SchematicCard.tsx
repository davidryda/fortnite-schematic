import styles from './SchematicCard.module.scss';

const SchematicCard = () => {
  return (
    <>
      <div className={styles.cardFrame}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentSchematicAttributes}>
            <div className={styles.schematicPowerLevel}>

            </div>

            <div className={styles.schematicClass}>

            </div>

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
              {/* <div className={styles.triangle1trailing}></div> */}
              <div className={styles.triangle2}></div>
              <div className={styles.triangle3}></div>
              <div className={styles.triangle4}></div>
              <div className={styles.triangle5}></div>
              <div className={styles.triangle6}></div>
              <div className={styles.triangle10}></div>
              <div className={styles.triangle10Trailing}></div>
            </div>
          </div>
          <div className={styles.cardContentLevels}></div>
        </div>
      </div>
    </>
  );
};

export default SchematicCard;
