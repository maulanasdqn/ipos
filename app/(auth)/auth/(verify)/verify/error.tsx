"use client";
import { Typography } from "@/components/ui/typography";
import { FC, ReactElement } from "react";

const ErrorPage: FC<{
  error: Error & { digest?: string };
  reset: () => void;
}> = ({ error, reset }): ReactElement => {
  return (
    <div className="w-full">
      <Typography size="caption" color="text-red-500">
        Ada error bang {error.message}
      </Typography>
    </div>
  );
};

export default ErrorPage;
