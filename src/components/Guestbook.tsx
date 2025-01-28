"use client";

import { api } from "@/trpc/react";
import dayjs from "dayjs";

export const Guestbook = () => {
  const { data: comments, isLoading } = api.guest.getAllComments.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      {!comments?.length ? (
        <p className="text-sm text-neutral-400">No comments yet </p>
      ) : (
        comments.map((comment) => (
          <div key={comment.id}>
            <p className="font-semibold tracking-tight text-neutral-100">
              {comment.name}
            </p>
            <p className="text-sm text-neutral-400">{comment.comment}</p>
            <p className="text-xs text-neutral-400">
              {dayjs(comment.createdAt).format("MMMM D, YYYY")}
            </p>
          </div>
        ))
      )}
    </div>
  );
};
