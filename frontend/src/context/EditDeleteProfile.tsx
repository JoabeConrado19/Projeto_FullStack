import { createContext, ReactNode } from "react";
import api from "../services/api";
import { IEditUserSubmit } from "../schemas/editProfileSchema";
import { useRouter } from "next/router";

interface IProviderProps {
  children: ReactNode;
}

interface IEditDeleteProviderData {
  editUser: (data: IEditUserSubmit) => void;
}

export const EditDeleteUserProvider = ({ children }: IProviderProps) => {
  const router = useRouter();

  const editUser = async (data: IEditUserSubmit) => {
    data.profileImage = "pedddrof";
    await api
      .patch("/users", data)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <EditDeleteUserContext.Provider
      value={{
        editUser,
      }}
    >
      {children}
    </EditDeleteUserContext.Provider>
  );
};

export const EditDeleteUserContext = createContext({} as IEditDeleteProviderData);
