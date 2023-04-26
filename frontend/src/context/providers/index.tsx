import { ReactNode } from "react";
import { RegisterUserProvider } from "../RegisterLoginContext";
import { EditDeleteUserProvider } from "../EditDeleteProfile";
import { HomePageProvider } from "../HomePageContext";

interface IProvidersPropps {
 children: ReactNode;
}

const Providers = ({ children }: IProvidersPropps) => {
 return (
  <>
   <HomePageProvider>
   <RegisterUserProvider>
   <EditDeleteUserProvider>{children}</EditDeleteUserProvider>
    </RegisterUserProvider>
   </HomePageProvider>
  </>
 );
};
export default Providers;
