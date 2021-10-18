export interface Rule<T> {
  errorMessage: string;
  hooks: {
    type: T;
    test: (context: any) => string[] | void;
  }[];
}
