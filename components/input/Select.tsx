"use client";
import ReactSelect from "react-select";

interface SelectProps {
  disabled?: boolean;
  label: string;
  options: Record<string, any>[];
  value?: Record<string, any>;
  onChange: (value: Record<string, any>) => void;
}

const Select: React.FC<SelectProps> = ({
  disabled,
  label,
  options,
  value,
  onChange,
}) => {
  return (
    <div className="z-[100] mt-4">
      <label
        className="block text-sm font-medium text-gray-900 leading-6"
        htmlFor={label}
      >
        {label}
      </label>
      <div className="mt-2">
        <ReactSelect
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
