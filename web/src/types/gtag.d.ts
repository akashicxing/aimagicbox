declare interface Window {
  gtag: (
    type: 'config' | 'event',
    googleTrackingId: string,
    { page_path: string }
  ) => void
} 