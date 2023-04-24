import { ReactNode } from "react";
import { RegisterUserProvider } from "../RegisterLoginContext";
import { HomePageProvider } from "../HomePageContext";

interface IProvidersPropps {
 children: ReactNode;
}

const Providers = ({ children }: IProvidersPropps) => {
 return (
  <>
   <RegisterUserProvider>{children}</RegisterUserProvider>
   <HomePageProvider>{children}</HomePageProvider>
  </>
 );
};
export default Providers;
