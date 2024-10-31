export type SerieResponse = {
  name: string;
  year: number;
  image: string;
  bigImage: string;
  opening_video: string;
  plot: string;
  duration: number;
  category: string;
  listOfEpisodes: [];
};

export type Serie = {
  id: number;
  name: string;
  image: string;
  // year: number;
  // bigImage: string;
  // opening_video: string;
  // plot: string;
  // duration: number;
  // category: string;
  // listOfEpisodes: [];
};

export type SerieEntry = {
  serie: Serie;
  url: string;
};
