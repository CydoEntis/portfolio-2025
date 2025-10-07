import { Card } from "./ui/card";

interface TimelineOldItem {
  date: string;
  title: string;
  content?: string;
}

interface TimelineOldProps {
  items: TimelineOldItem[];
}

export function TimelineOld({ items }: TimelineOldProps) {
  return (
    <div className="w-full px-4 py-8">
      <ol className="relative space-y-8 ml-3 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-muted-foreground/30">
        {items.map((item, index) => (
          <li key={index} className="relative -ms-2 flex items-start gap-4">
            <div className="relative w-4 h-4 shrink-0 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="absolute w-1.5 h-1.5 rounded-full bg-primary"></span>
            </div>
            <Card className="px-4 py-3 w-full border-none">
              <time className="text-xs font-medium text-muted-foreground block mb-1">{item.date}</time>
              <h3 className="text-foreground text-lg font-bold mb-1">{item.title}</h3>
              {item.content && <p className="text-sm text-muted-foreground">{item.content}</p>}
            </Card>
          </li>
        ))}
      </ol>
    </div>
  );
}
