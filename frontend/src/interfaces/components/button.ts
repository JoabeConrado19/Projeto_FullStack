import {
    ButtonHTMLAttributes, SetStateAction
  } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
  }

  export interface IFilterButton {
    requestString: string | null;
    setRequestString: (value: SetStateAction<string | null>) => void;
    filterName: string;
    optionName: string;
  }