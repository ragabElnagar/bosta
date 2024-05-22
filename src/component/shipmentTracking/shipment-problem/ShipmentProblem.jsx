import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import "./style.css";
import info from "../../../assets/info.png";
import { useTranslation } from "react-i18next";

function ShipmentProblem() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const isRtl = lang === "ar";
  return (
    <div>
      <Typography className={`addressTitle ${isRtl ? "alignAR" : "alignEN"}`}>
        {t("DELIVERY_ADDRESS")}
      </Typography>
      <Box className={`addressBox ${isRtl ? "alignAR" : "alignEN"}`}>
        <Typography className="addressBoxTypography">
          {t("NOT_DETERMINE")}
        </Typography>
      </Box>
      <Box className="addressInfo">
        <Grid container spacing={4}>
          <Grid item md={4} sm={4} xs={4}>
            <img src={info} alt="info" />
          </Grid>
          <Grid item md={8} sm={8} xs={8} className="addressBoxDetails">
            <Typography className="addressBoxTypography">
              {t("D0_YOU_HAVE_A_PROBLEM_WITH_YOUR_SHIPMENT")}
            </Typography>
            <Button variant="contained" className="reportBtn">
              {t("REPORT_A_PROBLEM")}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ShipmentProblem;
