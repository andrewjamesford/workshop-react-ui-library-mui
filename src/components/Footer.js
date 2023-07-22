import React from "react";
import Typography from "@mui/material/Typography";
import Link from "../Link";

function Footer() {
  return (
    <footer>
      <Typography mt={2}>
        <Link href="#">Terms &amp; Conditions</Link>
      </Typography>
    </footer>
  );
}

export default Footer;
