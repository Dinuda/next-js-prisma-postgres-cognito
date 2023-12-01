"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

const RegisterFormSchema = z.object({
  email: z.string().email(),
  phone: z.string().regex(/^\d{3}-\d{3}-\d{4}$/, "Invalid phone number"),
  name: z.string().min(2),
})

type RegisterFormValues = z.infer<typeof RegisterFormSchema>

// This can come from your database or API.
const defaultValues: Partial<RegisterFormValues> = {
    email: "",
    phone: "",
    name: ""
}

export function RegisterForm() {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: RegisterFormValues) {
    console.log(data);
    
    fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          email: data.email,
          phone: data.phone,
            name: data.name
        }),
      }).then(async (res) => {
        if (res.status === 200) {
          setTimeout(() => {
          }, 2000);
        } else {
          const { error } = await res.json();
          console.log(error);
          
        }
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
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
                        placeholder="example@xyz.com"
                        {...field}
                        />
                        </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="123-456-7890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">Sign up</Button>
      </form>
    </Form>
  )
}