import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { describe, expect, it, beforeEach } from "vitest";
import Portfolio from "@/components/Portfolio";
import ToolMarquee from "@/components/ToolMarquee";
import MotionToggle, { applyReducedMotion } from "@/components/MotionToggle";

const mockMatchMedia = (matches: boolean) => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  });
};

describe("accessibility checklist: Portfolio accordion", () => {
  it("keeps aria-expanded and aria-controls aligned with visible panels", () => {
    render(<Portfolio />);

    const triggers = screen.getAllByRole("button", { name: /expand project/i });
    expect(triggers).toHaveLength(4);

    triggers.forEach((trigger, index) => {
      expect(trigger).toHaveAttribute("aria-expanded", "false");
      expect(trigger).toHaveAttribute("aria-controls", `project-panel-${index}`);
      expect(document.getElementById(`project-panel-${index}`)).not.toBeInTheDocument();
    });

    fireEvent.click(triggers[0]);
    expect(triggers[0]).toHaveAttribute("aria-expanded", "true");
    expect(document.getElementById("project-panel-0")).toHaveAttribute("role", "region");
  });

  it("supports Arrow, Home, End, and Escape keyboard behavior without trapping focus", async () => {
    render(<Portfolio />);

    const firstTrigger = screen.getByRole("button", { name: /expand project 1/i });
    firstTrigger.focus();

    fireEvent.keyDown(firstTrigger, { key: "ArrowDown" });
    expect(screen.getByRole("button", { name: /expand project 2/i })).toHaveFocus();

    fireEvent.keyDown(document.activeElement as Element, { key: "End" });
    expect(screen.getByRole("button", { name: /expand project 4/i })).toHaveFocus();

    fireEvent.keyDown(document.activeElement as Element, { key: "Home" });
    expect(firstTrigger).toHaveFocus();

    fireEvent.click(firstTrigger);
    const openTrigger = screen.getByRole("button", { name: /collapse project 1/i });
    const panel = document.getElementById(openTrigger.getAttribute("aria-controls") ?? "");
    expect(panel).toBeInTheDocument();

    fireEvent.keyDown(panel as HTMLElement, { key: "Escape" });

    await waitFor(() => {
      expect(screen.getByRole("button", { name: /expand project 1/i })).toHaveFocus();
    });
  });

  it("returns focus to the exact trigger when a panel is collapsed from inside", async () => {
    render(<Portfolio />);

    const secondTrigger = screen.getByRole("button", { name: /expand project 2/i });
    fireEvent.click(secondTrigger);

    const closeButton = screen.getByRole("button", { name: /collapse open project/i });
    closeButton.focus();
    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(screen.getByRole("button", { name: /expand project 2/i })).toHaveFocus();
    });
  });
});

describe("accessibility checklist: tool marquee", () => {
  it("has a labelled region and exposes one accessible logo list while hiding the duplicate animation row", () => {
    render(<ToolMarquee />);

    const region = screen.getByRole("region", { name: /tools & software/i });
    const logoList = within(region).getByRole("list", { name: /software logos/i });
    expect(logoList).toBeInTheDocument();

    ["Excel", "PowerPoint", "Word", "Power BI", "SQL", "QuickBooks", "Tally ERP", "Canva"].forEach((tool) => {
      expect(within(logoList).getByRole("img", { name: tool })).toBeInTheDocument();
    });

    expect(region.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
  });

  it("does not add focusable items to mobile tab order", () => {
    render(<ToolMarquee />);

    const region = screen.getByRole("region", { name: /tools & software/i });
    const focusable = region.querySelectorAll(
      'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
    );

    expect(focusable).toHaveLength(0);
  });
});

describe("reduced motion preference", () => {
  beforeEach(() => {
    localStorage.clear();
    applyReducedMotion(false);
    mockMatchMedia(false);
  });

  it("auto-enables reduced motion from system preference until the toggle overrides it", async () => {
    mockMatchMedia(true);
    render(<MotionToggle />);

    await waitFor(() => {
      expect(document.documentElement).toHaveClass("reduce-motion");
      expect(screen.getByRole("button", { name: /enable animations/i })).toHaveAttribute("aria-pressed", "true");
    });

    fireEvent.click(screen.getByRole("button", { name: /enable animations/i }));

    expect(localStorage.getItem("reduced-motion")).toBe("false");
    expect(document.documentElement).not.toHaveClass("reduce-motion");
  });

  it("persists Motion On/Off choice in localStorage across page loads", async () => {
    localStorage.setItem("reduced-motion", "true");
    render(<MotionToggle />);

    await waitFor(() => {
      expect(screen.getByRole("button", { name: /enable animations/i })).toHaveAttribute("aria-pressed", "true");
    });
  });
});