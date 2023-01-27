import React, { useContext } from "react";
import { Input } from "../../../Base/Forms/Input";
import { AppContext } from "../../../../context/store";

interface SearchbarProps extends React.PropsWithChildren {}
export const Searchbar: React.FunctionComponent<SearchbarProps> = (props) => {
  const state = useContext(AppContext).state;
  const { setSearch } = useContext(AppContext);
  const handleFilter = (e: any) => {
    const filterContacts = state.filter((n) => n.name.includes(e.target.value));
    setSearch(filterContacts);
  };
  return (
    <div className="p-2 border-[1px] border-gray-100">
      <Input placeholder="جستجو ..." onChange={handleFilter} />
    </div>
  );
};
