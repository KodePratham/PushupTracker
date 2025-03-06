import '../styles/globals.css';
import '../styles/clerk-overrides.css';
import Head from 'next/head';
import { ClerkProvider } from '@clerk/nextjs';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  // Enhanced appearance configuration
  const clerkAppearance = {
    variables: {
      colorPrimary: '#4F46E5',
      colorText: '#111827',
      colorBackground: '#FFFFFF',
      fontFamily: 'Inter, -apple-system, sans-serif',
      borderRadius: '8px'
    },
    elements: {
      // Hide all branding elements
      footer: "hidden",
      footerAction: "visible",
      powered: "hidden",
      badge: "hidden",
      
      // Clean styling for important elements
      formButtonPrimary: "bg-indigo-600 hover:bg-indigo-700 text-white",
      card: "shadow-sm border border-gray-100",
      headerTitle: "text-xl text-gray-900 font-bold",
      headerSubtitle: "text-gray-500 text-sm",
      socialButtonsIconButton: "border border-gray-200 hover:bg-gray-50",
      formFieldLabel: "text-gray-700 text-sm font-medium",
      formFieldInput: "border border-gray-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500",
      dividerLine: "bg-gray-200",
      dividerText: "text-gray-500 text-sm",
      identityPreview: "border border-gray-200",
      footerActionLink: "text-indigo-600 font-medium hover:text-indigo-700",
      
      // Remove branding
      rootBox: {
        "& .cl-auth-footer": {
          display: "none"
        },
        "& .cl-powered-by-clerk": {
          display: "none"
        }
      }
    },
    layout: {
      showOptionalFields: false,
      logoPlacement: 'none', // Hide the logo space
      logoImageUrl: null, // No logo
      showExternalLinks: false,
      socialButtonsPlacement: 'bottom',
      socialButtonsVariant: 'blockButton',
      termsPageUrl: null, // Remove terms link
      privacyPageUrl: null // Remove privacy link
    }
  };

  return (
    <ClerkProvider 
      {...pageProps} 
      navigate={(to) => window.location.href = to}
      appearance={clerkAppearance}
      // Add explicit options to hide branding
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
    >
      <Head>
        <title>Pushup Tracker | Professional Fitness Tracking</title>
        <meta name="description" content="Track and set goals for your daily pushups" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  );
}

export default MyApp;
