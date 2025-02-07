import Door from "@/components/Door";
import { createDoors, updateDoors } from "@/functions/door";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DoorModel from "@/model/Door";

export default function Game() {
    const router = useRouter();
    const [door, setDoor] = useState<DoorModel[]>([]);

    useEffect(() => {
        const doors = +router.query.doors!;
        setDoor(createDoors(doors));
    }, [router?.query]);

    function renderDoors() {
        return door.map(d => {
            return <Door key={d.getNumber()} value={d} onChange={d => setDoor(updateDoors(door, d))} />
        })
    }


    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="flex gap-4 flex-wrap items-center justify-around self-stretch">
                {renderDoors()}
            </div>
            <div>
                <button className="bg-gray-800 w-72 mt-12 rounded-lg h-12 flex justify-center items-center" onClick={() => setDoor(createDoors(+router.query.doors!))}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    REINICIAR</button>
            </div>
            <div>
                <Link href={"/"} className="bg-blue-500 w-72 mt-3 rounded-lg h-12 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                    </svg>

                    VOLTAR</Link>
            </div>

        </div>
    );
}