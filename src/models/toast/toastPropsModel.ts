export interface ToastProps {
    action: "error" | "warning" | "success" | "info" | "attention" | undefined;
    variant: "outline" | "solid" | "accent" | undefined;
    placement: "top" | "top right" | "top left" | "bottom" | "bottom left" | "bottom right" | undefined;
    title: string;
    description: string;
    duration?: number;
}