import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  redirect,
  Scripts,
  ScrollRestoration,
} from "react-router";

import stylesheet from "./app.css?url";
import Navbar from "@/components/Navbar";
import { UserProvider } from "@/context/UserProvider";
import { pb } from "@/lib/pbconfig";
import { SITES_URLS } from "@/lib/enums";
import { parse } from "cookie";

export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export async function loader({ request }) {
  pb.authStore.loadFromCookie(request.headers.get("Cookie") || "");
  
  if (!pb.authStore.isValid) {
    return redirect(SITES_URLS.login);
  }
  return pb.authStore.record;
}

export function action() {
  pb.authStore.clear();
  return redirect(SITES_URLS.login, {
    headers: {
      "Set-Cookie": "pb_auth=; HttpOnly; Path='/'; Max-Age=0; SameSite=Lax;",
    },
  });
}

export default function App({ loaderData }) {
  return (
    <UserProvider initialState={loaderData}>
      <div className="flex flex-col justify-between min-h-screen">
        <header>
          <Navbar />
        </header>
        <Outlet />
        <footer>footer</footer>
      </div>
    </UserProvider>
  );
}

export function ErrorBoundary({ error }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
