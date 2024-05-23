import React from "react";
import SearchBox from "../searchBox/SearchBox";
import { Box, Typography } from "@mui/material";
import "./style.css";
import CustomStepper from "../../../shared/stepper/CustomStepper";
import ShipmentPath from "../shipment-path/ShipmentPath";
import ShipmentDetails from "../shipment-details/ShipmentDetails";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import CircularProgress from "@mui/material/CircularProgress";

function TrackDetails(props) {
  const { data, loading } = props;
  const isData = Object.keys(data).length !== 0;
  const { t } = useTranslation();

  return (
    <div className="container">
      <SearchBox />
      {loading ? (
        <CircularProgress />
      ) : isData ? (
        <>
          <Box className="trackContainer">
            <ShipmentPath />
            <hr className=" hr MuiDivider-root MuiDivider-fullWidth muiltr-39bbo6"></hr>

            <Box sx={{ width: "100%" }}>
              <CustomStepper
                step={
                  data?.CurrentStatus?.state === "DELIVERED"
                    ? 4
                    : data?.CurrentStatus?.state === "PACKAGE_RECEIVED"
                    ? 1
                    : 0
                }
                currentStatus={data?.CurrentStatus?.state}
              />
            </Box>
          </Box>
          <ShipmentDetails />
        </>
      ) : (
        <Typography>{t("NOT_FOUND")}</Typography>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.track.data,
    error: state.track.error,
    loading: state.track.loading,
  };
};

export default connect(mapStateToProps)(TrackDetails);
