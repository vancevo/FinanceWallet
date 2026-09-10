import { mainNavItems } from '@/lib/nav';
import { cn } from '@/lib/utils';


export function Sidebar() {
    return (
        <div className="flex h-full flex-col gap-8 p-5">
            <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-lg bg-sky-400 font-bold text-slate-950">F</div>
                <div>
                    <div className="text-lg font-bold">FinPilot</div>
                    <div className="text-xs text-slate-400">Personal finance cockpit</div>
                </div>
            </div>

            <nav className="grid gap-1">
                {mainNavItems.map((item: any) => {
                    const Icon = item.icon;

                    return (
                        <button
                            key={item.href}
                            type="button"
                            className={cn(
                                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-slate-300 transition hover:bg-slate-900 hover:text-white',
                                item.active && 'bg-sky-500 text-white hover:bg-sky-500'
                            )}
                        >
                            <Icon className="size-4" />
                            {item.label}
                        </button>
                    );
                })}
            </nav>
        </div>
    );
}
