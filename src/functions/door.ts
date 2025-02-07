import DoorModel from "@/model/Door";

export function createDoors(quantity: number): DoorModel[] {
    let withGift = 0;
    const numbers: number[] = [];
    return Array.from({ length: quantity }, (_, i) => {
        if(i === 0){
            for(let i = 1; i <= quantity; i++){
                numbers.push(i)
            }

            withGift = numbers[Math.floor(Math.random() * numbers.length)];
        }
        const number = i + 1;
        const hasGift = number === withGift;
        return new DoorModel(number,hasGift);
    });
}


export function updateDoors(doors: DoorModel[], updatedDoor: DoorModel): DoorModel[] {
    return doors.map(door => {
        const isUpdatedDoor = door.getNumber() === updatedDoor.getNumber();

        if(isUpdatedDoor){
            return updatedDoor;
        } else {
            return updatedDoor.isOpened() ? door : door.unselect();
        }
    });
}