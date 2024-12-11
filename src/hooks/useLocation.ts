import api from "@/api/api_regiones";
import { use, useEffect, useState } from "react";

const useLocation = (estado_id: number, municipio_id: number) => {
    const [state, setState] = useState([]);
    const [municipality, setMunicipality] = useState([]);
    const [parish, setParish] = useState([]);

    useEffect(() => {
        api.get(`/location/state`).then((response) => {
            setState(response.data.data);
        });
    }, []);

    useEffect(() => {
        if (estado_id > 0) {
            api.get(`/location/municipality/state/${estado_id}`).then((response) => {
                setMunicipality(response.data.data);
            });
        }

    }, [estado_id]);

    useEffect(() => {
        if (municipio_id > 0) {
            api.get(`location/parish/municipality/${municipio_id}`).then((response) => {
                setParish(response.data.data);
            })
        }
    }, [municipio_id]);

    return { state, municipality, parish };
}

export default useLocation;