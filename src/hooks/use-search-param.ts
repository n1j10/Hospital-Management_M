"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

/** Read a URL search param and get a debounced setter that updates the URL. */
export function useSearchParam(key: string, delay = 300) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const setValue = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set(key, term);
    } else {
      params.delete(key);
    }
    replace(`?${params.toString()}`);
  }, delay);

  return [searchParams.get(key)?.toString(), setValue] as const;
}
