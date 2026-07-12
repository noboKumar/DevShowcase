import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  rating,
}: TestimonialCardProps) {
  return (
    <Card className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] text-white shadow-none transition duration-300 hover:-translate-y-1 hover:border-violet-300/40 hover:bg-white/[0.09]">
      <div className="absolute top-4 right-4 text-slate-600/40">
        <Quote size={54} />
      </div>
      <CardContent className="relative z-10 flex min-h-72 flex-col gap-5 p-6">
        <div className="flex w-fit items-center gap-1 rounded-md border border-amber-300/20 bg-amber-300/10 px-2.5 py-1 text-sm font-semibold text-amber-500">
          <Star className="size-4 fill-amber-300 text-amber-300" />
          {rating}
        </div>
        <p className="relative text-lg leading-8 text-slate-600">
          &quot;{quote}&quot;
        </p>
        <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-5">
          <div className="flex size-10 items-center justify-center rounded-md bg-indigo-400/15 text-sm font-bold text-indigo-600">
            {author
              .split(" ")
              .map((name) => name[0])
              .join("")
              .slice(0, 2)}
          </div>
          <div>
            <p className="font-bold text-gray-600">{author}</p>
            <p className="text-sm text-indigo-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
