import React from "react";
import {
  Step,
  Stepper,
  StepLabel,
  StepConnector,
  stepConnectorClasses,
  styled,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import PropTypes from "prop-types";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useTranslation } from "react-i18next";
import "./style.css";
import { getStatusColor } from "../../utils/common/getStatusColor";

// Custom styled components
const ColorlibConnector = styled(StepConnector)(({ theme, currentStatus }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
    backgroundImage: getStatusColor(currentStatus),
  },
  [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
    backgroundImage: getStatusColor(currentStatus),
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState, currentStatus }) => ({
  backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage: getStatusColor(currentStatus),
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage: getStatusColor(currentStatus),
  }),
  [`@media (max-width: 600px)`]: {
    width: 40,
    height: 40,
  },
}));

const ColorlibStepIcon = ({ active, completed, className, icon, currentStatus, isRtl }) => {
  const icons = {
    1: completed ? <CheckCircleIcon /> : active ? <LocalShippingIcon className={isRtl && "rotateIconRtl"} /> : <CheckCircleOutlineIcon />,
    2: completed ? <CheckCircleIcon /> : active ? <LocalShippingIcon className={isRtl && "rotateIconRtl"} /> : <CheckCircleOutlineIcon />,
    3: completed ? <CheckCircleIcon /> : active ? <LocalShippingIcon className={isRtl && "rotateIconRtl"} /> : <CheckCircleOutlineIcon />,
    4: completed ? <CheckCircleIcon /> : active ? <LocalShippingIcon className={isRtl && "rotateIconRtl"} /> : <CheckCircleOutlineIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className} currentStatus={currentStatus} isRtl={isRtl}>
      {icons[String(icon)]}
    </ColorlibStepIconRoot>
  );
};

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  icon: PropTypes.node,
  currentStatus: PropTypes.string.isRequired,
  isRtl: PropTypes.bool.isRequired,
};

const CustomStepper = ({ step, currentStatus }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const isRtl = lang === "ar";


  const steps = [
    t("YOUR_SHIPMENT_IS_CREATED"),
    t("SHIPMENT_IS_RECEIVED_FROM_SELLER"),
    t("SHIPMENT_IS_OUT_DELIVERY"),
    t("DELIVERED"),
  ];

  return (
      <div>
        <Stepper alternativeLabel activeStep={step} className={isRtl ? "stepperAr" : ""} connector={<ColorlibConnector currentStatus={currentStatus} />}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel StepIconComponent={(props) => <ColorlibStepIcon {...props} currentStatus={currentStatus} icon={index + 1} isRtl={isRtl} />}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
  );
};

CustomStepper.propTypes = {
  step: PropTypes.number.isRequired,
  currentStatus: PropTypes.string.isRequired,
  isRtl: PropTypes.bool.isRequired,
};

export default CustomStepper;
