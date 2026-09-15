function UrgentAlerts() {
  const alerts = [
    {
      urgent: true,
      icon: 'airware',
      iconColor: 'text-error',
      title: 'Server Rack B (Gedung 1 Lt. 3)',
      badge: 'H-2 Servis',
      badgeClass: 'bg-error-container text-on-error-container font-semibold',
      desc: 'Jadwal perawatan rutin pendingin presisi (PAC) & kalibrasi baterai UPS 40kVA oleh vendor APC.',
      pic: 'Dimas Eko (IT Ops)',
      actionLabel: 'Konfirmasi Vendor',
      actionColor: 'text-error',
      cardBg: 'bg-error-container/20 hover:bg-error-container/30',
    },
    {
      urgent: false,
      icon: 'lens',
      iconColor: 'text-secondary',
      title: 'Sony FE 24-70mm f/2.8 GM II',
      badge: 'Besok',
      badgeClass: 'bg-secondary-fixed text-on-secondary-fixed-variant font-semibold',
      desc: 'Pinjaman liputan Investor Day Divisi Media & Komunikasi berakhir 15 Mei, pukul 17:00.',
      pic: 'Bayu Wicaksono',
      actionLabel: 'Ingatkan WA',
      actionColor: 'text-secondary',
      cardBg: 'bg-surface-container-low',
    },
  ]

  return (
    <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-error text-[22px]">notification_important</span>
          <h2 className="font-headline-sm text-headline-sm text-on-surface">Peringatan Kritis</h2>
        </div>
        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-semibold">2 Mendesak</span>
      </div>
      <div className="flex flex-col gap-space-sm">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl flex flex-col gap-2 transition-all ${alert.cardBg}`}
          >
            <div className="flex items-start justify-between gap-2">
              <span className={`font-label-md text-label-md font-bold flex items-center gap-1.5 ${alert.iconColor}`}>
                <span className="material-symbols-outlined text-[16px]">{alert.icon}</span>
                {alert.title}
              </span>
              <span className={`font-data-mono text-label-sm px-2 py-0.5 rounded ${alert.badgeClass}`}>{alert.badge}</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface">{alert.desc}</p>
            <div className="mt-1 flex items-center justify-between pt-2 border-t border-error/10">
              <span className="font-body-sm text-on-surface-variant text-[11px]">PIC: {alert.pic}</span>
              <a className={`font-label-sm text-label-sm font-semibold hover:underline ${alert.actionColor}`} href="#">{alert.actionLabel}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UrgentAlerts