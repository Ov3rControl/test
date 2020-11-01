export interface IRepo {
    id: number;
    name: string;
    full_name: string;
    private: boolean;
    comment?: string
  }
  
  export type RepoState = {
    repos: IRepo[];
  };
  
  export type RepoAction = {
    type: string;
    repo: IRepo;
  };
  
  export type DispatchType = (args: RepoAction) => RepoAction;
  