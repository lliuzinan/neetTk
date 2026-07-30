import Link from "next/link";

export interface BreadcrumbItem {
  href: string;
  label: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item.href}>
          {index > 0 && <span aria-hidden="true">/</span>}
          <Link href={item.href}>{item.label}</Link>
        </span>
      ))}
    </nav>
  );
}
