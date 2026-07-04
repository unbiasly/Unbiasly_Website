"use client";

import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NewsletterSubscribeResponse } from "@/service/api.interface";
import { handleResponse } from "@/service/fetchClient";

type FormData = { email: string };

const formSchema = z.object({
  email: z.string().email("Invalid email format").min(1),
});

const SubscribeForm = () => {
  const { register, handleSubmit, reset, formState } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  const useSubscribe = useMutation({
    mutationFn: ({ email }: { email: string }) =>
      fetch("/subscribe/api", {
        method: "POST",
        body: JSON.stringify({ email }),
      }).then<NewsletterSubscribeResponse>(handleResponse),
  });

  const onSubmit = handleSubmit((data) => {
    useSubscribe.mutate(
      { email: data.email },
      {
        onSuccess: () => {
          toast.success("Subscribed. See you Sunday.");
          reset();
        },
        onError: () => toast.error("Something went wrong. Try again."),
      }
    );
  });

  return (
    <div className="w-full">
      <form onSubmit={onSubmit} className="w-full">
        <div className="flex items-stretch w-full border border-white/20 rounded-full overflow-hidden focus-within:border-accent transition-colors">
          <input
            type="email"
            placeholder="your@email.com"
            aria-label="Email address"
            {...register("email")}
            className="flex-1 bg-transparent px-5 py-3.5 text-[15px] outline-none text-white placeholder:text-white/35"
          />
          <button
            type="submit"
            disabled={useSubscribe.isPending}
            className="px-6 py-3.5 text-[13px] font-medium bg-white text-black hover:bg-accent hover:text-white transition-colors disabled:opacity-50"
          >
            {useSubscribe.isPending ? "..." : "Subscribe"}
          </button>
        </div>
        {formState.errors.email && (
          <div className="mt-2 text-[12px] text-accent">
            {formState.errors.email.message}
          </div>
        )}
      </form>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#17130E",
            color: "#F5F0E7",
            border: "1px solid #E6481E",
            borderRadius: "9999px",
            fontSize: "13px",
            padding: "10px 20px",
          },
        }}
      />
    </div>
  );
};

export default SubscribeForm;
