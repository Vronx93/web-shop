import {
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { getAllCategories } from "../../api";
import Category from "../Category/Category";
import styles from "./CategoriesList.module.css";

export interface CategoriesListProps {
  containerClassName?: string;
  listStyle?: string;
  isDropdownActive: boolean;
  setIsDropdownActive: React.Dispatch<SetStateAction<boolean>>;
}

export interface CategoryInterface {
  name: string;
  slug: string;
  url: string;
}

export default function CategoriesList({
  containerClassName,
  listStyle,
  isDropdownActive,
  setIsDropdownActive,
}: CategoriesListProps) {
  const [categoryData, setCategoryData] = useState<CategoryInterface[]>([]);
  console.log("category data", categoryData);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const containerStyle = containerClassName || styles.categoriesContainer;
  const ulStyle = listStyle || styles.list;
  const categories = useMemo(() => {
    return categoryData?.map((cat) => (
      <Category
        key={crypto.randomUUID()}
        name={cat.name}
        setIsDropdownActive={setIsDropdownActive}
      />
    ));
  }, [categoryData]);

  useLayoutEffect(() => {
    getAllCategories().then((resolvedData) => setCategoryData(resolvedData));
  }, []);

  useEffect(() => {
    if (isDropdownActive) {
      document.addEventListener("mousedown", closeDropdownOnOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", closeDropdownOnOutsideClick);
    };
  }, [categoriesRef, closeDropdownOnOutsideClick]);

  function closeDropdownOnOutsideClick(event: any) {
    if (isDropdownActive && !categoriesRef.current?.contains(event.target)) {
      setIsDropdownActive(false);
    }
  }

  return (
    <div ref={categoriesRef} className={containerStyle}>
      <ul className={ulStyle}>{categories}</ul>
    </div>
  );
}
