export type timestamp = number;
export type jsonstring = string;
export type markdown = string;

export interface Card {
  id: string;
  word: string;
  definitions?: jsonstring;
  descriptions?: markdown;
  updated_at: timestamp;
  starred_at?: timestamp;
  completed_at?: timestamp;
  deleted_at?: timestamp;
}
