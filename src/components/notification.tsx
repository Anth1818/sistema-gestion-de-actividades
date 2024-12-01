import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "./ui/toast";
import { useEffect } from "react";

interface NotificationProps {
  message: string;
}

  const Notification: React.FC<NotificationProps> = ({ message }) => {
    const { toast } = useToast();
  
    useEffect(() => {
      const notification = (message: string) => {
        toast({
          title: "Notificación",
          description: message,
          variant: "success",
          action: <ToastAction altText="Cerrar">Cerrar</ToastAction>,
        });
      };
  
      notification(message);
    }, [message]);
  
    return null;
  };
  
  export { Notification };
