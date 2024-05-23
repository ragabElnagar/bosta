import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { connect } from "react-redux";
import {
  dateFormate,
  dateFormateWithTime,
} from "../../../utils/common/dateFormate";
import { useTranslation } from "react-i18next";
import "./style.css";


function ShipmentPath(props) {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={3} sm={6} xs={12}>
          <Box className="trackBox">
            <Typography className="trackTitle">
              {t("TRACKING_NUMBER")}
              {data.TrackingNumber ? data.TrackingNumber : "NNN"}
            </Typography>
            <Typography className="trackSubTitle">
              {t(data.CurrentStatus?.state)}
            </Typography>
          </Box>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Box className="trackBox">
            <Typography className="trackTitle">{t("LAST_UPDATE")}</Typography>
            <Typography className="trackSubTitle">
              {data.CurrentStatus?.timestamp
                ? dateFormateWithTime(data.CurrentStatus?.timestamp, t)
                : "NNN"}
            </Typography>
          </Box>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Box className="trackBox">
            <Typography className="trackTitle">{t("SELLER_NAME")}</Typography>
            <Typography className="trackSubTitle">
              {t("NOT_DETERMINE")}
            </Typography>
          </Box>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Box className="trackBox">
            <Typography className="trackTitle">{t("PROMISE_DATE")}</Typography>
            <Typography className="trackSubTitle">
              {" "}
              {data.PromisedDate ? dateFormate(data.PromisedDate, t) : "NNN"}
            </Typography>
          </Box>
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

export default connect(mapStateToProps)(ShipmentPath);
