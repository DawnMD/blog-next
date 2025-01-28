import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { currentUser } from "@clerk/nextjs/server";

export const guestRouter = createTRPCRouter({
  getAllComments: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.guestComment.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),

  createComment: protectedProcedure
    .input(
      z.object({
        comment: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const user = await currentUser();
      return await ctx.db.guestComment.create({
        data: {
          clerkId: ctx.userId,
          name: user!.fullName!,
          comment: input.comment,
        },
      });
    }),
});
