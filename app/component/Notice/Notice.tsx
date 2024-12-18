import { cn } from "@/lib/utils";
import Marquee from "../../../components/ui/marquee";

const reviews = [
  {
    name: "Marie",
    username: "@marie",
    body: "Un service impeccable et des plats délicieux ! Le buffet de notre mariage était un véritable succès grâce à Velorae. Je recommande vivement !",
    img: "https://avatar.vercel.sh/marie",
  },
  {
    name: "Paul",
    username: "@paul",
    body: "Velorae a pris en charge notre séminaire d'entreprise avec professionnalisme. Tout était parfait, de la présentation à la qualité des mets. Un grand merci !",
    img: "https://avatar.vercel.sh/paul",
  },
  {
    name: "Sophie",
    username: "@sophie",
    body: "Nous avons fait appel à Velorae pour un événement privé. Leur service a dépassé nos attentes. Les plats étaient exquis et le service irréprochable.",
    img: "https://avatar.vercel.sh/sophie",
  },
  {
    name: "Thomas",
    username: "@thomas",
    body: "Un traiteur de qualité qui a su satisfaire tous nos invités. Les menus personnalisés sont un vrai plus. Nous referons appel à eux sans hésiter !",
    img: "https://avatar.vercel.sh/thomas",
  },
  {
    name: "Claire",
    username: "@claire",
    body: "Une équipe formidable qui a su organiser notre cocktail de mariage de A à Z. Tout était délicieux et les invités ont adoré. Merci Velorae !",
    img: "https://avatar.vercel.sh/claire",
  },
  {
    name: "Lucas",
    username: "@lucas",
    body: "J'ai fait appel à Velorae pour un déjeuner d'affaires. Les plats étaient raffinés et le service rapide. Une expérience de qualité que je recommande.",
    img: "https://avatar.vercel.sh/lucas",
  },
  {
    name: "Julie",
    username: "@julie",
    body: "Le buffet pour notre soirée d'anniversaire était exceptionnel. Tout le monde a adoré les mets proposés. Je n'hésiterai pas à faire à nouveau appel à Velorae.",
    img: "https://avatar.vercel.sh/julie",
  },
  {
    name: "Henri",
    username: "@henri",
    body: "Velorae a su répondre parfaitement à nos attentes pour notre mariage. Un service sur-mesure, des plats délicieux, et une équipe professionnelle. Merci encore !",
    img: "https://avatar.vercel.sh/henri",
  },
  {
    name: "Isabelle",
    username: "@isabelle",
    body: "Excellente expérience avec Velorae pour notre fête d'entreprise. Tout était parfait, du buffet au service. Je recommande vivement cette entreprise.",
    img: "https://avatar.vercel.sh/isabelle",
  },
  {
    name: "Marc",
    username: "@marc",
    body: "Service irréprochable et une cuisine qui a ravi tous nos invités. Velorae a su transformer notre événement en un véritable succès. Merci !",
    img: "https://avatar.vercel.sh/marc",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="38" height="38" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-md font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-sm font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-md">{body}</blockquote>
    </figure>
  );
};

function MarqueeDemo() {
  return (
    <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background "></div>
    </div>
  );
}

export function Notice() {
  return (
    <div className="py-20 space-y-20 px-8">
      <h2 className="  mx-auto text-xl md:text-5xl tracking-wider text-neutral-800 dark:text-neutral-200 font-sans">
        faire une courte présentation ici avec lien vers a propos et vers ,
        demander un devis
      </h2>
      <MarqueeDemo />
    </div>
  );
}
