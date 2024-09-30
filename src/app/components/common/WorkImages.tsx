import Image from "next/image";

export default function WorkImages ({ images } : { images: string[] }) {
    return (
        <div className=" columns-3 w-11/12 mx-auto space-y-4 max-md:columns-1 my-8">
            {images.map((path, index) => <div key={index}>
                <Image src={path} height={500} width={600} className="h-full w-full max-md:w-full max-md:h-auto rounded-xl" alt="" />
            </div>)}
        </div>
    )
} 