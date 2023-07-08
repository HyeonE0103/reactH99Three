import {
  faAngleDown,
  faBell,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const icons = {
  go: () => <FontAwesomeIcon icon={faChevronRight} />,
  alert: () => <FontAwesomeIcon icon={faBell} />,
  select: () => <FontAwesomeIcon icon={faAngleDown} />,
};
