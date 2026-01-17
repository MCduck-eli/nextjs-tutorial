import { getBlogs } from "../../interfaces";
import CategoriesInterface from "../../interfaces/categories-interface";

export interface SliderProps {
    blogs: getBlogs[];
    categories: CategoriesInterface[];
}
