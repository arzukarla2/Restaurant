import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Classes.module.css";

const Classes = () => {
  const navigate = useNavigate();

  const onMenuItemClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onMenuItem1Click = useCallback(() => {
    navigate("/restaurant");
  }, [navigate]);

  return (
    <div className={styles.classes}>
      <div className={styles.classes1}>
        <div className={styles.class}>
          <img
            className={styles.chadMontanoEeqbbemh9CUnsplIcon}
            alt=""
            src="/chadmontanoeeqbbemh9cunsplash-11@2x.png"
          />
          <div className={styles.grid}>
            <div className={styles.asian}>Asian</div>
            <div className={styles.deliciousBreakfast}>
              <p className={styles.delicious}>{`Delicious `}</p>
              <p className={styles.delicious}>Breakfast</p>
            </div>
            <div className={styles.june162023}>June 16, 2023</div>
          </div>
          <div className={styles.grid1}>
            <div className={styles.grid2}>
              <div className={styles.thePureTaste}>The pure taste of</div>
              <b className={styles.bangkok}>Bangkok</b>
            </div>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </div>
          </div>
        </div>
        <div className={styles.class1}>
          <img
            className={styles.andreyIlkevichFkoo1st4xouUnIcon}
            alt=""
            src="/andreyilkevichfkoo1st4xouunsplash-1@2x.png"
          />
          <div className={styles.grid3}>
            <div className={styles.grid2}>
              <div className={styles.thePureTaste}>The pure taste of</div>
              <b className={styles.bangkok}>Bangkok</b>
            </div>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </div>
          </div>
          <div className={styles.grid5}>
            <div className={styles.asian}>Breakfast</div>
            <div className={styles.deliciousBreakfast}>Coffee Time</div>
            <div className={styles.june162023}>March 17, 2023</div>
          </div>
        </div>
        <div className={styles.class}>
          <img
            className={styles.maeMuI7aPhlcqk8Unsplash1Icon}
            alt=""
            src="/maemui7a-phlcqk8unsplash-1@2x.png"
          />
          <div className={styles.grid6}>
            <div className={styles.asian}>Vegan</div>
            <div className={styles.deliciousBreakfast}>Vegan Burger</div>
            <div className={styles.january102023Wrapper}>
              <div className={styles.january102023}>January 10, 2023</div>
            </div>
          </div>
          <div className={styles.grid1}>
            <div className={styles.grid2}>
              <div className={styles.thePureTaste}>The pure taste of</div>
              <b className={styles.bangkok}>Bangkok</b>
            </div>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </div>
          </div>
          <div className={styles.cursor}>
            <div className={styles.explore}>Explore</div>
          </div>
        </div>
        <div className={styles.class1}>
          <img
            className={styles.monikaGrabkowskaXr55g70kq4Icon}
            alt=""
            src="/monikagrabkowskaxr55g7-0kq4unsplash-1@2x.png"
          />
          <div className={styles.grid3}>
            <div className={styles.grid2}>
              <div className={styles.thePureTaste}>The pure taste of</div>
              <b className={styles.bangkok}>Bangkok</b>
            </div>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </div>
          </div>
          <div className={styles.grid11}>
            <div className={styles.asian}>Italian</div>
            <div className={styles.deliciousBreakfast}>Salad Style</div>
            <div className={styles.june162023}>November 19, 2022</div>
          </div>
        </div>
        <div className={styles.class}>
          <img
            className={styles.robertaSorgeKp9uvnPuacUnspIcon}
            alt=""
            src="/robertasorgekp9uvnpuacunsplash-1@2x.png"
          />
          <div className={styles.grid12}>
            <div className={styles.asian}>Italian</div>
            <div className={styles.deliciousBreakfast}>
              <p className={styles.delicious}>{`Homemade `}</p>
              <p className={styles.delicious}>Honey</p>
            </div>
            <div className={styles.june162023}>October 8, 2022</div>
          </div>
          <div className={styles.grid1}>
            <div className={styles.grid2}>
              <div className={styles.thePureTaste}>The pure taste of</div>
              <b className={styles.bangkok}>Bangkok</b>
            </div>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navbar}>
        <div className={styles.inner}>
          <div className={styles.icon}>
            <img
              className={styles.ritimeLineIcon}
              alt=""
              src="/ritimeline3.png"
            />
          </div>
          <div className={styles.menu}>
            <button className={styles.menuItem} onClick={onMenuItemClick}>
              <div className={styles.restaurant}>Menu</div>
            </button>
            <button className={styles.menuItem1} onClick={onMenuItem1Click}>
              <div className={styles.restaurant}>Restaurant</div>
            </button>
            <button className={styles.menuItem1}>
              <div className={styles.restaurant}>Classes</div>
            </button>
          </div>
          <div className={styles.button}>
            <div className={styles.bookATable}>Book a Table</div>
          </div>
        </div>
      </div>
      <div className={styles.logo}>
        <div className={styles.nique}>nique.</div>
      </div>
    </div>
  );
};

export default Classes;
