function getPublisherId() {
  const value = process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim() || "ca-pub-7031362773027237";
  return value && /^ca-pub-\d+$/.test(value) ? value : null;
}

export function GoogleAdSense() {
  const publisherId = getPublisherId();

  if (!publisherId) {
    return null;
  }

  return (
    <script
      async
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
    />
  );
}
