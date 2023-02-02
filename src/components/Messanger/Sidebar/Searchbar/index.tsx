import React, { useContext } from "react";
import { Input } from "../../../Base/Forms/Input";
import { AppContext } from "../../../../context/store";
import { ContactActionTypes } from "../../../../@types/context/context.types";

interface SearchbarProps extends React.PropsWithChildren {}
export const Searchbar: React.FunctionComponent<SearchbarProps> = (props) => {
  const dispatch = useContext(AppContext).dispatch;
  const handleFilter = (e: any) => {
    dispatch({
      type: ContactActionTypes.Search_Contact,
      payload: e.target.value,
    });
  };
  return (
    <div className="p-2 border-[1px] border-gray-100">
      <Input placeholder="جستجو ..." onChange={handleFilter} />
    </div>
  );
};
