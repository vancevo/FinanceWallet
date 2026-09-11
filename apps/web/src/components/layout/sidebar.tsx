import { mainNavItems } from '@/lib/nav';
import { cn } from '@/lib/utils';

export function Sidebar() {
    const SidebarItem = ({ mainNavItem }: any) => {
        const Icon = mainNavItem.icon;
        return (
            <p
                key={mainNavItem.href}
                className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-slate-300 transition hover:bg-slate-900 hover:text-white',
                    mainNavItem.active && 'bg-sky-500 text-white hover:bg-sky-500'
                )}
            >
                <Icon className="size-4" />
                {mainNavItem.label}
            </p>
        );
    };
    return (
        <div className="flex h-full flex-col gap-8 p-5">
            <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-lg bg-sky-400 font-bold text-slate-950">F</div>
                <div className="text-left">
                    <div className="text-lg font-bold">FinPilot</div>
                    <div className="text-xs text-slate-400">Personal finance cockpit</div>
                </div>
            </div>

            <nav className="flex flex-col gap-1">
                {mainNavItems.map((item: any) => {
                    return <SidebarItem mainNavItem={item} />;
                })}
            </nav>
        </div>
    );
}
