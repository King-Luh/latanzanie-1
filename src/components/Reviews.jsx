import Script from 'next/script';

export default function Reviews() {
  return (
    <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px dashed #ccc', maxWidth: '800px', margin: '0 auto' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Read our Authentic Reviews on TripAdvisor</h3>
      
      {/* 1. This is the div where the widget will appear */}
      <div id="JFWebsiteWidget-01a1e195759870008ea9091e2af5d99abdb8"></div>

      {/* 2. This is the Next.js way to load the script safely */}
      <Script 
        src="https://www.jotform.com/website-widgets/embed/01a1e195759870008ea9091e2af5d99abdb8" 
        strategy="lazyOnload" 
      />
    </div>
  );
}