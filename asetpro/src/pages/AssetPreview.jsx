function AssetPreview({ asset }) {
  if (!asset) {
    return (
      <div className="w-full xl:w-1/3 bg-surface-container-lowest rounded-xl shadow-sm p-space-lg sticky top-20">
        <div className="flex items-center justify-between pb-space-sm mb-space-md">
          <div className="flex items-center gap-space-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Pratinjau Aset Terpilih</h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-space-lg text-center text-on-surface-variant">
          <span className="material-symbols-outlined text-[48px] mb-space-sm opacity-60">inventory_2</span>
          <span className="font-body-sm text-body-sm">Pilih salah satu aset di tabel untuk melihat pratinjau detail.</span>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full xl:w-1/3 bg-surface-container-lowest rounded-xl shadow-sm p-space-lg sticky top-20">
      <div className="flex items-center justify-between pb-space-sm mb-space-md">
        <div className="flex items-center gap-space-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
          <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Pratinjau Aset Terpilih</h2>
        </div>
      </div>
      <div className="flex flex-col items-center p-space-md bg-surface-container-low rounded-xl mb-space-md text-center">
        <div className="p-3 bg-white rounded-lg shadow-sm mb-space-sm">
          <svg className="w-28 h-28 text-on-surface" fill="currentColor" viewBox="0 0 100 100">
            <path d="M0,0 h30 v30 h-30 z M5,5 v20 h20 v-20 z M10,10 h10 v10 h-10 z"></path>
            <path d="M70,0 h30 v30 h-30 z M75,5 v20 h20 v-20 z M80,10 h10 v10 h-10 z"></path>
            <path d="M0,70 h30 v30 h-30 z M5,75 v20 h20 v-20 z M10,80 h10 v10 h-10 z"></path>
            <rect height="10" width="10" x="35" y="10"></rect>
            <rect height="5" width="15" x="50" y="10"></rect>
            <rect height="8" width="20" x="40" y="25"></rect>
            <rect height="10" width="15" x="10" y="35"></rect>
            <rect height="20" width="10" x="35" y="40"></rect>
            <rect height="10" width="20" x="50" y="35"></rect>
            <rect height="15" width="15" x="75" y="35"></rect>
            <rect height="10" width="15" x="45" y="65"></rect>
            <rect height="25" width="10" x="65" y="60"></rect>
            <rect height="15" width="25" x="35" y="80"></rect>
            <rect height="15" width="15" x="80" y="75"></rect>
          </svg>
        </div>
        <div className="font-data-mono text-headline-sm font-bold text-on-surface">{asset.code}</div>
        <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Format Standar Label ISO/IEC 18004</span>
        <div className="flex items-center gap-space-xs mt-space-sm w-full">
          <button className="flex-1 h-9 px-space-sm bg-secondary text-on-secondary rounded-lg font-label-sm text-label-sm hover:bg-secondary-container transition-all flex items-center justify-center gap-1 shadow-xs" type="button">
            <span className="material-symbols-outlined text-[16px]">download</span>
            <span>Unduh QR SVG</span>
          </button>
          <button className="flex-1 h-9 px-space-sm bg-surface-container-lowest text-on-surface rounded-lg font-label-sm text-label-sm hover:bg-surface-container transition-all flex items-center justify-center gap-1 shadow-xs" type="button">
            <span className="material-symbols-outlined text-[16px]">print</span>
            <span>Print Label 50x30mm</span>
          </button>
        </div>
      </div>
      <div className="space-y-space-md">
        <div>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Spesifikasi & Unit</span>
          <div className="mt-2 p-space-sm rounded-lg bg-surface-container-low flex items-center gap-space-sm">
            {asset.image ? (
              <img className="w-14 h-14 rounded-lg object-cover bg-surface-container shrink-0" data-alt={asset.name} src={asset.image} />
            ) : (
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center shrink-0 ${asset.iconBg || 'bg-surface-container-high'}`}>
                <span className="material-symbols-outlined text-[28px] text-on-surface-variant">{asset.icon || 'devices'}</span>
              </div>
            )}
            <div className="flex flex-col min-w-0">
              <span className="font-label-md text-label-md text-on-surface font-bold truncate">{asset.name}</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">{asset.brand}</span>
              <span className="font-data-mono text-label-sm text-on-surface-variant mt-0.5">{asset.category}</span>
            </div>
          </div>
        </div>
        <div>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Informasi Inventaris</span>
          <div className="mt-2 space-y-space-xs">
            <div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">Kode Aset</span>
                <span className="font-data-mono text-body-sm text-on-surface font-semibold">{asset.code}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">Nomor Seri</span>
                <span className="font-data-mono text-body-sm text-on-surface font-semibold">{asset.serial}</span>
              </div>
            </div>
            <div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">Lokasi</span>
                <span className="font-body-sm text-body-sm text-on-surface">{asset.location} - {asset.subLocation}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">Nilai Perolehan</span>
                <span className="font-data-mono text-body-sm text-on-surface font-semibold">{asset.value}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">Tanggal Perolehan</span>
                <span className="font-body-sm text-body-sm text-on-surface">{asset.date}</span>
              </div>
            </div>
            <div className="p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Status Operasional</span>
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${asset.status.bg} ${asset.status.textColor} font-label-sm text-label-sm font-semibold`}>
                <span className={`w-1.5 h-1.5 rounded-full ${asset.status.dotColor}`}></span>
                {asset.status.label}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssetPreview