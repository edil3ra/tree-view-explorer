export type FetchedNodeType = {
    id: number,
    node_type_name: string,
}

export type FetchedNode = {
    id: number,
    node_type: string,
    parent: number | null,
    node_name: string,
    children: Array<number>,
}

export type FetchedTable = {
    id: number,
    node: number,
    table_name: string,
    description: string,
}

export type FetchedColumn = {
    id: number,
    node: number,
    column_name: string ,
    description: string,
}


export type NodeType = {
    id: number,
    nodeTypeName: string,
}

export type Node = {
    id: number,
    idNodeType: string,
    idParent: number | null,
    name: string,
    children: Array<number>,
}

export type Table = {
    id: number,
    idNode: number,
    name: string,
    description: string,
}

export type Column = {
    id: number,
    idTable: number,
    name: string,
    description: string,
}
