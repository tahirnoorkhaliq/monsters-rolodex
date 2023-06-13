 import { ChangeEvent } from "react";
 //import { ChangeEventHandler } from "react";
 import "./search-box.styles.css";

// interface IChangeHandlerProps {
//   onChangeHandler: (a: string) => void;
// }
// interface ISearchBoxProps extends IChangeHandlerProps {
//   className: string;
//   placeholder: string;

// }

type searchBoxProps = {
  className: string;
  placeholder?: string;
 // onChangeHandler: ChangeEventHandler<HTMLInputElement>;
 onChangeHandler:(event:ChangeEvent<HTMLInputElement>)=>void;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: searchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);
export default SearchBox;
