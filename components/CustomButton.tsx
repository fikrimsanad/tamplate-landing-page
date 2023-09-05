"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image"

const CustomButton = ({title,containerStyles,handleClick,btnType}:CustomButtonProps) => {
  return (
    <button 
    disabled={false} 
    type={btnType ||"button"}
    className={`${containerStyles}`}
    onClick={handleClick}
    >

        {title}

    </button>
  )
}

export default CustomButton