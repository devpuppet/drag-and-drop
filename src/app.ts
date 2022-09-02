import { ProjectList } from "./component/project-list";
import { ProjectInput } from "./component/project-input";

const projectInput = new ProjectInput();
const activeProjectList = new ProjectList('active');
const finishedProjectList = new ProjectList('finished');