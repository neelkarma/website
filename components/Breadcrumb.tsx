import { FC, Fragment } from "react";
import Link from "next/link";

export const Breadcrumb: FC<{ links: { label: string; href: string }[] }> = ({
  links,
}) => {
  return (
    <div className="flex gap-3">
      {links.map(({ label, href }, i) => (
        <Fragment key={i}>
          <Link href={href} passHref>
            <span className="cursor-pointer text-gray-400 hover:text-gray-300 transition-colors">
              {label}
            </span>
          </Link>
          {i !== links.length - 1 && <span className="text-gray-500">/</span>}
        </Fragment>
      ))}
    </div>
  );
};
