import { Book, ReadingStatus } from "../models/reading-list.model";

export const READING_LIST: Book[] = [
  {
    title: 'Vidas Secas',
    author: 'Graciliano Ramos',
    status: ReadingStatus.READING,
  },
  {
    title: 'Fundamentals of Software Architecture: An Engineering Approach',
    author: 'Mark Richards and Neal Ford',
    status: ReadingStatus.READING,
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    status: ReadingStatus.COMPLETE,
  },
];
