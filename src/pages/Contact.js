import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.right}>
        <div className={styles.volutpatMaecenasVolutpat}>
          Volutpat maecenas volutpat blandit aliquam etiam erat velit
          scelerisque. Arcu non odio euismod lacinia. Tortor aliquam nulla
          facilisi cras fermentum odio eu.
        </div>
        <div className={styles.form}>
          <Form className={styles.row}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form>
          <Form className={styles.row}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Your email address" />
          </Form>
          <Form.Group className={styles.rowFormgroup}>
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              defaultValue=""
              placeholder="Your message"
            />
          </Form.Group>
          <button className={styles.button}>
            <div className={styles.button1}>Book a table</div>
          </button>
        </div>
      </div>
      <div className={styles.left}>
        <img
          className={styles.pexelsRachelClaire45774101Icon}
          alt=""
          src="/pexelsrachelclaire4577410-1@2x.png"
        />
        <div className={styles.navbar}>
          <div className={styles.inner}>
            <div className={styles.icon}>
              <img
                className={styles.ritimeLineIcon}
                alt=""
                src="/ritimeline1.png"
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
            <div className={styles.button2}>
              <div className={styles.bookATable}>Book a Table</div>
            </div>
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.contact1}>Contact</div>
          <div className={styles.getInTouch}>Get in Touch</div>
        </div>
        <div className={styles.logo}>
          <div className={styles.nique}>nique.</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
