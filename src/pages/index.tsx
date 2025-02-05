import Door from "@/components/Door";
import { createDoors, updateDoors } from "@/functions/door";
import { useState } from "react";

export default function Home() {

  const [door, setDoor] = useState(createDoors(3));

  function renderDoors(){
    console.log(door);
    return door.map(d => {
      return <Door key={d.getNumber()} value={d} onChange={d => setDoor(updateDoors(door, d))} />
    })
  }

  return (
      <div className="flex gap-4">
        {renderDoors()}
      </div>
  );
}
