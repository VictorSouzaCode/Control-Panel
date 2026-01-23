'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react"
import { Sun } from "lucide-react"
import { Moon } from "lucide-react"
import { useAuthStore } from "@/store/useAuthStore"
import { useTheme } from "next-themes"

const SettingsClient = () => {
    const [name, setName] = useState("Victor")
  const [email, setEmail] = useState("victor@email.com")

  const [orderEmails, setOrderEmails] = useState(true)
  const [weeklySummary, setWeeklySummary] = useState(false)

  const user = useAuthStore((s) => s.user)

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted ] = useState(false)

  useEffect(() => {
    setMounted(true)
  },[])

  if(!mounted) return null;

  return (
    <div className="p-4 space-y-6 max-w-3xl">

      {/* Profile */}
      <div className="max-w-3xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input
              id="name"
              defaultValue={`${user?.firstName} ${user?.lastName}`}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              defaultValue={user?.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Role</Label>
            <Input value="Admin" disabled />
          </div>

          <Button className="mt-2">Save changes</Button>
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Order notifications</p>
              <p className="text-sm text-muted-foreground">
                Email me when a new order is created
              </p>
            </div>
            <Switch
              checked={orderEmails}
              onCheckedChange={setOrderEmails}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Weekly summary</p>
              <p className="text-sm text-muted-foreground">
                Receive a weekly activity report
              </p>
            </div>
            <Switch
              checked={weeklySummary}
              onCheckedChange={setWeeklySummary}
            />
          </div>

          <div className="space-y-2">
            <Label>Language</Label>
            <Select defaultValue="en">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="pt">Português</SelectItem>
                <SelectItem value="es">Español</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <p className="font-medium">Theme</p>
            <div className="flex gap-2">
              <Button 
              onClick={() => setTheme("light")}
              className={`p-2 rounded-md border cursor-pointer ${
                theme === "light" ? "border-primary bg-primary/10 text-primary" : "opacity-30 hover:opacity-100"
              }`}
              >
                <Sun className="w-6 h-6 cursor-pointer"/>
              </Button>

              <Button 
              onClick={() => setTheme("dark")}
              className={`p-2 rounded-md border cursor-pointer ${
                theme === "dark" ? "border-primary bg-primary/10 text-primary" : "opacity-30 hover:opacity-100"
              }`}
              >
                <Moon className="w-5 h-5 cursor-pointer"/>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
  )
}

export default SettingsClient