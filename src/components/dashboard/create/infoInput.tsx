import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

interface IProps {
  className?: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value: string,
  title: string,
  placeholder: string
}

const Input = ({title, className, onChange, value, placeholder}: IProps) => {
  return (
    <div className={className}>
      <div className="px-1 py-1 font-bold truncate flex gap-1 items-center">{title} <Icon icon="ep:info-filled" className="text-[#9A9FA5]" /></div>
      <input
        className="bg-[#F0F8FF] text-[12px] p-3 dark:bg-[#020111] w-full rounded-lg text-blue-gray-700 font-sans font-normal border-[#98bdea1f] outline-none focus:border-2 focus:border-[#8ca8cba2] border"
        placeholder={placeholder} 
        onChange={onChange}
        value={value}
      />
    </div>
  )
};

export default Input;
