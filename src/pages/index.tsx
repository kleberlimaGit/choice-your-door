import Door from "@/components/Door";
import DoorModel from "@/model/Door";
import { useState } from "react";

export default function Home() {
  const [door1, setDoor1] = useState(new DoorModel(1));

  return (
      <div className="flex flex-col gap-4">
        <Door value={door1} onChance={newDoor => setDoor1(newDoor)} />
      </div>
  );
}
