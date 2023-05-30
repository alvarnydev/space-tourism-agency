import { PageDataType } from '../types';

export const fetchPageData = async (): Promise<PageDataType> => {
  const response = await fetch(`/data/data.json`).then((res) => res.json());
  return response;
};
