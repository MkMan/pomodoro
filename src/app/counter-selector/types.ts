export type CounterSelectorProps = {
  className?: string;
  isDisabled?: boolean;
};

export type EditModeProps = {
  isDisabled?: boolean;
};

export type DisplayModeProps = {
  onEditClick: () => void;
};

export type DisplayAttributes = { text: string; color: string };
