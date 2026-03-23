/**
 * Meta Conversions API (CAPI) Utility
 * 
 * This utility sends events to our local backend proxy which then forwards 
 * them to Meta Graph API to protect the access token.
 */

interface UserData {
  em?: string; // Email (should arrive hashed or plain to be hashed on server, but CAPI expects SHA256)
  ph?: string; // Phone
  fn?: string; // First Name
  ln?: string; // Last Name
  ct?: string; // City
  st?: string; // State
  zp?: string; // Zip
  country?: string;
  external_id?: string;
}

export const trackMetaEvent = async (
  eventName: string,
  userData: Partial<UserData> = {},
  customData: Record<string, any> = {}
) => {
  try {
    const response = await fetch('http://localhost:3001/api/fb-event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_name: eventName,
        event_source_url: window.location.href,
        user_data: userData,
        custom_data: customData
      })
    });

    if (!response.ok) {
      console.warn('Meta CAPI event failed:', await response.text());
    }
  } catch (error) {
    console.error('Error sending Meta CAPI event:', error);
  }
};
