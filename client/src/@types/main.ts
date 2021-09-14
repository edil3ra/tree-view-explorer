export type TableRow = {
    data: Record<string, string>
    kids: Record<string, { records: Array<TableRow> }>
}
