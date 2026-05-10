import { queryRef } from 'vue-qs';

const query = queryRef<string>('q', {
  defaultValue: '',
  shouldOmitDefault: true,
});

export const useSearch = () => {
  return query;
};
