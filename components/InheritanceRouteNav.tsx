import Link from "next/link";
import { learningPath, learningSteps } from "@/lib/inheritanceLearning";

export function InheritanceRouteNav({ slug }: { slug: string }) {
  const index = learningSteps.findIndex(step => step.slug === slug);
  if (index < 0) return null;
  const previous = learningSteps[index - 1];
  const next = learningSteps[index + 1];
  return <nav className="inheritanceRouteNav" aria-label="Continue the inheritance learning route">
    <p className="eyebrow">INHERITANCE ROUTE · STEP {index + 1} OF {learningSteps.length}</p>
    <div className="relatedGuideGrid">
      {previous && <Link className="relatedGuide" href={`/neet-ug/biology/${previous.slug}`}><span>← Previous guide</span><strong>{previous.title}</strong></Link>}
      {next ? <Link className="relatedGuide" href={`/neet-ug/biology/${next.slug}`}><span>Next guide →</span><strong>{next.title}</strong></Link> : <Link className="relatedGuide" href={`${learningPath}#explanation-record`}><span>After the final guide →</span><strong>Return to your explanations</strong></Link>}
    </div>
    <p><Link href={`${learningPath}#route`}>View all five steps</Link> · Choose the step you need; reading a page does not mark it as mastered.</p>
  </nav>;
}
