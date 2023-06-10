import { PageDataType } from '../types';

export const fetchPageData = async (): Promise<PageDataType> => {
  const response = await fetch(`../data.json`).then((res) => res.json());
  return response;
};
