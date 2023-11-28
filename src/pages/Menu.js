import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = () => {
  const navigate = useNavigate();

  const onRestaurantClick = useCallback(() => {
    navigate("/restaurant");
  }, [navigate]);

  const onClassesClick = useCallback(() => {
    navigate("/classes");
  }, [navigate]);

  const onContactClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onBlogClick = useCallback(() => {
    navigate("/blog");
  }, [navigate]);

  const onShopClick = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  const onMenuItem1Click = useCallback(() => {
    navigate("/restaurant");
  }, [navigate]);

  const onMenuItem2Click = useCallback(() => {
    navigate("/classes");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/reservation");
  }, [navigate]);

  return (
    <div className={styles.menu}>
      <div className={styles.right}>
        <div className={styles.nav}>
          <div className={styles.menu1}>
            <div className={styles.starters}>Starters</div>
            <div className={styles.lunch}>Lunch</div>
            <div className={styles.lunch}>Dinner</div>
            <div className={styles.lunch}>Wine</div>
            <div className={styles.lunch}>Drinks</div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.grid}>
            <div className={styles.header}>
              <div className={styles.starters1}>Starters</div>
            </div>
            <div className={styles.grid1}>
              <div className={styles.row}>
                <div className={styles.image}>
                  <img
                    className={styles.eilivSonasAceronMaqz3x8L0Icon}
                    alt=""
                    src="/eilivsonasaceronmaqz3x-8-l0unsplash-1@2x.png"
                  />
                </div>
                <div className={styles.content1}>
                  <div className={styles.grid2}>
                    <div className={styles.grid3}>
                      <div className={styles.lunch}>Tomato Toast</div>
                      <img
                        className={styles.rileafLineIcon}
                        alt=""
                        src="/rileafline.png"
                      />
                    </div>
                    <div className={styles.price}>
                      <div className={styles.lunch}>$29</div>
                    </div>
                  </div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                </div>
              </div>
              <div className={styles.row1}>
                <div className={styles.image}>
                  <img
                    className={styles.brookeLarkOgcf9yywfcmUnsplaIcon}
                    alt=""
                    src="/brookelarkogcf9yywfcmunsplash-1@2x.png"
                  />
                  <img
                    className={styles.jenniferSchmidtZolq7lf3vsUIcon}
                    alt=""
                    src="/jenniferschmidtzolq7lf3vsunsplash-1-1@2x.png"
                  />
                </div>
                <div className={styles.content1}>
                  <div className={styles.grid4}>
                    <div className={styles.lunch}>Noodle Soup</div>
                    <div className={styles.price1}>
                      <div className={styles.div1}>$8.00</div>
                      <div className={styles.lunch}>$5.00</div>
                    </div>
                  </div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                </div>
              </div>
              <div className={styles.row2}>
                <div className={styles.image}>
                  <img
                    className={styles.taylorKiser6rjct18g3iUnsplIcon}
                    alt=""
                    src="/taylorkiser6rjct18g-3iunsplash-1@2x.png"
                  />
                </div>
                <div className={styles.content1}>
                  <div className={styles.grid2}>
                    <div className={styles.pumpkinSoup}>Pumpkin Soup</div>
                    <div className={styles.price}>
                      <div className={styles.lunch}>$5.00</div>
                    </div>
                  </div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                </div>
              </div>
              <div className={styles.label}>
                <div className={styles.starterOfThe}>Starter of the Day</div>
              </div>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.header1}>
              <div className={styles.breakfast}>Breakfast</div>
            </div>
            <div className={styles.grid7}>
              <div className={styles.row}>
                <div className={styles.image}>
                  <img
                    className={styles.chadMontanoEeqbbemh9CUnsplIcon}
                    alt=""
                    src="/chadmontanoeeqbbemh9cunsplash-12@2x.png"
                  />
                </div>
                <div className={styles.content1}>
                  <div className={styles.grid4}>
                    <div className={styles.lunch}>Delicious Pancakes</div>
                    <div className={styles.price1}>
                      <div className={styles.div4}>$8.00</div>
                      <div className={styles.lunch}>$5.00</div>
                    </div>
                  </div>
                  <div className={styles.tomatilloBajaCrema}>
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                </div>
              </div>
              <div className={styles.row1}>
                <div className={styles.image}>
                  <img
                    className={styles.toaHeftibaMsxw2vpqzx4UnsplaIcon}
                    alt=""
                    src="/toaheftibamsxw2vpqzx4unsplash-1@2x.png"
                  />
                </div>
                <div className={styles.content5}>
                  <div className={styles.grid4}>
                    <div className={styles.sweetHeaven}>Sweet Heaven</div>
                    <div className={styles.price}>
                      <div className={styles.sweetHeaven}>$5.00</div>
                    </div>
                  </div>
                  <div className={styles.tomatilloBajaCrema}>
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                </div>
              </div>
              <div className={styles.row2}>
                <div className={styles.image}>
                  <img
                    className={styles.tingTian79zjs8pv70UnsplashIcon}
                    alt=""
                    src="/tingtian-79zjs8pv70unsplash-11@2x.png"
                  />
                  <img
                    className={styles.kimzyNanneyLndgberq8q0UnsplIcon}
                    alt=""
                    src="/kimzynanneylndgberq8q0unsplash-1@2x.png"
                  />
                </div>
                <div className={styles.content5}>
                  <div className={styles.grid4}>
                    <div className={styles.sweetHeaven}>Oatmeal Spirit</div>
                    <div className={styles.price}>
                      <div className={styles.sweetHeaven}>$5.00</div>
                    </div>
                  </div>
                  <div className={styles.tomatilloBajaCrema}>
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                </div>
              </div>
              <div className={styles.button}>
                <div className={styles.lunchOfThe}>Lunch of the Day</div>
              </div>
              <div className={styles.row6}>
                <div className={styles.image}>
                  <img
                    className={styles.louisHanselXtc0wqtt4zoUnsplIcon}
                    alt=""
                    src="/louishanselxtc0wqtt4zounsplash-1@2x.png"
                  />
                </div>
                <div className={styles.content5}>
                  <div className={styles.grid4}>
                    <div className={styles.sweetHeaven}>Avocado Smash</div>
                    <div className={styles.price}>
                      <div className={styles.sweetHeaven}>$5.00</div>
                    </div>
                  </div>
                  <div className={styles.tomatilloBajaCrema}>
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.header1}>
              <div className={styles.starters1}>Dinner</div>
            </div>
            <div className={styles.grid7}>
              <div className={styles.row}>
                <div className={styles.image}>
                  <img
                    className={styles.chadMontanoMqt0asuoicuUnsplIcon}
                    alt=""
                    src="/chadmontanomqt0asuoicuunsplash-1@2x.png"
                  />
                </div>
                <div className={styles.content1}>
                  <div className={styles.grid4}>
                    <div className={styles.lunch}>Italian Pizza</div>
                    <div className={styles.price1}>
                      <div className={styles.div4}>$8.00</div>
                      <div className={styles.lunch}>$5.00</div>
                    </div>
                  </div>
                  <div className={styles.tomatilloBajaCrema}>
                    Tomatillo, Baja Crema, Cabbage, Fried Okra
                  </div>
                </div>
              </div>
              <div className={styles.row1}>
                <div className={styles.image}>
                  <img
                    className={styles.tingTian79zjs8pv70UnsplashIcon1}
                    alt=""
                    src="/tingtian-79zjs8pv70unsplash-12@2x.png"
                  />
                </div>
                <div className={styles.content5}>
                  <div className={styles.grid4}>
                    <div className={styles.sweetHeaven}>Sea Curry</div>
                    <div className={styles.price}>
                      <div className={styles.sweetHeaven}>$5.00</div>
                    </div>
                  </div>
                  <div className={styles.tomatilloBajaCrema1}>
                    Tomatillo, Baja Crema, Cabbage, Fried Okra
                  </div>
                </div>
              </div>
              <div className={styles.row2}>
                <div className={styles.image}>
                  <img
                    className={styles.maeMuI7aPhlcqk8Unsplash1Icon}
                    alt=""
                    src="/maemui7a-phlcqk8unsplash-11@2x.png"
                  />
                </div>
                <div className={styles.content5}>
                  <div className={styles.grid4}>
                    <div className={styles.sweetHeaven}>Vegan Burger</div>
                    <div className={styles.price}>
                      <div className={styles.sweetHeaven}>$5.00</div>
                    </div>
                  </div>
                  <div className={styles.tomatilloBajaCrema1}>
                    Tomatillo, Baja Crema, Cabbage, Fried Okra
                  </div>
                </div>
              </div>
              <div className={styles.button}>
                <div className={styles.lunchOfThe}>Lunch of the Day</div>
              </div>
              <div className={styles.row6}>
                <div className={styles.image10}>
                  <img
                    className={styles.bonVivantQom5mpoerIUnsplasIcon}
                    alt=""
                    src="/bonvivantqom5mpoeriunsplash-1@2x.png"
                  />
                </div>
                <div className={styles.content5}>
                  <div className={styles.grid4}>
                    <div className={styles.sweetHeaven}>Noodle Bowl</div>
                    <div className={styles.price}>
                      <div className={styles.sweetHeaven}>$5.00</div>
                    </div>
                  </div>
                  <div className={styles.tomatilloBajaCrema1}>
                    Tomatillo, Baja Crema, Cabbage, Fried Okra
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.header1}>
              <div className={styles.starters1}>Drinks</div>
            </div>
            <div className={styles.grid19}>
              <div className={styles.row11}>
                <div className={styles.image}>
                  <img
                    className={styles.jakubDziubakGj7bllszifsUnspIcon}
                    alt=""
                    src="/jakubdziubakgj7bllszifsunsplash-1@2x.png"
                  />
                  <img
                    className={styles.ashEdmondsFsiMrsic0UnsplaIcon}
                    alt=""
                    src="/ashedmondsfsi-mrsic0unsplash-1@2x.png"
                  />
                </div>
                <div className={styles.content1}>
                  <div className={styles.grid4}>
                    <div className={styles.lunch}>Panthouse Tonic</div>
                    <div className={styles.price1}>
                      <div className={styles.div4}>$8.00</div>
                      <div className={styles.lunch}>$5.00</div>
                    </div>
                  </div>
                  <div className={styles.loremIpsumDolor}>
                    Tomatillo, Baja Crema, Cabbage, Fried Okra
                  </div>
                </div>
              </div>
              <div className={styles.row11}>
                <div className={styles.image}>
                  <img
                    className={styles.adamJaimeDmkmrnptmpwUnsplasIcon}
                    alt=""
                    src="/adamjaimedmkmrnptmpwunsplash-1@2x.png"
                  />
                  <img
                    className={styles.ashEdmonds96eokc5d200UnsplaIcon}
                    alt=""
                    src="/ashedmonds96eokc5d200unsplash-1@2x.png"
                  />
                </div>
                <div className={styles.content5}>
                  <div className={styles.grid4}>
                    <div className={styles.sweetHeaven}>Apple Breeze</div>
                    <div className={styles.price}>
                      <div className={styles.sweetHeaven}>$5.00</div>
                    </div>
                  </div>
                  <div className={styles.tomatilloBajaCrema1}>
                    Tomatillo, Baja Crema, Cabbage, Fried Okra
                  </div>
                </div>
              </div>
              <div className={styles.row11}>
                <div className={styles.image}>
                  <img
                    className={styles.ashEdmondsN7op7xhbzfuUnsplaIcon}
                    alt=""
                    src="/ashedmondsn7op7xhbzfuunsplash-1@2x.png"
                  />
                </div>
                <div className={styles.content5}>
                  <div className={styles.grid4}>
                    <div className={styles.sweetHeaven}>Frenchman Blitz</div>
                    <div className={styles.price}>
                      <div className={styles.sweetHeaven}>$5.00</div>
                    </div>
                  </div>
                  <div className={styles.tomatilloBajaCrema1}>
                    Tomatillo, Baja Crema, Cabbage, Fried Okra
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.column}>
              <div className={styles.lunchOfThe}>nique.</div>
              <div className={styles.byPawelGolaContainer}>
                <p className={styles.byPawelGola}>By Pawel Gola</p>
                <p className={styles.byPawelGola}>Powered by Webflow</p>
              </div>
            </div>
            <div className={styles.column1}>
              <div className={styles.lunch}>Pages</div>
              <div className={styles.nav1}>
                <div className={styles.bookATable}>Menu</div>
                <div className={styles.restaurant} onClick={onRestaurantClick}>
                  Restaurant
                </div>
                <div className={styles.restaurant} onClick={onClassesClick}>
                  Classes
                </div>
                <div className={styles.bookATable}>Book a Table</div>
                <div className={styles.restaurant} onClick={onContactClick}>
                  Contact
                </div>
                <div className={styles.restaurant} onClick={onBlogClick}>
                  Blog
                </div>
                <div className={styles.restaurant} onClick={onShopClick}>
                  Shop
                </div>
              </div>
            </div>
            <div className={styles.column1}>
              <div className={styles.lunch}>Utility Pages</div>
              <div className={styles.nav1}>
                <div className={styles.bookATable}>Styleguide</div>
                <div className={styles.bookATable}>Licensing</div>
                <div className={styles.bookATable}>Changelog</div>
                <div className={styles.bookATable}>404 Page</div>
                <div className={styles.bookATable}>Password Protected</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.left}>
        <img
          className={styles.pexelsRachelClaire45773971Icon}
          alt=""
          src="/pexelsrachelclaire4577397-1@2x.png"
        />
        <div className={styles.logo}>
          <div className={styles.nique1}>nique.</div>
        </div>
        <div className={styles.navbar}>
          <div className={styles.inner}>
            <div className={styles.icon}>
              <img
                className={styles.ritimeLineIcon}
                alt=""
                src="/ritimeline6.png"
              />
            </div>
            <div className={styles.price}>
              <button className={styles.menuItem}>
                <div className={styles.menu4}>Menu</div>
              </button>
              <button className={styles.menuItem1} onClick={onMenuItem1Click}>
                <div className={styles.menu4}>Restaurant</div>
              </button>
              <button className={styles.menuItem1} onClick={onMenuItem2Click}>
                <div className={styles.menu4}>Classes</div>
              </button>
            </div>
            <button className={styles.button2} onClick={onButtonClick}>
              <div className={styles.bookATable1}>Book a Table</div>
            </button>
          </div>
        </div>
        <div className={styles.grid23}>
          <div className={styles.checkOut}>Check Out</div>
          <div className={styles.ourMenus}>Our Menus</div>
        </div>
      </div>
      <div className={styles.grid24}>
        <div className={styles.sweetHeaven}>The pure taste of</div>
        <b className={styles.bangkok}>Bangkok</b>
      </div>
      <div className={styles.grid25}>
        <div className={styles.loremIpsumDolor7}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </div>
      </div>
    </div>
  );
};

export default Menu;
