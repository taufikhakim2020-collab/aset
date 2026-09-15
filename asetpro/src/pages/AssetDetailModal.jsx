function AssetDetailModal({ asset, onClose, onEdit, onDelete }) {
  if (!asset) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-3xl bg-surface-container-lowest rounded-xl shadow-lg p-space-lg">
        <div className="flex items-center justify-between mb-space-md">
          <div className="flex items-center gap-space-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Detail Aset</h2>
          </div>
          <button className="p-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container" onClick={onClose} type="button">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        <div className="flex flex-col gap-space-md">
          <div className="flex items-center gap-space-sm">
            {asset.image ? (
              <img className="w-16 h-16 rounded-lg object-cover bg-surface-container-high shrink-0 shadow-xs" alt={asset.name} src={asset.image} />
            ) : (
              <div className={`w-16 h-16 rounded-lg flex items-center justify-center shrink-0 ${asset.iconBg || 'bg-surface-container-high'}`}>
                <span className="material-symbols-outlined text-[28px] text-on-surface-variant">{asset.icon || 'devices'}</span>
              </div>
            )}
            <div className="flex flex-col min-w-0">
              <span className="font-label-lg text-label-lg font-bold text-on-surface">{asset.name}</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                {asset.brand} <span className="w-1 h-1 rounded-full bg-outline-variant inline-block mx-1"></span> {asset.category}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Kode Aset</span>
              <span className="font-data-mono text-body-sm text-on-surface font-semibold">{asset.code}</span>
            </div>
            <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Nomor Seri</span>
              <span className="font-data-mono text-body-sm text-on-surface font-semibold">{asset.serial}</span>
            </div>
            <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Lokasi</span>
              <span className="font-body-sm text-body-sm text-on-surface">{asset.location} - {asset.subLocation}</span>
            </div>
            <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Nilai & Tanggal Perolehan</span>
              <span className="font-data-mono text-body-sm text-on-surface font-semibold">{asset.value}</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">{asset.date}</span>
            </div>
            <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Status</span>
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full w-fit ${asset.status.bg} ${asset.status.textColor} font-label-sm text-label-sm font-semibold`}>
                <span className={`w-1.5 h-1.5 rounded-full ${asset.status.dotColor}`}></span>
                {asset.status.label}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-end gap-space-sm pt-space-sm border-t border-surface-container-low">
            <button className="h-10 px-space-md rounded-lg bg-error text-on-error font-label-md text-label-md hover:opacity-90 transition-opacity" onClick={() => onDelete(asset.id)} type="button">
              Hapus
            </button>
            <button className="h-10 px-space-md rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" onClick={onClose} type="button">
              Tutup
            </button>
            <button className="h-10 px-space-md rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:opacity-95 transition-all" onClick={() => onEdit(asset)} type="button">
              Edit Aset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssetDetailModal