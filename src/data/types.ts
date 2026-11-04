export type Lang = 'en' | 'fr';

export type Shot = {
  img: string; // path under /img, without extension
  kind: 'phone' | 'desktop' | 'frame';
  alt: string;
  caption?: string;
};

export type Point = { title: string; text: string };

export type Block =
  | { type: 'split'; heading: string; paras?: string[]; points?: Point[]; shots: Shot[]; flip?: boolean }
  | { type: 'list'; heading: string; intro?: string; points: Point[] }
  | { type: 'wide'; heading: string; paras?: string[]; shots: Shot[] }
  | { type: 'row'; heading: string; intro?: string; shots: Shot[] }
  | { type: 'decisions'; heading: string; items: Decision[] }
  | { type: 'close'; heading: string; points: string[]; reflection?: string; links?: { label: string; href: string }[] };

export type Decision = {
  title: string;
  paras?: string[];
  bullets?: string[];
  shots?: Shot[];
  live?: 'segments';
};

export type Project = {
  slug: string;
  client: string;
  color: string; // field colour
  ink: string; // text colour on the field
  year: string;
  title: string;
  summary: string;
  card: string; // one line for the home list
  role: string;
  tags: string[];
  cover: Shot[];
  meta: { label: string; value: string }[];
  stats: { value: string; label: string }[];
  hero: Shot[];
  blocks: Block[];
};
