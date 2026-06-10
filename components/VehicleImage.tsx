import Image from "next/image";

type VehicleImageProps = {
  src: string;
  alt: string;
  luxury?: boolean;
};

export default function VehicleImage({ src, alt, luxury = false }: VehicleImageProps) {
  return (
    <div
      className={`relative mb-4 aspect-[16/10] overflow-hidden rounded-xl border border-white/5 ${
        luxury
          ? "bg-gradient-to-br from-zinc-900 via-zinc-800 to-[#b19540]/20"
          : "bg-gradient-to-br from-zinc-900 to-zinc-800"
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
}
