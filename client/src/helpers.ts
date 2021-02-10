import {
    FetchedNode,
    FetchedNodeType,
    NodeType,
    Node,
    Table,
    FetchedColumn,
    FetchedTable,
    Column
} from "./models"

export const fromServerToClient = {
    nodeType(fetchedNodeType: FetchedNodeType): NodeType {
        return {
            id: fetchedNodeType.id,
            nodeTypeName: fetchedNodeType.node_type_name
        }
    },
    node(fetchedNode: FetchedNode): Node {
        return {
            id: fetchedNode.id,
            idNodeType: fetchedNode.node_type,
            idParent: fetchedNode.parent,
            name: fetchedNode.node_name,
            children: fetchedNode.children,
            tables: fetchedNode.tables,
        }
    },
    table(fetchedTable: FetchedTable): Table {
        return {
            id: fetchedTable.id,
            idNode: fetchedTable.node,
            name: fetchedTable.table_name,
            description: fetchedTable.description,
            columns: fetchedTable.columns
        }
    },
    column(fetchedColumn: FetchedColumn): Column {
        return {
            id: fetchedColumn.id,
            idTable: fetchedColumn.node,
            name: fetchedColumn.column_name,
            description: fetchedColumn.description,
        }
    }
}
