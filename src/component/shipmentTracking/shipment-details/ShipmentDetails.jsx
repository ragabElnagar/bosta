import React from "react";
import { Grid, Box, Typography, Paper, Button, styled } from "@mui/material";
import "./style.css";
import info from "../../../assets/info.png";
import CustomTable from "../../../shared/table/CustomTable";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import ShipmentProblem from "../shipment-problem/ShipmentProblem";

function ShipmentDetails(props) {
  const { data } = props;
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const isRtl = lang === "ar";

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={8} sm={12} xs={12}>
          <Typography
            className={`addressTitle ${isRtl ? "alignAR" : "alignEN"}`}
          >
            {t("SHIPMENT_DETAILS")}
          </Typography>
          <CustomTable data={data?.TransitEvents} />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
         <ShipmentProblem/>
        </Grid>
      </Grid>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.track.data,
  };
};

export default connect(mapStateToProps)(ShipmentDetails);
