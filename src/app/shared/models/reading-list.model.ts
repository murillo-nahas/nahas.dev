export enum ReadingStatus {
  READING = 'Currently reading',
  COMPLETE = 'Complete',
}

export type Book = {
  title: string;
  author: string;
  status: ReadingStatus;
};
