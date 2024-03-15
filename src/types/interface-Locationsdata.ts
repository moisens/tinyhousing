export type StatusLocations = "pending" | "resolved" | "rejected";
export interface Locations {
  locationDatas: LocationDataType;
  statusType: StatusLocations;
  error: unknown;
}

export type LocationDataType = {
  locations: ProductLocationsdata[];
  statusType: StatusLocations;
  totalLocations: string;
};

export type CardDataLocationType = {
  location: ProductLocationsdata;
  index: number;
  value: number;
  setValue?: React.Dispatch<React.SetStateAction<number>>;
};

export type GoogleLatLng = {
  lat: number;
  lng: number;
};

export type ProductLocationsdata = {
  readonly _id: string;
  country: string;
  description: string;
  image: string[];
  googolLink: GoogleLatLng;
  reviewersImages: string[];
  averageRating: number;
  numOfReviews: number;
};
