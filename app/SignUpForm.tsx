import SignInGoogleBtn from "@/components/SignInGoogleBtn";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";



export default function SignUpForm() {
    return (
       <Card className="shadow-sm" >
        <CardHeader className="text-center">
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
                Sign in to your account
            </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center ">
            <SignInGoogleBtn/>
            <CardDescription className="pt-4">
                Don't have an account? Sign In anyway !
            </CardDescription>
        </CardContent>
       </Card>
    );
}