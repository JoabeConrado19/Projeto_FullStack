import { ReactNode } from "react";
import { RegisterUserProvider } from "../RegisterLoginContext";
import { EditDeleteUserProvider } from "../EditDeleteProfile";

interface IProvidersPropps {
  children: ReactNode;
}

const Providers = ({ children }: IProvidersPropps) => {
  return (
    <RegisterUserProvider>
      <EditDeleteUserProvider>{children}</EditDeleteUserProvider>
    </RegisterUserProvider>
  );
};
export default Providers;
