"use client";
import { FC, Fragment, ReactElement, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { IoMdDesktop, IoMdLogOut } from "react-icons/io";
import { AiFillCaretDown } from "react-icons/ai";
import { FaUserClock } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import Link from "next/link";
import { useQueryState } from "next-usequerystate";
import { TUser } from "@/entities";
import { FaUsersCog, FaUserEdit } from "react-icons/fa";
import { Typography } from "./typography";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { hasCommonElements } from "@/lib/utils";
import { AuthLogout } from "@/app/(auth)/auth/(login)/_actions";

export const Sidebar: FC<{ user: TUser }> = ({ user }): ReactElement => {
  const [isSidebarOpen, setIsSidebarOpen] = useQueryState("isSidebarOpen");
  const [open, setOpen] = useState("");
  const userName = useMemo(() => user?.fullname, [user]);
  const roleName = useMemo(() => user?.role?.name, [user]);
  const userImage = useMemo(() => user?.image, [user]);
  const pathname = usePathname();

  const selectedMenu = (url: string) =>
    clsx(
      "flex cursor-pointer items-center font-normal p-1 text-primary-foreground bg-primary rounded-lg group hover:text-primary hover:shadow-md hover:bg-gray-200",
      {
        "bg-white shadow-md font-[600]": pathname === url,
      },
    );

  const sidebarClassName = clsx("z-40 w-64 h-screen transition-transform", {
    "translate-x-0":
      isSidebarOpen === "open" || isSidebarOpen === "null" || !isSidebarOpen,
    "-translate-x-full": isSidebarOpen === "close",
  });

  const iconClassName = (url: string) =>
    clsx(
      "flex-shrink-0  w-auto h-auto transition duration-75 group-hover:text-primary-foreground group-hover:bg-primary group-hover:p-2 group-hover:rounded-lg hover:text-white",
      {
        "text-primary bg-white shadow-sm p-2 rounded-lg": pathname !== url,

        "text-white bg-green-500 p-2 rounded-lg": pathname === url,
      },
    );

  const sidebarData = [
    {
      name: "Kelola Dosen",
      icon: <FaUserEdit className={iconClassName("/dashboard/guest")} />,
      path: "guest",
      permissions: ["Read Dosen"],
      children: [
        {
          name: "Data Dosen",
          icon: <FaUserClock className={iconClassName("/dashboard/guest")} />,
          path: "/dashboard/dosen",
          url: `/dashboard/dosen`,
          permissions: ["Read Dosen"],
        },
        {
          name: "Hasil Evaluasi",
          icon: (
            <PiUsersThreeFill className={iconClassName("/dashboard/user")} />
          ),
          path: "/dashboard/result",
          url: `/dashboard/result`,
          permissions: ["Read Dosen"],
        },
      ],
    },

    {
      name: "Kelola Pertanyaan",
      icon: <FaUsersCog className={iconClassName("/dashboard/user")} />,
      path: "role",
      permissions: ["Read Dosen"],
      children: [
        {
          name: "Data Pertanyaan",
          icon: (
            <PiUsersThreeFill className={iconClassName("/dashboard/user")} />
          ),
          path: "/dashboard/question",
          url: `/dashboard/question`,
          permissions: ["Read Dosen"],
        },
      ],
    },
  ];

  return (
    <aside
      id="default-sidebar"
      className={sidebarClassName}
      aria-label="Sidebar"
    >
      <div className="h-screen px-3 pt-4 pb-28 overflow-y-hidden bg-primary shadow-md justify-between">
        <div className="flex flex-col h-full">
          <div className="flex flex-col gap-y-4">
            <div className="flex gap-x-3 items-start justify-start">
              <span className="text-primary-foreground text-left font-bold w-full block text-2xl">
                Example Sidebar
              </span>
            </div>

            <div className="p-2 rounded-lg flex gap-x-2 bg-primary-foreground items-center justify-start gap-y-4 cursor-pointer">
              <Avatar>
                <AvatarImage src={userImage} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <Typography variant="bold" size="body-2" color="text-primary">
                  {userName || "Dummy User"}
                </Typography>
                <Typography variant="bold" size="caption" color="text-primary">
                  {roleName || "Dummy Role"}
                </Typography>
              </div>
            </div>

            <hr className="text-grey-300 mb-4" />
          </div>
          <ul className="space-y-2 font-medium">
            {hasCommonElements(["Dashboard"], user?.role?.permissions) && (
              <li>
                <Link
                  href={`/dashboard?title=Dashboard&isSidebarOpen=${isSidebarOpen}`}
                  className={selectedMenu("/dashboard")}
                >
                  <IoMdDesktop className={iconClassName("/dashboard")} />
                  <Typography color="ms-3">Beranda</Typography>
                </Link>
              </li>
            )}
            {sidebarData.map((item, index) => (
              <Fragment key={index}>
                {hasCommonElements(
                  item.permissions,
                  user?.role?.permissions,
                ) && (
                  <li key={index}>
                    <div
                      onClick={() =>
                        open === "" || open !== item.path
                          ? setOpen(item.path)
                          : setOpen("")
                      }
                      className={selectedMenu("") + " justify-between"}
                    >
                      <div className="flex gap-x-3 items-center group">
                        {item.icon}
                        {item.name}
                      </div>
                      <AiFillCaretDown
                        className={clsx(
                          "flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-primary",
                          {
                            "rotate-180": open === item.path,
                          },
                        )}
                      />
                    </div>
                    <div className="my-3" />
                    {open === item.path && (
                      <div className="flex flex-col gap-y-2 p-2 bg-primary ml-2 rounded-lg">
                        {item.children?.map((child, index) => (
                          <Fragment key={index}>
                            {hasCommonElements(
                              child.permissions,
                              user?.role?.permissions,
                            ) && (
                              <Link
                                key={index}
                                href={child.url}
                                className={selectedMenu(child.path)}
                              >
                                {child.icon}
                                <span className="flex-1 ms-3">
                                  {child.name}
                                </span>
                              </Link>
                            )}
                          </Fragment>
                        ))}
                      </div>
                    )}
                  </li>
                )}
              </Fragment>
            ))}
          </ul>
        </div>
        <li className="cursor-pointer">
          <div
            onClick={async () => await AuthLogout()}
            className={selectedMenu("")}
          >
            <IoMdLogOut className={iconClassName("")} />
            <Typography color="ms-3">Logout</Typography>
          </div>
        </li>
      </div>
    </aside>
  );
};
