import { useEffect, useState } from 'react';
import useVideoContext from '../useVideoContext/useVideoContext';

export default function useIsRecording() {
  const { room } = useVideoContext();
  const [hasNotification, setHasNotification] = useState(false);

  useEffect(() => {
    if (room) {
      setHasNotification(room.isRecording);

      const handleRecordingStarted = () => setHasNotification(true);
      const handleRecordingStopped = () => setHasNotification(false);

      room.on('recordingStarted', handleRecordingStarted);
      room.on('recordingStopped', handleRecordingStopped);

      return () => {
        room.off('recordingStarted', handleRecordingStarted);
        room.off('recordingStopped', handleRecordingStopped);
      };
    }
  }, [room]);

  return hasNotification;
}
