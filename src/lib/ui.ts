type Action = {
  label?: string;
  onclick?: () => void;
};

type ToastOptions = {
  category?: "success" | "info" | "warning" | "error";
  title: string;
  description?: string;
  duration?: number;
  action?: Action;
  cancel?: Action;
};

export function toast({ category, title, description, duration }: ToastOptions) {
  document.dispatchEvent(
    new CustomEvent("basecoat:toast", {
      detail: {
        config: {
          category,
          title,
          description,
          cancel: {
            label: "Dismiss",
          },
          duration,
        },
      },
    }),
  );
}
