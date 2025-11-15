interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  description: string;
}

interface PropsTableProps {
  data: PropDefinition[];
}

export function PropsTable({ data }: PropsTableProps) {
  return (
    <div className="overflow-x-auto mb-8">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-border-primary">
            <th className="px-4 py-3 text-left text-sm font-semibold text-text-primary bg-bg-secondary">
              Prop
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-text-primary bg-bg-secondary">
              Type
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-text-primary bg-bg-secondary">
              Default
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-text-primary bg-bg-secondary">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((prop, index) => (
            <tr key={index} className="border-b border-border-primary">
              <td className="px-4 py-3">
                <code className="text-sm px-2 py-1 rounded bg-bg-secondary text-brand-primary font-mono">
                  {prop.name}
                </code>
              </td>
              <td className="px-4 py-3">
                <code className="text-sm px-2 py-1 rounded bg-bg-secondary text-text-secondary font-mono">
                  {prop.type}
                </code>
              </td>
              <td className="px-4 py-3">
                {prop.default ? (
                  <code className="text-sm px-2 py-1 rounded bg-bg-secondary text-text-secondary font-mono">
                    {prop.default}
                  </code>
                ) : (
                  <span className="text-text-tertiary">-</span>
                )}
              </td>
              <td className="px-4 py-3 text-sm text-text-secondary">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

