import { ReactNode } from "react";

/**
 * A calculator generic.
 */
export default function GenericCalculator(args: GenericCalculatorArgs) {
  const defaultExport = () => {
    return (
      <div className="flex flex-col gap-4 p-4 border border-border rounded-md">
        {args.children}
        <div>{args.callback()}</div>
      </div>
    );
  };
  return {
    default: defaultExport,
  };
}

export interface GenericCalculatorArgs {
  children: ReactNode;
  callback: () => ReactNode;
}
