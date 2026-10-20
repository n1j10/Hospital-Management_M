"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useSearchParam } from "@/hooks/use-search-param";

function SearchInput({ placeholder = "Search..." }: { placeholder?: string }) {
  const [search, setSearch] = useSearchParam("search");

  return (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        placeholder={placeholder}
        defaultValue={search}
        onChange={(e) => setSearch(e.target.value)}
        className="pl-9"
      />
    </div>
  );
}

export default SearchInput;
