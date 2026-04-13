import BoatCategoryPage from "@/components/ui/BoatCategoryPage";
import { boatCategories } from "@/content/boat-categories";

const category = boatCategories.find((c) => c.href === "/boats/studio-hq")!;

export default function StudioHqBoatsPage() {
  return (
    <BoatCategoryPage
      title={category.title}
      subtitle={category.description}
      heroImage={category.image}
      boats={category.boats}
    />
  );
}