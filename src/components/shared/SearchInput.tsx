"use client";

import { Search } from "lucide-react";
import { useSearchParam } from "@/hooks/use-search-param";

function SearchInput({ placeholder = "Search..." }: { placeholder?: string }) {
  const [search, setSearch] = useSearchParam("search");

  return (
    <div className="group relative w-full max-w-sm">
      <div className="pointer-events-none absolute -inset-px rounded-xl bg-brand opacity-0 blur transition-opacity duration-300 group-focus-within:opacity-30" />
      <div className="relative flex items-center">
        <Search className="pointer-events-none absolute left-3.5 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-teal-600" />
        <input
          placeholder={placeholder}
          defaultValue={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-10 w-full rounded-xl border border-border bg-card pl-10 pr-4 text-sm shadow-xs outline-none transition-all placeholder:text-muted-foreground/80 focus:border-teal-500/50"
        />
      </div>
    </div>
  );
}

export default SearchInput;
