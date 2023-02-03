import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { Contacts } from "../../../@types/api.types";
import { AXIOS } from "../../../config/axios.config";
import { ApiRoutes } from "../../../constants/api.route";

export const GetAllContactsAsync = createAsyncThunk(
  "getallcontacts",
  async () => {
    const response = await AXIOS.get<any, AxiosResponse<Contacts[]>>(
      ApiRoutes.GetContacts
    );
    return response.data;
  }
);
