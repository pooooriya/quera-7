import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Base/Forms/Input";
import { AXIOS } from "../../config/axios.config";
import { ApiRoutes } from "../../constants/api.route";
import { AppContext } from "../../context/store";
import { UserActionTypes } from "../../@types/context/context.types";
import { useNavigate, useRoutes } from "react-router-dom";
interface LoginComponent extends React.PropsWithChildren {}
export const Login: React.FunctionComponent<
  LoginComponent
> = (): JSX.Element => {
  const navigation = useNavigate();
  const {
    state: { user },
    dispatch,
  } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = (data: any) => {
    // request to server and gets token if password and email is true
    AXIOS.get(
      ApiRoutes.Login + `?user=${data.username}&user=${data.password}`
    ).then((resp) => {
      dispatch({
        type: UserActionTypes.Login_Success,
        payload: {
          username: resp.data.username,
          token: resp.data.accessToken,
        },
      });
      // attach to all request header
      AXIOS.defaults.headers.common.Authorization =
        "Bearer " + resp.data.accessToken;
      navigation("/");

      // token store somewhere
      localStorage.setItem("token", resp.data.accessToken);
      localStorage.setItem("username", resp.data.username);
    });
  };

  return (
    <div className="flex justify-center items-center h-full">
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="py-10 px-5 border-[2px] border-gray-500 [&_input]:mt-5 [&_button]:mt-5 rounded-lg"
      >
        <h1 className="text-center font-bold text-lg">ورود به پیام رسان</h1>
        <Input
          {...register("username", { required: true })}
          placeholder="نام کاربری"
        />
        <Input
          type="password"
          {...register("password", { required: true })}
          placeholder="رمز عبور"
        />
        <Input
          type="submit"
          className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full"
          value="ورود"
        />
      </form>
    </div>
  );
};
