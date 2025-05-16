import * as React from "react"
import Link from "next/link"
import { CompanionLogo } from "@/components/icons/companion-logo"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { ThreadList } from "./assistant-ui/thread-list"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="px-4 py-3 text-center">
          <h1 className={cn(
            "text-2xl font-bold text-sidebar-primary",
            "animate-fade-in animate-delay-300 animate-duration-1000"
          )}>
            <span className="animate-slide-in-right animate-delay-500 inline-block">Your</span>
            <span className="animate-slide-in-left animate-delay-700 inline-block ml-2">assistant</span>
          </h1>
        </div>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
                <Link href="#">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <CompanionLogo className="size-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-semibold">Chat</span>
                  </div>
                </Link>
              </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <ThreadList />
      </SidebarContent>
      
      <SidebarRail />
    </Sidebar>
  )
}
