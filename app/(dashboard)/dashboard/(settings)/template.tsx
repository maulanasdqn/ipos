import { FC, PropsWithChildren, ReactElement } from "react";

const DashboardSettingTemplate: FC<PropsWithChildren> = ({
  children,
}): ReactElement => {
  return <section className="flex flex-col">{children}</section>;
};

export default DashboardSettingTemplate;
