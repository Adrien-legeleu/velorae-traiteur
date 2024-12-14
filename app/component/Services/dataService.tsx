import Img1 from "@/public/image/servicePage (1).jpg";
import Img2 from "@/public/image/servicePage (2).jpg";
import Img3 from "@/public/image/servicePage (3).jpg";
import Img4 from "@/public/image/servicePage (4).jpg";
import Img5 from "@/public/image/servicePage (5).jpg";
import Image, { StaticImageData } from "next/image";

type CardDummy = {
  src: StaticImageData;
  title: string;
  category: string;
  bio: string;
};

const DummyContent = ({ src, category, title, bio }: CardDummy) => {
  return (
    <>
      <div className="bg-[#F5F5F7] p-8 md:p-14 space-y-10 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">{title}</span> {category}
        </p>
        <p className="text-neutral-500 text-sm md:text-lg max-w-3xl mx-auto">
          {bio}
        </p>
        <Image
          src={src}
          alt={title}
          height="500"
          width="500"
          className="md:w-1/2 h-96  rounded-3xl w-full mx-auto object-cover"
        />
      </div>
    </>
  );
};

export const dataService = [
  {
    title: "Mariages de Rêve",
    src: Img1,
    category:
      "Transformez votre mariage en un moment magique avec nos menus personnalisés et une présentation exceptionnelle.",
    content: (
      <DummyContent
        title="Mariages de Rêve"
        category="Transformez votre mariage en un moment magique avec nos menus personnalisés et une présentation exceptionnelle."
        src={Img1}
        bio="Des plats conçus pour émerveiller vos invités lors du jour le plus important de votre vie."
      />
    ),
  },
  {
    title: "Buffets d'Entreprise",
    src: Img2,
    category:
      "Impressionnez vos collaborateurs avec des buffets variés et adaptés à vos événements professionnels.",
    content: (
      <DummyContent
        title="Buffets d'Entreprise"
        category="Impressionnez vos collaborateurs avec des buffets variés et adaptés à vos événements professionnels."
        src={Img2}
        bio="Des options délicieuses pour des réunions, séminaires ou cocktails professionnels."
      />
    ),
  },
  {
    title: "Créations sur Mesure",
    src: Img3,
    category:
      "Savourez des repas personnalisés qui reflètent vos goûts et surpassent vos attentes.",
    content: (
      <DummyContent
        title="Créations sur Mesure"
        category="Savourez des repas personnalisés qui reflètent vos goûts et surpassent vos attentes."
        src={Img3}
        bio="Une expérience culinaire unique, créée spécialement pour vous."
      />
    ),
  },
  {
    title: "Fêtes Familiales",
    src: Img4,
    category:
      "Ajoutez une touche spéciale à vos anniversaires, baptêmes et réunions familiales avec nos plats savoureux.",
    content: (
      <DummyContent
        title="Fêtes Familiales"
        category="Ajoutez une touche spéciale à vos anniversaires, baptêmes et réunions familiales avec nos plats savoureux."
        src={Img4}
        bio="Des moments de convivialité sublimés par une cuisine généreuse et adaptée à toutes les générations."
      />
    ),
  },
  {
    title: "Plats Végétariens et Véganes",
    src: Img5,
    category:
      "Dégustez des plats créatifs et gourmands, préparés exclusivement à partir d'ingrédients frais et végétaux.",
    content: (
      <DummyContent
        title="Plats Végétariens et Véganes"
        category="Dégustez des plats créatifs et gourmands, préparés exclusivement à partir d'ingrédients frais et végétaux."
        src={Img5}
        bio="Des saveurs authentiques pour ravir vos papilles, tout en respectant vos choix alimentaires."
      />
    ),
  },
];
