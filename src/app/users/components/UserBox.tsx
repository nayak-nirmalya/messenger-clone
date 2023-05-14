"use client";

import axios from "axios";
import React, { useCallback, useState } from "react";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";

import Avatar from "@/app/components/Avatar";

const UserBox = ({ data }: { data: User }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    setIsLoading(true);

    axios
      .post("/api/conversations", { userId: data.id })
      .then((data) => {
        router.push(`/conversations/${data.data.id}`);
      })
      .finally(() => setIsLoading(false));
  }, [data, router]);

  return (
    <div
      onClick={handleClick}
      className="
            w-full
            relative
            flex
            items-center
            space-x-3
            bg-white
            p-3
            hover:bg-neutral-100
            rounded-lg
            transition
            cursor-pointer
        "
    >
      <Avatar user={data} />
    </div>
  );
};

export default UserBox;
