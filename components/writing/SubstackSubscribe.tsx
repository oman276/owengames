"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PATH_RSS } from "@/lib/constants";

type Status = "idle" | "loading" | "success" | "error";

interface SubstackSubscribeProps {
  publication?: string;
  description?: string;
  className?: string;
}

export default function SubstackSubscribe({
  publication = "owengames",
  description = "Get new posts delivered to your inbox via Substack.",
  className,
}: SubstackSubscribeProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");
    try {
      const currentUrl =
        typeof window !== "undefined" ? window.location.href : "";
      await fetch(`https://${publication}.substack.com/api/v1/free`, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          email,
          first_url: currentUrl,
          current_url: currentUrl,
        }),
      });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-lg border border-border bg-secondary/40 p-5",
        className,
      )}
    >
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-2"
      >
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="flex-1 h-9 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50"
        />
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </Button>
      </form>
      <p className="text-xs text-muted-foreground">
        Prefer RSS?{" "}
        <a href={PATH_RSS} className="underline hover:text-foreground">
          Subscribe via RSS feed
        </a>
        .
      </p>
      {status === "success" && (
        <p className="text-sm text-muted-foreground">
          Thanks! Check your inbox to confirm your subscription.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-destructive">
          Something went wrong. Try again, or subscribe directly on{" "}
          <a
            href={`https://${publication}.substack.com/`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Substack
          </a>
          .
        </p>
      )}
    </div>
  );
}
