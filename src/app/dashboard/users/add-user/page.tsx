"use client"

import FormAddUser from "@/components/form-add-user";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@radix-ui/react-select"
import { ChevronLeft, IdCard } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function AddUserPage() {
    const identification = "27451286"

    const dataWorker = [
        {
            id: "27451286",
            name: "Anthony",
            lastname: "Ruiz",
            phone: "04120001122",
            email: "tonyjrc2291@gmail.com",
            address: "Calle 1, casa 2",
            department: "Desarrollo"
        }
    ]

    const [id, setId] = useState("")

    const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value)
    }

    const router = useRouter()

    const handleBackClick = () => {
        router.back()
    }
    return (
        <div>
            <h1 className="text-2xl font-bold text-center mb-4">Añadir usuario</h1>
            <div className="w-full">
                <a onClick={handleBackClick} className="text-center text-blue-600 dark:text-dark-foreground dark:hover:text-dark items-center cursor-pointer">
                    <span className="hover:bg-gray-300 dark:hover:bg-dark-foreground p-1 rounded inline-flex">
                        <ChevronLeft className="mr-2" />
                        Volver atrás
                    </span>
                </a>
            </div>
            <div className=" w-full mt-2 flex justify-center items-center gap-2">
                <div className="flex flex-col justify-center items-start gap-2">
                    <Label htmlFor="number-id">Cédula:</Label>
                    <div className="relative">
                        <Input id="number-id" type="number" placeholder="01234567" value={id} onChange={handleIdChange} />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 dark:text-dark-foreground">
                            <IdCard />
                        </div>
                    </div>
                </div>
                <Button className=" self-end">Buscar</Button>
            </div>
            <Separator className="border my-4" />
            {id === identification && (
                <div className="flex flex-col justify-center items-center gap-4">
                    <p>La cédula ingresada corresponde al trabajador Anthony Ruiz</p>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Ver información del trabajador</AccordionTrigger>
                            <AccordionContent>
                                Detalles del trabajador
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <FormAddUser dataWorker={dataWorker}/>
                </div>)   
            }
        </div>
    );
}   