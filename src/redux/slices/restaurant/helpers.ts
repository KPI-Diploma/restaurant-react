import { Category } from '@/types/restaurant';

const nullUuid = '00000000-0000-0000-0000-000000000000';

const recommendedCategory: Category = {
  uuid: nullUuid,
  name: 'Recommended',
  dishes: [],
};

export { nullUuid, recommendedCategory };