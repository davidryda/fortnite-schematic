import styles from './SchematicCard.module.scss';
import antiCuddleSarahPortrait from "../../assets/heroes/portraits/Anti-Cuddle Sarah.webp"

const SchematicCard = () => {
  return (
    <>
      <div className={styles.cardFrame}>
        <div className={styles.cardContent}>
          <div className={styles.schematicPowerLevelContainer}></div>
          <div className={styles.cardContentSchematicAttributes}>
            <div className={styles.schematicPowerLevel}>

            </div>

            <img className={styles.assetImage} src={antiCuddleSarahPortrait} />

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
          <div className={styles.cardContentLevels}>
            <div className={styles.levelBar}></div>
            <div className={styles.starContainer}>
              <div className={styles.star}></div>
              <div className={styles.star}></div>
              <div className={styles.star}></div>
              <div className={styles.star}></div>
              <div className={styles.star}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchematicCard;
