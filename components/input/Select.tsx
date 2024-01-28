"use client";
import { FieldErrors } from "react-hook-form";
import ReactSelect, { ActionMeta, SingleValue } from "react-select";

interface SelectProps {
  disabled?: boolean;
  label: string;
  options: Record<string, any>[];
  value?: Record<string, any>;
  onChange: (
    newValue: SingleValue<Record<string, any>>,
    actionMeta: ActionMeta<Record<string, any>>
  ) => void;
  errors?: FieldErrors;
  isRequired?: boolean;
}

const Select: React.FC<SelectProps> = ({
  disabled,
  label,
  options,
  value,
  onChange,
  errors,
  isRequired,
}) => {
  return (
    <div className="z-[100] mt-4">
      <label
        className="block text-sm font-medium text-green-700 leading-6"
        htmlFor={label}
      >
        {label}
      </label>
      <div className="mt-1">
        <ReactSelect
          required={isRequired}
          isDisabled={disabled}
          value={value}
          onChange={onChange}
          options={options}
          styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
          classNames={{ control: () => "text-sm" }}
        />
      </div>
    </div>
  );
};

export default Select;
