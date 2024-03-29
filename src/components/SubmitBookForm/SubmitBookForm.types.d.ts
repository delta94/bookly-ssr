import { HTMLProps } from 'react';

export type SubmitBookFormTypes<T> = {
    loading?: boolean;
    onSubmit: (object: T) => void;
    bookId: string;
};

export type SubmitBookFormProps = SubmitBookFormTypes<Book.Mutation.Submit.Variables>;
