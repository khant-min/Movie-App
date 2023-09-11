export interface ChildrenProps {
  children: React.ReactNode;
}

export interface MovieDataProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: "en" | "hi";
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface DataContextProps {
  movies: MovieDataProps[];
}
