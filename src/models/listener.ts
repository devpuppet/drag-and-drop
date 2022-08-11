import { Project } from "./project";

export type Listener<T> = (items: T[]) => void;