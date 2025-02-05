import DoorModel from "@/model/Door";

export function createDoors(quantity: number): DoorModel[] {
    return Array.from({ length: quantity }, (_, i) => {
        const selected = Math.floor(Math.random() * quantity) ;
        const number = i + 1;
        const hasGift = number === selected;
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