import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper, styled } from "@mui/material";
import { dateFormateWithoutDay, getTime } from "../../utils/common/dateFormate";
import { useTranslation } from "react-i18next";

function CustomTable(props) {
  const { data } = props;
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const isRtl = lang === "ar";

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.action.hover,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align={isRtl ? "right" : "left"}>
              {t("BRANCH")}
            </StyledTableCell>
            <StyledTableCell align={isRtl ? "right" : "left"}>
              {t("DATE")}
            </StyledTableCell>
            <StyledTableCell align={isRtl ? "right" : "left"}>
              {t("TIME")}
            </StyledTableCell>
            <StyledTableCell align={isRtl ? "right" : "left"}>
              {t("DETAILS")}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((item) => (
            <TableRow key={item.timestamp}>
              <StyledTableCell  align={isRtl ? "right" : "left"} component="th" scope="row">
                {item.hub ? t(item.hub) : t("NOT_DETERMINE")}
              </StyledTableCell>
              <StyledTableCell  align={isRtl ? "right" : "left"}>
                {item.timestamp ? dateFormateWithoutDay(item.timestamp) : t("NOT_DETERMINE")}
              </StyledTableCell>
              <StyledTableCell  align={isRtl ? "right" : "left"}>
                {item.timestamp ? getTime(item.timestamp, t) : t("NOT_DETERMINE")}
              </StyledTableCell>
              <StyledTableCell  align={isRtl ? "right" : "left"}>
                {item.state ? t(item.state) : t("NOT_DETERMINE")}
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;
