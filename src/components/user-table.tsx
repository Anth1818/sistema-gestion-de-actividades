'use client'

import { use, useEffect, useMemo, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, ArrowUpDown, ChevronRight, ChevronLeft } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion, AnimatePresence } from "framer-motion"
import { useQuery } from '@tanstack/react-query'
import api from '@/api/api_regiones'

type Usuario = {
    id: number;
    worker_id: number;
    username: string;
    password: string;
    role_id: number;
    is_active: boolean;
    created: string;
    role: string;
    identity_card: number;
    full_name: string;
    status: boolean;
    gender: string;
    position: string;
    position_id: number;
    gender_id: number;
    department: string;
    department_id: number;
  };

type OrdenColumna = {
    columna: keyof Usuario | 'nombreCompleto'
    direccion: 'asc' | 'desc'
} | null

const FilaExpandible = ({ usuario, expandida, onToggle, onActivar }: {
    usuario: Usuario
    expandida: boolean
    onToggle: () => void
    onActivar: () => void
}) => {
    return (
        <>
            <TableRow className="cursor-pointer" onClick={onToggle}>
                <TableCell>{usuario.id}</TableCell>
                <TableCell>{usuario.username}</TableCell>
                <TableCell>{usuario.full_name}</TableCell>
                <TableCell>{usuario.role}</TableCell>
                {/* <TableCell>{usuario.estatus}</TableCell>
                <TableCell>
                    <Button size="sm" onClick={(e) => { e.stopPropagation(); onActivar(); }}>
                        {usuario.estatus === 'Activo' ? 'Desactivar' : 'Activar'}
                    </Button>
                </TableCell> */}
                <TableCell>
                    {expandida ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </TableCell>
            </TableRow>
            <AnimatePresence initial={false}>
                {expandida && (
                    <TableRow>
                        <TableCell colSpan={7} className="p-0">
                            <motion.div
                                initial="collapsed"
                                animate="open"
                                exit="collapsed"
                                variants={{
                                    open: { opacity: 1, height: "auto" },
                                    collapsed: { opacity: 0, height: 0 }
                                }}
                                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                            >
                                <div className="p-4 bg-muted">
                                    <h3 className="font-semibold mb-2">Información adicional:</h3>
                                    <p>{usuario.position}</p>
                                </div>
                            </motion.div>
                        </TableCell>
                    </TableRow>
                )}
            </AnimatePresence>
        </>
    )
}

export default function TablaUsuarios() {

    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            api.get("/user").then((res) =>
                res.data.data,
            ),
    })
    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    
    useEffect(() => {
        if (data) {
            setUsuarios(data)
        }
    }, [data])
    console.log(data);

    const columnas = [{
        label: 'ID',
        campo: 'id'
    },
    {
        label: 'Usuario',
        campo: 'usuario'
    },
    {
        label: 'Nombre Completo',
        campo: 'nombreCompleto'
    },
    {
        label: 'Nivel de Acceso',
        campo: 'nivelAcceso'
    },
    {
        label: 'Estatus',
        campo: 'estatus'
    }]


    const [expandido, setExpandido] = useState<number | null>(null)
    const [ordenActual, setOrdenActual] = useState<OrdenColumna>(null)
    const [paginaActual, setPaginaActual] = useState(1)
    const [elementosPorPagina, setElementosPorPagina] = useState(5)

    const toggleExpansion = (id: number) => {
        setExpandido(expandido === id ? null : id)
    }

    const toggleEstatus = (id: number) => {
        setUsuarios(usuarios.map(usuario =>
            usuario.id === id
                ? { ...usuario, estatus: usuario.status ? 'Inactivo' : 'Activo' }
                : usuario
        ))
    }

    const ordenarUsuarios = (columna: keyof Usuario | 'nombreCompleto') => {
        const nuevaDireccion = ordenActual?.columna === columna && ordenActual.direccion === 'asc' ? 'desc' : 'asc'
        setOrdenActual({ columna, direccion: nuevaDireccion })

        const usuariosOrdenados = [...usuarios].sort((a, b) => {
            let valorA: string, valorB: string

            if (columna === 'nombreCompleto') {
                valorA = `${a.full_name}`.trim()
                valorB = `${b.full_name}`.trim()
            } else {
                valorA = a[columna].toString().trim()
                valorB = b[columna].toString().trim()
            }

            if (valorA < valorB) return nuevaDireccion === 'asc' ? -1 : 1
            if (valorA > valorB) return nuevaDireccion === 'asc' ? 1 : -1
            return 0
        })

        setUsuarios(usuariosOrdenados)
    }

    const renderIconoOrden = (columna: keyof Usuario | 'nombreCompleto') => {
        if (ordenActual?.columna !== columna) {
            return <ArrowUpDown size={16} />
        }
        return ordenActual.direccion === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
    }

    const usuariosPaginados = useMemo(() => {
        const indiceInicio = (paginaActual - 1) * elementosPorPagina
        const indiceFin = indiceInicio + elementosPorPagina
        return usuarios.slice(indiceInicio, indiceFin)
    }, [usuarios, paginaActual, elementosPorPagina])

    const totalPaginas = Math.ceil(usuarios.length / elementosPorPagina)

    const cambiarPagina = (nuevaPagina: number) => {
        setPaginaActual(nuevaPagina)
    }

    return (
        <div className="container mx-auto py-1">
            <Table>
                <TableHeader>
                    <TableRow>
                        {columnas.map((columna) => (
                            <TableHead key={columna.campo} onClick={() => ordenarUsuarios(columna.campo as keyof Usuario)} className="cursor-pointer bg-primary text-white p-2">
                                {columna.label}
                                {renderIconoOrden(columna.campo as keyof Usuario)}
                            </TableHead>
                        ))}
                        {/* <TableHead className='bg-primary text-white p-2'>Acciones</TableHead> */}
                        <TableHead className='bg-primary text-white p-2'></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {usuariosPaginados.map((usuario) => (
                        <FilaExpandible
                            key={usuario.id}
                            usuario={usuario}
                            expandida={expandido === usuario.id}
                            onToggle={() => toggleExpansion(usuario.id)}
                            onActivar={() => toggleEstatus(usuario.id)}
                        />
                    ))}
                </TableBody>
            </Table>
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium">Filas por página</p>
                    <Select
                        value={elementosPorPagina.toString()}
                        onValueChange={(value) => {
                            setElementosPorPagina(Number(value))
                            setPaginaActual(1)
                        }}
                    >
                        <SelectTrigger className="h-8 w-[70px]">
                            <SelectValue placeholder={elementosPorPagina.toString()} />
                        </SelectTrigger>
                        <SelectContent side="top">
                            {[5, 10, 20].map((pageSize) => (
                                <SelectItem key={pageSize} value={pageSize.toString()}>
                                    {pageSize}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex items-center space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => cambiarPagina(paginaActual - 1)}
                        disabled={paginaActual === 1}
                    >
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Página anterior</span>
                    </Button>
                    <div className="text-sm font-medium">
                        Página {paginaActual} de {totalPaginas}
                    </div>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => cambiarPagina(paginaActual + 1)}
                        disabled={paginaActual === totalPaginas}
                    >
                        <ChevronRight className="h-4 w-4" />
                        <span className="sr-only">Página siguiente</span>
                    </Button>
                </div>
            </div>
        </div>

    )
}