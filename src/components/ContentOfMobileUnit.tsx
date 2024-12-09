import { MobileUnit } from "@/lib/types";

interface ContentOfMobileUnitProps {
    actividad: MobileUnit;
    achievements?: boolean;
}

export default function ContentOfMobileUnit({ actividad, achievements }: ContentOfMobileUnitProps) {
    return (
        <div className="p-4 bg-muted">
            <h3 className="font-semibold mb-2 text-xl">Información adicional:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <p>
                    <b>Usuario:</b> {actividad.user}
                </p>
                <p>
                    <b>Estatus:</b> {actividad.status}
                </p>
                <p>
                    <b>Unidades Móviles Requeridas:</b> {actividad.cantMobileUnitsRequired}
                </p>
                <p>
                    <b>Ultrasonidos Requeridos:</b> {actividad.cantUltrasoundRequired}
                </p>
                <p>
                    <b>Apoyo Logístico:</b> {actividad.logisticalSupport}
                </p>
                <p>
                    <b>Estado:</b> {actividad.state}
                </p>
                <p>
                    <b>Municipio:</b> {actividad.municipality}
                </p>
                <p>
                    <b>Parroquia:</b> {actividad.parish}
                </p>
                <p>
                    <b>Lugar:</b> {actividad.place}
                </p>
                <p>
                    <b>Responsable:</b> {actividad.responsible}
                </p>
                <p>
                    <b>Población Atendida:</b> {actividad.poblationServed}
                </p>
                <p>
                    <b>Fecha de Ejecución:</b> {actividad.dateFinished}
                </p>
            </div>
            {!achievements && (
                <p className="break-words whitespace-pre-wrap lg:max-w-screen-lg xl:max-w-screen-2xl mt-4">
                    <b>Observaciones de agenda: </b>
                    {actividad.obs}
                </p>
            )}
            <p className="break-words whitespace-pre-wrap lg:max-w-screen-lg xl:max-w-screen-2xl mt-4">
                <b>Observaciones de ejecución: </b>
                {actividad.obs2}
            </p>
            <div className="mt-4">
                <h4 className="font-semibold mb-2">Tipos de Atención:</h4>
                {actividad.attentionTypes?.map((type, index) => (
                    <div key={index} className="mb-4">
                        <p>
                            <b>Tipo:</b> {type.type}
                        </p>
                        <div className="ml-4">
                            <h5 className="font-semibold">Rangos de Edad:</h5>
                            {type.ageRanges.map((range, idx) => (
                                <p key={idx}>
                                    <b>{range.range}:</b> Mujeres: {range.women}, Hombres: {range.men}
                                </p>
                            ))}
                            <h5 className="font-semibold">Discapacidades:</h5>
                            {type.disabilities.map((disability, idx) => (
                                <div key={idx} className="ml-4">
                                    <p>
                                        <b>Tipo:</b> {disability.type}
                                    </p>
                                    {disability.ageRanges.map((range, idx) => (
                                        <p key={idx}>
                                            <b>{range.range}:</b> Mujeres: {range.women}, Hombres: {range.men}
                                        </p>
                                    ))}
                                </div>
                            ))}
                            <h5 className="font-semibold">Etnias:</h5>
                            {type.ethnicities.map((ethnicity, idx) => (
                                <div key={idx} className="ml-4">
                                    <p>
                                        <b>Tipo:</b> {ethnicity.type}
                                    </p>
                                    {ethnicity.ageRanges.map((range, idx) => (
                                        <p key={idx}>
                                            <b>{range.range}:</b> Mujeres: {range.women}, Hombres: {range.men}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

