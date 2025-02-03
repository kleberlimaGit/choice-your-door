export default function Gift() {
    return (
        <div className={`
         flex flex-col justify-center items-center
        `}>
            <div className="w-28 h-6 bg-green-600 relative" data-text="Lid"> 
            </div>
            <div className="w-24 h-16 bg-green-700" data-dext="Box">
            </div>
            <div className="w-4  h-16 bg-red-700 absolute top-6" data-dext="Tie1">
            </div>
            <div className="w-24 h-4 bg-red-700 absolute" data-dext="Tie2">
            </div>
        </div>
    )
}