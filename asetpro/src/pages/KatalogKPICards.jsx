function KatalogKPICards() {
  const kpis = [
    {
      title: 'Total Nilai Perolehan',
      icon: 'account_balance_wallet',
      value: 'Rp 3,84 Miliar',
      valueClass: 'font-headline-sm text-headline-sm font-bold',
      trend: '+12% kuartal ini',
      trendIcon: 'trending_up',
      trendColor: 'text-on-tertiary-container',
      iconBg: 'bg-surface-container',
      iconColor: 'text-on-surface',
    },
    {
      title: 'Unit Terverifikasi QR',
      value: '98.4%',
      valueClass: 'font-headline-sm text-headline-sm font-bold',
      subtitle: '1,405 dari 1,428 unit',
      icon: 'verified',
      iconBg: 'bg-surface-container',
      iconColor: 'text-secondary',
    },
    {
      title: 'Klaim Garansi Aktif',
      value: '842 Unit',
      valueClass: 'font-headline-sm text-headline-sm font-bold',
      subtitle: '59% total perangkat',
      icon: 'security',
      iconBg: 'bg-surface-container',
      iconColor: 'text-on-surface',
    },
    {
      title: 'Audit Fisik Terjadwal',
      value: '18 Hari Lagi',
      valueClass: 'font-headline-sm text-headline-sm font-bold',
      trend: 'Q2 Stock Opname',
      trendIcon: 'event',
      trendColor: 'text-error',
      icon: 'checklist_rtl',
      iconBg: 'bg-surface-container',
      iconColor: 'text-on-surface',
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md mb-space-lg">
      {kpis.map((kpi, index) => (
        <div key={index} className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-on-surface-variant">{kpi.title}</span>
            <span className={`${kpi.valueClass} text-on-surface mt-1`}>{kpi.value}</span>
            {kpi.trend && (
              <span className={`font-body-sm text-body-sm mt-0.5 flex items-center gap-0.5 ${kpi.trendColor}`}>
                <span className="material-symbols-outlined text-[14px]">{kpi.trendIcon}</span>
                {kpi.trend}
              </span>
            )}
            {kpi.subtitle && (
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{kpi.subtitle}</span>
            )}
          </div>
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${kpi.iconBg} ${kpi.iconColor}`}>
            <span className="material-symbols-outlined text-[22px]">{kpi.icon}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default KatalogKPICards