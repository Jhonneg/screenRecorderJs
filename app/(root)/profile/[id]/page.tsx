import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";

export default async function Page({ params }: ParamsWithSearch) {
  const { id } = await params;
  return (
    <main className="wrapper page">
      <Header
        subHeader="jonee4339@hotmail.com"
        title="Jonee"
        userImg="/assets/images/dummy.jpg"
      />
      <section className="video-grid">
        {dummyCards.map((card) => (
          <VideoCard key={card.id} {...card} />
        ))}
      </section>
    </main>
  );
}
