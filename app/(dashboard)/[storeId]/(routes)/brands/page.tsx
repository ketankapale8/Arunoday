import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import { BrandColumn } from "./components/columns"
import { BrandClient } from "./components/client";

const BrandPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  const brands = await prismadb.brand.findMany({
    where: {
      storeId: params.storeId
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const formattedBrand: BrandColumn[] = brands.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BrandClient data={formattedBrand} />
      </div>
    </div>
  );
};

export default BrandPage;