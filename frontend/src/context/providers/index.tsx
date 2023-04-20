import { ReactNode } from "react";
import { RegisterUserProvider } from "../RegisterLoginContext";

interface IProvidersPropps {
  children: ReactNode;
}

const Providers = ({ children }: IProvidersPropps) => {
  return <RegisterUserProvider>{children}</RegisterUserProvider>;
};
export default Providers;
