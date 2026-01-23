import { Skeleton } from "../ui/skeleton";

export const TableSkeleton = ({ rows = 5, cols = 5 }: { rows?: number, cols?: number }) => {
    return (
        <div className="rounded-md border">
            <div className="divide-y">
                {Array.from({ length: rows }).map((_, i) => (
                    <div key={i} className="grid grid-cols-5 gap-4 p-4">
                        {Array.from({ length: cols }).map((_, j) => (
                            <Skeleton key={j} className="h-4 w-full" />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}