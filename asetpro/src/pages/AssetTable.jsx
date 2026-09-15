function AssetTable({ assets, onSelectAsset, selectedAssetId, onEdit, onDelete }) {
  return (
    <div className="w-full xl:w-2/3 bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant font-label-md text-label-md select-none">
              <th className="py-3 px-4 w-12 text-center">
                <input className="rounded accent-secondary w-4 h-4 cursor-pointer" type="checkbox" />
              </th>
              <th className="py-3 px-4">Aset & Deskripsi</th>
              <th className="py-3 px-4">Kode & QR</th>
              <th className="py-3 px-4">Nomor Seri</th>
              <th className="py-3 px-4">Lokasi Gedung</th>
              <th className="py-3 px-4 text-right">Nilai & Perolehan</th>
              <th className="py-3 px-4 text-center">Status</th>
              <th className="py-3 px-4 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container font-body-sm text-body-sm text-on-surface">
            {assets.map((asset) => (
              <tr
                key={asset.id}
                className={`hover:bg-surface-container-low/60 transition-colors cursor-pointer ${selectedAssetId === asset.id ? 'bg-surface-container-low/20' : ''}`}
                onClick={() => onSelectAsset(asset)}
              >
                <td className="py-3.5 px-4 text-center">
                  <input
                    checked={selectedAssetId === asset.id}
                    className="rounded accent-secondary w-4 h-4 cursor-pointer"
                    type="checkbox"
                    onChange={() => onSelectAsset(asset)}
                  />
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-space-sm">
                    {asset.image ? (
                      <img
                        className="w-12 h-12 rounded-lg object-cover bg-surface-container-high shrink-0 shadow-xs"
                        data-alt={asset.name}
                        src={asset.image}
                      />
                    ) : (
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${asset.iconBg || 'bg-surface-container-high'}`}>
                        <span className="material-symbols-outlined text-[26px] text-on-surface-variant">{asset.icon || 'devices'}</span>
                      </div>
                    )}
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-lg text-label-lg font-bold text-on-surface truncate">{asset.name}</span>
                      <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
                        <span className="font-medium">{asset.brand}</span>
                        <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                        <span>{asset.category}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-1.5">
                    <span className="font-data-mono text-data-mono font-semibold text-secondary">{asset.code}</span>
                    <button className="p-1 hover:bg-surface-container rounded text-on-surface-variant" title="Salin Kode" type="button">
                      <span className="material-symbols-outlined text-[14px]">content_copy</span>
                    </button>
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <span className="font-data-mono text-data-mono text-on-surface-variant">{asset.serial}</span>
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex flex-col">
                    <span className="font-medium">{asset.location}</span>
                    <span className="text-on-surface-variant text-label-sm font-label-sm">{asset.subLocation}</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-right">
                  <div className="flex flex-col items-end">
                    <span className="font-data-mono text-data-mono font-semibold">{asset.value}</span>
                    <span className="text-on-surface-variant text-label-sm font-label-sm">{asset.date}</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-center">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${asset.status.bg} ${asset.status.textColor} font-label-sm text-label-sm font-semibold`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${asset.status.dotColor}`}></span>
                    {asset.status.label}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <button className="p-1.5 text-on-surface-variant hover:text-secondary hover:bg-surface-container rounded-lg" title="Pratinjau QR" type="button">
                      <span className="material-symbols-outlined text-[18px]">qr_code</span>
                    </button>
                    <button
                      className="p-1.5 text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg"
                      title="Edit Aset"
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        onEdit(asset)
                      }}
                    >
                      <span className="material-symbols-outlined text-[18px]">edit</span>
                    </button>
                    <button
                      className="p-1.5 text-on-surface-variant hover:text-error hover:bg-surface-container rounded-lg"
                      title="Hapus"
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        onDelete(asset.id)
                      }}
                    >
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-space-md bg-surface-container-lowest flex flex-col sm:flex-row items-center justify-between gap-space-sm">
        <span className="font-body-sm text-body-sm text-on-surface-variant">
          Menampilkan <strong className="text-on-surface font-semibold">1 - {assets.length}</strong> dari <strong className="text-on-surface font-semibold">1,428</strong> aset terdata
        </span>
        <div className="flex items-center gap-1">
          <button className="px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low text-label-sm font-label-sm flex items-center gap-1 disabled:opacity-40" disabled type="button">
            <span className="material-symbols-outlined text-[16px]">chevron_left</span>
            <span>Sebelumnya</span>
          </button>
          <button className="w-8 h-8 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm font-bold" type="button">1</button>
          <button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container-low font-label-sm text-label-sm" type="button">2</button>
          <button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container-low font-label-sm text-label-sm" type="button">3</button>
          <span className="px-1 text-on-surface-variant">...</span>
          <button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container-low font-label-sm text-label-sm" type="button">204</button>
          <button className="px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low text-label-sm font-label-sm flex items-center gap-1" type="button">
            <span>Berikutnya</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AssetTable