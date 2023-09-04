export interface Exemplo {
    id: string
    description: string
  }
export interface IResam {
  id: string;
  title: string;
  code: string;
  description: string;
  note: string;
  entry: string;
  Exemplo?: Exemplo[]
}
