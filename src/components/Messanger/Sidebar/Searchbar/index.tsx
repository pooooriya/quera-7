import React from "react";
import { Input } from "../../../Base/Forms/Input";

interface SearchbarProps extends React.PropsWithChildren {}
export const Searchbar: React.FunctionComponent<SearchbarProps> = (props) => {
  return (
    <div className="p-2 border-[1px] border-gray-100">
      <Input placeholder="جستجو ..." />
    </div>
  );
};
