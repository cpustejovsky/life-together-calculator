import React from 'react'
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  footer: {
    paddingTop: "10vh",
    alignSelf: "flex-start",
    "& a": {
      color: "black",
    }
  }
}));

const Footer = () => {
  const classes = useStyles();

  return <footer className={classes.footer}>
    <a href="https://cpustejovsky.com/" rel="noreferrer noopener">
      Cpustejovsky <i className="far fa-thumbs-up"></i>,{" "}
      {new Date().getFullYear()}
    </a>
  </footer>
}

export default Footer