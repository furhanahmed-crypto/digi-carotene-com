type BlogTableProps = {
  headers: string[]
  rows: string[][]
  caption?: string
}

export function BlogTable({ headers, rows, caption }: BlogTableProps) {
  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[520px] border-collapse text-left text-sm">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <thead className="bg-secondary/60">
          <tr>
            {headers.map((header, index) => (
              <th
                key={`${header}-${index}`}
                className="border-b border-border px-4 py-3 font-medium text-foreground"
              >
                {header || "\u00a0"}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="odd:bg-background even:bg-secondary/20">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border-b border-border/70 px-4 py-3 align-top text-muted-foreground"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
