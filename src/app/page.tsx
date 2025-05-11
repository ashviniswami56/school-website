import ActivitiesSlider from '@/components/ActivitiesSlider';
import HouseValues from '@/components/HouseValues';
import ImportantDays from '@/components/ImportantDays';
import VideoGallary from '@/components/VideoGallary';

export default function Home() {
  return (
    <main>
      <ActivitiesSlider />
      <HouseValues />
      <ImportantDays />
      <VideoGallary />
    </main>
  );
}
