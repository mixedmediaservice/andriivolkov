// Google Analytics tracking utilities

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

export const GA_MEASUREMENT_ID = 'G-11EQV851M7';

// Track page views
export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: title,
      page_location: url,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific tracking functions for the art portfolio
export const trackArtworkView = (artworkName: string, artworkType: 'painting' | 'tattoo') => {
  trackEvent('view_artwork', 'Gallery', `${artworkType}_${artworkName}`);
};

export const trackGalleryInteraction = (action: 'open_lightbox' | 'close_lightbox' | 'next_image' | 'prev_image', artworkName: string) => {
  trackEvent(action, 'Gallery_Interaction', artworkName);
};

export const trackContactFormSubmit = (inquiryType?: string) => {
  trackEvent('form_submit', 'Contact', inquiryType || 'general');
};

export const trackExternalLink = (destination: string) => {
  trackEvent('click', 'External_Link', destination);
};

export const trackSocialMedia = (platform: string) => {
  trackEvent('click', 'Social_Media', platform);
};