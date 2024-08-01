
import { Text } from "@radix-ui/themes";
import "../css/notifications.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

const NotificationList = ({ notifications, onClose }) => {
  return (
    <div className="notificationList">
      <div className="notificationListHeader">
        <Text as="h4">Notificaciones</Text>
        <button onClick={onClose}><IoIosCloseCircleOutline /></button>
      </div>
      {notifications.length === 0 ? (
        <Text as="p">No hay nuevas notificaciones.</Text>
      ) : (
        notifications.map((notification, index) => (
          <div key={index} className="notificationItem">
            <Text >{notification.message}</Text>
          </div>
        ))
      )}
    </div>
  );
};

export default NotificationList;
