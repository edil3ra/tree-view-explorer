import axios from 'axios'
import Config from './config'


type CollibraApiModel = {
    nodesTypes: {
        all: () => Promise<any>
        get: (id: number) => Promise<any>
    },
    nodes: {
        all: () => Promise<any>,
        get: (id: number) => Promise<any>,
    },
    tables: {
        all: () => Promise<any>,
        get: (id: number) => Promise<any>,
    },
    columns: {
        all: () => Promise<any>,
        get: (id: number) => Promise<any>,
    }
}



function createCollibraApi(): CollibraApiModel {
    const api = axios.create({
        baseURL: Config.api.root,
    })


    async function all(apiName: string) {
        try {
            const response = await api.get(`/${apiName}/`)
            return response.data
        } catch (err) {
            console.log(err)
        }
    }
    
    async function get(apiName: string, id: number) {
        try {
            const response = await api.get(`/${apiName}/${id}`)
            return response.data
        } catch (err) {
            console.log(err)
        }
    }
    

    return {
        nodesTypes: {
            all: () => all(Config.api.endpoint.nodesTypes),
            get: (id: number) => get(Config.api.endpoint.nodesTypes, id),
        },
        nodes: {
            all: () => all(Config.api.endpoint.nodesTypes),
            get: (id: number) => get(Config.api.endpoint.nodesTypes, id),
        },
        tables: {
            all: () => all(Config.api.endpoint.tables),
            get: (id: number) => get(Config.api.endpoint.tables, id),
        },
        columns: {
            all: () => all(Config.api.endpoint.columns),
            get: (id: number) => get(Config.api.endpoint.columns, id),
        }
    }
}

export class CollibraApi {
    private static instance: CollibraApiModel
    private constructor() { }
    
    public static getInstance() {
        if(this.instance === undefined) {
            CollibraApi.instance = createCollibraApi()
        }
        console.log(CollibraApi.instance)
        return CollibraApi.instance
    }
}
