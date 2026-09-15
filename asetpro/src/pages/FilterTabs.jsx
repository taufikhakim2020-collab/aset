function FilterTabs() {
  const tabs = [
    { label: 'Semua Inventaris', count: '1,428', active: true, dot: null },
    { label: 'Aktif & Tersedia', count: '1,118', active: false, dot: 'bg-on-tertiary-container' },
    { label: 'Sedang Dipinjam', count: '184', active: false, dot: 'bg-secondary' },
    { label: 'Dalam Perawatan', count: '14', active: false, dot: 'bg-error', countBg: 'bg-error-container text-on-error-container' },
    { label: 'Afkir / Dihapus', count: '112', active: false, dot: 'bg-outline' },
  ]

  return (
    <div className="flex flex-wrap items-center gap-space-xs mb-space-md bg-surface-container-low p-1 rounded-xl">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`px-space-md py-2 rounded-lg font-label-md text-label-md transition-all flex items-center gap-space-xs ${
            tab.active
              ? 'bg-surface-container-lowest text-on-surface shadow-sm'
              : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-lowest/60'
          }`}
          type="button"
        >
          {tab.dot && <span className={`w-2 h-2 rounded-full ${tab.dot}`}></span>}
          <span>{tab.label}</span>
          <span className={`px-2 py-0.5 rounded-full font-data-mono text-label-sm ${
            tab.countBg || (tab.active ? 'bg-surface-container-high text-on-surface' : 'bg-surface-container text-on-surface-variant')
          }`}>
            {tab.count}
          </span>
        </button>
      ))}
    </div>
  )
}

export default FilterTabs