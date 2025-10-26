import Image from "next/image";
import Link from "next/link";
import Icon from "./ui/icons";
import { events } from "@/lib/constants";

interface CardProps {
  title: string;
  slug: string;
  location: string;
  image: string;
  date: string;
  time: string;
}
export function EventCard({
  title,
  image,
  date,
  location,
  slug,
  time,
}: CardProps) {
  return (
    <Link href={`/events/${slug}`} id="event-card">
      <Image
        src={image}
        alt={title}
        width={410}
        height={300}
        className="poster"
      />
      <div className="flex flex-row gap-2">
        <Icon src="/icons/pin.svg" alt="location" size="small" />
        <p>{location}</p>
      </div>
      <p className="title">{title}</p>
      <div className="datetime">
        <div>
          <Icon src="/icons/calendar.svg" alt="calendar" size="small" />
          <p>{date}</p>
        </div>
        <div>
          <Icon src="/icons/clock.svg" alt="time" size="small" />
          <p>{time}</p>
        </div>
      </div>
    </Link>
  );
}
export default function EventsCards() {
  return (
    <ul className="events list-none">
      {events.map((e) => (
        <li className="marker:" key={e.slug}>
          <EventCard {...e} />
        </li>
      ))}
    </ul>
  );
}
