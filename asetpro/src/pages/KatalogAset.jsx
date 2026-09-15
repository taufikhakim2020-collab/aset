import { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import KatalogKPICards from './KatalogKPICards'
import FilterTabs from './FilterTabs'
import AssetTable from './AssetTable'
import AssetPreview from './AssetPreview'
import AddAssetModal from './AddAssetModal'
import { fetchAssets, createAsset, updateAsset, deleteAsset } from '../lib/assetApi'

function KatalogAset() {
  const [assets, setAssets] = useState([])
  const [selectedAsset, setSelectedAsset] = useState(null)
  const [showAddModal, setShowAddModal] = useState(false)
  const [editingAsset, setEditingAsset] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadAssets()
  }, [])

  const loadAssets = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await fetchAssets()
      setAssets(data)
      if (data.length > 0) {
        setSelectedAsset(data[0])
      }
    } catch (err) {
      console.error('Failed to load assets:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleAddAsset = async (newAsset) => {
    try {
      setSaving(true)
      const created = await createAsset(newAsset)
      setAssets((prev) => [created, ...prev])
      setSelectedAsset(created)
    } catch (err) {
      console.error('Failed to add asset:', err)
      alert('Gagal menambahkan aset: ' + err.message)
    } finally {
      setSaving(false)
    }
  }

  const handleDeleteAsset = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus aset ini?')) {
      try {
        await deleteAsset(id)
        setAssets((prev) => prev.filter((item) => item.id !== id))
        setSelectedAsset(null)
      } catch (err) {
        console.error('Failed to delete asset:', err)
        alert('Gagal menghapus aset: ' + err.message)
      }
    }
  }

  const handleEditAsset = async (updatedAsset) => {
    try {
      setSaving(true)
      const saved = await updateAsset(updatedAsset.id, updatedAsset)
      setAssets((prev) => prev.map((item) => (item.id === saved.id ? saved : item)))
      setEditingAsset(null)
      setSelectedAsset(saved)
    } catch (err) {
      console.error('Failed to update asset:', err)
      alert('Gagal memperbarui aset: ' + err.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased">
      <Sidebar />
      <div className="pl-72">
        <Header />
        <main className="w-full pt-16 bg-surface px-space-lg py-space-lg min-h-screen">
          <div className="flex flex-col w-full">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-lg">
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm mb-1 uppercase tracking-wider">
                  <span>Sistem Inventaris</span>
                  <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  <span className="text-secondary font-semibold">Katalog Master</span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Katalog & Inventaris Aset</h1>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">Daftar seluruh inventaris fisik, spesifikasi, penomoran kode QR/barcode, dan status operasional real-time.</p>
              </div>
              <div className="flex flex-wrap items-center gap-space-sm">
                <button className="h-10 px-space-md bg-surface-container-lowest text-on-surface rounded-lg font-label-md text-label-md shadow-sm hover:bg-surface-container-low transition-all flex items-center gap-space-xs" type="button">
                  <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
                  <span>Cetak Label QR Massal</span>
                </button>
                <button className="h-10 px-space-md bg-surface-container-lowest text-on-surface rounded-lg font-label-md text-label-md shadow-sm hover:bg-surface-container-low transition-all flex items-center gap-space-xs" type="button">
                  <span className="material-symbols-outlined text-[18px]">file_upload</span>
                  <span>Impor Excel</span>
                </button>
                <button
                  className="h-10 px-space-md bg-primary-container text-on-primary rounded-lg font-label-md text-label-md shadow-md hover:opacity-95 transition-all flex items-center gap-space-xs"
                  onClick={() => setShowAddModal(true)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">add</span>
                  <span>Tambah Aset Baru</span>
                </button>
              </div>
            </div>

            {error && (
              <div className="mb-space-md rounded-lg bg-error-container px-space-md py-3 text-on-error-container font-body-sm">
                Gagal memuat data dari Supabase: {error}
              </div>
            )}

            <KatalogKPICards />
            <FilterTabs />
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm mb-space-md flex flex-col lg:flex-row items-center justify-between gap-space-md">
              <div className="flex flex-1 flex-col sm:flex-row items-center gap-space-sm w-full">
                <div className="relative w-full lg:max-w-md">
                  <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[20px]">search</span>
                  <input
                    className="w-full h-10 pl-10 pr-4 bg-surface-container-low text-on-surface placeholder:text-on-surface-variant rounded-lg font-body-sm text-body-sm outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/20 transition-all"
                    placeholder="Cari nama aset, nomor seri SN, kode inventaris..."
                    type="text"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-space-xs w-full sm:w-auto">
                  <select className="h-10 px-3 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg outline-none cursor-pointer">
                    <option value="">Kategori: Semua</option>
                    <option>Laptop & Komputer</option>
                    <option>Perangkat Jaringan</option>
                    <option>Kendaraan Operasional</option>
                    <option>Multimedia & Broadcast</option>
                    <option>Furnitur Ergonomis</option>
                    <option>Peralatan Gudang</option>
                  </select>
                  <select className="h-10 px-3 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg outline-none cursor-pointer">
                    <option value="">Lokasi: Semua Gedung</option>
                    <option>HQ Jakarta - Lt. 4 Engineering</option>
                    <option>HQ Jakarta - Lt. 2 Studio</option>
                    <option>Gudang Logistik Cikarang</option>
                    <option>Pool Armada Slipi</option>
                    <option>Sentra Data BSD</option>
                  </select>
                  <select className="h-10 px-3 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg outline-none cursor-pointer">
                    <option value="">Status: Semua</option>
                    <option>Aktif & Tersedia</option>
                    <option>Dipinjam</option>
                    <option>Dalam Perawatan</option>
                    <option>Afkir / Rusak</option>
                  </select>
                  <button className="h-10 px-3 text-on-surface-variant hover:text-error hover:bg-surface-container-low rounded-lg font-label-sm text-label-sm transition-colors flex items-center gap-1" title="Reset filter" type="button">
                    <span className="material-symbols-outlined text-[16px]">restart_alt</span>
                    <span>Reset</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-space-xs self-end lg:self-center">
                <div className="flex items-center bg-surface-container-low p-1 rounded-lg">
                  <button className="p-1.5 rounded bg-surface-container-lowest text-on-surface shadow-xs" title="Tampilan Tabel" type="button">
                    <span className="material-symbols-outlined text-[18px]">table_rows</span>
                  </button>
                  <button className="p-1.5 rounded text-on-surface-variant hover:text-on-surface" title="Tampilan Kotak Grid" type="button">
                    <span className="material-symbols-outlined text-[18px]">grid_view</span>
                  </button>
                </div>
                <button className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors" title="Konfigurasi Kolom" type="button">
                  <span className="material-symbols-outlined text-[20px]">view_column</span>
                </button>
              </div>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-space-lg text-on-surface-variant">
                Memuat data aset...
              </div>
            ) : (
              <div className="flex flex-col xl:flex-row gap-space-lg items-start">
                <AssetTable
                  assets={assets}
                  onSelectAsset={setSelectedAsset}
                  selectedAssetId={selectedAsset?.id}
                  onEdit={setEditingAsset}
                  onDelete={handleDeleteAsset}
                />
                <AssetPreview asset={selectedAsset} />
              </div>
            )}
          </div>
        </main>
      </div>

      {showAddModal && (
        <AddAssetModal
          onClose={() => setShowAddModal(false)}
          onSubmit={handleAddAsset}
          saving={saving}
        />
      )}

      {editingAsset && (
        <AddAssetModal
          initialData={editingAsset}
          onClose={() => setEditingAsset(null)}
          onSubmit={handleEditAsset}
          saving={saving}
        />
      )}
    </div>
  )
}

export default KatalogAset