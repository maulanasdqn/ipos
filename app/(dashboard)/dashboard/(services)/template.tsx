import { FC, PropsWithChildren, ReactElement } from "react";

const DashboardServiceTemplate: FC<PropsWithChildren> = ({
  children,
}): ReactElement => {
  return <section className="flex flex-col">{children}</section>;
};

export default DashboardServiceTemplate;
