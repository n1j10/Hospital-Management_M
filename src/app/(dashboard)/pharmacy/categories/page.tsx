import PageHeader from "@/components/layout/PageHeader";
import CategoryForm from "@/features/pharmacy/components/CategoryForm";
import CategoriesTable from "@/features/pharmacy/components/CategoriesTable";
import { getCategories } from "@/features/pharmacy/queries";

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="space-y-6">
      <PageHeader title="Medicine Categories" description="Manage pharmacy categories" backHref="/pharmacy" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CategoryForm />
        <CategoriesTable categories={categories} />
      </div>
    </div>
  );
}
