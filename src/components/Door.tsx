import DoorModel from "@/model/Door";

interface DoorProps {
    value: DoorModel;
    onChange: (newDoor: DoorModel) => void;
}

export default function Door(props: DoorProps) {
    const door = props.value;

    function toggleSelect() {
        if(!door.isOpened()){
            props.onChange(door.toggleSelected());
        }
    }

    function openDoor(e: React.MouseEvent) {
        e.stopPropagation();
        props.onChange(door.open());
    }

    function renderDoor() {
        return (

            <div className="flex flex-col bg-amber-700 items-center p-1 flex-grow " data-text="door">
                <div className={`text-5xl mt-3 ${door.isSelected() ? 'text-yellow-400' : ''}`} data-text="number">{door.getNumber()}</div>
                <div className={`h-4 w-4 rounded-full bg-red-800 absolute top-36 flex self-start ml-1
                     ${door.isSelected()  ? 'bg-yellow-400' : 'bg-red-800'}                        
                     `}
                    onClick={ (e) => openDoor(e)}
                    data-text="handle">
                </div>
            </div>
        )
    }

    return (
        <div className="flex w-48 h-72 items-center flex-col relative" data-text="area" onClick={toggleSelect}>
            <div className={` flex flex-grow border-t-4 border-r-4 border-l-4 w-10/12 bg-black bg-opacity-30
                ${door.isSelected() ? 'border-yellow-400' : 'border-red-800'} 
                `} data-text="frame">
                {door.isOpened() ? false : renderDoor()}
            </div>
            <div className="h-2 w-full bg-slate-200" data-text="floor"></div>
        </div>
    )

}