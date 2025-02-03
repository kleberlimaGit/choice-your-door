export default function Door() {
    return (

        <div className="flex w-48 h-72" data-text="area">
            <div className="flex flex-grow border-t-4 border-r-4 border-l-4 border-red-600" data-text="frame">
                <div className="flex flex-col bg-amber-700 items-center p-1 flex-grow" data-text="door">
                    <div className="text-5xl" data-text="number">3</div>
                </div>
            </div>
        </div>
    )

}