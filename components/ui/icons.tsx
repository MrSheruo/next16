import Image from "next/image";

export default function Icon({
  src,
  alt,
  size,
}: {
  src: string;
  alt: string;
  size: "small" | "large";
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size == "small" ? 14 : 24}
      height={size == "small" ? 14 : 24}
    />
  );
}
