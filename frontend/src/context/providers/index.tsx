import { ReactNode } from "react";
import { RegisterUserProvider } from "../RegisterLoginContext";
import { HomePageProvider } from "../HomePageContext";

interface IProvidersPropps {
 children: ReactNode;
}

const Providers = ({ children }: IProvidersPropps) => {
 return (
  <>
   <HomePageProvider>
   <RegisterUserProvider>{children}</RegisterUserProvider>
   </HomePageProvider>
  </>
 );
};
export default Providers;
