interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}
interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface Content {
  selectedGenreId: number;
}
interface SideBar {
  selectedGenreId: number,
  handleClickButton: (id: number) => void;
}

interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
}
