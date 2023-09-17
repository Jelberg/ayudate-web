import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const configNotification = {
  position: "top-left",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export async function Notification(message, type) {
  switch (type) {
    case "success":
      await toast.success(message, configNotification);
      break;
    case "error":
      await toast.error(message, configNotification);
      break;

    default:
      await toast(message, configNotification);
      break;
  }
}
