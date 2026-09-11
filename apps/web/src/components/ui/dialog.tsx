import { Dialog as DialogPrimitive } from '@base-ui/react/dialog';
import { X } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type DialogProps = {
  children: ReactNode;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
};

type DialogSlotProps = {
  children: ReactNode;
  className?: string;
};

export function DialogRoot({ children, onOpenChange, open }: DialogProps) {
  return (
    <DialogPrimitive.Root onOpenChange={onOpenChange} open={open}>
      {children}
    </DialogPrimitive.Root>
  );
}

export function DialogTrigger({ children, className }: DialogSlotProps) {
  return <DialogPrimitive.Trigger className={className}>{children}</DialogPrimitive.Trigger>;
}

export function DialogContent({ children, className }: DialogSlotProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Backdrop className="fixed inset-0 z-40 bg-slate-950/40" />
      <DialogPrimitive.Viewport className="fixed inset-0 z-50 grid min-h-dvh place-items-center p-4">
        <DialogPrimitive.Popup
          className={cn(
            'relative flex max-h-[min(720px,calc(100dvh-2rem))] w-full max-w-3xl flex-col overflow-hidden rounded-lg border bg-white shadow-xl outline-none',
            'data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0',
            className,
          )}
        >
          {children}
        </DialogPrimitive.Popup>
      </DialogPrimitive.Viewport>
    </DialogPrimitive.Portal>
  );
}

export function DialogHeader({ children, className }: DialogSlotProps) {
  return (
    <div className={cn('flex items-start justify-between gap-4 border-b px-5 py-4', className)}>
      <div className="min-w-0">{children}</div>
      <DialogPrimitive.Close className="grid size-8 shrink-0 place-items-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500">
        <X className="size-4" />
      </DialogPrimitive.Close>
    </div>
  );
}

export function DialogTitle({ children, className }: DialogSlotProps) {
  return (
    <DialogPrimitive.Title className={cn('text-base font-semibold text-slate-950', className)}>
      {children}
    </DialogPrimitive.Title>
  );
}

export function DialogDescription({ children, className }: DialogSlotProps) {
  return (
    <DialogPrimitive.Description className={cn('mt-1 text-sm text-slate-500', className)}>
      {children}
    </DialogPrimitive.Description>
  );
}

export function DialogBody({ children, className }: DialogSlotProps) {
  return <div className={cn('min-h-0 flex-1 overflow-auto p-5', className)}>{children}</div>;
}

export function DialogFooter({ children, className }: DialogSlotProps) {
  return <div className={cn('border-t px-5 py-4', className)}>{children}</div>;
}
