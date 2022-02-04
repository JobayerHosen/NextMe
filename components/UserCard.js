import React from "react";
import styles from "../styles/usercard.module.css";

const UserCard = (props) => {
  const { id, first_name, last_name, phone } = props.user;
  return (
    <div className={styles.user}>
      <h1>ID: {id}</h1>
      <h3>name: {`${first_name} ${last_name}`}</h3>
      <h3>phone: {phone}</h3>
    </div>
  );
};

export default UserCard;
