export default function Footer ({}) {
    return (
        <footer className="w-full h-20 bg-white text-black flex justify-center items-end">
            <p className="text-center text-sm text-gray-500 ">
            &copy; {new Date().getFullYear()}{" "}
              Instituto Nacional De La Mujer. 
              Todos los derechos reservados.
          </p> 
        </footer>
    )
}