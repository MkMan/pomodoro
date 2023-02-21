export type ChipProps = {
  children: string;
  colour?: string;
  isEnabled?: boolean;
  isChecked?: boolean;
  name: string;
  value: number;
  onChange: (value: number) => void;
};

export type ChipsProps = {
  onChange: (value: number) => void;
  children: (renderProps: {
    name: string;
    onChange: (value: number) => void;
  }) => JSX.Element | JSX.Element[];
};
