import { PageDataType } from '../types';

export const fetchPageData = async (): Promise<PageDataType> => {
  const dataUrl = new URL('../data.json', import.meta.url).href;
  const response = await fetch(dataUrl).then((res) => res.json());
  return response;
};
