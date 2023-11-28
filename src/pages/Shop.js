import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Shop.module.css";

const Shop = () => {
  const navigate = useNavigate();

  const onMenuItemClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onMenuItem1Click = useCallback(() => {
    navigate("/workshop");
  }, [navigate]);

  const onMenuItem2Click = useCallback(() => {
    navigate("/classes");
  }, [navigate]);

  return (
    <div className={styles.shop}>
      <div className={styles.left}>
        <img
          className={styles.pexelsRachelClaire4992813Icon}
          alt=""
          src="/pexelsrachelclaire4992813-1-1@2x.png"
        />
        <div className={styles.logo}>
          <div className={styles.nique}>nique.</div>
        </div>
        <div className={styles.navbar}>
          <div className={styles.inner}>
            <div className={styles.icon}>
              <img
                className={styles.ritimeLineIcon}
                alt=""
                src="/ritimeline2.png"
              />
            </div>
            <div className={styles.menu}>
              <button className={styles.menuItem} onClick={onMenuItemClick}>
                <div className={styles.restaurant}>Menu</div>
              </button>
              <button className={styles.menuItem1} onClick={onMenuItem1Click}>
                <div className={styles.restaurant}>Restaurant</div>
              </button>
              <button className={styles.menuItem1} onClick={onMenuItem2Click}>
                <div className={styles.restaurant}>Classes</div>
              </button>
            </div>
            <div className={styles.button}>
              <div className={styles.bookATable}>Book a Table</div>
            </div>
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.grid1}>
            <div className={styles.thePureTaste}>The pure taste of</div>
            <b className={styles.bangkok}>Bangkok</b>
          </div>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </div>
        </div>
        <div className={styles.grid2}>
          <div className={styles.shop1}>Shop</div>
          <div className={styles.giveAGift}>Give a gift</div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.form}>
          <div className={styles.row}>
            <div className={styles.image}>
              <div className={styles.card}>
                <img className={styles.niqueIcon} alt="" src="/nique.png" />
                <div className={styles.giftCard}>Gift Card</div>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.grid3}>
                <div className={styles.usd}>$ 15 USD</div>
                <div className={styles.giftCardLight}>Gift Card Light</div>
              </div>
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut
                vitae neque sed sed sit sagittis tristique scelerisque.
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.image}>
              <div className={styles.card1}>
                <img className={styles.niqueIcon} alt="" src="/nique1.png" />
                <div className={styles.giftCard}>Gift Card</div>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.grid3}>
                <div className={styles.usd}>$ 30 USD</div>
                <div className={styles.giftCardLight}>Gift Card Standard</div>
              </div>
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut
                vitae neque sed sed sit sagittis tristique scelerisque.
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.image}>
              <div className={styles.card2}>
                <img className={styles.niqueIcon} alt="" src="/nique1.png" />
                <div className={styles.giftCard}>Gift Card</div>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.grid3}>
                <div className={styles.usd}>$ 50 USD</div>
                <div className={styles.giftCardLight}>Gift Card Premium</div>
              </div>
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut
                vitae neque sed sed sit sagittis tristique scelerisque.
              </div>
            </div>
          </div>
          <div className={styles.row3}>
            <div className={styles.image}>
              <div className={styles.card3}>
                <img className={styles.niqueIcon} alt="" src="/nique2.png" />
                <div className={styles.giftCard}>Gift Card</div>
              </div>
            </div>
            <div className={styles.content3}>
              <div className={styles.grid3}>
                <div className={styles.usd}>$ 100 USD</div>
                <div className={styles.giftCardLight}>Gift Card Gold</div>
              </div>
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut
                vitae neque sed sed sit sagittis tristique scelerisque.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.column}>
            <div className={styles.nique1}>nique.</div>
            <div className={styles.byPawelGolaContainer}>
              <p className={styles.byPawelGola}>By Pawel Gola</p>
              <p className={styles.byPawelGola}>Powered by Webflow</p>
            </div>
          </div>
          <div className={styles.column1}>
            <div className={styles.usd}>Pages</div>
            <div className={styles.nav}>
              <div className={styles.contact}>Menu</div>
              <div className={styles.contact}>Restaurant</div>
              <div className={styles.contact}>Classes</div>
              <div className={styles.contact}>Book a Table</div>
              <div className={styles.contact}>Contact</div>
              <div className={styles.contact}>Blog</div>
              <div className={styles.contact}>Shop</div>
            </div>
          </div>
          <div className={styles.column1}>
            <div className={styles.usd}>Utility Pages</div>
            <div className={styles.nav}>
              <div className={styles.contact}>Styleguide</div>
              <div className={styles.contact}>Licensing</div>
              <div className={styles.contact}>Changelog</div>
              <div className={styles.contact}>404 Page</div>
              <div className={styles.contact}>Password Protected</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
