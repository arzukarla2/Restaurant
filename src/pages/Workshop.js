import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Workshop.module.css";

const Workshop = () => {
  const navigate = useNavigate();

  const onMenuItemClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onMenuItem1Click = useCallback(() => {
    navigate("/restaurant");
  }, [navigate]);

  const onMenuItem2Click = useCallback(() => {
    navigate("/classes");
  }, [navigate]);

  return (
    <div className={styles.workshop}>
      <div className={styles.left}>
        <img
          className={styles.chadMontanoEeqbbemh9CUnsplIcon}
          alt=""
          src="/chadmontanoeeqbbemh9cunsplash-1@2x.png"
        />
        <div className={styles.grid}>
          <div className={styles.shop}>Shop</div>
          <div className={styles.deliciousBreakfast}>
            <p className={styles.delicious}>{`Delicious `}</p>
            <p className={styles.delicious}>Breakfast</p>
          </div>
        </div>
        <div className={styles.logo}>
          <div className={styles.nique}>nique.</div>
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
              <button className={styles.menuItem1} onClick={onMenuItem2Click}>
                <div className={styles.restaurant}>Classes</div>
              </button>
            </div>
            <div className={styles.button}>
              <div className={styles.bookATable}>Book a Table</div>
            </div>
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
      </div>
      <div className={styles.right}>
        <div className={styles.form}>
          <div className={styles.grid3}>
            <div className={styles.grid4}>
              <div className={styles.grid5}>
                <div className={styles.cookingClass}>Cooking Class</div>
                <div className={styles.reserveYourSpot}>Reserve Your Spot</div>
              </div>
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Porttitor massa id neque aliquam.
              </div>
            </div>
            <div className={styles.grid6}>
              <div className={styles.button1}>
                <div className={styles.bookATable}>Book a Spot</div>
              </div>
              <div className={styles.div}>89€</div>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.details1}>Details</div>
            <div className={styles.table}>
              <div className={styles.row}>
                <div className={styles.date}>Date</div>
                <div className={styles.english}>June 16, 2023 8:00 PM</div>
              </div>
              <div className={styles.line} />
              <div className={styles.row}>
                <div className={styles.date}>Teacher</div>
                <div className={styles.imageParent}>
                  <div className={styles.image}>
                    <img
                      className={styles.pexels21029341Icon}
                      alt=""
                      src="/pexels2102934-1@2x.png"
                    />
                  </div>
                  <div className={styles.cookingClass}>Jakob Grønberg</div>
                </div>
              </div>
              <div className={styles.line} />
              <div className={styles.row}>
                <div className={styles.date}>Language</div>
                <div className={styles.english}>English</div>
              </div>
              <div className={styles.line} />
              <div className={styles.row}>
                <div className={styles.date}>Location</div>
                <div className={styles.english}>
                  <p className={styles.delicious}>nique.</p>
                  <p className={styles.delicious}>Main Street 16</p>
                  <p className={styles.delicious}>10629 Berlin</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.menu2}>
            <div className={styles.menu3}>Menu</div>
            <div className={styles.grid7}>
              <div className={styles.row4}>
                <div className={styles.image1}>
                  <img
                    className={styles.jenniferSchmidtZolq7lf3vsUIcon}
                    alt=""
                    src="/jenniferschmidtzolq7lf3vsunsplash-1-1@2x.png"
                  />
                </div>
                <div className={styles.content}>
                  <div className={styles.noodleSoup}>Noodle Soup</div>
                  <div className={styles.loremIpsumDolor2}>
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.grid7}>
              <div className={styles.row4}>
                <div className={styles.image1}>
                  <img
                    className={styles.tingTian79zjs8pv70UnsplashIcon}
                    alt=""
                    src="/tingtian-79zjs8pv70unsplash-1@2x.png"
                  />
                </div>
                <div className={styles.content}>
                  <div className={styles.noodleSoup}>Sea Curry</div>
                  <div className={styles.loremIpsumDolor2}>
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.teacher1}>
            <div className={styles.details1}>Teacher</div>
            <div className={styles.row6}>
              <div className={styles.image3}>
                <img
                  className={styles.pexels21029341Icon1}
                  alt=""
                  src="/pexels2102934-11@2x.png"
                />
              </div>
              <div className={styles.content2}>
                <div className={styles.grid9}>
                  <div className={styles.jakobGrnberg1}>Jakob Grønberg</div>
                  <div className={styles.loremIpsumDolor4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </div>
                </div>
                <div className={styles.socials}>
                  <img
                    className={styles.riinstagramLineIcon}
                    alt=""
                    src="/riinstagramline.png"
                  />
                  <img
                    className={styles.riinstagramLineIcon}
                    alt=""
                    src="/rifacebookcirclefill.png"
                  />
                  <img
                    className={styles.riinstagramLineIcon}
                    alt=""
                    src="/ritwitterfill.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.column}>
            <div className={styles.nique2}>nique.</div>
            <div className={styles.byPawelGolaContainer}>
              <p className={styles.delicious}>By Pawel Gola</p>
              <p className={styles.delicious}>Powered by Webflow</p>
            </div>
          </div>
          <div className={styles.column1}>
            <div className={styles.cookingClass}>Pages</div>
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
            <div className={styles.cookingClass}>Utility Pages</div>
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

export default Workshop;
