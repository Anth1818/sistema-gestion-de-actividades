import { useEffect, useState } from "react";
import { activities } from "@/lib/utils";

type Activity = {
  id: number;
  name: string;
  label: string;
};

const useActivitieOptions = (actions: string) => {
  const [activitieOption, setActivitieOption] = useState<Activity[]>([]);

  useEffect(() => {
    if (actions === "legalAttention") {
      setActivitieOption(activities[0].legalAttention || []);
    } else if (actions === "prevention") {
      setActivitieOption(activities[0].prevention || []);
    } else if (actions === "training") {
      setActivitieOption(activities[0].training || []);
    } else {
      setActivitieOption([]);
    }
  }, [actions]);

  return { activitieOption, setActivitieOption };
};

export default useActivitieOptions;
