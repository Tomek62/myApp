// hooks/useLastItem.ts
import { useEffect, useState } from "react";

export interface LastItem {
  item_id?: string;
  type_id: string;
  collection_id: string;
  item_name: string;
  image?: string;
  provenance?: string;
  description?: string;
  note?: number;
  aromes: string[];
  accords?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export const useLastItem = (userId?: string | number) => {
  const [lastItem, setLastItem] = useState<LastItem | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;

    const fetchLastItem = async () => {
      try {
        const res = await fetch(
          `http://172.20.10.2:5000/users/${userId}/lastItem`
        );
        const data = await res.json();
        setLastItem(data.item);
      } catch (err) {
        setError("Erreur lors du chargement de la dernière trouvaille.");
        console.error(err);
      }
    };

    fetchLastItem();
  }, [userId]);

  return { lastItem, error };
};
