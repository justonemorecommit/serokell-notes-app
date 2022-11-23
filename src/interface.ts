export interface INote {
  id: number
  title: string
  description: string
}

export interface INoteProps {
  note: INote | null
}

export interface INoteCardProps {
  note: INote
}

export interface INoteModalProps {
  note: INote | null
  actionKey: string
}

export interface INoteResponse {
  payload: object | unknown
}
