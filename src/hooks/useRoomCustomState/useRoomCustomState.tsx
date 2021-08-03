import { useEffect, useState } from 'react';

export default function useRoomState() {
  const [extendMinutes, setExtendMinutes] = useState<number>(1110);

  useEffect(() => {
    console.log('[useRoomCustomState]useEffect is invoked.');
  }, []);

  return [extendMinutes, setExtendMinutes] as const;
}
