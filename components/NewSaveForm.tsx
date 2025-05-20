"use client";
import { useForm } from "react-hook-form";
import { Form, FormField } from "./ui/form";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { createSave } from "@/features/createSave";
import { useRouter } from "next/navigation";


export default function NewSaveForm({mail, close}: {mail: string, close: () => void}) {
    const router = useRouter();
   
  const form = useForm<{ name: string }>();

  const onSubmit = async (data: { name: string }) => {
    console.log("form");
    
    await createSave(mail,data.name);
    close()
    router.replace(`/${data.name}/start-screen`);
    

  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <div className="flex flex-col gap-4">
              <Label>What's your name ?</Label>
              <Input placeholder="Red" {...field} value={field.value ?? ""} />
            </div>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
