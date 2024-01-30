import { FC, PropsWithChildren, ReactElement } from "react";

const DashboardTemplate: FC<PropsWithChildren> = ({
  children,
}): ReactElement => {
  return (
    <section className="flex flex-col max-w-auto w-full">{children}</section>
  );
};

export default DashboardTemplate;
