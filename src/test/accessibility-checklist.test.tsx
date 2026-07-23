import type { ReactNode } from "react";
import { createRoot, type Root } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import Portfolio from "@/components/Portfolio";
import ToolMarquee from "@/components/ToolMarquee";
import MotionToggle, { applyReducedMotion } from "@/components/MotionToggle";

let root: Root | null = null;
let container: HTMLDivElement | null = null;

const render = (node: ReactNode) => {
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
  act(() => {
    root?.render(node);
  });
  return container;
};

const cleanup = () => {
  act(() => {
    root?.unmount();
  });
  container?.remove();
  root = null;
  container = null;
};

const click = (element: Element) => {
  act(() => {
    element.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
  });
};

const keyDown = (element: Element, key: string) => {
  act(() => {
    element.dispatchEvent(new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true }));
  });
};

const nextFrame = async () => {
  await act(async () => {
    await new Promise((resolve) => window.setTimeout(resolve, 5));
  });
};

const triggerButtons = () =>
  Array.from(document.querySelectorAll<HTMLButtonElement>('button[id^="project-trigger-"]'));

const triggerByName = (name: RegExp) => {
  const button = triggerButtons().find((item) => name.test(item.getAttribute("aria-label") ?? ""));
  if (!button) throw new Error(`Could not find trigger ${name}`);
  return button;
};

const buttonByName = (name: RegExp) => {
  const button = Array.from(document.querySelectorAll<HTMLButtonElement>("button")).find((item) =>
    name.test(item.getAttribute("aria-label") ?? item.textContent ?? "")
  );
  if (!button) throw new Error(`Could not find button ${name}`);
  return button;
};

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

afterEach(() => {
  cleanup();
});

describe("accessibility checklist: Portfolio accordion", () => {
  it("keeps aria-expanded and aria-controls aligned with visible panels", () => {
    render(<Portfolio />);

    const triggers = triggerButtons();
    expect(triggers).toHaveLength(4);

    triggers.forEach((trigger, index) => {
      expect(trigger).toHaveAttribute("aria-expanded", "false");
      expect(trigger).toHaveAttribute("aria-controls", `project-panel-${index}`);
      expect(document.getElementById(`project-panel-${index}`)).not.toBeInTheDocument();
    });

    click(triggers[0]);
    expect(triggers[0]).toHaveAttribute("aria-expanded", "true");
    expect(document.getElementById("project-panel-0")).toHaveAttribute("role", "region");
  });

  it("supports Arrow, Home, End, and Escape keyboard behavior without trapping focus", async () => {
    render(<Portfolio />);

    const firstTrigger = triggerByName(/expand project 1/i);
    firstTrigger.focus();

    keyDown(firstTrigger, "ArrowDown");
    expect(triggerByName(/expand project 2/i)).toHaveFocus();

    keyDown(document.activeElement as Element, "End");
    expect(triggerByName(/expand project 4/i)).toHaveFocus();

    keyDown(document.activeElement as Element, "Home");
    expect(firstTrigger).toHaveFocus();

    click(firstTrigger);
    const openTrigger = triggerByName(/collapse project 1/i);
    const panel = document.getElementById(openTrigger.getAttribute("aria-controls") ?? "");
    expect(panel).toBeInTheDocument();

    keyDown(panel as HTMLElement, "Escape");
    await nextFrame();

    expect(triggerByName(/expand project 1/i)).toHaveFocus();
  });

  it("returns focus to the exact trigger when a panel is collapsed from inside", async () => {
    render(<Portfolio />);

    const secondTrigger = triggerByName(/expand project 2/i);
    click(secondTrigger);

    const closeButton = buttonByName(/collapse open project/i);
    closeButton.focus();
    click(closeButton);
    await nextFrame();

    expect(triggerByName(/expand project 2/i)).toHaveFocus();
  });
});

describe("accessibility checklist: tool marquee", () => {
  it("has a labelled region and exposes one accessible logo list while hiding the duplicate animation row", () => {
    render(<ToolMarquee />);

    const region = document.querySelector<HTMLElement>('section[role="region"][aria-labelledby="tools-marquee-title"]');
    expect(region).toBeInTheDocument();
    expect(document.getElementById("tools-marquee-title")?.textContent).toMatch(/tools & software/i);

    const logoList = region?.querySelector<HTMLUListElement>('ul[aria-label="Software logos"]');
    expect(logoList).toBeInTheDocument();

    ["Excel", "PowerPoint", "Word", "Power BI", "SQL", "QuickBooks", "Tally ERP", "Canva"].forEach((tool) => {
      expect(logoList?.querySelector(`img[alt="${tool}"]`)).toBeInTheDocument();
    });

    expect(region?.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
  });

  it("does not add focusable items to mobile tab order", () => {
    render(<ToolMarquee />);

    const region = document.querySelector<HTMLElement>('section[role="region"][aria-labelledby="tools-marquee-title"]');
    const focusable = region?.querySelectorAll(
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
    await nextFrame();

    expect(document.documentElement).toHaveClass("reduce-motion");
    expect(buttonByName(/enable animations/i)).toHaveAttribute("aria-pressed", "true");

    click(buttonByName(/enable animations/i));

    expect(localStorage.getItem("reduced-motion")).toBe("false");
    expect(document.documentElement).not.toHaveClass("reduce-motion");
  });

  it("persists Motion On/Off choice in localStorage across page loads", async () => {
    localStorage.setItem("reduced-motion", "true");
    render(<MotionToggle />);
    await nextFrame();

    expect(buttonByName(/enable animations/i)).toHaveAttribute("aria-pressed", "true");
  });
});