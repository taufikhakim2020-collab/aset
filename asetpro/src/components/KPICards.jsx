function KPICards() {
  const kpis = [
    {
      title: 'Total Aset Terdaftar',
      icon: 'devices_other',
      iconBg: 'bg-secondary-fixed',
      iconColor: 'text-secondary',
      value: '1.428',
      unit: 'Unit',
      trend: '+2.4%',
      trendIcon: 'trending_up',
      trendColor: 'text-on-tertiary-container',
      subtitle: '+12 unit bulan ini',
      circleBg: 'bg-secondary-fixed/40',
    },
    {
      title: 'Total Valuasi Aset',
      icon: 'account_balance_wallet',
      iconBg: 'bg-surface-container-highest',
      iconColor: 'text-on-surface',
      value: 'Rp 8,42 M',
      valueClass: 'font-headline-md text-headline-md font-data-mono font-bold',
      trend: null,
      badge: 'ROI 94.2%',
      badgeClass: 'bg-surface-container-high text-on-surface',
      subtitle: 'Nilai buku Q2 2025',
      circleBg: 'bg-surface-container-high/60',
    },
    {
      title: 'Aset Beredar / Pinjam',
      icon: 'swap_horiz',
      iconBg: 'bg-secondary-fixed',
      iconColor: 'text-secondary',
      value: '184',
      unit: 'Unit',
      trend: null,
      badge: '12.8% Total Armada',
      badgeClass: 'font-data-mono text-label-sm text-secondary font-semibold',
      subtitle: '4 Jatuh Tempo',
      subtitleColor: 'text-error font-medium',
      showRedDot: true,
      circleBg: 'bg-surface-container-high/40',
    },
    {
      title: 'Perlu Servis / Rusak',
      icon: 'engineering',
      iconBg: 'bg-error-container',
      iconColor: 'text-error',
      value: '14',
      unit: 'Unit',
      valueColor: 'text-error',
      trend: null,
      badge1: '8 Rutin berkala',
      badge2: '6 Di Bengkel',
      badge2Class: 'bg-error-container text-on-error-container font-semibold',
      circleBg: 'bg-error-container/40',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
      {kpis.map((kpi, index) => (
        <div
          key={index}
          className="p-5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group"
        >
          <div className={`absolute -right-4 -top-4 w-20 h-20 rounded-full transition-transform group-hover:scale-125 ${kpi.circleBg}`}></div>
          <div>
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-on-surface-variant">{kpi.title}</span>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${kpi.iconBg} ${kpi.iconColor}`}>
                <span className="material-symbols-outlined text-[20px]">{kpi.icon}</span>
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-space-xs">
              <span className={`font-headline-lg text-headline-lg tracking-tight ${kpi.valueColor || 'text-on-surface'} ${kpi.valueClass || ''}`}>{kpi.value}</span>
              {kpi.unit && <span className="font-body-sm text-body-sm text-on-surface-variant">{kpi.unit}</span>}
            </div>
          </div>
          <div className="mt-4 pt-3 flex items-center justify-between border-t border-surface-container-low">
            {kpi.trend && (
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">{kpi.trendIcon}</span>
                <span className={`font-label-sm text-label-sm ${kpi.trendColor}`}>{kpi.trend}</span>
              </div>
            )}
            {kpi.badge && (
              <span className={`font-label-sm text-label-sm px-2 py-0.5 rounded-full ${kpi.badgeClass}`}>{kpi.badge}</span>
            )}
            {kpi.badge1 && (
              <span className="font-body-sm text-body-sm text-on-surface-variant">{kpi.badge1}</span>
            )}
            {kpi.badge2 && (
              <span className={`font-label-sm text-label-sm px-2 py-0.5 rounded-full ${kpi.badge2Class}`}>{kpi.badge2}</span>
            )}
            {kpi.subtitle && (
              <span className={`font-body-sm text-body-sm ${kpi.subtitleColor || 'text-on-surface-variant'}`}>
                {kpi.showRedDot && <span className="h-1.5 w-1.5 rounded-full bg-error inline-block mr-0.5"></span>}
                {kpi.subtitle}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default KPICards