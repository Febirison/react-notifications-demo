import React, { useEffect } from 'react';
import PushNotification from 'react-push-notification';

const Notifications = () => {
  useEffect(() => {
    const showNotification = () => {
      PushNotification.create({
        title: 'Notification',
        message: 'New message',
        timeout: 5000,
        onClick: () => {
          // Handle notification click event
        },
      });
    };

    // Trigger the notification after a certain delay or based on an event
    setTimeout(showNotification, 3000);

    // Clean up the notification when the component unmounts
    return () => {
      PushNotification.clear();
    };
  }, []);

  return null;
};

export default Notifications;
