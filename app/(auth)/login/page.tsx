'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { login } from "@/lib/api/auth"
import { useAuthStore } from "@/store/useAuthStore"


export default function LoginPage() {
  const router = useRouter();
  const setAuth = useAuthStore((s) => s.login);

  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const user = await login(username, password);

      // Zustand
      setAuth(user);

      // Cookie for middleware
      document.cookie = `auth_token=${user.token}; path=/`;

      router.push("/dashboard");
    } catch {
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto min-w-full min-h-screen flex items-center justify-center">
      <div className="min-h-80 flex flex-col justify-center items-center min-w-72 gap-2 p-2">

        <h1 className="text-2xl font-semibold">Login</h1>

        <Input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}/>
        <Input 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>

        {error && <p className="text-red-500">{error}</p>}

        <Button className="cursor-pointer">
          {loading ? "Logging in..." : "Login"}
        </Button>
      </div>
    </form>
  );
}