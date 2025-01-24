import { ReactNode } from "react";
import { FEATURES } from "../../constants/common";
interface LayoutProps {
  children: ReactNode;
  params: string | undefined;
}
function Layout({ children, params }: LayoutProps) {
  const title = FEATURES.find((feature) => feature.url === "/" + params)?.label;

  return (
    <div className="py-10 px-14">
      <h1 className="font-bold text-2xl mb-4">{title}</h1>
      {children}
    </div>
  );
}

export default Layout;
