import { CommentForm } from "@/components/CommentForm";
import { Guestbook } from "@/components/Guestbook";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guestbook",
  description: "Guestbook | Mainak Das",
};

export default function GuestPage() {
  return (
    <div className="flex flex-col gap-8 md:min-w-[45rem] lg:min-w-[60rem]">
      <h1 className="font-calSans text-brand text-6xl">Guestbook</h1>
      <Guestbook />
      <CommentForm />
    </div>
  );
}
