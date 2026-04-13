import BoatCategoryPage from "@/components/ui/BoatCategoryPage";
import { boatCategories } from "@/content/boat-categories";

const category = boatCategories.find(
  (c) => c.href === "/boats/hotel-retreats"
)!;

export default function HotelRetreatsBoatsPage() {
  return (
    <BoatCategoryPage
      title={category.title}
      subtitle={category.description}
      heroImage={category.image}
      boats={category.boats}
    />
  );
}