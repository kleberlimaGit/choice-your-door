import Card from "@/components/Card";
import NumberInput from "@/components/NumberInput";
import Link from "next/link";
import { useState } from "react";

export default function Form() {

  const [doors, setDoors] = useState(3);

  return (
    <div className="flex justify-center items-center mt-10 gap-1 h-screen">
      <div className="flex gap-1 flex-col">
        <Card bgColor="bg-blue-500">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
              <NumberInput value={doors} onChange={newDoors => setDoors(newDoors)}/>
        </Card>
      </div>
      <div className="flex gap-1 flex-col">
        <Card>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-28 text-blue-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
          </svg>
        </Card>
        <Card bgColor="bg-gray-800">
          <Link href={`/game/${doors}`}>
              <h2>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  )

}
