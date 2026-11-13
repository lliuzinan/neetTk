import Link from "next/link";

// Support authored internal study links without interpreting HTML or arbitrary URLs.
export function InlineStudyText({ text }: { text: string }) {
  const pattern = /\[([^\]]+)\]\((\/neet-ug\/biology\/[a-z0-9-]+(?:#[a-z0-9-]+)?)\)/g;
  const parts: React.ReactNode[] = [];
  let end = 0;
  for (const match of text.matchAll(pattern)) {
    parts.push(text.slice(end, match.index));
    parts.push(<Link key={match.index} href={match[2]}>{match[1]}</Link>);
    end = match.index! + match[0].length;
  }
  parts.push(text.slice(end));
  return <>{parts}</>;
}
