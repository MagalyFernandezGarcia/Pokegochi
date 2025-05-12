"use client";
import { useForm } from "react-hook-form";
import { Form, FormField } from "./ui/form";



export default function NewSaveForm() {
    const form= useForm()
    return (
        <Form {...form} >
            <FormField name="name" control={form.control} render={({ field }) => <input {...field} />} />
        </Form>
    )
}