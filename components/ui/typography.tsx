import { FC, ReactElement } from "react";
import { match } from "ts-pattern";
import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export type TTypography = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  variant?: "bold" | "semi-bold" | "medium" | "reguler";
  color?: string;
  size?:
    | "title-1"
    | "title-2"
    | "title-3"
    | "title-4"
    | "title-5"
    | "subtitle-1"
    | "subtitle-2"
    | "body-1"
    | "body-2"
    | "caption";
};

export const Typography: FC<TTypography> = (props): ReactElement => {
  const size = match(props.size)
    .with("title-1", () => "text-[76px]")
    .with("title-2", () => "text-[61px]")
    .with("title-3", () => "text-[49px]")
    .with("title-4", () => "text-[39px]")
    .with("title-5", () => "text-[31px]")
    .with("subtitle-1", () => "text-[25px]")
    .with("subtitle-2", () => "text-[20px]")
    .with("body-1", () => "text-[16px]")
    .with("body-2", () => "text-[13px]")
    .with("caption", () => "text-[10px]")
    .otherwise(() => "text-[16px]");

  const type = clsx(size, props.color, {
    "font-bold": props.variant === "bold",
    "font-semibold": props.variant === "semi-bold",
    "font-medium": props.variant === "medium",
    "font-regular": props.variant === "reguler",
  });

  return match(props.size)
    .with("title-1", () => <h1 className={type}>{props.children}</h1>)
    .with("title-2", () => <h2 className={type}>{props.children}</h2>)
    .with("title-3", () => <h3 className={type}>{props.children}</h3>)
    .with("title-4", () => <h4 className={type}>{props.children}</h4>)
    .with("title-5", () => <h5 className={type}>{props.children}</h5>)
    .with("subtitle-1", () => <span className={type}>{props.children}</span>)
    .with("subtitle-2", () => <span className={type}>{props.children}</span>)
    .with("body-2", () => <h2 className={type}>{props.children}</h2>)
    .with("body-1", () => <h1 className={type}>{props.children}</h1>)
    .with("caption", () => <p className={type}>{props.children}</p>)
    .with(undefined, () => <p className={type}>{props.children}</p>)
    .exhaustive();
};
