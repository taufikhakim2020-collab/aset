function DistributionChart() {
  const statusData = [
    { label: 'Siap Pakai / Aktif', count: '1.114', percent: '78%', color: 'bg-on-tertiary-container', textColor: 'text-on-tertiary-container', desc: 'Tersedia di inventory pool', width: '78%' },
    { label: 'Sedang Dipinjam', count: '184', percent: '13%', color: 'bg-secondary', textColor: 'text-secondary', desc: 'Beredar pada 14 divisi', width: '13%' },
    { label: 'Perawatan Servis', count: '88', percent: '6%', color: 'bg-error', textColor: 'text-error', desc: 'Dalam perbaikan & kalibrasi', width: '6%' },
    { label: 'Afkir / Disposal', count: '42', percent: '3%', color: 'bg-outline-variant', textColor: 'text-outline', desc: 'Siap lelang / write-off', width: '3%' },
  ]

  return (
    <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
        <div>
          <h2 className="font-headline-sm text-headline-sm text-on-surface">Distribusi & Kondisi Operasional Aset</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Analisis ketersediaan armada fisik dari total 1.428 unit terdata</p>
        </div>
        <div className="flex items-center gap-space-xs">
          <span className="font-label-sm text-label-sm text-on-surface-variant">Update:</span>
          <span className="font-data-mono text-label-sm text-on-surface font-semibold">Hari ini, 09:41 WIB</span>
        </div>
      </div>
      <div className="w-full flex flex-col gap-space-xs mt-2">
        <div className="w-full h-4 rounded-full bg-surface-container flex overflow-hidden p-0.5">
          {statusData.map((item, index) => (
            <div
              key={index}
              className={`h-full transition-all hover:opacity-90 ${item.color} ${index === 0 ? 'rounded-l-full' : index === statusData.length - 1 ? 'rounded-r-full' : ''}`}
              style={{ width: item.width }}
              title={`${item.label}: ${item.percent}`}
            ></div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-2">
        {statusData.map((item, index) => (
          <div key={index} className="p-3 rounded-lg bg-surface flex flex-col gap-1">
            <div className="flex items-center gap-1.5">
              <span className={`w-2.5 h-2.5 rounded-full ${item.color}`}></span>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">{item.label}</span>
            </div>
            <div className="flex items-baseline justify-between mt-1">
              <span className="font-headline-sm text-headline-sm text-on-surface">{item.count}</span>
              <span className={`font-data-mono text-label-sm font-bold ${item.textColor}`}>{item.percent}</span>
            </div>
            <span className="font-body-sm text-[11px] text-on-surface-variant">{item.desc}</span>
          </div>
        ))}
      </div>
      <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-space-xs mt-1">
        <div className="flex items-center justify-between">
          <span className="font-label-md text-label-md text-on-surface font-semibold">Tingkat Utilisasi Mingguan (30 Hari Terakhir)</span>
          <span className="font-data-mono text-label-sm text-secondary font-medium">Rata-rata 84.6%</span>
        </div>
        <div className="h-20 w-full mt-2">
          <svg className="w-full h-full text-secondary" fill="none" preserveAspectRatio="none" viewBox="0 0 500 80">
            <defs>
              <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.3"></stop>
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.0"></stop>
              </linearGradient>
            </defs>
            <path d="M0,60 Q35,45 70,52 T140,30 T210,40 T280,22 T350,35 T420,15 T500,24 L500,80 L0,80 Z" fill="url(#chartGradient)"></path>
            <path d="M0,60 Q35,45 70,52 T140,30 T210,40 T280,22 T350,35 T420,15 T500,24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
            <circle className="fill-surface-container-lowest stroke-secondary" cx="280" cy="22" r="3.5" strokeWidth="2"></circle>
            <circle className="fill-surface-container-lowest stroke-secondary" cx="420" cy="15" r="3.5" strokeWidth="2"></circle>
            <circle className="fill-surface-container-lowest stroke-secondary" cx="500" cy="24" r="3.5" strokeWidth="2"></circle>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default DistributionChart