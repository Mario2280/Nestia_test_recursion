import { tags } from 'typia';
import { Prisma } from '@prisma/client';
interface PaginationQueryDto<EntityWhereInputType> {
  limit?: number & tags.Minimum<1> & tags.Type<'uint32'> & tags.Default<10>;

  offset?: number & tags.Minimum<0> & tags.Type<'uint32'> & tags.Default<0>;

  sort?: SortType & tags.Default<SortType.ASC>;

  where: EntityWhereInputType; //<-- I think there is a mistake here
}

export type PaymentPaginationType = PaginationQueryDto<
  Prisma.PaymentWhereInput
>;
enum SortType {
  ASC = 'asc',
  DESC = 'desc',
}


export default PaginationQueryDto;
