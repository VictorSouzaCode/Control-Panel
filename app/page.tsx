import { redirect } from "next/navigation";

// later with middleware the system will be a little bit different

export default function Home() {

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-6xl">Control Panel</h1>
    </div>
  );
}
