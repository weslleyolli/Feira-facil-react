import Image from "next/image"
import Link from "next/link";

interface MessageProps {
    image: string;
    name: string;
    content: string;
}

const Message: React.FC<MessageProps> = ({image, name, content}) => {
    return (
        <>
            <Link href={'/mensagens'} className="flex items-center gap-7 mt-10">
                <Image className="rounded-full" src={image} alt="" width={100} height={100}/>
                <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-2xl">{name}</h1>
                    <span className="font-light text-xl">{content}</span>
                </div>
            </Link>
            <div className="h-[1px] bg-gray-500 w-[95%] opacity-20 mt-8"></div>
        </>

    )
}

export default Message