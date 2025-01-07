import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectCard } from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

interface ProjectsCarouselProps {
  projects: Project[];
}

export const ProjectsCarousel = ({ projects }: ProjectsCarouselProps) => {
  return (
    <div className="mx-auto max-w-5xl px-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <ProjectCard project={project} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-neon-pink text-neon-pink neon-border" />
        <CarouselNext className="border-neon-pink text-neon-pink neon-border" />
      </Carousel>
    </div>
  );
};