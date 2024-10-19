import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <SignIn afterSignOutUrl={'/'}
        afterSignInUrl={'/recommend'}
          />
    </div>
  );
}