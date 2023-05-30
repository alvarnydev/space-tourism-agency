export type DestinationPageType = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}[];

export type CrewPageType = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}[];

export type TechnologyPageType = {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}[];

export type PageDataType = {
  destinations: DestinationPageType;
  crew: CrewPageType;
  technology: TechnologyPageType;
};
