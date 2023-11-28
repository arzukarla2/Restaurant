import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.left}>
        <img
          className={styles.pexelsRachelClaire45777151Icon}
          alt=""
          src="/pexelsrachelclaire4577715-1@2x.png"
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
                src="/ritimeline.png"
              />
            </div>
            <div className={styles.menu}>
              <div className={styles.menuItem}>
                <div className={styles.restaurant}>Menu</div>
              </div>
              <div className={styles.menuItem1}>
                <div className={styles.restaurant}>Restaurant</div>
              </div>
              <div className={styles.menuItem1}>
                <div className={styles.restaurant}>Classes</div>
              </div>
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
          <div className={styles.blog1}>Blog</div>
          <div className={styles.latestNews}>Latest News</div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.form}>
          <div className={styles.row}>
            <div className={styles.image}>
              <img
                className={styles.lycsArchitectureH77w4l3uwy4Icon}
                alt=""
                src="/lycsarchitectureh77w4l3uwy4unsplash-2@2x.png"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.september192022Parent}>
                <div className={styles.pages}>September 19, 2022</div>
                <div className={styles.gatsbyNight}>Gatsby Night</div>
              </div>
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut
                vitae neque sed sed sit sagittis tristique scelerisque.
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.image1}>
              <img
                className={styles.pexelsRachelClaire49980262Icon}
                alt=""
                src="/pexelsrachelclaire4998026-2@2x.png"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.september192022Parent}>
                <div className={styles.pages}>September 19, 2022</div>
                <div className={styles.gatsbyNight}>Gift Card Standard</div>
              </div>
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut
                vitae neque sed sed sit sagittis tristique scelerisque.
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.image1}>
              <img
                className={styles.volkanVardar1h30urc1plcUnspIcon}
                alt=""
                src="/volkanvardar1h30urc1plcunsplash-1@2x.png"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.september192022Parent}>
                <div className={styles.pages}>September 19, 2022</div>
                <div className={styles.gatsbyNight}>New Restaurant</div>
              </div>
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut
                vitae neque sed sed sit sagittis tristique scelerisque.
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.image1}>
              <img
                className={styles.pexelsRachelClaire49980262Icon}
                alt=""
                src="/adrienolichonzgrexhl8er0unsplash-1@2x.png"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.september192022Parent}>
                <div className={styles.pages}>September 19, 2022</div>
                <div className={styles.gatsbyNight}>Romantic Dinner</div>
              </div>
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut
                vitae neque sed sed sit sagittis tristique scelerisque.
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.image4}>
              <img
                className={styles.rohanGMwnjswdlxeUnsplash1Icon}
                alt=""
                src="/rohangmwnjswdlxeunsplash-1@2x.png"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.september192022Parent}>
                <div className={styles.pages}>September 19, 2022</div>
                <div className={styles.gatsbyNight}>Brand New Kitchen</div>
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
            <div className={styles.pages}>Pages</div>
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
            <div className={styles.pages}>Utility Pages</div>
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

export default Blog;
