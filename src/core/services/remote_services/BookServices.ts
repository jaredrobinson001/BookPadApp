import {
  BookModel,
  END_POINT,
  GetBookDownLoadLinkModel,
  safeGetArray,
  TimeToMillisecondsEnum,
} from "@core";
import { ReviewModel } from "@core/models/ReviewModel";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const getDownLoadEndPoint = `${END_POINT}book/getBookDownloadLink/`;
const getBookLibraryEndPoint = `${END_POINT}library/getBooks`;
const removeBookLibraryEndPoint = `${END_POINT}library/removeBook`;
const addBookLibraryEndPoint = `${END_POINT}library/addBook`;
const searchBookEndPoint = `${END_POINT}search/bookNameSearch`;
const getBookReviewEndPoint = `${END_POINT}bookReview/getReviewsByBook`;
const createBookReviewEndPoint = `${END_POINT}bookReview/create`;
const deleteBookReviewEndPoint = `${END_POINT}bookReview/delete`;
const getRecommendBookEndPoint = `${END_POINT}book/getRecommendation`;
const getBestSellerBookEndPoint = `${END_POINT}book/getTrendingBooks`;
const getNewBookEndPoint = `${END_POINT}book/getNewBooks`;

export const useGetBookDownLoadLink = (params: { bookId: string }) => {
  const getBookDownLoadEndPoint = async ({
    bookId,
    token,
  }: {
    bookId: string;
    token: string;
  }) => {
    const endPoint = getDownLoadEndPoint + bookId;
    const res = await axios.get(endPoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const returnData = GetBookDownLoadLinkModel.instantiate(res);
    return returnData;
  };
  const { reset, mutateAsync } = useMutation({
    mutationFn: getBookDownLoadEndPoint,
    mutationKey: [`getBookDownLoadEndPoint ${params.bookId}`],
    cacheTime: TimeToMillisecondsEnum.DAY,
    networkMode: "offlineFirst",
  });

  return {
    reset,
    mutateAsync,
  };
};

export const getBookLibrary = async ({ token }: { token: string }) => {
  const endPoint = getBookLibraryEndPoint;
  const res = await axios.post(
    endPoint,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const books = safeGetArray(res.data, "books", []);
  const returnData = BookModel.instantiateList(books);
  return returnData;
};

export const removeBookFromLibrary = async ({
  token,
  bookId,
}: {
  token: string;
  bookId: string;
}) => {
  const endPoint = removeBookLibraryEndPoint;
  const res = await axios.post(
    endPoint,
    {
      bookId: Number(bookId),
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};

export const addBookToLibrary = async ({
  token,
  bookId,
}: {
  token: string;
  bookId: string;
}) => {
  const endPoint = addBookLibraryEndPoint;
  const res = await axios.post(
    endPoint,
    {
      bookId: Number(bookId),
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};

export const searchBook = async ({
  token,
  lastBookId,
  limit,
  searchValue,
}: {
  token: string;
  lastBookId: number;
  limit: number;
  searchValue: string;
}) => {
  const endPoint = searchBookEndPoint;
  const res = await axios.post(
    endPoint,
    {
      limit,
      last: Number(lastBookId),
      searchString: searchValue,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const bookData = safeGetArray(res, "data.books", []);
  const returnData = BookModel.instantiateList(bookData);
  return returnData;
};

export const getBookReview = async ({
  token,
  lastBookId,
  limit,
  bookId,
}: {
  token: string;
  lastBookId: number;
  limit: number;
  bookId: string;
}) => {
  const endPoint = getBookReviewEndPoint;
  const res = await axios.post(
    endPoint,
    {
      limit,
      last: Number(lastBookId),
      bookId: Number(bookId),
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const bookData = safeGetArray(res, "data.reviews", []);
  const returnData = ReviewModel.instantiateList(bookData);
  return returnData;
};

export const createBookReview = async ({
  token,
  score,
  comment,
  bookId,
}: {
  token: string;
  score: number;
  comment: string;
  bookId: string;
}) => {
  const endPoint = createBookReviewEndPoint;
  console.log(token, score, comment, bookId);
  const res = await axios.post(
    endPoint,
    {
      bookReviewScore: score,
      bookReviewComment: comment,
      bookId: Number(bookId),
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};

export const deleteBookReview = async ({
  token,
  bookReviewId,
}: {
  token: string;
  bookReviewId: number;
}) => {
  const endPoint = deleteBookReviewEndPoint;
  const res = await axios.post(
    endPoint,
    {
      bookReviewId: Number(bookReviewId),
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};

export const getRecommendBooks = async ({
  token,
  numberOfBooks,
}: {
  token: string;
  numberOfBooks: number;
}) => {
  const endPoint = getRecommendBookEndPoint;
  const res = await axios.post(
    endPoint,
    {
      num: numberOfBooks,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const bookData = safeGetArray(res, "data.books", []);
  const returnData = BookModel.instantiateList(bookData);
  return returnData;
};

export const getBestSellerBooks = async ({
  token,
  numberOfBooks,
}: {
  token: string;
  numberOfBooks: number;
}) => {
  const endPoint = getBestSellerBookEndPoint;
  const res = await axios.post(
    endPoint,
    {
      num: numberOfBooks,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const bookData = safeGetArray(res, "data.books", []);
  const returnData = BookModel.instantiateList(bookData);
  return returnData;
};

export const getNewBooks = async ({
  token,
  numberOfBooks,
}: {
  token: string;
  numberOfBooks: number;
}) => {
  const endPoint = getNewBookEndPoint;
  const res = await axios.post(
    endPoint,
    {
      num: numberOfBooks,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const bookData = safeGetArray(res, "data.books", []);
  const returnData = BookModel.instantiateList(bookData);
  return returnData;
};
