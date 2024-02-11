import { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface InputProps {
  label: string;
  name: string;
  type: InputHTMLAttributes<HTMLInputElement>['type'];
  error?: string;
  register: UseFormRegister<any>;
}

function Input({ label, type, error, register, name }: InputProps) {
  return (
    <div>
      <label htmlFor={name} className="text-sm w-full">
        <div className="w-full flex justify-between">
          <div>{label}</div>
          {error && <div className="text-xs text-red-500">{error}</div>}
        </div>
        <input
          id={name}
          className="mt-1 border rounded-md p-1.5 w-full box-border outline-none focus:ring-1 focus:border-indigo-600 focus:ring-blue-600"
          type={type}
          {...register(name)}
        />
      </label>
    </div>
  );
}

export default Input;
