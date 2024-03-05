import React from "react";
import { Chip } from "@nextui-org/react";
import { NotificationIcon } from "./NotificationIcon";
import { CheckIcon } from "./CheckIcon";

export default function RemainderChip() {
  return (      
      <Chip
        endContent={<NotificationIcon size={18} />}
        variant="flat"
        color="secondary"
      >
        Chip
      </Chip>
  );
}

export default function SuccessChip() {
    return(
        <Chip
        endContent={<CheckIcon size={18} />}
        variant="faded"
        color="success"
      >
        Chip
      </Chip>
    )
}

export default function NotDoneChip() {
    return(
        <Chip onClose={() => console.log("close")}>Chip</Chip>
    )
}
