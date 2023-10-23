"use client";

import { useStoreModal } from "@/hooks/use-store-modal";

import Modal from "@/components/ui/Modal";

export default function StoreModal() {
  const storeModal = useStoreModal();

  return (
    <Modal
      title="Create Store"
      description="Add a new store"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Form to add details
    </Modal>
  );
}
