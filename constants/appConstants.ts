// Define user roles
export type UserRole = "client" | "manager" | "admin";

// Define role-based redirect paths
export const DEFAULT_PATHS: Record<UserRole, string> = {
  client: "/visaistic/application-tracker",
  manager: "/visaistic/application-tracker",
  admin: "/visaistic/manage-users",
};

// Define routes that are accessible to each role
export const ROLE_ROUTES: Record<UserRole, string[]> = {
  client: ["/application-tracker", "/check-list"],
  manager: [
    "/application-tracker",
    "/check-list",
    "/services",
    "/client-onboarding",
  ],
  admin: ["/application-tracker", "/check-list", "/services", "/manage-users"],
};

// Define the navigation items for each role
export const roleBasedNavItems = {
  client: [
    { label: "Application Tracker", path: "/application-tracker" },
    { label: "Check list", path: "/check-list" },
  ],
  manager: [
    { label: "Services", path: "/services" },
    { label: "Client Onboarding", path: "/client-onboarding" },
    { label: "Application Tracker", path: "/application-tracker" },
    { label: "Check list", path: "/check-list" },
  ],
  admin: [
    { label: "Application Tracker", path: "/application-tracker" },
    { label: "Manage Users", path: "/manage-users" },
    { label: "Check list", path: "/check-list" },
    { label: "Services", path: "/services" },
  ],
};

// Define the default landing page for each role
export const defaultRoutes: Record<UserRole, string> = {
  client: "/visaistic/application-tracker",
  manager: "/visaistic/application-tracker",
  admin: "/visaistic/manage-users",
};
