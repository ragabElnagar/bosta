import React, { useState, useEffect, useCallback } from "react";
import {
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./style.css";
import { connect } from "react-redux";
import { fetchTrackData } from "../../../redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SearchBox(props) {
  const { getTrack } = props;
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const lang = i18n.language;

  const [trackId, setTrackId] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    setShowError(true);
    if (trackId.length > 0) {
      setShowError(false);
      navigate(`/shipment-tracking-details/${trackId}`);
    }
  }, [trackId, getTrack, navigate]);

  useEffect(() => {
      getTrack(id);
      setTrackId(id);
  }, [id]);

  const handleTrackIdChange = (e) => {
    const newValue = e.target.value.replace(/\D/g, "");
    setTrackId(newValue);
  };

  return (
    <Paper className="paper" elevation={3}>
      <Typography className="title">{t("TRACK_YOUR_SHIPMENT")}</Typography>
      <form onSubmit={handleSearch} className={lang === "ar" ? "dir" : ""}>
        <TextField
          label={t("TRACKING_NUMBER")}
          variant="outlined"
          type="text"
          value={trackId}
          onChange={handleTrackIdChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearch}>
                  <SearchIcon className="iconBtn" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {showError && (
          <Typography className="error">{t("pleas enter track number")}</Typography>
        )}
      </form>
    </Paper>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTrack: (trackId) => dispatch(fetchTrackData(trackId)),
  };
};
export default connect(null, mapDispatchToProps)(SearchBox);