import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frontpage.module.css";

const Frontpage = () => {
  const navigate = useNavigate();

  const onMenuClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onRestaurantClick = useCallback(() => {
    navigate("/restaurant");
  }, [navigate]);

  const onClassesClick = useCallback(() => {
    navigate("/classes");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/reservation");
  }, [navigate]);

  return (
    <div className={styles.frontpage}>
      <img
        className={styles.pexelsRachelClaire45771791Icon}
        alt=""
        src="/pexelsrachelclaire4577179-11@2x.png"
      />
      <div className={styles.navbar}>
        <div className={styles.inner}>
          <div className={styles.icon}>
            <img
              className={styles.ritimeLineIcon}
              alt=""
              src="/ritimeline7.png"
            />
          </div>
          <div className={styles.menu}>
            <div className={styles.menuItem}>
              <div className={styles.restaurant} onClick={onMenuClick}>
                Menu
              </div>
            </div>
            <div className={styles.menuItem1}>
              <div className={styles.restaurant} onClick={onRestaurantClick}>
                Restaurant
              </div>
            </div>
            <div className={styles.menuItem1}>
              <div className={styles.restaurant} onClick={onClassesClick}>
                Classes
              </div>
            </div>
          </div>
          <button className={styles.button} onClick={onButtonClick}>
            <div className={styles.bookATable}>Book a Table</div>
          </button>
        </div>
      </div>
      <div className={styles.dropdown}>
        <div className={styles.openingHours}>Opening Hours</div>
        <div className={styles.grid}>
          <div className={styles.row}>
            <div className={styles.mon}>Mon</div>
            <div className={styles.openingHours}>closed</div>
          </div>
          <div className={styles.row}>
            <div className={styles.mon}>Tue - Fri</div>
            <div className={styles.openingHours}>4pm - 8pm</div>
          </div>
          <div className={styles.row}>
            <div className={styles.mon}>Sat- Sun</div>
            <div className={styles.openingHours}>5pm - 11pm</div>
          </div>
        </div>
      </div>
      <div className={styles.grid1}>
        <div className={styles.grid2}>
          <div className={styles.thePureTaste}>The pure taste of</div>
          <div className={styles.thailand}>Thailand</div>
        </div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </div>
      </div>
      <div className={styles.logo}>
        <div className={styles.nique}>nique.</div>
      </div>
    </div>
  );
};

export default Frontpage;
