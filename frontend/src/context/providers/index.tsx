import { ReactNode } from "react";
import { RegisterUserProvider } from "../RegisterLoginContext";
import { HomePageProvider } from "../HomePageContext";
import { EditAdressProvider } from "../EditAddress";

interface IProvidersPropps {
  children: ReactNode;
}

const Providers = ({ children }: IProvidersPropps) => {
  return (
    <RegisterUserProvider>
  
        <EditAdressProvider>
          <HomePageProvider>{children}</HomePageProvider>
        </EditAdressProvider>
    </RegisterUserProvider>
  );
};
export default Providers;
