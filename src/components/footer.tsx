// import Image from "next/image";
// import Logo from "../../public/ina.png";

export default function Footer({ }) {
    return (
        <footer className="w-full h-20 bg-white text-black flex-col justify-center items-start pt-2 dark:bg-dark border-t-2 dark:border-dark-foreground ">
            <p className="text-center text-sm text-gray-500 dark:text-dark-foreground">
                &copy; {new Date().getFullYear()}{" "}
                Instituto Nacional De La Mujer.
                Todos los derechos reservados.
            </p>
            {/* <div className="hidden lg:inline mt-1">
                <Image src={Logo} alt="Logo" width={70} height={70} className="dark:bg-dark bg-white rounded-sm top-0" />
            </div> */}
        </footer>
    )
}