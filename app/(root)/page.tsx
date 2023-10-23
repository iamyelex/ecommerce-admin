"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

export default function Home() {
  const isOpen = useStoreModal((store) => store.isOpen);
  const onOpen = useStoreModal((store) => store.onOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return <section className="p-4">Root Page</section>;
}
