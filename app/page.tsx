import EventsCards from "@/components/events-cards";
import ExploreButton from "@/components/ui/explore-button";

export default function page() {
  return (
    <section>
      <h1 className="text-center capitalize">
        the hub for every dev <br /> even you can&apos;t miss
      </h1>
      <p className="text-center mt-5">
        hackathons, meetups, and conferences, all in one place
      </p>

      <ExploreButton />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <EventsCards />
      </div>
    </section>
  );
}
