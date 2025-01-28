"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { api } from "@/trpc/react";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  comment: z.string().min(2, {
    message: "Comment must be at least 2 characters.",
  }),
});

export const CommentForm = () => {
  const { isLoaded, isSignedIn } = useUser();

  const apiUtils = api.useUtils();

  const addCommentMutation = api.guest.createComment.useMutation({
    onSuccess: async () => {
      await apiUtils.guest.getAllComments.invalidate();
      return form.reset();
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    addCommentMutation.mutate(values);
  }

  if (!isLoaded) return null;

  if (!isSignedIn)
    return (
      <SignInButton forceRedirectUrl={"/guestbook"}>
        <Button>Sign in to leave a comment</Button>
      </SignInButton>
    );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comment</FormLabel>
              <FormControl>
                <Input
                  disabled={addCommentMutation.isPending}
                  placeholder="Comment"
                  {...field}
                />
              </FormControl>
              <FormDescription>Please leave a comment.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-4">
          <Button type="submit" disabled={addCommentMutation.isPending}>
            Submit
          </Button>
          <SignOutButton redirectUrl="/guestbook">
            <Button variant="outline" type="button">
              Sign out
            </Button>
          </SignOutButton>
        </div>
      </form>
    </Form>
  );
};
