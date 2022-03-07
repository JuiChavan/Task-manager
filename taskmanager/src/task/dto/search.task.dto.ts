import { TaskStatus } from "../task.enum";


//data transfer object
export class SearchTaskDTO{    
    search:string;
    status:TaskStatus;
}