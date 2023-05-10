import styled from "./styles.module.css";
import { IButton, IFilterButton } from "@/interfaces/components/button";

export const ButtonComponent = ({ children, ...rest }: IButton) => {
 return (
  <button
   {...rest}
   className={` ${styled.button_base} ${rest.className ? rest.className : ""}`}
  >
   {children}
  </button>
 );
};

export const FilterButtonComponent = ({
 requestString,
 setRequestString,
 filterName,
 optionName,
}: IFilterButton) => {
 return (
  <button
   className={`${styled.no_style_button} ${styled.button_base}`}
   onClick={() => {
    if (requestString?.includes(`${filterName}`)) {
     return setRequestString((prevState) => {
      let prevStateArr = prevState?.split("&");

      prevStateArr = prevStateArr?.filter(
       (elem) => !elem.includes(`${filterName}`)
      ) as string[];

      prevState = prevStateArr?.join("&");

      return `${prevState}&${filterName}=${optionName}`;
     });
    }

    return setRequestString(
     (prevState) => `${prevState}&${filterName}=${optionName}`
    );
   }}
  >
   {optionName[0].toUpperCase() + optionName.slice(1)}
  </button>
 );
};
