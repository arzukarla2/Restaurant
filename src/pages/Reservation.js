import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { DatePicker } from "antd";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import styles from "./Reservation.module.css";

const Reservation = () => {
  const [rowDateTimePicker1Value, setRowDateTimePicker1Value] = useState(null);
  const navigate = useNavigate();

  const onMenuItemClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onMenuClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onMenuItem1Click = useCallback(() => {
    navigate("/restaurant");
  }, [navigate]);

  const onRestaurantClick = useCallback(() => {
    navigate("/restaurant");
  }, [navigate]);

  const onMenuItem2Click = useCallback(() => {
    navigate("/classes");
  }, [navigate]);

  const onClassesClick = useCallback(() => {
    navigate("/classes");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.reservation}>
        <div className={styles.right}>
          <div className={styles.form}>
            <div className={styles.bookATableParent}>
              <div className={styles.bookATable}>Book a table</div>
              <div className={styles.ourDiningAtmosphere}>
                Our dining atmosphere is casual and comfortable. To reflect this
                environment, we maintain a formal dress.
              </div>
            </div>
            <Form className={styles.row}>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form>
            <Form className={styles.row}>
              <Form.Label>Number of guests</Form.Label>
              <Form.Control type="text" placeholder="2" />
            </Form>
            <div className={styles.rowParent}>
              <DatePicker
                className={styles.row2}
                placeholder="Date"
                allowClear={true}
                bordered={true}
              />
              <div className={styles.row2}>
                <TimePicker
                  label="Time"
                  value={rowDateTimePicker1Value}
                  onChange={(newValue) => {
                    setRowDateTimePicker1Value(newValue);
                  }}
                  slotProps={{
                    textField: {
                      variant: "standard",
                      size: "medium",
                      color: "primary",
                    },
                  }}
                />
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.button1}>Book a table</div>
            </div>
          </div>
        </div>
        <div className={styles.left}>
          <img
            className={styles.pexelsRachelClaire45774101Icon}
            alt=""
            src="/pexelsrachelclaire4577410-1@2x.png"
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
                  src="/ritimeline5.png"
                />
              </div>
              <div className={styles.menu}>
                <div className={styles.menuItem} onClick={onMenuItemClick}>
                  <div className={styles.restaurant} onClick={onMenuClick}>
                    Menu
                  </div>
                </div>
                <div className={styles.menuItem1} onClick={onMenuItem1Click}>
                  <div
                    className={styles.restaurant}
                    onClick={onRestaurantClick}
                  >
                    Restaurant
                  </div>
                </div>
                <div className={styles.menuItem1} onClick={onMenuItem2Click}>
                  <div className={styles.restaurant} onClick={onClassesClick}>
                    Classes
                  </div>
                </div>
              </div>
              <button className={styles.button2}>
                <div className={styles.bookATable1}>Book a Table</div>
              </button>
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
            <div className={styles.bookATable2}>Book a table</div>
            <div className={styles.reservation1}>Reservation</div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Reservation;
