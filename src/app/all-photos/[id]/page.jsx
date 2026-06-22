import { Card, Chip } from "@heroui/react";
import Image from "next/image";

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("http://localhost:3000/data.json");
  const photos = await res.json();

  const photo = photos.find(
    (item) => item.id === Number(id)
  );

 
  return (
    <div className="max-w-7xl mx-auto">
      <Card className=" p-5">
        <div className="relative w-full aspect-square">
               <Image
                 src={photo.imageUrl}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                 alt={photo.title}
                 className=" object-cover rounded-xl"
                 />
                 <Chip size="sm" className="absolute right-2 top-2">{photo.category}</Chip>
             </div>

        <div className="mt-5">
          <Chip color="primary" className="mb-3">
            {photo.category}
          </Chip>

          <h1 className="text-3xl font-bold mb-3">
            {photo.title}
          </h1>

          <p className="text-default-500 mb-5">
            {photo.prompt}
          </p>

          <h3 className="font-semibold mb-2">
            Tags
          </h3>

          <div className="flex flex-wrap gap-2">
            {photo.tags.map((tag) => (
              <Chip key={tag} variant="flat">
                #{tag}
              </Chip>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PhotoDetailsPage;