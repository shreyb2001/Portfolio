import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1),
  message: z.string().min(1),
});

const ContactForm = ({ loading, setLoading }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: data.name,
          to_name: "Shrey",
          from_email: data.email,
          to_email: "21uec125@lnmiit.ac.in",
          message: data.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      );

      toast.success("Message sent!");
    } catch (error) {
      console.log("Something went wrong!", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
      form.reset();
    }
  };

  return (
    <section className=" mx-[5%] max-w-[40%] bg-white flex flex-col rounded-xl">
      <div className="p-4">
        <p className="font-bold text-3xl mb-2">Let's Talk</p>
        <p>Your message is the missing piece to complete our digital puzzle.</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full">
          <div className="bg-black text-white border-2 border-white rounded-xl p-4 flex flex-col gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Your name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="m@example.com"
                      {...field}
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Write your message here..."
                      {...field}
                      type="message"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button
              disabled={loading}
              className={`bg-white ${
                loading ? `cursor-not-allowed text-gray-700` : `text-black`
              } k rounded-md text-lg font-semibold p-2 mt-2`}
              type="submit"
            >
              Send message
            </button>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default ContactForm;
