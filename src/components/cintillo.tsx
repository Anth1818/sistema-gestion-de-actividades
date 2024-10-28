import Image from "next/image"
import CintilloImg from "../../public/cintillo_ministerio.png"

export const Cintillo = () => {
    return (
        <div className="w-[450] lg:w-full flex justify-center bg-white">
            <Image src={CintilloImg} alt="Contillo de ministerio" className="z-50 bg-inherit p-2 "></Image>
        </div>
       
    )}