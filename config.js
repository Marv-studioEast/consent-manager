silktideCookieBannerManager.updateCookieBannerConfig({
  cookieTypes: [
    {
      id: 'essential',
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      required: true,
      defaultValue: true,
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with the website.',
      defaultValue: true,
      onAccept: function() {
        console.log('Analytics cookies accepted');
      },
      onReject: function() {
        console.log('Analytics cookies rejected');
      },
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'These cookies are used to deliver personalized ads.',
      defaultValue: false,
      onAccept: function() {
        console.log('Marketing cookies accepted');
      },
      onReject: function() {
        console.log('Marketing cookies rejected');
      },
    },
  ],
  text: {
    banner: {
      description: `<p>We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.</p>`,
      acceptAllButtonText: 'Accept all',
      acceptAllButtonAccessibleLabel: 'Accept all cookies',
      rejectNonEssentialButtonText: 'Reject non-essential',
      rejectNonEssentialButtonAccessibleLabel: 'Reject non-essential',
      preferencesButtonText: 'Preferences',
      preferencesButtonAccessibleLabel: 'Toggle preferences',
    },
    preferences: {
      title: "Customize your cookie preferences",
      description: `<p>We respect your right to privacy. You can choose not to allow some types of cookies. Your cookie preferences will apply across our website.</p>`,
      creditLinkText: 'Get this banner for free',
      creditLinkAccessibleLabel: 'Get this banner for free',
    },
  },
  position: {
    banner: 'bottomRight', // Options: 'bottomRight', 'bottomLeft', 'center', 'bottomCenter'
    cookieIcon: 'bottomLeft', // Options: 'bottomRight', 'bottomLeft'
  },
});