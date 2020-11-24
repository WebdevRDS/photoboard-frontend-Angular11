export interface Tag {
  confidence: number
  tag: {
    en?: string
  }
}

export interface Image {
  _id: number
  url: string
  board: number
  tags?: Tag[]
}

export interface Board {
  _id: number
  title: string
}