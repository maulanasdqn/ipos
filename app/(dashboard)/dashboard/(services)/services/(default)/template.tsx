import { FC, PropsWithChildren, ReactElement } from "react";

const DashboardTemplate: FC<PropsWithChildren> = ({
  children,
}): ReactElement => {
  return <section className="flex flex-col">{children}</section>;
};

export default DashboardTemplate;
