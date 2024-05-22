import STATUS_COLORS from "../../shared/status-colors/statusColors";
import STATUSES from "../../shared/status/Status";

export const getStatusColor = (status) => {
    switch (status) {
      case STATUSES.PACKAGE_RECEIVED:
        return `linear-gradient(136deg, ${STATUS_COLORS.PACKAGE_RECEIVED} 0%, ${STATUS_COLORS.PACKAGE_RECEIVED} 50%, ${STATUS_COLORS.PACKAGE_RECEIVED} 100%)`;
      case STATUSES.DELIVERED:
        return `linear-gradient(136deg, ${STATUS_COLORS.DELIVERED} 0%, ${STATUS_COLORS.DELIVERED} 50%, ${STATUS_COLORS.DELIVERED} 100%)`;
      case STATUSES.DELIVERED_TO_SENDER:
        return `linear-gradient(136deg, ${STATUS_COLORS.DELIVERED_TO_SENDER} 0%, ${STATUS_COLORS.DELIVERED_TO_SENDER} 50%, ${STATUS_COLORS.DELIVERED_TO_SENDER} 100%)`;
      case STATUSES.OUT_FOR_DELIVERY:
        return `linear-gradient(136deg, ${STATUS_COLORS.OUT_FOR_DELIVERY} 0%, ${STATUS_COLORS.OUT_FOR_DELIVERY} 50%, ${STATUS_COLORS.OUT_FOR_DELIVERY} 100%)`;
      case STATUSES.TICKET_CREATED:
        return `linear-gradient(136deg, ${STATUS_COLORS.TICKET_CREATED} 0%, ${STATUS_COLORS.TICKET_CREATED} 50%, ${STATUS_COLORS.TICKET_CREATED} 100%)`;
      default:
        return `linear-gradient(136deg, ${STATUS_COLORS.CANCELLED} 0%, ${STATUS_COLORS.CANCELLED} 50%, ${STATUS_COLORS.CANCELLED} 100%)`;
    }
  };