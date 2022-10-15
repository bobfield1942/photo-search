export type Photos = {
  total: number;
  totalHits: number;
  hits: Photo[];
};

export type Photo = {
  downloads: number;
  id: number;
  imageURL: string;
  webformatURL: string;
  previewURL: string;
  tags: string;
  user: string;
  userImageURL: string;
};
