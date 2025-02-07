interface CardProps { 
    bgColor?: string;
    children?: React.ReactNode;
}

export default function Card(props: CardProps) {
    return (
        <div className={`flex justify-center items-center w-64 h-64 text-6xl font-bold font-sans p-5 ${props.bgColor ?? "bg-white"}`}>
            {props.children}
        </div>
    )
}