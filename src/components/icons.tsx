import {
  Bug,
  Cloud,
  Code,
  Database,
  LayoutDashboard,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/data/types";

/** Maps the icon names used in portfolio.ts to Lucide icons. */
export const icons: Record<IconKey, LucideIcon> = {
  code: Code,
  cloud: Cloud,
  shield: ShieldCheck,
  wrench: Wrench,
  layout: LayoutDashboard,
  search: Search,
  users: Users,
  sparkles: Sparkles,
  bug: Bug,
  workflow: Workflow,
  database: Database,
};
