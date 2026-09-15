function ValuationCategories() {
  const categories = [
    {
      icon: 'computer',
      iconColor: 'text-secondary',
      name: 'Hardware IT & Komputasi',
      value: 'Rp 4,20 M',
      barColor: 'bg-secondary',
      barWidth: '50%',
      units: '612 unit',
      percent: '49.8% dari total valuasi',
    },
    {
      icon: 'camera_enhance',
      iconColor: 'text-on-tertiary-container',
      name: 'Peralatan Multimedia & Broadcast',
      value: 'Rp 1,80 M',
      barColor: 'bg-on-tertiary-container',
      barWidth: '22%',
      units: '184 unit',
      percent: '21.4% dari total valuasi',
    },
    {
      icon: 'directions_car',
      iconColor: 'text-on-surface',
      name: 'Kendaraan Operasional Logistik',
      value: 'Rp 1,50 M',
      barColor: 'bg-on-surface',
      barWidth: '18%',
      units: '28 unit',
      percent: '17.8% dari total valuasi',
    },
    {
      icon: 'chair',
      iconColor: 'text-outline',
      name: 'Furnitur Kantor & Fasilitas',
      value: 'Rp 920 Jt',
      barColor: 'bg-outline text-on-primary',
      barWidth: '11%',
      units: '604 unit',
      percent: '11.0% dari total valuasi',
    },
  ]

  return (
    <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
        <h2 className="font-headline-sm text-headline-sm text-on-surface">Komposisi Valuasi Kategori</h2>
        <span className="material-symbols-outlined text-on-surface-variant text-[20px]">pie_chart</span>
      </div>
      <div className="flex flex-col gap-space-md">
        {categories.map((cat, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`material-symbols-outlined text-[18px] ${cat.iconColor}`}>{cat.icon}</span>
                <span className="font-label-md text-label-md text-on-surface">{cat.name}</span>
              </div>
              <span className="font-data-mono text-label-sm text-on-surface font-semibold">{cat.value}</span>
            </div>
            <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden mt-1">
              <div className={`h-full rounded-full ${cat.barColor}`} style={{ width: cat.barWidth }}></div>
            </div>
            <div className="flex justify-between text-[11px] text-on-surface-variant mt-0.5">
              <span>{cat.units}</span>
              <span>{cat.percent}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ValuationCategories