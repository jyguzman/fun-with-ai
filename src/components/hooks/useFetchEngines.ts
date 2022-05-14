import { useState, useEffect } from "react";
import { fetchEngines } from "../../utils/apiCallFunctions";
import { saveEngines, retrieveEngines } from "../../utils/storage_utils";

const useFetchEngines = (): string[] => {
    const [engines, setEngines] = useState<string[]>([]);
    
    useEffect(() => {
        const getEngines = async () => {
            let engines_ = retrieveEngines();
            if (engines_.length === 0) {
                engines_ = await fetchEngines();
                saveEngines(engines_);
            }
            setEngines(engines_);
        }

        getEngines();
    }, [])

    return engines;
}

export default useFetchEngines;

