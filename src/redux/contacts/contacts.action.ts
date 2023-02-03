import { AxiosResponse } from "axios";
import { Contacts } from "../../@types/api.types";
import { AXIOS } from "../../config/axios.config";
import { ApiRoutes } from "../../constants/api.route";
import { ContactActionTypes } from "../../@types/context/context.types";

export const GetAllContacts = (contacts: any) => ({
  type: ContactActionTypes.Get_All_Contact,
  contacts,
});

export const GetAllContactsAsync =
  () => async (dispatch: any, getState: any) => {
    const response = await AXIOS.get<any, AxiosResponse<Contacts[]>>(
      ApiRoutes.GetContacts
    );
    if (response.status === 200) {
      dispatch(GetAllContacts(response.data));
    }
  };
