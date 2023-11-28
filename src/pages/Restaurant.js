import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Restaurant.module.css";

const Restaurant = () => {
  const navigate = useNavigate();

  const onMenuItemClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onMenuItem1Click = useCallback(() => {
    navigate("/reservation");
  }, [navigate]);

  const onMenuItem2Click = useCallback(() => {
    navigate("/classes");
  }, [navigate]);

  return (
    <div className={styles.restaurant}>
      <div className={styles.gallery}>
        <div className={styles.image}>
          <img
            className={styles.pexelsRachelClaire45774101Icon}
            alt=""
            src="/pexelsrachelclaire4577410-11@2x.png"
          />
        </div>
        <div className={styles.image1}>
          <img
            className={styles.pexelsRachelClaire45774081Icon}
            alt=""
            src="/pexelsrachelclaire4577408-1@2x.png"
          />
          <div className={styles.logo}>
            <div className={styles.nique}>nique.</div>
          </div>
        </div>
        <div className={styles.image2}>
          <img
            className={styles.pexelsRachelClaire4992813Icon}
            alt=""
            src="/pexelsrachelclaire4992813-1-11@2x.png"
          />
        </div>
        <div className={styles.image2}>
          <img
            className={styles.pexelsRachelClaire4992813Icon}
            alt=""
            src="/pexelsrachelclaire4992806-1@2x.png"
          />
        </div>
        <div className={styles.image2}>
          <img
            className={styles.pexelsRachelClaire45773972Icon}
            alt=""
            src="/pexelsrachelclaire4577397-2@2x.png"
          />
        </div>
        <div className={styles.image2}>
          <img
            className={styles.pexelsRachelClaire4992813Icon}
            alt=""
            src="/pexelsrachelclaire4998026-1@2x.png"
          />
        </div>
        <div className={styles.image6}>
          <img
            className={styles.pexelsRachelClaire45771791Icon}
            alt=""
            src="/pexelsrachelclaire4577179-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.discover}>Discover</div>
        <div className={styles.nique1}>nique.</div>
      </div>
      <div className={styles.navbar}>
        <div className={styles.inner}>
          <div className={styles.icon}>
            <img
              className={styles.ritimeLineIcon}
              alt=""
              src="/ritimeline4.png"
            />
          </div>
          <div className={styles.menu}>
            <button className={styles.menuItem} onClick={onMenuItemClick}>
              <div className={styles.classes}>Menu</div>
            </button>
            <button className={styles.menuItem1} onClick={onMenuItem1Click}>
              <div className={styles.classes}>Restaurant</div>
            </button>
            <button className={styles.menuItem1} onClick={onMenuItem2Click}>
              <div className={styles.classes}>Classes</div>
            </button>
          </div>
          <div className={styles.button}>
            <div className={styles.bookATable}>Book a Table</div>
          </div>
        </div>
      </div>
      <div className={styles.logo1}>
        <div className={styles.nique2}>nique.</div>
      </div>
    </div>
  );
};

export default Restaurant;
