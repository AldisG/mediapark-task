export type Photo = {
  alt_description: null | string;
  blur_hash: string;
  color: string;
  created_at: string;
  current_user_collections: string[];
  description: null | string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: Links;
  sponsorship: Sponsorship;
  topic_submissions: any;
  updated_at: string;
  urls: Urls;
  user: any;
  width: number;
};
export type Links = {
  self: string;
  html: string;
  download: string;
  download_location: string;
};

export type Sponsorship = {
  impression_urls: any[];
  tagline: string;
  tagline_url: string;
  sponsor: any;
};
export type Urls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
};
