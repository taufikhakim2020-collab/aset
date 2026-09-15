import { useState } from 'react'

function QuickLookup() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary text-[22px]">qr_code_scanner</span>
          <h2 className="font-headline-sm text-headline-sm text-on-surface">Quick Lookup Asset</h2>
        </div>
        <span className="font-label-sm text-label-sm text-on-surface-variant font-data-mono">RFID / QR / SN</span>
      </div>
      <div className="p-4 rounded-xl bg-surface-container-low flex flex-col items-center justify-center text-center gap-2">
        <div className="w-16 h-16 rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-center text-secondary">
          <span className="material-symbols-outlined text-[36px]">qr_code_2</span>
        </div>
        <span className="font-label-md text-label-md text-on-surface mt-1">Arahkan Scanner Kamera</span>
        <p className="font-body-sm text-[12px] text-on-surface-variant">Deteksi instan tag barcode 2D & serial number aset fisik secara presisi.</p>
        <button className="w-full mt-2 h-9 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary-container transition-colors flex items-center justify-center gap-1.5" type="button">
          <span className="material-symbols-outlined text-[18px]">photo_camera</span>
          <span>Aktifkan Pemindai</span>
        </button>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Pencarian Cepat Kode Serial / Tag Aset</label>
        <div className="relative flex items-center">
          <input
            className="w-full h-10 px-3 pr-10 rounded-lg bg-surface-container-low font-data-mono text-body-sm text-on-surface placeholder:text-on-surface-variant outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/20 transition-all"
            placeholder="Contoh: AST-IT-2023-..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-2 p-1 text-secondary hover:text-secondary-container" type="button">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuickLookup